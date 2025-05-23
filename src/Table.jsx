import React, { useState } from "react";
import styled from "styled-components";
import json from "./data/data.json";

const Table = () => {
  const formatDate = (iso) => {
    const [yyyy, mm, dd] = iso.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[Number(mm) - 1]} ${Number(dd)}`;
  };

  return (
    <TableWrapper>
      <HeadRow>
        <HeadCell>Date</HeadCell>
        <HeadCell>To/From</HeadCell>
        <HeadCell>Amount</HeadCell>
        <HeadCell>Account</HeadCell>
        <HeadCell>Payment Method</HeadCell>
        <HeadCell>Attachment</HeadCell>
      </HeadRow>

      {json.map((txn, i) => {
        const isNewDate = i === 0 || txn.date !== json[i - 1].date;
        const isLastOfDate =
          i === json.length - 1 || txn.date !== json[i + 1].date;

        return (
          <BodyRow key={i} $isNewDate={isNewDate} $isLastOfDate={isLastOfDate}>
            <DateCell $isNewDate={isNewDate}>{formatDate(txn.date)}</DateCell>
            <BodyCell>{txn.name}</BodyCell>
            <BodyCell>
              {txn.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </BodyCell>
            <BodyCell>{txn.account}</BodyCell>
            <BodyCell>{txn.payment_method}</BodyCell>
            <AttachmentCell>＋</AttachmentCell>
          </BodyRow>
        );
      })}
    </TableWrapper>
  );
};

const grid = `
  100px         
  2fr        
  1.5fr   
  1.5fr    
  2fr        
  0.5fr        
`;

const TableWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${grid};
  gap: 0.25rem;
  padding: 8px 16px;
  padding-left: 24px;
  text-align: left;
`;

const HeadRow = styled(Row)`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const HeadCell = styled.div`
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

const CellBase = styled.div`
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const DateCell = styled(CellBase)`
  color: #71717a;
  opacity: ${({ $isNewDate }) => ($isNewDate ? 1 : 0)};
  transition: opacity 0.1s;
  border-bottom: none;
`;

const BodyCell = styled(CellBase)`
  color: #70707d;
`;

const AttachmentCell = styled(BodyCell)`
  text-align: center;
`;

const BodyRow = styled.div`
  display: grid;
  grid-template-columns: ${grid};
  padding: 8px 24px 0px;
  gap: 0.25rem;
  border-top: ${({ $isNewDate }) =>
    $isNewDate ? "1px solid #e5e7eb" : "none"};

  &::after {
    content: "";
    grid-column: 2 / -1;
    align-self: end;
    border-bottom: 1px solid #e5e7eb;
    border-bottom: ${({ $isLastOfDate }) =>
      $isLastOfDate ? "none" : "1px solid #e5e7eb"};
  }

  &:last-child::after {
    border-bottom: none;
  }

  &:hover ${DateCell} {
    opacity: 1;
  }
`;

export default Table;
