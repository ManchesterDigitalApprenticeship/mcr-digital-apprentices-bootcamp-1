var Shelves = function(){

    var Shelves = function() {

        this.callbacks = [];

        this.items = [
            { name: 'Apples', price :175, bogoff: true},
            { name: 'Milk', price : 95},
            { name: 'Bread', price :89},
            { name: 'Cheese', price :289},
            { name: 'Oranges', price :199, bogoff: true},
            { name: 'Cucumber', price :99},
            { name: 'Chicken', price :349},
            { name: 'Cake', price :399, bogoff: true}
        ];

    };

    Shelves.prototype.getAllItems = function(){
        return this.items;
    };

    Shelves.prototype.registerListener = function (callback) {
        this.callbacks = this.callbacks.concat([callback], this.callbacks);
    };

    return Shelves;
}();

var ShelfView = function(){

    var ShelfView = function(shelves, el, cart){
        this.shelves = shelves;
        this.$el = $(el);
        this.cart = cart;
        this.template = '<div><ul class="list-group" id="shelf-list"></ul></div>';
        this.shelfItems = [];

        this.render = function(){
            var products = this.shelfItems.map( function(product){ return new ShelfItem(product, cart).render() } );
            this.$el.html($('#shelf-list', this.template).html(products));
        };

        this.shelves.registerListener(this.update.bind(this));

    };

    ShelfView.prototype.update  = function(){
        this.shelfItems = this.shelves.getAllItems();
        this.render();
    };

    return ShelfView;
}();

var ShelfItem = function(cart) {

    var ShelfItem = function(product, cart){
        this.product = product;
        this.cart = cart;
        this.template = _.template('<li class="list-group-item"><div><span><%= name%></span> <span class="pull-right"> £<%= price%></span></div></li>');
        this.render = function() {
            return $(this.template({ name:this.product.name, price: (this.product.price/100).toFixed(2) }))
                .click(function(){
                 this.cart.addProduct(this.product);
            }.bind(this));

        }
        
        this.addToCart = function() {
            cart.addProduct(product.name);
        }
    };

    return ShelfItem;
}();