import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface foodObj{
  id:string,
  name: string,
  price: number,
  image:string,
  quantity:number
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
      const {name, price,id,image, quantity} = action.payload;
      let find:any = state.items.findIndex((item) => item.id === action.payload.id);
      if(find>=0){
        state.items[fi]
      }
      state.items.push({
        name, price,id,image,quantity
      })

      
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
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