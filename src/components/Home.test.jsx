import { Home, conHome } from "./Home";
import React, { useState } from "react";
import { create } from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import TextField from "@material-ui/core/TextField";
import Adapter from "enzyme-adapter-react-16";
import Typography from "@material-ui/core/Typography";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("Home Component", () => {
    let wrapper;
    // our mock login function to replace the one provided by mapDispatchToProps
    const mockRequestApiDatafn = jest.fn("repo");
    const mockrequestTweetsfn = jest.fn("repo");
    const mockData = [
        { id: 1, name: "Repo Name", description: "Repo description" }
    ];
    const mockTweets = [{ id: 1, text: "A tweet" }];

    beforeEach(() => {
        // pass the mock function as the login prop
        wrapper = mount(
            <Home
                requestApiData={mockRequestApiDatafn}
                requestTweets={mockrequestTweetsfn}
                data={mockData}
                dataLoading={true}
                tweets={mockTweets}
                tweetsLoading={true}
            />
        );
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
        // console.log(wrapper.debug());
    });

    it("should display text", () => {
        expect(
            wrapper
                .find(Typography)
                .first()
                .text()
        ).toEqual(
            "Welcome to TwitHub.Please search to select a repo and view its Tweets."
        );
    });

    it("should display search box", () => {
        expect(wrapper.find(TextField)).toBeDefined();
    });

    it("should call onChange prop with value", () => {
        const changeQueryMock = jest.fn();
        const event = {
            target: { value: "the-value" }
        };
        const component = shallow(
            <TextField
                placeholder="Type something here to search"
                type="text"
                value={event.target.value}
                onChange={changeQueryMock}
                id="searchbox"
            />
        );
        component.simulate("change", event.target.value);

        expect(changeQueryMock).toBeCalledWith("the-value");
    });
});
