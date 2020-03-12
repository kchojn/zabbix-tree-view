import responseZabbix from "./zabbixClient";

const getResponse = async (method, params) => {
    return responseZabbix(method, params).then(function (result) {
        return result;
    });

};

export default getResponse;
