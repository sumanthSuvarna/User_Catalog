import * as productsActions from "../productsActions"
import * as types from "../actionTypes"
import {products} from "../../api/mockProductListApi"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import configureMockStore from "redux-mock-store"

// Testing async Action
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("loadProductsSuccess",() =>{
    it("Should create a LOAD_PRODUCT_SUCCESS actions",() => {
        //arrange
        const expectedAction = {
            type : types.LOAD_PRODUCTS_SUCCESS,
            products :products

        };

        //act
        const action =  productsActions.loadProductsSuccess();

        //assert
        expect(action).toEqual(expectedAction)
    })
});

