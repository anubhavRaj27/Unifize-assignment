import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { IoFunnelOutline } from "react-icons/io5"; 
import { HiDownload } from "react-icons/hi";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Heading>Transactions</Heading>
        <ArrowContainer>
            <HiOutlineChevronLeft size={18} />
            <HiOutlineChevronRight size={18}/>
        </ArrowContainer>
      </Container>
      <Container>
        <FilterApplied>
          <FilterSelect>
            <ClickableCircle>
              <IoFunnelOutline size={14} />
              Add Filter
            </ClickableCircle>
          </FilterSelect>
          No filter applied
        </FilterApplied>
        <ClickableCircle>
            <HiDownload size={14} />
            Export All
        </ClickableCircle>
      </Container>
    </HeaderContainer>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 380;
  line-height: 36px;
  margin: 0;
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const HeaderContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;
`;

const FilterSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 32px;
    background: #e5e7eb;
  }
`;

const ClickableCircle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 20px;
  background-color: #7073930f;
  padding: 8px;
  font-size: 14px;
`;

const ImageDiv = styled.img`
  width: ${({$width})=>`${$width}px`};
`;

const FilterApplied = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export default Header;
