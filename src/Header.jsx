import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
        <HeaderContainer>
            <TopContainer>
                Transactions
            </TopContainer>
        </HeaderContainer>
  )
}

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 24px;
  padding: 16px 24px;
`;

export default Header