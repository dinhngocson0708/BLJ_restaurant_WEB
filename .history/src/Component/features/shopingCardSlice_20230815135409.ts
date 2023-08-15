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
  totalPrice:number,
  totalQuantity:number
}
const cartData = localStorage.getItem('cart');
const data = cartData !== null ? JSON.parse(cartData) : [];
const initialState: ShopingCardState = {
  items: data ,
  totalPrice:0,
  totalQuantity:0
}
// const selectItems = (state: any) => state.shopingCarRedux.items;

// export const selectTotalPrice = createSelector(selectItems, (items) => {
//   return items.reduce((total: number, product: foodObj) => total + product.totalpriceitem, 0);
// });
// export const selectTotalQuantity = createSelector(selectItems, (items) => {
//   return items.reduce((total: number, product: foodObj) => total + product.quantity, 0);
// });
export const shopingCardSlice = createSlice({
  name: 'shopingCart',
  initialState,
  
  reducers: {
    addToCart: (state, action: PayloadAction<foodObj>) => {
      const { name, price, id, image, quantity, totalpriceitem,userName } = action.payload;
      let find = state.items.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.items[find].quantity += 1;
      } else {
        state.items.push({
          name, price, id, image, quantity, totalpriceitem, userName
          
        });
      }
     
      localStorage.setItem("cart", JSON.stringify(state.items));
    },


    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.items.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity,userName } = cartItem;
          if(userName===JSON.stringify(localStorage.getItem('loggedInUsername'))){
            const itemTotal = price * quantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
          }
          console.log(price, quantity);
         
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
      // for(let i=0;data.lenght>0;i++){
      //   if(data[i].id===itemIdToRemove){
      //     data.splice(i,0)
      //   }
      // }
      localStorage.setItem('cart',JSON.stringify(state.items))
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
      localStorage.setItem('cart',JSON.stringify(state.items))
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
      localStorage.setItem('cart',JSON.stringify(state.items))
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, increaseItemQuantity, decreaseItemQuantity,getCartTotal} = shopingCardSlice.actions

export default shopingCardSlice.reducer