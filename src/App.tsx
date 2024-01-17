import React from 'react';
import { Header } from './sharedComponents/Header';
import { MainContent } from './sharedComponents/MainContent';
import { RetailSales } from './features/RetailSales';

const App = () => (
  <>
    <Header />
    <MainContent>
      <RetailSales />
    </MainContent>
  </>
);

export default App;
