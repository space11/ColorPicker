import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./ColorPicker";
import * as colorPickerIcons from "./ColorPicker/iconsColorPicker";

const exampleCallback = e =>
  console.log(`Example Callback. Selected Color: #${e}`);

ReactDOM.render(
  <ColorPicker
    icon={colorPickerIcons.ICON_BG_COLORS}
    onColorSelect={exampleCallback}
  />,
  document.getElementById("container")
);
