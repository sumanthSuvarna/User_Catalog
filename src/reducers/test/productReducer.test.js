import productReducer from "../productReducer"
import products from '../../api/mockProductListApi';
import * as actions from "../../actions/productsActions"
import { exportAllDeclaration } from "@babel/types";


it("Load products when LOAD_PRODUCT_SUCCESS is passed", () =>{
    //arrange
    const initialState = [
        {
            products : []
        }
    ]
    const action =  actions.loadProducts();
    const newState= productReducer(initialState,action);
    //assert
    expect(newState.length).toEqual(1)
}) 

it('returns the initial state when an action type is not passed', () => {

    const initialState = [{ products : []  } ]
    const action =  actions.loadProducts();
    const newState= productReducer(initialState,action);
    expect(newState).toEqual(initialState);
});
