const snmp = require("net-snmp");
const ping = require('ping');

let swHosts = ["10.3.20.3", "10.3.20.4", "10.3.20.50", "10.3.20.51", "10.3.20.52"];
const oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.5.0"];

swHosts.forEach( ip_switch => console.log(ip_switch));

swHosts.forEach( host => {
    ping.sys.probe(host, isAlive => {
        let msg = isAlive ? `host ${host} is alive` : `host ${host} is dead`;
        console.log(msg);
    })
});

// let session = snmp.createSession(sw[0], "public");
 

 
// session.get(oids, function(error, varbinds) {
//     if(error) {
//         console.error(error);
//     } else {
//         for (var i = 0; i < varbinds.length; i++)
//             if (snmp.isVarbindError(varbinds[i]))
//                 console.error(snmp.varbindError (varbinds[i]))
//             else
//                 // console.log(sw[0] + '\n' + varbinds[i].oid + " = " + varbinds[i].value);
//     }
//     session.close();
// });
 
// session.trap(snmp.TrapType.LinkDown, function(error) {
//     if(error)
//         console.error(error);
// });