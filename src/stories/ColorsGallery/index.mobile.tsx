import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs/react";
import { importInfo } from "src/stories/Helpers";
import ColorsGalleryStory from "./ColorsGalleryStory";

const stories = storiesOf("ColorsGallery", module);

stories.addDecorator(withKnobs);

stories.add("ColorsGallery", ColorsGalleryStory, importInfo("colorTheme"));

export default stories;
