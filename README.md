# Manchester Digital Apprenticeship Bootcamp One

// TODO: something about the bootcamp

## Kata One, shopping cart 

Throughout the bootcamp we'll be using a single kata 'the shopping cart' to learn more about pairing, testing and 
writing user stories. 
 
In kata three, we'll be focussing on testing.

In the previous exercise, we wrote code to pass a series of predefined tests. As our problems get larger, though, writing
tests to cover all of the scenarios we cn imagine becomes difficult. Trying to cover everything can also be distracting, 
shifting our focus from the problem at hand and complicating our code with features we're not actually working on at the time.



## Running the example

Open the file `specRunner.html` in a browser. Instead of the shopping cart interface, you'll see a page showing the 
results of running a series of tests on the code in `src/cart.js`. Refreshing this page will re-run the tests, or 
clicking on the links for all tests or an individual one will rerun the test selected. 

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