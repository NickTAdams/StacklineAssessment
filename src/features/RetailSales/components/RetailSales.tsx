import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../customHooks';
import { fetchRetailSales } from '../retailSalesSlice';
import { ProductCard } from './ProductCard';
import { SalesChartCard } from './SalesChartCard';
import { SalesTable } from './SalesTable';

const RightColumn = styled.div`
  min-width: 0;
  width: 100%;
`;

export const RetailSales = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRetailSales())
  }, []);
  return (
    <>
      <ProductCard />
      <RightColumn>
        <SalesChartCard />
        <SalesTable />
      </RightColumn>
    </>
  )
};
