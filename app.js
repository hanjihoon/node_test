const express = require('express');
const app = express();

this.a = 123;

app.use('/',(req,res,next)=>{
    console.log(req.url);
    if(req.url.indexOf('.htnk')!=-1){
        res.sendFile(req.url,{root:__dirname});
    }
    res.sendFile("/index.html",{root:__dirname});
})

app.listen(4003,function(){
    console.log("express start : port[4003]");
});

var obj = {
    a: 10,
    b: () => {
        // this => global
        console.log(this.a)
    },
    c: function() {
        // this => obj
        console.log(this.a)
    }
}

obj.b();
obj.c();

var common = function(){
    return this.a;
}

var arrow = () => {return this.a};

console.log(common());
console.log(arrow());
