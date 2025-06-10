import React from "react";
import "../../components/Text/index.jsx";
import "../../components/Heading/index.jsx";
import "../../components/Button/index.jsx";
import "../../components/Icon/index.jsx";

const DesignSystem = () => {
  return (
    <div className="div-block-4" style={{ paddingLeft: "200px" }}>
      <section id="Text">
        <Text type="bold">This is bold text</Text>
        <Text type="primary">This is primary color text</Text>
        <Text type="hidden">You won't see me</Text>
        <Text type="primary-green">
          This is primary color green Not Publish yest
        </Text>
      </section>
      <hr></hr>
      <section id="Heading">
        <Heading level="1">This is H1</Heading>
        <Heading level="1" type="primary">
          This is H1 Primary
        </Heading>
        <Heading level="1" type="primary-green">
          This is H1 Primary-Green
        </Heading>
        <Heading level="1" type="light">
          This is H1 Light
        </Heading>
        <Heading level="2">This is H2</Heading>
        <Heading level="3">This is H3</Heading>
        <Heading level="4">This is H4</Heading>
      </section>
      <hr></hr>
      <section id="Button">
        <Button style={{ marginBottom: "20px" }}>Text</Button>
        <br />
        <Button style={{ marginBottom: "20px" }} variant="secondary">
          Text
        </Button>
        <br />
        <Button
          style={{ marginBottom: "20px" }}
          withIcon={true}
          imageSource={
            "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eec86c94548a98c68e50_edit-square.svg"
          }
        >
          Text
        </Button>
        <br />
        <Button
          style={{ marginBottom: "20px" }}
          variant="secondary"
          withIcon={true}
          imageSource={
            "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/6819eec86c94548a98c68e50_edit-square.svg"
          }
        >
          Text
        </Button>
        <br />
        <Button style={{ marginBottom: "22px" }} isDisabled>
          Text
        </Button>
        <br />
        <Button style={{ marginBottom: "20px" }} variant="secondary" isDisabled>
          Text
        </Button>
        <br />
      </section>
      <hr></hr>
      <section>
        <Icon
          imgSrc={
            "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682c3197dce3ea417ee80df8_notif.svg"
          }
        />
        <br></br>
        <Icon
          imgSrc={
            "https://cdn.prod.website-files.com/681079166d5ce9a9cd684b2c/682d4e9db07b124b856d5076_notif-white.svg"
          }
          variant="secondary"
        />
      </section>
      <hr></hr>
    </div>
  );
};

window.DesignSystem = DesignSystem;
export default DesignSystem;
