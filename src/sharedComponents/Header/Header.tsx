import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StacklineLogo } from './stackline_logo.svg';

const HeaderWrapper = styled.div`
    align-items: center;
    background-color: #052849;
    display: flex;
    height: 48px;
    padding: 12px 24px;
`;

const Logo = styled(StacklineLogo)`
    height: 50%;
`;

export const Header = () => (
    <HeaderWrapper>
        <Logo />
    </HeaderWrapper>
);
