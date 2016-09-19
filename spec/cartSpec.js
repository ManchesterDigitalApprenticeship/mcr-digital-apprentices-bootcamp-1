describe("Cart", function () {

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
        expect(cart.getAllItems()).toContain({name: "widget", price: 450});
        expect(cart.getAllItems()).toContain({name: "thingumabob", price: 125});
    });
    
    it("should remove an item at the specified index", function(){
        var cart = new Cart();
        cart.addProduct({name: "widget", price: 450});
        cart.addProduct({name: "whatnot", price: 120});
        expect(cart.getTotalItems()).toBe(1);
        expect(cart.getTotalPrice()).toBe(120);
        expect(cart.getAllItems()).toContain({name: "whatnot", price:120});
    });
});