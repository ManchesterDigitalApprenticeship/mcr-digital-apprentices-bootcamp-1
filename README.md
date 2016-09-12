# Manchester Digital Apprenticeship Bootcamp One

// TODO: something about the bootcamp

## Kata One, shopping cart 

Throughout the bootcamp we'll be using a single kata 'the shopping cart' to learn more about pairing, testing and writing user stories. 
 
In this exercise we'll be focussing on pairing.

// TODO: what pairing is, driver and navigator, tips

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