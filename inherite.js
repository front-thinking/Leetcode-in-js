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
    var _super = this._super = {},
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
puppy._super.run();

// Advanced version
var extend = function(superClass, subClass) {
    
    var newChild = function() {
        var _super = {};
        
        superClass.apply(this, arguments);
        arguments.callee.prototype = this;
        for (var i in this) {
            Object.defineProperty(_super, i, {
                writable : false,
                value : this[i]
            });
            //~ _super[i] = this[i];
        }
        Object.defineProperty(this, "_super", {
            get : function() {
                if (arguments.callee.caller == subClass) {
                    return _super;
                } else {
                    return undefined;
                }
            },
            set : function() {
                return false;
            },
            configurable : true
        });
        //~ this._super = _super;
        subClass.apply(this, arguments);
    }
    newChild.prototype = new superClass();
    if (!newChild.prototype instanceof superClass) {
        // no non-param constructor in super class.
        //~ return false;
    }
    return newChild;
}

var Animal = function(){
    
    // private
    var leg = "animal";
    
    // public
    this.run = function() {
        console.log(leg);
    };
};

var Dog = extend(Animal, function() {
    var leg = "dog",
        _super = this._super;
    
    this.run = function() {
        _super && _super.run();
        console.log(leg);
    }
});

// puppy instanceof Dog;
// puppy instanceof Animal.
var puppy = new Dog();
puppy.run();

var Pig = extend(Dog, function() {
    var leg = "pig";
        _super = this._super;
    
    this.run = function() {
        _super.run();
        console.log(leg);
    }
});

// piggy instanceof Pog;
// piggy instanceof Dog;
// piggy instanceof Animal.
var piggy = new Pig();
piggy.run();