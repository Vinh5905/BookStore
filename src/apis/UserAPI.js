import { API_ENDPOINT, REFRESH_TOKEN } from "../util/Contraints.js"
import AxiosService from "./AxiosService.js"

const url="/api/user"
export const addNewUser=(newUser)=>{
          return AxiosService.post(url+"/auth/addNewUser", newUser);
}
export const login=(email, password)=>{
          return AxiosService.post(url+"/auth/login", {email, password})
}
export const NewAccessToken=()=>{
          const refreshToken=localStorage.getItem(REFRESH_TOKEN);
          return AxiosService.post(url+"/auth/newAccessToken",{refreshToken})
}
export const uploadProfile=(file)=>{
          const formData=new FormData();
          formData.append("image", file);
          return AxiosService.post(url+"/uploadProfile", formData)
}