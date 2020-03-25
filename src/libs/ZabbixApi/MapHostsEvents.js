import getHosts from "./GetHosts";
import getEvents from "./GetEvents";

class HostEventMapper {
    constructor() {
        this.body = {id: 'root', name: 'Zabbix Events', children: []};
        this.promises = [getHosts(), getEvents()]
    }


    filterEvents(dataSet, id) {
        return dataSet.filter(d => d.hostid === id);
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
