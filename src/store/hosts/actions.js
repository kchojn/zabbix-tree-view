import {HOST_REQ, HOST_RES} from "./types";
import {ZabbixClient} from "zabbix-client";


const client = new ZabbixClient(
    'http://zabbix4-demo.hawatel.lan:8081/api_jsonrpc.php',
);

const getHosts = async () => {
    const hosts = [];
    const api = await client.login('Admin', 'zabbix');
    const host = await api.method('host.get').call({});
    for (const key in host) {
        if (host.hasOwnProperty(key)) {
            hosts.push(
                {
                    'hostid': host[key]['hostid'],
                    'host': host[key]['host']
                }
            );
        }

    }
    await api.logout();
    return hosts;
};

export const fetchingHosts = () => {
    return (dispatch) => {
        dispatch({type: HOST_REQ});
        return getHosts().then(response => {
            dispatch({type: HOST_RES, payload: response});
        }, error => console.log(error))
    }

};
