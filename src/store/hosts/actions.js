import {HOST_REQ, HOST_RES} from "./types";
import HostEventMapper from "../../components/ZabbixApi/MapHostsEvents";


export const fetchingHosts = () => {
    return (dispatch) => {
        dispatch({type: HOST_REQ});
        return  new HostEventMapper().mapAll().then(response => {
            dispatch({type: HOST_RES, payload: response});
        }, error => console.log(error))
    }

};
