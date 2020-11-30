const snmp = require("net-snmp");
const ping = require('ping');


let swHosts20 = [];

// add 10.3.20.xx subnet hosts
for(let i=2; i < 255; i++){
    swHosts20.push(`10.3.20.${i}`);
}

const swHosts20UP = [];

swHosts20.forEach( host => {
    ping.sys.probe(host, isAlive => {
        if(isAlive){
            console.log(`host ${host} is UP`);
            
        }
    });

const ip = "10.3.20.50";
let session = snmp.createSession(ip, "public");

const oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.5.0"];

 
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

// session.trap(snmp.TrapType.LinkDown, (error) => {
//     if(error) console.error(error);
// });