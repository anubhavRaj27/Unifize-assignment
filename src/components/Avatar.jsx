import React from "react";
import styled from "styled-components";
import { getInitials } from "../helpers/common";

const Avatar = ({ name, size = 32, bg = "#dbeafe", color = "#1e293b" }) => {

  return (
    <Circle $size={size} $bg={bg} $color={color}>
      {getInitials(name)}
    </Circle>
  );
};

const Circle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;

  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => $size * 0.5}px;
  font-weight: 400;
  font-size: 12px;
  user-select: none;
`;

export default Avatar;
