import { API_ENDPOINT } from "../util/Contraints.js"
import AxiosService from "./AxiosService.js"
import AxiosService from "./AxiosService.js"
const url=API_ENDPOINT+"/api/book"
export const createBook=(book)=>{
          return AxiosService.post(url+"/admin/createBook",book, true);
}
export const findAllBooks=(offset, limit)=>{
          return AxiosService.get(url+"/findAllBooks?offset="+offset+"&limit="+limit);
}
export const uploadBookImage=(bookId, file)=>{
          const formData=new FormData();
          formData.append("bookId", bookId);
          formData.append("image", file);
          return AxiosService.post(url+"/admin/uploadBookImage", formData);
}
export const deleteBook=(bookId)=>{
          return AxiosService.delete(url+"/admin/deleteBook/"+bookId);
}