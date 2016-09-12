var express=require('express');

var bodyParser=require('body-parser');

var promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req,res,next){

	res.writeHead('200',{'Content-Type':'text/plain'});

	next();
})
.get(function(req,res,next){

	res.end("will list all the Promos");

})
.post(function(req,res,next){

	res.end("Add a Promo with details :"+req.body.name+" and "+req.body.description);

})
delete(function(req,res,next){

	res.end('Delete all Promos');
});

promoRouter.route('/:promoId')
.all(function(req,res,next){

	res.writeHead('200',{'Content-Type':'text/plain'});

	next();
})
.get(function(req,res,next){

	res.end("Promo with promoId :"+ req.params.promoId +" will be displayed");

})
.put(function(req,res,next){

	res.end("Promo with promoId :"+ req.params.promoId +" and Promo Name :"+req.body.name+" will be updated");
})
.delete(function(req,res,next){

	res.end("Promo with promoId :"+ req.params.promoId +"  will be deleted");
});

module.exports = promoRouter;