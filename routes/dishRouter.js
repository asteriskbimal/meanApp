var express=require('express');

var bodyParser=require('body-parser');

var dishRouter=express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next){

	res.writeHead('200',{'Content-Type':'text/plain'});

	next();
})
.get(function(req,res,next){

	res.end("will list all the dishes");

})
.post(function(req,res,next){

	res.end("Add a dish with details :"+req.body.name+" and "+req.body.description);

})
delete(function(req,res,next){

	res.end('Delete all dishes');
});

dishRouter.route('/:dishId')
.all(function(req,res,next){

	res.writeHead('200',{'Content-Type':'text/plain'});

	next();
})
.get(function(req,res,next){

	res.end("Dishe with dishId :"+ req.params.dishId +" will be displayed");

})
.put(function(req,res,next){

	res.end("Dishe with dishId :"+ req.params.dishId +" and Dish Name :"+req.body.name+" will be updated");
})
.delete(function(req,res,next){

	res.end("Dishe with dishId :"+ req.params.dishId +"  will be deleted");
});

module.exports = dishRouter;