export const initialState = {
	basket: [
		{
			id: '12345678',
			title: 'ClosetMaid 1312 4-Tier Wood Ladder Shelf Bookcase, Natural',
			price: 59.99,
			rating: 4,
			image: 'https://m.media-amazon.com/images/I/71mCp6pYe4L._AC_AA360_.jpg',
		},

		{
			id: '12345678',
			title: 'ClosetMaid 1312 4-Tier Wood Ladder Shelf Bookcase, Natural',
			price: 59.99,
			rating: 4,
			image: 'https://m.media-amazon.com/images/I/71mCp6pYe4L._AC_AA360_.jpg',
		},
	],
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return { ...state, basket: [...state.basket, action.item] };

		case 'REMOVE_FROM_BASKET':
			let newBasket = [...state.basket];
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			console.log('this is index', index);
			if (index >= 0) {
				//this means item is present in id so lets remove it
				newBasket.splice(index, 1);
			} else {
				console.warn('Item is not in cart');
			}
			return { ...state, basket: newBasket };

		default:
			return state;
	}
};

export default reducer;
