const SeverityMap = {
    0: 'notClassified',
    1: 'information',
    2: 'warning',
    3: 'average',
    4: 'high',
    5: 'disaster'
};

const ColorMap = {
    notClassified: '#97AAB3',
    information: '#00BFFF',
    warning: '#FFC859',
    average: '#FFA059',
    high: '#E97659',
    disaster: '#E45959'
};



const data = {
    "id": "root",
    "name": "Zabbix Events",
    "children": [
        {
            "id": "10084",
            "name": "Zabbix server",
            "children": [
                {
                    "id": "2165599",
                    "name": "CPU Load 0.265",
                    "hostid": "10084",
                    "value": "0",
                    "severity": "0"
                },
                {
                    "id": "2165600",
                    "name": "CPU system time is 8.99 %",
                    "hostid": "10084",
                    "value": "0",
                    "severity": "0"
                },
                {
                    "id": "2165601",
                    "name": "CPU Load 0.29",
                    "hostid": "10084",
                    "value": "1",
                    "severity": "2"
                },
                {
                    "id": "2165602",
                    "name": "CPU system time is 8.94 %",
                    "hostid": "10084",
                    "value": "1",
                    "severity": "2"
                }
            ]
        },
        {
            "id": "10263",
            "name": "centos01.hawatel.lan",
            "children": []
        },
        {
            "id": "10264",
            "name": "zabbix4-worker1",
            "children": []
        },
        {
            "id": "10278",
            "name": "TestHost",
            "children": []
        },
        {
            "id": "10353",
            "name": "pro-help.hawatel.lan",
            "children": []
        },
        {
            "id": "10564",
            "name": "MP0011",
            "children": []
        },
        {
            "id": "10565",
            "name": "MP0012",
            "children": []
        },
        {
            "id": "10566",
            "name": "MP0013",
            "children": []
        },
        {
            "id": "10567",
            "name": "111111",
            "children": []
        },
        {
            "id": "10568",
            "name": "MP00111",
            "children": []
        },
        {
            "id": "10569",
            "name": "MP00112",
            "children": []
        },
        {
            "id": "10570",
            "name": "MP00113",
            "children": []
        },
        {
            "id": "10571",
            "name": "testhost",
            "children": []
        }
    ]
};


const data1 = [{'Zabbix server': ['0', '0', '2', '2']}];


function countOccurrences(dataSet, severity){
    return dataSet.filter(i => i === severity.toString()).length
}


function makeChartData() {
    const chartData = [];
    data1.forEach(function (item) {
        let hostData = {};
        hostData.name = Object.keys(item)[0]; // push label name
        for (const key in SeverityMap) {
            hostData[SeverityMap[key]] = countOccurrences(item[Object.keys(item)[0]], key)
        }
        hostData.
        chartData.push(hostData)
    });
    console.log(chartData);
}

makeChartData();

