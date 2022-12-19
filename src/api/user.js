import axios  from "axios";
import { config } from "../config";

export async function login(cred){
    //credential(cred) for security purpose
    return await axios.post(`${config.api}/admin/users/login`,cred);

}