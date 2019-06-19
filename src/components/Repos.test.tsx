import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Repos from './Repos';

Enzyme.configure({ adapter: new Adapter() });

describe("Repos Component", () => {
    let wrapper: Enzyme.ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    const mockRepoClickfn = jest.fn().mockReturnValue("repo");
    const mockData = [
        { id: 1, name: "Repo Name", description: "Repo description" }
    ];

    const props = {
        onClick: jest.fn(),
    };


    beforeEach(() => {
        // pass the mock function as the login prop
        wrapper = mount(
            <Repos data={mockData} repoClick={mockRepoClickfn} />
        );
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
        // console.log(wrapper.debug());
    });

    test("Repo loop is displayed", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Repo loop does not break when no data", () => {
        const wrapperNoData = mount(<Repos data={[]} repoClick={mockRepoClickfn} />)
        expect(wrapperNoData.find("li")).toMatchSnapshot();
    });
});
