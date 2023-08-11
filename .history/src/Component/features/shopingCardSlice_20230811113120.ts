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
        state.items[find].quantity+=1
      }else{
        state.items.push(action.payload)      }
      // state.items.push({
      //   name, price,id,image,quantity
      // })
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    increaseItemQuantity: (state, action: PayloadAction<foodObj>) => {
      const itemId= action.payload;
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeCart} = shopingCardSlice.actions

export default shopingCardSlice.reducer