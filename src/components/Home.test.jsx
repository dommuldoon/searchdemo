import { Home } from "./Home";
import React, { useState } from "react";
import { create } from "react-test-renderer";
import Enzyme, { shallow, render, mount } from 'enzyme';
import TextField from "@material-ui/core/TextField";
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe("Home Component", () => {
    let wrapper;
    // our mock login function to replace the one provided by mapDispatchToProps
    const mockRequestApiDatafn = jest.fn("repo");
    const testFunc = jest.fn("Hello");



    beforeEach(() => {
        // pass the mock function as the login prop 
        wrapper = mount(<Home
            requestApiData={mockRequestApiDatafn}
            requestTweets={mockRequestApiDatafn}
            data={mockRequestApiDatafn}
            tweetsloading={mockRequestApiDatafn}
            tweets={mockRequestApiDatafn}
            tweetsLoading={mockRequestApiDatafn}
        />);
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    })

    // it('should display text', () => {
    //     expect(wrapper.find(<h6 />)).toHaveLength(1);
    //     //  const textdiv = wrapper.find(<h6 />);
    //     // expect(wrapper.find(<h6 />).text()).toEqual('Weclome to TwitHub.<br>Please search to select a repo and view its Tweets.');
    // })


    it('should display search box', () => {
        expect(wrapper.find(TextField)).toHaveLength(1);
        // expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    })

    test("Search text is fired", () => {
        wrapper.find(TextField).simulate("change", {
            target: { value: "hello" }
        });
        expect(testFunc.mock.calls).toHaveLength(1);
        // expect(wrapper.find(TextField).props().value).toEqual("hello");
    });



    // it('should call the mock login function', () => {
    //     const tf = wrapper.find(TextField);
    //     tf.value = "repo";
    //     tf.simulate('change');
    //     // expect(changeQuery).toHaveProperty('callCount', 1);
    //     expect(mockRequestApiDatafn.mock.calls).toHaveLength(1);
    // })

});
