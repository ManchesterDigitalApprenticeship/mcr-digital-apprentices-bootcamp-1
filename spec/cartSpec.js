describe("Cart", function () {

    var customMatchers =  {
        toContainProduct : function () {
            return {
                compare: function (cart, product) {
                    var items = cart.getAllItems();
                    var someMatch =  Object.keys(items).some(function (key) {
                        return items[key].product.name === product.name && items[key].product.price === product.price;
                    });
                    return { pass: someMatch };
                }
            }
        }
    };

    beforeEach(function () {
        jasmine.addMatchers(customMatchers);
    });

    it("should be empty when created", function () {
        var cart = new Cart();
        expect(cart.getTotalItems()).toBe(0);
    });

    it("should have zero price when created", function () {
        var cart = new Cart();
        expect(cart.getTotalPrice()).toBe(0);
    });

    it("should increase total items each time an item is added", function () {
        var cart = new Cart();
        cart.addProduct({name: "widget", price: 450});
        cart.addProduct({name: "widget", price: 450});
        expect(cart.getTotalItems()).toBe(2);
    });

    it("should add the price of an added product to the cart subtotal", function () {
        var cart = new Cart();
        cart.addProduct({name: "widget", price: 450});
        cart.addProduct({name: "doohickey", price: 75});
        expect(cart.getTotalPrice()).toBe(525);
    });

    it("should return a list of the items added to the cart", function () {
        var cart = new Cart();
        cart.addProduct({name: "widget", price: 450});
        cart.addProduct({name: "thingumabob", price: 125});
        expect(cart).toContainProduct({name: "widget", price: 450});
        expect(cart).toContainProduct({name: "thingumabob", price: 125});
    });
});