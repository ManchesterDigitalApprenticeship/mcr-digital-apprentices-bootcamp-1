var Cart = function () {

    function Cart() {

        this.cartItems = {};
        this.callbacks = [];
        this.counter = 0;

        this.emitChange = function () {
            this.callbacks.forEach(function (callback) {
                callback();
            });
        }
    }

    Cart.prototype.getAllItems = function () {
        return this.cartItems;
    };

    Cart.prototype.getTotalItems = function () {
        return this.cartItems.length;
    };

    Cart.prototype.addProduct = function (item) {
        this.cartItems[this.counter++] = item;
        this.emitChange();
    };

    Cart.prototype.removeItem = function(id) {
        this.cartItems = _.omit(this.cartItems, [id]);
        this.emitChange();
    };

    Cart.prototype.getTotalPrice = function() {
        return _.values(this.cartItems).reduce(function(val,item){ return val + item.price }, 0);
    };

    Cart.prototype.registerListener = function (callback) {
        this.callbacks = this.callbacks.concat([callback], this.callbacks);
    };

    return Cart;
}();


