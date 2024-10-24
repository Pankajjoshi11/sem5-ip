const fs=require('fs')
const http=require('http')

fs.readFile('demo.txt', function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('file opened successfully')
    }
})

http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8081)

fs.appendFile('demo1.txt','Hello guys!',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('SAVED!')
    }
})


// update 

fs.appendFile('demo1.txt','this is pankaj',function(err){
    if(err){ console.log(err)}
    else console.log('saved2.0')
})


// delete

fs.unlink('demo.txt',function(err){
    if(err){ console.log(err)}
    else console.log('file deleted')
})

//rename

fs.rename('demo.html','demo1.html', function(err){
    if(err){ console.log(err)}
    else console.log('file renamed')
})