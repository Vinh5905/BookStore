import { API_ENDPOINT } from "../util/Contraints.js";
import AxiosService from "./AxiosService.js";

const url=API_ENDPOINT+"/api/order"
export const addOrder=(order)=>{
          return AxiosService.post(url+"/addOrder", order);
}
export const updateOrder=(order)=>{
          return AxiosService.put(url+"/updateOrder", order);
}
export const deleteOrder=(orderId)=>{
          return AxiosService.delete(url+"/deleteOrder/"+orderId);
}