import { Box } from "@material-ui/core";
import React from "react";
import { withLabelRenderer } from "../../hocs/withLabelRenderer";
import HelloSign from "hellosign-embedded";
import FBButton from "./FBButton";
import FBStore from "../../stores/FBStore";
import axios from "axios";

const FBHelloSign = ({ labelRenderer, approvalType, disabled, ...props }) => {
  const handleSubmit = () => {
    const opts = {
      testMode: 1,
      clientId: "ef71f2b218095882f62d10a550519681",
      title: "Hello sign Demo",
      subject: "This is a demo subject",
      message: "demo message",
      signerRoles: [
        {
          name: "Manager",
          order: 0,
        },
        {
          name: "Employee",
          order: 1,
        },
      ],
      mergeFields: FBStore.getSchema().map((field) => ({
        name: field.name,
        type: field.type,
      })),
      files: [
        "9ea4f9be-ea42-40ff-b507-77597ff202a8/2020-01-21T21:16:46.073Z_med-eng (1).pdf",
      ],
    };

    axios({
      method: "post",
      url:
        "http://a29cca26.ngrok.io/api/v1/hello_sign/template/create_embedded_template",
      data: opts,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "bearer 264eb1da-bc5f-4681-bb51-979bf958de5c:Zdea8yzM9FkwA1KNiRagtg/ie3wJ2Kixu7jS+6+WrqY=",
      },
    })
      .then(function(response) {
        let client = new HelloSign({
          clientId: "ef71f2b218095882f62d10a550519681",
          skipDomainVerification: true,
        });
        client.open(response.data.template.edit_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box mb={4} width="100%">
      {labelRenderer}
      <FBButton
        onClick={handleSubmit}
        label="Prepare for Signing"
        disabled={disabled}
      />
    </Box>
  );
};

export default withLabelRenderer(FBHelloSign);
