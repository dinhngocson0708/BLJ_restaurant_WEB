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
}

export const shopingCardSlice = createSlice({
  name: 'shopingCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<foodObj>) => {
      const {name, price,id,image} = action.payload;
      state.items.push({
        name, price,id,image
      })
      localStorage.setItem("cart",JSON.stringify(state.items))
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item. + 1 };
        }
        return item;
      });
    },
   
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeCart,increaseItemQuantity} = shopingCardSlice.actions

export default shopingCardSlice.reducer