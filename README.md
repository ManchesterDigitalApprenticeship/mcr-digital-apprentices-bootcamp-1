# Manchester Digital Apprenticeship Bootcamp One

## Kata One, shopping cart 

Throughout the bootcamp we'll be using a single kata 'the shopping cart' to learn more about pairing, testing and 
writing user stories. 
 
In kata three, we'll be focussing on testing.

In the previous exercise, we wrote code to pass a series of predefined tests. As our problems get larger, though, writing
tests to cover all of the scenarios we cn imagine becomes difficult. Trying to cover everything can also be distracting, 
shifting our focus from the problem at hand and complicating our code with features we're not actually working on at 
the time. In practice, instead of trying to deal with all of this complexity at once, we write our tests and code one feature
at a time, choosing a feature, writing a test for it, and then implementing as little code as possible to have our test
pass at each stage. After passing our test, we re-run all of our previous tests to ensure that we've not broken anything
already written.


## Running the example

Open the file `specRunner.html` in a browser. This time, there are no tests present in the file `spec/cartSpec.js`, and 
we have to add them, then modify code in `src/cart.js` to have them pass. 

## Coding objectives

In this exercise, implement as many as you can of the following requirements for the shopping cart:

 * Adding a product to the cart increases the total number of items in the cart by 1
 * Adding a product to the cart increases the total price of the cart by the product's price
 * Adding a product to the cart adds the product to the list of items in the cart
 * Removing a product from the cart decreases the total number of items in the cart by 1
 * Removing a product from the cart decreases the total price of the cart by the product's price
 * Removing a product from the cart removes the product from the list of items in the cart
 * Some items in the cart are available as a 'buy one, get one free' offer. When a customer has two such items in their cart, 
   they should only be charged for one of them.

## Spec crib sheet

```

describe( "The feature we're testing", function() {    // provide a description of the feature that your're testing

    it( "should do something useful", function() {     // describe what this test is doing
         var thing = new MyObject();                        // set up the thing you're testing, this may involve setting some
                                                            // properties
    
         thing.doSomething();                               // do the thing you want to test
    
         expect( thing.getSomeProperty() ).toBe("aString");   // check that the thing is in the state you expected it to be
         expect( thing.getSomeListProperty() ).toContain("SomeValue");  // you can check inside lists, too
    });
});



```


## Javascript crib sheet

### Adding an item to an array in javascript

```
var array = [];
array.push('widget'); // array = ['widget']
var new_array = array.concat( 'a thing' ); // new_ar = ['widget', 'a thing']
```

### Removing an item from an array in javascript

```
var array = ['this', 'that', 'the other'];

array.splice(1,1); // ar = ['this', 'the other']
```

### Iterating over the contents of an array

```
for( var i =0; i < array.length; i++ ){
	console.log(array[i]);
}
```

```
array.forEach( function(x){ console.log(x);} );
```
