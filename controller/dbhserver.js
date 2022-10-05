const axios = require('axios');
const secret = process.env.DBH_SECRET;
const getServerList = async () => {
    const config = {
        method: 'get',
        url: 'https://panel.danbot.host/api/client',
        headers: {
            'Authorization': `Bearer ${secret}`,
            'Content-Type': 'application/json'
        }
    };
    try {
        let  response = await axios(config);
       const  {data} = response;
        const report = {};
        report.totalServer = data.meta.pagination.count;
        report.serverDetails = [];
        data.data.forEach(v => {
            const properties = {};
            if (v.object === 'server') {
                const { attributes: server } = v;
                const { ip_alias, port } = server.relationships.allocations.data[0].attributes;
                properties.name = server.name;
                properties.id = server.identifier;
                properties.uid = server.uuid;
                properties.node = server.node;
                properties.link = `http://${ip_alias}:${port}`;
                report.serverDetails.push(properties);
            }
        })
        return report;
    }
    catch(er){
        console.log(er)
    }

}
const startServer = (uuid)=>{
    
}
module.exports = {
    getServerList
}