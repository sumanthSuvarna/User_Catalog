import ProductApi from '../api/similarProducts';
import * as types from './actionTypes';

export function loadSimilarProductsSuccess(similarProducts) {
    return {type: types.LOAD_SIMILAR_PRODUCTS_SUCCESS, similarProducts};
}

export function loadProducts(id) {
    return function (dispatch,getState) {    
      return ProductApi.getSimilarProducts(id).then(similarProducts => {
        dispatch(loadSimilarProductsSuccess(similarProducts));
      }).catch(error => {
        throw(error);
      });
    };
  }