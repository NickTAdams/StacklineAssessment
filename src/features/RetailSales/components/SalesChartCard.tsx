import React from 'react';
import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line'
import { useAppSelector } from '../../../customHooks';
import { Card } from '../../../sharedComponents/Card';
import { selectProductData, selectRetailData } from '../retailSalesSlice';

const SalesChartTitle = styled.h2`
  margin: 0;
`;

// this container is required so that the Responsive Line component is correctly responsive
const ChartContainer = styled.div`
  height: 600px;
  width: 100%;
  color: #828b99 !important;

`;

export const SalesChartCard = () => {
  const { title } = useAppSelector(selectProductData);
  const retailData = useAppSelector(selectRetailData);

  return (
    <Card>
      <SalesChartTitle>Retail Sales</SalesChartTitle>
      <ChartContainer>
        <ResponsiveLine
          animate
          axisBottom={{
            format: tick => tick.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
            tickValues: 'every month',
          }}
          axisLeft={null}
          colors={['#45a7f6', '#a1abc3']}
          curve="basis"
          data={retailData}
          enableGridX={false}
          enableGridY={false}
          enablePoints={false}
          lineWidth={4}
          margin={{
            bottom: 40,
            left: 20,
            right: 20,
            top: 20
          }}
          theme={{
            text: {
              fill: '#828b99',
            }
          }}
          xFormat="time:%Y-%m-%d"
          xScale={{
            format: '%Y-%m-%d',
            precision: 'day',
            type: 'time',
            useUTC: false
          }}
          yScale={{
            type: 'linear'
          }}
        />
      </ChartContainer>
    </Card>
  );
};
