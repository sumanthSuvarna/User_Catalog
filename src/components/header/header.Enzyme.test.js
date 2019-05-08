import React from "react"
import Header from "./Header.js"
import { shallow } from "enzyme"    //Shallow Testing with Enzyme
//import {cleanup, render} from 'react-testing-library'   //React-testing- library tests
//import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";
import {configure} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import 'jest-enzyme';
configure({adapter :new Adapter()});


//afterEach(cleanup)              //React-testing- library tests

function renderHeader(args) {
    const defaultProps = {
        isOpen : false
    }
    const props = {...defaultProps, ...args};    
    //return render(<Header {...props} />)               //React-testing- library tests
    return shallow(<Header {...props} />);              //Shallow Testing with Enzyme
}
const wrapper = renderHeader();
//console.log(wrapper.debug());

it('renders header Logo', () =>{
    expect(wrapper.find("b").text()).toEqual("easy.my")

})
it('Contains four Nav Items', () =>{
    expect(wrapper.find("NavItem").length).toBe(4)
})

it('The header should be a floating element on top of the screen', () =>{
    expect(wrapper.find('Navbar').prop('fixed')).toEqual("top");
})

//React-testing- library tests
//it('header should contain categories label',()=>{
//    const {getByText} =  renderHeader();
//    getByText("Categories")
//})
