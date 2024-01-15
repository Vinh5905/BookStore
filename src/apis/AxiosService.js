import Axios from "axios";
import { ACCESS_TOKEN } from "../util/Contraints.js";

class AxiosService {
    
    constructor() {
        const instance = Axios.create();
        instance.interceptors.response.use(this.handleSucess, this.handleError)
        this.instance = instance;
    }

    handleSucess(res) {
        return res;
    }
    handleError(e) {
        return Promise.reject(e);
    }

    get(url) {
        return this.instance.get(url, { headers: { 'Authorization': localStorage.getItem(ACCESS_TOKEN)} });
    }
    post(url, body, isJSON) {
        if(body==undefined) body=null;
        console.log("body",body);
        const headers={'Authorization': localStorage.getItem(ACCESS_TOKEN)};
        if(isJSON) headers['Content-Type']="application/json"
        return this.instance.post(url, body, { 'headers': headers})
    }

    put(url, body) {
        return this.instance.put(url, body, { 'headers': { 
            'Authorization': localStorage.getItem(ACCESS_TOKEN),
            'Content-Type': 'application/json' } })
    }

    delete(url) {
        return this.instance.delete(url, { 'headers': { 'Authorization': localStorage.getItem(ACCESS_TOKEN) } })
    }
}

export default new AxiosService();