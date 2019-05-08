import React from "react"
import GridList from "../GridList"
import {cleanup, render} from 'react-testing-library'   //React-testing- library tests
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

afterEach(cleanup)              //React-testing- library tests

function renderGridList(args) {
    const defaultProps = {
        name : "product"
    }
    const props = {...defaultProps, ...args};    
    return render(<GridList {...props} />)               //React-testing- library tests  
}

it('header should contain categories label',()=>{
    const {getByText} =  renderGridList();
    getByText("LISTING")
});
