import React from 'react';
import styled from 'styled-components';
import { selectSales } from '../retailSalesSlice';
import { useAppSelector } from '../../../customHooks';
import { Card } from '../../../sharedComponents/Card';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  tr:not(:first-of-type){
    border-top: 1px solid;
  }
`;

const TableRow = styled.tr`
  :first-of-type {
    text-align: left;
  }
`;

const cellStyles = `
  padding: 12px;
  text-align: right;
`;

const TableHeader = styled.th`
  ${cellStyles}
  text-transform: uppercase;
  color: #000000;
`;

const TableCell = styled.td`
  ${cellStyles}
`;

const salesTableHeaders = [
  'Week Ending',
  'Retail Sales',
  'Wholesale Sales',
  'Units Sold',
  'Retailer Margin'
];

export const SalesTable = () => {
  const salesData = useAppSelector(selectSales);
  if (salesData.length < 1) return null;
  return (
    <Card>
      <StyledTable>
        <TableRow>
          {salesTableHeaders.map(heading => {
            return <TableHeader>{heading}</TableHeader>
          })}
        </TableRow>
        {salesData.map(({
          weekEnding,
          retailSales,
          wholesaleSales,
          unitsSold,
          retailerMargin
        }) => (
          <TableRow>
              <TableCell>{weekEnding}</TableCell>
              <TableCell>{retailSales}</TableCell>
              <TableCell>{wholesaleSales}</TableCell>
              <TableCell>{unitsSold}</TableCell>
              <TableCell>{retailerMargin}</TableCell>
          </TableRow>
          )
        )}
      </StyledTable>
    </Card>
  );
};
