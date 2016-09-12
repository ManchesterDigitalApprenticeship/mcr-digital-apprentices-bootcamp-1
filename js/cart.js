var CartView = function () {
    var CartView = function CartView(cart, el) {
        this.cart = cart;
        this.data = [];
        this.$el = $(el);
        this.template = '<div><ul class="list-group" id="cart-items"></ul></div>'

        this.render = function () {
            var list = this.data.map(function(item){return new CartItem(item).render()});
            this.$el.html($('#cart-items', this.template).html(list));
        }

        this.cart.registerListener(this.update.bind(this));
    }

    CartView.prototype.update = function () {
        this.data = this.cart.getAllItems();
        this.render();
    };

    return CartView;

}();

var CartItem = function() {

    var CartItem = function(name) {
        this.render = function() {
            return $('<li/>', {text: name, class: 'list-group-item'});
        }
    };

    return CartItem;
}()


var TotalView = function () {

    var TotalView = function TotalView(cart, el) {

        this.$el = $(el);
        this.cart = cart;
        this.totalItems = 0;
        this.template = '<div>Total items: <span id="total-items"></span></div>'

        this.render = function () {
            var $template = $(this.template);
            $('#total-items', $template).html(this.totalItems);
            this.$el.html( $template.html() );
        }

        this.cart.registerListener(this.update.bind(this));
    }

    TotalView.prototype.update = function () {
        this.totalItems = this.cart.getTotalItems();
        this.render();
    };

    return TotalView;

}();

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

    Cart.prototype.getAllItems = function () {
        return this.cartItems;
    };

    Cart.prototype.getTotalItems = function () {
        return this.cartItems.length;
    };

    Cart.prototype.addProduct = function (item) {
        this.cartItems = this.cartItems.concat([item]);
        this.emitChange();
    };

    Cart.prototype.registerListener = function (callback) {
        this.callbacks = this.callbacks.concat([callback], this.callbacks);
    };
    
    return Cart;
}();


