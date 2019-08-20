import React from "react";
import Paragraph from "../../Components/Placeholders/Paragraph";
import { number, select } from "@storybook/addon-knobs/react";
import { setOptionalProp } from "../Helpers";
import Container from "../Container";

const ParagraphStory = () => {
  return (
    <Container>
      <Paragraph
        lines={number(setOptionalProp("lines"), 10)}
        theme={select(setOptionalProp("theme"), { light: "light", dark: "dark" }, "light")}
      />
    </Container>
  );
};

export default ParagraphStory;