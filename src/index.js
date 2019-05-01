import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./ColorPicker";
import * as colorPickerIcons from "./ColorPicker/iconsColorPicker";

ReactDOM.render(
  <ColorPicker icon={colorPickerIcons.ICON_FONT_COLORS} />,
  document.getElementById("container")
);
