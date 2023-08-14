import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
interface foodObj {
  id: string,
  name: string,
  price: number,
  image: string,
  quantity: number,
  totalpriceitem: number,
  userName: string
}

export interface ShopingCardState {
  items: foodObj[],
  
}
const cartData = localStorage.getItem('cart');
const data = cartData !== null ? JSON.parse(cartData) : [];
const initialState: ShopingCardState = {
  items: data ,

}
const selectItems = (state: any) => state.shopingCarRedux.items;

export const selectTotalPrice = createSelector(selectItems, (items) => {
  return items.reduce((total: number, product: foodObj) => total + product.totalpriceitem, 0);
});
export const selectTotalQuantity = createSelector(selectItems, (items) => {
  return items.reduce((total: number, product: foodObj) => total + product.quantity, 0);
});
export const shopingCardSlice = createSlice({
  name: 'shopingCart',
  initialState,
  
  reducers: {
    addToCart: (state, action: PayloadAction<foodObj>) => {
      
      const { name, price, id, image, quantity, totalpriceitem,userName } = action.payload;
      state.items.push({
        name, price, id, image, quantity, totalpriceitem, userName
        
      });
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
      localStorage.removeItem(itemIdToRemove)
    },
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          const newQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity,
            totalpriceitem: item.price * newQuantity,
          };
        }
        return item;
      });
    },
    
    decreaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
            totalpriceitem: item.price * newQuantity,
          };
        }
        return item;
      });
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, increaseItemQuantity, decreaseItemQuantity } = shopingCardSlice.actions

export default shopingCardSlice.reducer