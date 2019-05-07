import { combineReducers } from 'redux';
import products from './productReducer';
import similarProducts from './productDetailReducer';

const rootReducer = combineReducers({
    products,      similarProducts,
  });
  
  export default rootReducer;