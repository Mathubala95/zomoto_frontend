import axios  from "axios";
import { config } from "../config";

export function createRestraunt(resData){
    //Restraunt Data(resData)
    return axios.post(`${config.api}/admin/restraunts/create`,resData, {
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}

export function listRestraunt(resData){
    return axios.get(`${config.api}/admin/restraunts`, {
        headers : {
            Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}