/**
 * An example of the full prototype-based inherite that's having the support of super and function rewrites.
 */

var Animal = function(){
    // private
    var leg = "animal";
    
    // public
    this.run = function() {
        console.log(leg);
    };
};

var Dog = function() {
    var _super = {},
        // private attrs
        leg = "dog";
    
    for (var i in this) {
        _super[i] = this[i];
    }
    
    // public
    
    /**
     *@rewrite run
     */
    this.run = function() {
        // execute super functions.
        _super.run();
        console.log(leg);
    };
    
    // return this;
};

// prototype inherite
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

// puppy instanceof Dog;
// puppy instanceof Animal.
var puppy = new Dog();
puppy.run();