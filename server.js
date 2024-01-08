const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req,res){
    if(req.url === '/'){
      fs.readFile('index.html','utf-8',function(error,result){
          if(error){
            process.exit(1);
          }
          else {
            res.write(result);
            res.end();
          }
      })
    }

    else if(req.url === '/about'){
        fs.readFile('about.html','utf-8',function(error,result){
            if(error){
              process.exit(1);
            }
            else {
              res.write(result);
              res.end();
            }
        })
    }

    else if(req.url === '/api/courses'){
       const courses = [
        {id:1,name:'course1'},
        {id:2,name:'course2'},
        {id:3,name:'course3'},
        {id:4,name:'course4'}
       ];
       res.write(JSON.stringify(courses));
       res.end();
    }
});

module.exports = server;