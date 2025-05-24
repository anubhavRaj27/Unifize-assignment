import React from "react";
import styled from "styled-components";
import {
  HiOutlineChevronDown,
  HiOutlineBell,
} from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import Avatar from "./Avatar";

const TopActions = ({ user = "Anubhav Raj" }) => {
  return (
    <Row>
      <SearchBox>
        <HiOutlineSearch size={14} />
        <input placeholder="Search transactions or more" />
        <KeyHint>
          <kbd>⌘</kbd>&nbsp;
          <kbd>K</kbd>
        </KeyHint>
      </SearchBox>

      <MoveMoney>
        <TextSpan>Move Money</TextSpan>
        <HiOutlineChevronDown size={16} />
      </MoveMoney>

      <IconCircle>
        <HiOutlineBell size={18} />
      </IconCircle>

      <Avatar name={user} size={40}/>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 24px;
  background: #fff;
`;

const SearchBox = styled.label`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: inherit;
  }

  svg {
    color: #6b7280;
    flex-shrink: 0;
  }
`;

const KeyHint = styled.span`
  display: flex;
  gap: 4px;

  kbd {
    font-size: 11px;
    font-weight: 600;
    padding: 2px 4px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: #f3f4f6;
    color: #374151;
  }
`;

const MoveMoney = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  color: #4f46e5;
  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  svg {
    color: #6b7280;
  }
`;

const IconCircle = styled.button`
  all: unset;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f7f7f8;
  display: grid;
  place-items: center;

  svg {
    color: #374151;
  }

  &:hover {
    background: #f1f2f4;
  }
`;

const TextSpan = styled.div`
overflow: hidden;
  min-width: 0px;
  white-space: nowrap;
  text-overflow: ellipsis;

`;

export default TopActions;
