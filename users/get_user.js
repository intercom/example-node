var Intercom = require('intercom-client');

var client = new Intercom.Client({ token: process.env['AT'] });
var usr_id = process.argv[2];
client.users.find({ user_id: usr_id}, function (rsp){
  console.log(rsp.body)
});
