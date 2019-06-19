import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tweets from './Tweets';

Enzyme.configure({ adapter: new Adapter() });

describe("Tweets Component", () => {
    let wrapper: Enzyme.ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    const mockRepoClickfn = jest.fn("repo");
    const mockData = [
        { id: 1, text: "A tweet" }
    ];
    const mockRepo = "repo";

    beforeEach(() => {
        // pass the mock function as the login prop
        wrapper = mount(
            <Tweets tweets={mockData} tweetsLoading={false} repo={mockRepo} />,
        );
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
        // console.log(wrapper.debug());
    });

    test("Repo loop is displayed", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Tweets loop does not break when no data", () => {
        const wrapperNoData = mount(<Tweets tweets={[]} tweetsLoading={false} repo={mockRepo} />)
        expect(wrapper.find("li")).toMatchSnapshot();
    });

    test("Tweets loop shows loading text whilst loading", () => {
        const wrapperLoading = shallow(<Tweets tweets={[]} tweetsLoading={true} repo={mockRepo} />)
        // expect(wrapperLoading.find(".loadingText")).toBe(true);
        expect(wrapperLoading.find(".loadingText")).toMatchSnapshot();
    });

});