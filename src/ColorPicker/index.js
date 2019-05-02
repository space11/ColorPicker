import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Button, Icon, Menu } from "antd";
import "antd/dist/antd.css";
import ColorBlock from "./ColorBlock";
import ColorsList from "./editorColors";

const ColorItem = ({ colorHex }) => <ColorBlock colorHex={colorHex} />;

const ColorPicker = ({ icon, onColorSelect }) => {
  const onColorSelectLocal = event => {
    const selectedColor = event.key;
    onColorSelect(selectedColor);
  };
  
  const menu = (
    <Menu onClick={onColorSelectLocal}>
      {ColorsList.map(color => (
        <Menu.Item
          key={color.hexValue}
          label={color.label}
          data-colorvalue={color.hexValue}
        >
          <ColorItem colorHex={color.hexValue} />
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        <Icon type={icon} /> <Icon type="down" />
      </Button>
    </Dropdown>
  );
};

ColorPicker.propTypes = {
  icon: PropTypes.string
};

export default ColorPicker;
