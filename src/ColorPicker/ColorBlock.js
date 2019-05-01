import styled from "styled-components";

/**
 * Element to render colors blocks in color picker
 */
const ColorBlock = styled.span`
  display: inline-block;
  width: 4em;
  height: 0.9em;
  background: #${props => props.colorHex};
  border: 0.1px solid rgba(0, 0, 0, 0.2);
`;

export default ColorBlock;
