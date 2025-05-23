import React from 'react'
import styled from 'styled-components';

const Table = () => {
  return (
    <TableWrapper>
      <Row>
        <Cell>Date</Cell>
        <Cell>To/From</Cell>         
        <Cell>Amount</Cell>
        <Cell>Account</Cell>
        <Cell>Payment Method</Cell>
        <Cell>Attachment</Cell>
      </Row>
      


    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr repeat(4, 1fr);
  gap: 0.25rem;
  padding: 8px 16px;
  padding-left: 24px;
  text-align: left;
`;

const Cell = styled.div`
  padding: 0.5rem 4px;
  font-weight: 600;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #70707d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Table