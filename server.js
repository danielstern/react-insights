const express = require('express');
const fs = require('fs');
let app = new express();

app.get('/',(req,res)=>{
   const data = require('./counts.json');
   const insights = fs.readFileSync('./insights.txt','utf-8');
   res.send(`
<html>
    <body>
        <h2>
            Summary of Tabulated Data    
        </h2>
        <pre>
${insights}
        </pre>
        <h2>Dependencies of Large Selection of React HMR Boilerplates</h2>
        <table border="1px solid black"> 
            ${data.map(({key,value})=>`<tr><td>${key}</td><td>${value}</td></tr>`).join('')}
        </table>
        
    </body>
</html>
</html>
`)
});

app.listen(7777,console.info("App listening on port 7777"));