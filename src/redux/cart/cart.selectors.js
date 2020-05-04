import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
    }
);