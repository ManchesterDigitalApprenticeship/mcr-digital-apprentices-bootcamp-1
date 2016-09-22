/**
 *
 * 
 *
 * In this exercise, implement as many as you can of the following requirements for the shopping cart:
 *
     * Adding a product to the cart increases the total number of items in the cart by 1
     * Adding a product to the cart increases the total price of the cart by the product's price
     * Adding a product to the cart adds the product to the list of items in the cart
     * Removing a product from the cart decreases the total number of items in the cart by 1
     * Removing a product from the cart decreases the total price of the cart by the product's price
     * Removing a product from the cart removes the product from the list of items in the cart
 */

var Cart = function () {

    function Cart() {

        this.cartItems = [];
        this.callbacks = [];

        this.emitChange = function () {
            this.callbacks.forEach(function (callback) {
                callback();
            });
        }
    }

    // Returns a list of items in the cart
    Cart.prototype.getAllItems = function () {
        return this.cartItems;
    };
    
    // Returns the total number of items in the cart
    Cart.prototype.getTotalItems = function () {
        return this.cartItems.length;
    };

    // Adds a product to the cart
    Cart.prototype.addProduct = function (item) {
        this.cartItems.push(item);
        this.emitChange(); // tell UI components that cart contents have been updated
    };
    
    // Removes a product from the cart; supplied as the 'id' of the item to be removed
    Cart.prototype.removeProduct = function(id) {
        this.cartItems.splice(id,1);
        this.emitChange(); // tell UI components that cart contents have been updated
    };

    // Returns the total price of items in the cart
    Cart.prototype.getTotalPrice = function() {
        return this.cartItems.reduce(function(subTotal, item) {
            return subTotal + item.price
        }, 0);
    };

    Cart.prototype.registerListener = function (callback) {
        this.callbacks = this.callbacks.concat([callback], this.callbacks);
    };

    return Cart;
}();


