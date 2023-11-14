/* !!!! COMMON PATTERNS FOR UPDATING ARRAYS IN STATE !!!
We need to follow this methods whenever we need to
change the state! These are the best practices while
working with objects and arrays! Otherwise we will
WE DON'T MUTATE THE ORIGINAL, NEVER!
have problems in React! Please Use and Stick with them! */
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.5 },
];

// Adding to an array
[...shoppingCart, { id: 4, product: "Coffee Mug", price: 7.99 }];

// Removing an element
shoppingCart.filter((item) => item.id !== 4);

// Updating all elements in an array
shoppingCart.map((item) => {
    return {
        ...item, // First spread the old one
        product: item.product.toLowerCase() // Overwrite the property you want
    };
})

// Modifying a particular element in an array
shoppingCart.map((item) => {
    if (item.id === 3) {
        // Change the item you want to
        return { ...item, price: 10.99 };
    } else {
        // Return without change
        return { ...item };
    }
})

// If you need to sort, first copy the array
const nums = [4,3,6,1,2];
const sortedNums = [...nums].sort();
sortedNums