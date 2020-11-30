const snmp = require("net-snmp");

const session = snmp.createSession ("10.3.20.50", "public");
 
// const oids = ["1.3.6.1.2.1.1.1.0", "1.3.6.1.2.1.1.5.0"];
 
const oid = "1.3.6.1.2.1.1.1.0";
 
function doneCb (error) {
    if (error)
        console.error (error.toString());
}
 
function feedCb (varbinds) {
    for (let i = 0; i < varbinds.length; i++) {
        if (snmp.isVarbindError (varbinds[i]))
            console.error (snmp.varbindError (varbinds[i]));
        else
            console.log (varbinds[i].oid + "|" + varbinds[i].value);
    }
}
 
let maxRepetitions = 20;
 
// The maxRepetitions argument is optional, and will be ignored unless using
// SNMP verison 2c
session.walk (oid, maxRepetitions, feedCb, doneCb);