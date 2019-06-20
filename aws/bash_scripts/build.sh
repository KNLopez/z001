#!/bin/bash
set -e

ENV=$1
DTD=$2

AWS_DIR="${BITBUCKET_CLONE_DIR}/aws"
ENVIRONMENT_DIR="${AWS_DIR}/environments"
BASH_SCRIPTS_DIR="${AWS_DIR}/bash_scripts"
PYTHON_SCRIPTS_DIR="${AWS_DIR}/python_scripts"

# Install Dependencies
echo "-------- Installing Dependencies --------"

chmod a+x "${BASH_SCRIPTS_DIR}/install.sh"
"${BASH_SCRIPTS_DIR}/install.sh"

# Login to AWS
echo "-------- Logging into AWS --------"

aws ecr get-login --no-include-email --region "${AWS_DEFAULT_REGION}" | bash

# Generating Build Info
echo "-------- Generating Build Info --------"

COMMIT_HASH="${BITBUCKET_COMMIT::7}"
export IMAGE_NAME="${REPOSITORY_URL}:${COMMIT_HASH}"

chmod a+x "${BASH_SCRIPTS_DIR}/status.sh"
"${BASH_SCRIPTS_DIR}/status.sh"

# Building
echo "-------- Building Application --------"

docker build -f ./docker/Dockerfile -t "${IMAGE_NAME}" .

# Deploy
if [ "${DTD}" == "true" ]; then
	echo "-------- Pushing Image to AWS ECR --------"

	docker push "${IMAGE_NAME}"

	# Upadate Task Definition 
	echo "-------- Updating EC2 Service --------"
	
	python3 "${PYTHON_SCRIPTS_DIR}/main.py" "${CONTAINER_NAME}" "${IMAGE_NAME}" "${ENV}"
	
	export TASK_VERSION=$(aws ecs register-task-definition --family "${ECS_TASK_NAME}" --cli-input-json file://${AWS_DIR}/AWS.TaskDefinition.json | jq --raw-output '.taskDefinition.revision')
	
	echo "Registered ECS Task Definition:" "${TASK_VERSION}"
	
	aws ecs update-service --cluster "${ECS_CLUSTER_NAME}" --service "${ECS_SERVICE_NAME}" --task-definition "${ECS_TASK_NAME}:${TASK_VERSION}"
fi
