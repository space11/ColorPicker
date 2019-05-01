import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import "antd/dist/antd.css";
import ColorBlock from "./ColorBlock";
import ColorsList from "./editorColors";

const handleMenuClick = event => {
  const selectedColor = event.item.props.label;
  console.log("click", selectedColor);
};

const ColorItem = ({ colorHex }) => <ColorBlock colorHex={colorHex} />;

ColorItem.PropTypes = { colorHex: PropTypes.string };

const ColorMenu = () => (
  <Menu onClick={handleMenuClick}>
    {ColorsList.map(color => (
      <Menu.Item key={color.hexValue} label={color.label}>
        <ColorItem colorHex={color.hexValue} />
      </Menu.Item>
    ))}
  </Menu>
);

export default ColorMenu;
