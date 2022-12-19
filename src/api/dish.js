import axios  from "axios";
import { config } from "../config";

export function createDish (rId, dish) {
    return axios.post(`${config.api}/admin/restraunts/dish/${rId}`, dish, {
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    });
}

export function getDish (rId) {
    return axios.get(`${config.api}/admin/restraunts/dish/${rId}`,{
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    });
}