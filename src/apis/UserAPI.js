import { API_ENDPOINT, REFRESH_TOKEN } from "../util/Contraints.js"
import AxiosService from "./AxiosService.js"

const url="/api/user"
export const addNewUser=(newUser)=>{
          return AxiosService.post(url+"/auth/addNewUser", newUser,true);
}
export const login=(email, password)=>{
          const formData=new FormData();
          formData.append("email", email);
          formData.append("password", password);
          return AxiosService.post(url+"/auth/login", formData)
}
export const NewAccessToken=()=>{
          const refreshToken=localStorage.getItem(REFRESH_TOKEN);
          const formData=new FormData();
          formData.append("refreshToken", refreshToken)
          return AxiosService.post(url+"/auth/newAccessToken", formData)
}
export const uploadProfile=(file)=>{
          const formData=new FormData();
          formData.append("image", file);
          return AxiosService.post(url+"/uploadProfile", formData)
}