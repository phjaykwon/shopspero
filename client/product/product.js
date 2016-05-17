Template.product.onCreated(function() {

    Session.setPersistent('mainImage', "") //add check if photo even exists TODO
})

Template.product.helpers({
    sizes: function() {
        var selects = []
        var inventory = this.sizes

        console.log(inventory) // { "S": 1, "XS": 2}
        for (var key in inventory) {
            if (inventory.hasOwnProperty(key)) {
                console.log(key + " -> " + inventory[key]);
                if (inventory[key] > 0) {
                    selects.push(key)
                }

            }
        }

        console.log(selects)
        return selects
    },
    categoryName: function() {
        var categoryName = Template.currentData().sex || Template.currentData().category
        console.log(categoryName.toString())
        categoryName = categoryName.toString()
        categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
        return categoryName
    },
    subcategoryName: function() {
        subcategories = Template.currentData().subcategories
        for (var key in subcategories) {
            if (subcategories[key]) {
                return " / " + key.charAt(0).toUpperCase() + key.slice(1)
            }
        }
    },
    quantity: function() {
        var size = Session.get("selectedSize")
        var inventory = Template.currentData().sizes
        if (!size) {
            for (var key in inventory) {
                if (inventory.hasOwnProperty(key)) {
                    console.log(key + " -> " + inventory[key]);
                    if (inventory[key] > 0) {
                        size = key
                        break
                    }
                }
            }            
        }
        console.log(inventory[size])
        return _.range(1, inventory[size] + 1)
    },
    mainImage: function() {
        if (Session.get('mainImage') == "") {
            console.log('finding mainImage')
            console.log(this.photos)
            Session.setPersistent('mainImage', this.photos[0].toString()); //add check TODO
        } 
        return Session.get('mainImage')
    }
})
Template.product.events({
    "click .alt-img": function(event) {
        Session.setPersistent('mainImage', this.toString())
    },
    "change #size-select": function(evt) {
        Session.set("selectedSize", $(evt.target).val())
    }
})

Template.product.events({
    "submit .add-cart": function(event, template) {
    	event.preventDefault();
    	console.log(event.target)
		// Get name
		newSize = event.target.newSize.value;
		newQuantity = event.target.newQuantity.value;
		if (newQuantity != 0) {
			// this is in lib/builders
			addToCart(this._id, newSize, newQuantity);
		}

		// reset stuff
		//TODO: reset default size to non-selected ..?

		event.target.newQuantity.value = 1;


    }
})	
