import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productJson from './stackline_frontend_assessment_data_2021.json';
import { RootState } from '../../store';

type retailSalesState = {
  value : {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: {
        customer: string;
        review: string;
        score: number;
    }[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: {
        weekEnding: string;
        retailSales: number;
        wholesaleSales: number;
        unitsSold: number;
        retailerMargin: number;
    }[];
  }
}

const initialState: retailSalesState = {
  value: {
    id: '',
    title: '',
    image: '',
    subtitle: '',
    brand: '',
    reviews: [],
    retailer: '',
    details: [],
    tags: [],
    sales: []
  }
};

export const fetchRetailSales = createAsyncThunk('retailSales/fetchRetailSales', async () => {
  // simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  return productJson[0];
});

export const retailSalesSlice = createSlice({
  name: 'retailSales',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRetailSales.fulfilled, (state, action) => {
      // this doesn't actually mutate the state, Redux Toolkit uses the Immer library
      // to automatically detect changes to the draft state and create a new object
      state.value = action.payload;
    });
  }
});

export const { reducer: retailSalesReducer } = retailSalesSlice;

export const selectRetailSales = (state: RootState) => state.retailSales.value;

export const selectProductData = (state: RootState) => {
  const { title, image, subtitle, tags } = selectRetailSales(state);
  return { title, image, subtitle, tags };
};

export const selectSales = (state: RootState) => {
  const { sales } = selectRetailSales(state);
  return sales
}

type RetailDataShape = {
  x: string;
  y: number;
}[]

export const selectRetailData = (state: RootState) => {
  const sales = selectSales(state);
  const retailData : RetailDataShape = [];
  const wholesaleData : RetailDataShape = [];
  sales.forEach(({ weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin }) => {
    // const date = new Date(weekEnding)
    retailData.push({
      x: weekEnding,
      y: retailSales
    });
    wholesaleData.push({
      x: weekEnding,
      y: retailerMargin
    })
  })
  return [{
    id: 'retail',
    data: retailData
  }, {
    id: 'retailerMargin',
    data: wholesaleData
  }];
}
