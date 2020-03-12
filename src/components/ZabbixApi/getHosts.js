import responseZabbix from "./zabbixClient";


const getHosts = async () => {
    return responseZabbix('host.get', {}).then(function (result) {
        const hosts = [];
        const host = result;
        console.log(host + '0');
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
        console.log(hosts + '1');
        return hosts;
    });

};

export default getHosts;
