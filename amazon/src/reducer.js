export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'ADD_TO_BASKET':
			return { ...state, basket: [...state.basket, action.item] };

		case 'REMOVE_FROM_BASKET':
			//We cloned the basket
			let newBasket = [...state.basket];
			//We check to see if product exists,
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			if (index >= 0) {
				//this means item is present in id so lets remove it
				newBasket.splice(index, 1);
			} else {
				console.warn('Item is not in cart');
			}
			//return all the state but change the basket to be the new updated basket
			return { ...state, basket: newBasket };

		default:
			return state;
	}
};

export default reducer;
