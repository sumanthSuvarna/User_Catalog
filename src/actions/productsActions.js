import ProductApi from '../api/mockProductListApi';
import * as types from './actionTypes';

export function loadProductsSuccess(products) {
    return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function loadProducts() {
    
    return function (dispatch,getState) {
      return ProductApi.getAllProducts().then(products => {
        dispatch(loadProductsSuccess(products));
      }).catch(error => {
        throw(error);
      });
    };
  }