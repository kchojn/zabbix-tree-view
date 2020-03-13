import getResponse from "./zabbixResponse";

const method = 'host.get';
const params = {};

const getHosts = () => {
    return getResponse(method, params).then(function (result) {
        const hosts = [];
        for (const key in result) {
            if (result.hasOwnProperty(key)) {
                hosts.push(
                    {
                        'id': result[key].hostid,
                        'name': result[key].host
                    }
                );
            }

        }
        return hosts;
    });

};

export default getHosts;
