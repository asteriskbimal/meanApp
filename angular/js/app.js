(function() {
  var app = angular.module('productReview', []);

  app.controller('ProductController', function() {
    this.products = product;
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  var product = [{
    name: 'Samsung',
    category:'Mobile',
    rating:4.5,
    model:'Note 7',
    description: "Latest samsung mobile with latest tech",
    price: 210.50,
    features:[{
    	color:"Grey",
    	memory:"32 GB",
    	simSize:"Nano",
        screen:"3 inch"
    }],
    images: [ 
    	"images/Samsung-01.gif",
        "images/Samsung-02.gif"
    ]
  }, {
    name: 'IPhone',
    category:'Mobile',
    rating:4.8,
    model:'7 plus',
    description: "Latest Apple iphone with latest tech",
    price: 510.50,
    features:[{
    	color:"Black",
    	memory:"16 GB",
    	simSize:"Nano",
        screen:"3 inch"
    }],
    images: [ 
    	"images/IPhone-01.gif",
        "images/IPhone-02.gif"
    ]
  }, {
    name: 'Huwaei',
    category:'Mobile',
    rating:4.4,
    model:'Honor 3C',
    description: "Latest Huwaei mobile with latest tech",
    price: 310.50,
    features:[{
    	color:"Silver",
    	memory:"64 GB",
    	simSize:"Nano",
        screen:"3 inch"
    }],
    images: [ 
    	"images/Huwaei-01.gif",
        "images/Huwaei-02.gif"
    ]
  }];
})();
