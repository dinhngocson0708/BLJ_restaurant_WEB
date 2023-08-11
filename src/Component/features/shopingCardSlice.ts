import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface foodObj{
  name: string,
  price: number
}

export interface ShopingCardState {
  items: foodObj[]
}

const initialState: ShopingCardState = {
  items: [],
}

export const shopingCardSlice = createSlice({
  name: 'shopingCart',
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<foodObj>) => {
      const {name, price} = action.payload;
      state.items.push({
        name, price
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCard } = shopingCardSlice.actions

export default shopingCardSlice.reducer