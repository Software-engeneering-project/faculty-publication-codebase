// import {render, screen } from '@testing-library/react'
import Saved_papers from "./components/auth/Savedpaper"
import Display from "./components/auth/display"
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from "react";
import { render, screen } from '@testing-library/react';
Enzyme.configure({adapter : new Adapter() });
import '@testing-library/jest-dom';
test('renders learn react link', () => {
    const wrapper = shallow(<Saved_papers />)
    // const linkElement = screen.getByText("Saved Papers")
    expect(wrapper.find('h5').text()).toContain("No Saved Papers")
})

test('renders learn label link', () => {
    const wrapper = shallow(<Display citation = {"hi welcome"} patent = {"Yes"} privat = {"yes"} myRows={[{DOI : "12345",abstract: "hi",author : "siddu",year : "2022",issuedby : "ses"}]} />)
    // const linkElement = screen.getByText("Saved Papers")
    expect(wrapper.find("#h16").text()).toBe("siddu" - "2022" - "ses" - "12345")
})
// test('') 