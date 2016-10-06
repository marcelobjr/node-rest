//1.
var http = require('http');

var Service = function(req, res, next) {
 
var emp = [];
 
//2.
var extServerOptions = {
    host: 'http://www.asterank.com/api/mpc',
    port: '80',
    path: '/api/mpc',
    method: 'GET'
};
//3.
function get() {
    http.request(extServerOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            emp = JSON.parse(data);
            //emp.foreach(function (e) {
            //    console.log(e.EmpNo + "\t" + e.EmpName + "\t" + e.Salary + "\t" + e.DeptName + "\t" + e.Designation);
            //});
        });
 
    }).end();
};
 
get();
 
console.log(emp);



    return res.status(200)
                      .json({
                          status: true,
                          data  : {}
                      });
};

module.exports = Service;