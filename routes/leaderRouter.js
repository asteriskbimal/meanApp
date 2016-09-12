var express=require('express');

var bodyParser=require('body-parser');

var leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req,res,next){

	res.writeHead('200',{'Content-Type':'text/plain'});

	next();
})
.get(function(req,res,next){

	res.end("will list all the leaders");

})
.post(function(req,res,next){

	res.end("Add a leader with details :"+req.body.name+" and "+req.body.description);

})
delete(function(req,res,next){

	res.end('Delete all leaders');
});

leaderRouter.route('/:leaderId')
.all(function(req,res,next){

	res.writeHead('200',{'Content-Type':'text/plain'});

	next();
})
.get(function(req,res,next){

	res.end("Leader with leaderId :"+ req.params.leaderId +" will be displayed");

})
.put(function(req,res,next){

	res.end("Leader with leaderId :"+ req.params.leaderId +" and Leader Name :"+req.body.name+" will be updated");
})
.delete(function(req,res,next){

	res.end("Leader with leaderId :"+ req.params.leaderId +"  will be deleted");
});

module.exports = leaderRouter;