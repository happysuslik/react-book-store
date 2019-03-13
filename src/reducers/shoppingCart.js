const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartIem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    }
};

const getOrderTotal = (cartItems) => {
    let orderTotal = 0;
    let orderCounts = 0;
    cartItems.forEach(item => {
        orderTotal += item.total;
        orderCounts += item.count;
    });
    return {
        orderTotal,
        orderCounts
    };
};

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;

    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartIem(book, item, quantity);
    const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
    const {orderTotal, orderCounts} = getOrderTotal(newCartItems);

    return {
        orderCounts: orderCounts,
        orderTotal: orderTotal,
        cartItems: newCartItems
    };

};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
            orderCounts: 0
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'DECREASE_BOOK_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'DELETE_ORDER_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;
