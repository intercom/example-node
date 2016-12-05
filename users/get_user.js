var Intercom = require('intercom-client');

var client = new Intercom.Client({ token: process.env['PAT'] });
var usr_id = process.argv[2];
console.log(usr_id);
client.users.find({ user_id: usr_id}, function (rsp){
  console.log(rsp)
});
