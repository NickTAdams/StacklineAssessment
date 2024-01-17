import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../customHooks';
import { Card } from '../../../sharedComponents/Card';
import { selectProductData } from '../retailSalesSlice';
import SharkNinjaImage from './SharkNinja.png';

const ProductCardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  width: 16.7%;
`;

const DecorativeImage = styled.div`
  background-image: url(${SharkNinjaImage});
  width: 144px;
  height: 155px;
`;

const ProductTitle = styled.h2`
  color: #000000;
`;

const Subtitle = styled.h3`
  text-align: center;
  color: #68778e;
`;

const TagsWrapper = styled.ul`
  list-style: none;
  margin-left: 0;
	padding: 12px;
  color: #68778e;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Tag = styled.li`
  padding: 2px 8px;
  margin: 2px;
  border: 1px solid #cecece;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  max-width: 50%;
  font-size: 12px;
`;

export const ProductCard = () => {
  const { title, subtitle, tags } = useAppSelector(selectProductData);
  return (
    <ProductCardWrapper>
      <DecorativeImage />
      <ProductTitle>{title}</ProductTitle>
      <Subtitle>{subtitle}</Subtitle>
      <TagsWrapper>
        {tags.map(tag => <Tag>{tag}</Tag>)}
      </TagsWrapper>
    </ProductCardWrapper>
  );
};
