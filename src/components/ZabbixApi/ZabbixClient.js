import {ZabbixClient} from "zabbix-client/dist";

const client = new ZabbixClient(
    'http://zabbix4-demo.hawatel.lan:8081/api_jsonrpc.php',
);


const responseZabbix = async (method, params) => {
    const api = await client.login('Admin', 'zabbix');
    const result = await api.method(method).call(params);
    await api.logout();
    return result;

};

export default responseZabbix;
