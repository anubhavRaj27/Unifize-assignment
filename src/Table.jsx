import styled from "styled-components";
import json from "./data/data.json";
import { IoChevronDown } from "react-icons/io5";

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
        <HeadCell>
          <HeadSpan>
            Date <IoChevronDown size={14} />
          </HeadSpan>
        </HeadCell>
        <HeadCell>
          <TextSpan>To/From</TextSpan>
        </HeadCell>
        <HeadCell>
          <TextSpan>Amount</TextSpan>
        </HeadCell>
        <HeadCell>
          <TextSpan>Account</TextSpan>
        </HeadCell>
        <HeadCell>
          <TextSpan>Payment Method</TextSpan>
        </HeadCell>
        <AttachmentHeadCell>
          <TextSpan>Attachment</TextSpan>
        </AttachmentHeadCell>
      </HeadRow>

      {json.map((txn, i) => {
        const isNewDate = i === 0 || txn.date !== json[i - 1].date;
        const isLastOfDate =
          i === json.length - 1 || txn.date !== json[i + 1].date;

        return (
          <BodyRow key={i} $isNewDate={isNewDate} $isLastOfDate={isLastOfDate}>
            <DateCell $isNewDate={isNewDate}>{formatDate(txn.date)}</DateCell>
            <CellBase>
              <Ellipses>{txn.name}</Ellipses>
            </CellBase>
            <AmountCell $positive={txn.amount > 0}>
              <Ellipses>
                {txn.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Ellipses>
            </AmountCell>
            <CellBase>
              <Ellipses>{txn.account}</Ellipses>
            </CellBase>
            <CellBase>
              <Ellipses>{txn.payment_method}</Ellipses>
            </CellBase>
            <AttachmentCell>
              <AddContainer>＋</AddContainer>
            </AttachmentCell>
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
  1.5fr        
  100px        
`;

const TableWrapper = styled.div`
  border-collapse: collapse;
  padding: 0px 24px 12px 24px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${grid};
  gap: 0.25rem;
  padding: 8px 4px;
  text-align: left;
`;

const HeadRow = styled(Row)`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const HeadCell = styled.div`
  font-weight: 600;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #70707d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px;
  display: flex;
  align-items: center;
`;

const CellBase = styled.div`
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #363644;
  display: flex;
  align-items: center;
  height: 100%;
`;

const DateCell = styled(CellBase)`
  opacity: ${({ $isNewDate }) => ($isNewDate ? 1 : 0)};
  transition: opacity 0.1s;
  border-bottom: none;
`;

const AttachmentCell = styled(CellBase)`
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AmountCell = styled(CellBase)`
  color: ${({ $positive }) => ($positive ? "#188554" : "#363644")};
`;

const AttachmentHeadCell = styled(HeadCell)`
  text-align: center;
`;

const Ellipses = styled.div`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextSpan = styled.span`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 8px 4px 0px;
  cursor: pointer;
  width: fit-content;
  &:hover {
    border-radius: 4px;
    background-color: #7073930f;
  }
`;

const HeadSpan = styled(TextSpan)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BodyRow = styled.div`
  display: grid;
  grid-template-columns: ${grid};
  padding: 8px 4px;
  border-radius: 4px;
  gap: 0.25rem;
  height: 49px;
  border-top: ${({ $isNewDate }) =>
    $isNewDate ? "1px solid #e5e7eb" : "none"};

  &::after {
    content: "";
    bottom: 0;
    grid-column: 2 / -1;
    align-self: end;
    border-bottom: ${({ $isLastOfDate }) =>
      $isLastOfDate ? "none" : "1px solid #e5e7eb"};
    margin-bottom: -8px;
  }

  &:last-child::after {
    border-bottom: none;
  }

  &:hover {
    background-color: #7073930f;
  }

  &:hover ${DateCell} {
    opacity: 1;
  }
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #7073931a;
  width: 32px;
  height: 32px;
`;

export default Table;
