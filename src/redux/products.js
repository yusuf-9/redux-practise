const products = [
   "Product 1",
   "Product 2",
   "Product 3",
   "Product 4",
   "Product 5",
   "Product 6",
   "Product 7",
  ];
  
  const initialState = {
    products: []
  };
  
  const productreducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS":
        return {...state, products: [...products]};
      default:
        return state;
    }
  };
  
  export default productreducer
  
export const getProducts = state => state.productreducer.products;
