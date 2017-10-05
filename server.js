const express = require('express');
let app = new express();

app.get('/',(req,res)=>{
   const data = require('./counts.json');
   res.send(`
<html>
    <body>
        <h1>Dependencies of Large Selection of React HMR Boilerplates</h1>
        <table border="1px solid black"> 
            ${data.map(({key,value})=>`<tr><td>${key}</td><td>${value}</td></tr>`).join('')}
        </table>
    </body>
</html>
</html>
`)
});

app.listen(7777);