import getHosts from "./getHosts";
import getEvents from "./getEvents";

class HostEventMapper {
    constructor() {
        this.body = {id: 'root', name: 'Zabbix Events', children: []};
        this.promises = [getHosts(), getEvents()]
    }


    filterEvents(dataSet, id) {
        const filteredData = dataSet.filter(d => d.hostid === id);
        filteredData.forEach(function (item) {
            delete item.hostid;
            delete item.value;
            delete item.severity;
        });
        return filteredData;
    }

    async mapAll() {
        const self = this;
        await Promise.all(self.promises).then(result => {
            result[0].forEach(function (item) {
                    item['children'] = self.filterEvents(result[1], item.id);
                    self.body.children.push(item);

                }
            );
        });
        return self.body;
    }
}

export default HostEventMapper;
