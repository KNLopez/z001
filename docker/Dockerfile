FROM node
LABEL Name=form_builder Version=0.0.1

RUN mkdir -pv /usr/src/app
WORKDIR /usr/src/app

COPY src ./src/
COPY public ./public/
COPY package.json .
COPY tsconfig.json .
COPY tslint.json .
COPY yarn.lock .
COPY aws ./aws/

# install dependencies 
RUN npm install
RUN npm install jest-junit

# build the app
RUN npm run build

# expose port
EXPOSE 3000

# launch cmd
CMD npm start