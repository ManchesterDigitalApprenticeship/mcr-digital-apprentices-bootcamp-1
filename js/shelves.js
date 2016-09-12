var Shelves = function(){

    var Shelves = function() {

        this.callbacks = [];

        this.items = [ { id: 1, name: 'Apples', price :1.75},
            { id: 2, name: 'Milk', price : 0.95},
            { id: 3, name: 'Bread', price :0.89},
            { id: 4, name: 'Cheese', price :2.89},
            { id: 5, name: 'Oranges', price :1.99},
            { id: 6, name: 'Cucumber', price :0.99},
            { id: 7, name: 'Chicken', price :3.49},
            { id: 8, name: 'Cake', price :3.99}
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
        this.template = _.template('<li class="list-group-item"><div><span><%= name%></span> <span class="pull-md-right"> £<%= price%></span></div></li>');
        this.render = function() {
            return $(this.template(this.product)).click(function(){
                 this.cart.addProduct(this.product.name);
            }.bind(this));

        }
        
        this.addToCart = function() {
            cart.addProduct(product.name);
        }
    };

    return ShelfItem;
}();