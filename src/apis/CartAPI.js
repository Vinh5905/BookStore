import { API_ENDPOINT } from "../util/Contraints.js"
import AxiosService from "./AxiosService.js"

const url=API_ENDPOINT+"/api/cart"
export const addToCart=(cartItem)=>{
          return AxiosService.post(API_ENDPOINT+url+"/addToCart", cartItem, true);
}
export const updateQuantity=(cartItemId, quantity)=>{
          return AxiosService.get(url+"/updateQuantity?cartItemId="+cartItemId+"&quantity="+quantity);
}
export const deleteCartItem=(cartItemId)=>{
          return AxiosService.delete(url+"/deleteCartItem/"+cartItemId);
}
