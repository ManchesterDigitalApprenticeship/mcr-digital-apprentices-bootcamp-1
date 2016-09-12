var CartView = function () {
    var CartView = function CartView(cart, el) {
        this.cart = cart;
        this.data = {};
        this.$el = $(el);
        this.template = _.template('<div><ul class="list-group" id="cart-items"></ul></div>');

        this.render = function () {
            var list = _.entries(this.data).map(function (item) {
                return new CartItem(item[0], item[1], cart).render();
            });

            this.$el.html( $('#cart-items', this.template({})).html(list));
        }

        this.cart.registerListener(this.update.bind(this));
    }

    CartView.prototype.update = function () {
        this.data = this.cart.getAllItems();
        this.render();
    };

    return CartView;

}();

var CartItem = function () {

    var CartItem = function (id, product, cart) {
        this.id = id;
        this.product = product;
        this.cart = cart;
        this.template = _.template('<li class="list-group-item"><span><%=name%></span><span id="remove" class="pull-right glyphicon glyphicon-remove"></span></li>');

        this.render = function () {
            $el = $(this.template(product));
            $('#remove', $el).click(function(){
                this.cart.removeItem(this.id);
                console.log( "Remove item with cart id " + this.id);
            }.bind(this));
            return $el;
        }
    };

    return CartItem;
}()


var TotalView = function () {

    var TotalView = function TotalView(cart, el) {

        this.$el = $(el);
        this.cart = cart;
        this.totalItems = 0;
        this.totalPrice = 0;
        this.template = _.template('<div><span>Total items: <%=totalItems%></span><span class="pull-right">£ <%=totalPrice%></span></div>');

        this.render = function () {
            var rendered = this.template({totalItems: this.totalItems, totalPrice: (this.totalPrice/100).toFixed(2)});
            this.$el.html(rendered);
        }

        this.cart.registerListener(this.update.bind(this));
    }

    TotalView.prototype.update = function () {
        this.totalItems = this.cart.getTotalItems();
        this.totalPrice = this.cart.getTotalPrice();
        this.render();
    };

    return TotalView;

}();

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


