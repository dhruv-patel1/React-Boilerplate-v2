import DashboardPage from "../../components/DashboardPage";
import {shallow} from "enzyme";
import React from "react";

test("Should render the Dashboard Page", () =>{
    const wrapper = shallow(<DashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})