import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Button, Icon } from "antd";
import "antd/dist/antd.css";
import ColorMenu from "./ColorMenu";

const ColorPicker = ({ icon }) => (
  <Dropdown overlay={ColorMenu}>
    <Button>
      <Icon type={icon} /> <Icon type="down" />
    </Button>
  </Dropdown>
);

ColorPicker.propTypes = {
  icon: PropTypes.string
};

export default ColorPicker;
