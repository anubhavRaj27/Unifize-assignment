import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  HiOutlineHome,
  HiOutlineCreditCard,
  HiOutlineCurrencyDollar,
  HiOutlineBuildingLibrary,
  HiOutlineInboxStack,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi2";

const sidebarItems = [
  { label: "Home", icon: HiOutlineHome },
  { label: "Tasks", icon: HiOutlineHome, badge: 5 },
  { label: "Transactions", icon: HiOutlineInboxStack, active: true },
  { label: "Payments", icon: HiOutlineCurrencyDollar, collapsible: true },
  { label: "Cards", icon: HiOutlineCreditCard },
  { label: "Capital", icon: HiOutlineBuildingLibrary },
  { label: "Accounts", icon: HiOutlineDocumentDuplicate, collapsible: true },
];

const workflowItems = [
  { label: "Bill Pay", icon: HiOutlineCurrencyDollar },
  { label: "Invoicing", icon: HiOutlineDocumentDuplicate, collapsible: true },
  { label: "Reimbursements", icon: HiOutlineDocumentDuplicate, dot: true },
  { label: "Accounting", icon: HiOutlineDocumentDuplicate },
];

const Sidebar=()=> {
  const [open, setOpen] = useState({ Payments: false, Accounts: true, Invoicing: false });

  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <Root>
      <OrgHeader>
        <Logo>◎</Logo>
        Unifize&nbsp;
        <HiOutlineChevronDown size={16} />
      </OrgHeader>

      <NavSection>
        {sidebarItems.map((item) => (
          <NavItem
            key={item.label}
            $active={item.active}
            onClick={() => item.collapsible && toggle(item.label)}
          >
            <item.icon size={18} />
            <span>{item.label}</span>

            {item.collapsible && (
              open[item.label] ? <HiOutlineChevronDown size={14} /> : <HiOutlineChevronRight size={14} />
            )}

            {item.badge && <Badge>{item.badge}</Badge>}
          </NavItem>
        ))}
      </NavSection>

      <Divider />

      <SectionTitle>Workflows</SectionTitle>
      <NavSection>
        {workflowItems.map((item) => (
          <NavItem
            key={item.label}
            onClick={() => item.collapsible && toggle(item.label)}
          >
            <item.icon size={18} />
            <span>{item.label}</span>

            {item.collapsible && (
              open[item.label] ? <HiOutlineChevronDown size={14} /> : <HiOutlineChevronRight size={14} />
            )}

            {item.dot && <Dot />}
          </NavItem>
        ))}
      </NavSection>
    </Root>
  );
}

const Root = styled.aside`
  width: 224px;
  height: 100vh;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  background: #fff;
  font-size: 14px;
`;

const OrgHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 18px 16px 20px;
  font-weight: 600;
`;

const Logo = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #131316;
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 14px;
`;

const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
`;

const activeStyles = css`
  color: #1d4ed8;
  background: #f1f5f9;
  font-weight: 600;

  & svg {
    color: #1d4ed8;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #1d4ed8;
    border-radius: 0 2px 2px 0;
  }
`;

const NavItem = styled.button`
  all: unset;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  color: #52525b;

  &:hover {
    background: #f9fafb;
  }

  svg {
    flex-shrink: 0;
    color: #6b7280;
  }

  ${({ $active }) => $active && activeStyles}
`;

const Badge = styled.span`
  margin-left: auto;
  background: #eef2ff;
  color: #6366f1;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 999px;
`;

const Dot = styled.span`
  margin-left: auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2563eb;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f1f5f9;
  margin: 12px 0;
`;

const SectionTitle = styled.div`
  padding: 0 16px 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9ca3af;
`;

export default Sidebar;
