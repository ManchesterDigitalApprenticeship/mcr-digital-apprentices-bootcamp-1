# Manchester Digital Apprenticeship Bootcamp One

// TODO: something about the bootcamp

## Kata Two, shopping cart 

Throughout the bootcamp we'll be using a single kata 'the shopping cart' to learn more about pairing, testing and writing user stories. 
 
In kata one, we'll be focussing on pairing.

Pairing, or pair programming, is a collaborative approach to writing software. Two developers work on the same machine 
to write a piece of software. One takes the role of the 'driver', and the other the 'navigator'. The driver types at the 
keyboard and it is their responsibility is to implement the code. The navigator reviews the code that the driver is 
writing and thinks ahead to the next step of development.


### Pairing tips

Communication is important when pairing, keep talking and focus together on the task at hand. 

Drivers should explain what they are doing to their partner whilst they are typing. 

Navigators aren't passengers, you shouldn't be silent, but beware of becoming a back-seat driver; allow the driver time to correct typos and 
mistakes whilst you focus on the structure of the code that you're both writing. 

Talk about your ideas, assumptions and what you want to do. Ask questions when you're unsure.
  
Switch roles frequently, at least every time a feature is complete, but feel free to swap at any time.

## Running the example

Open the file `index.html` in a browser. The shopping cart interface should be displayed. Use this interface to test 
the changes which you make to the shopping cart code in `cart.js`.

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

## Javascript crib sheet

### Adding an item to an array in javascript

```

// add something to the front of an array:

var array = [];
array.push('widget'); // array = ['widget']

// or, to add arrays together:

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