import { number } from '@prismicio/client/dist/helpers/isFilled';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface foodObj{
  id:string,
  name: string,
  price: number,
  image:string,
}

export interface ShopingCardState {
  items: foodObj[]
}

const initialState: ShopingCardState = {
  items: [],
  q
}

export const shopingCardSlice = createSlice({
  name: 'shopingCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<foodObj>) => {
      const {name, price,id,image} = action.payload;
      state.items.push({
        name, price,id,image,
      })
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeCart} = shopingCardSlice.actions

export default shopingCardSlice.reducer