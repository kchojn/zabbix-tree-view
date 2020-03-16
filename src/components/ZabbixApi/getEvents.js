import getResponse from "./zabbixResponse";

const params = {
    "output": "extend",
    "time_from": "",
    "selectHosts": ["hostid", "host"],
    "selectTags": "extend",
    "sortfield": ["eventid"],
    "sortorder": "ASC"
};
const method = 'event.get';
const timeStamp = Math.round((new Date()).getTime() / 1000);

const setTimeFrom = (params, period = 100 * 60) => {
    params.time_from = timeStamp - period;
    return params
};

const getEvents = () => {
    return getResponse(method, setTimeFrom(params)).then(function (result) {
        const events = [];
        for (const key in result) {
            if (result.hasOwnProperty(key)) {
                events.push(
                    {
                        'id': result[key].eventid,
                        'name': result[key].name,
                        'hostid': result[key].hosts[0].hostid,
                        'value': result[key].value,
                        'severity': result[key].severity
                    }
                );
            }

        }
        return events;
    });

};

export default getEvents;
