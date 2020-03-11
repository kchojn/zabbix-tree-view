import {HOST_REQ, HOST_RES} from "./types";
import getHosts from "../../components/ZabbixApi/getHosts";


export const fetchingHosts = () => {
    return (dispatch) => {
        dispatch({type: HOST_REQ});
        return getHosts().then(response => {
            dispatch({type: HOST_RES, payload: response});
        }, error => console.log(error))
    }

};
