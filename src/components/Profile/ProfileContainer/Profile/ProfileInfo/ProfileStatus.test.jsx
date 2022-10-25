import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatusComponent", () => {

    test("Status on props should be in the state ", () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("TestStatus");
    });

    test("After creation span with status should be displayed",() => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("After creation input with status shouldn't be displayed",() => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;

        expect(()=>{
            let input = root.findByType("input")    //find input, but it's not here
        }).toThrow();       //Wait error, if we get error - test is ok
    });

    test("After creation span witn status should contains correct status", () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("TestStatus");
    });

    test("Input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        let span = root.findByType("span")                      //Find span
        span.props.onDoubleClick();                             //Software double click on span
        let input = root.findByType("input")                    //Find input
        expect(input.props.value).toBe("TestStatus");   //in input there is "TestStatus"
    });

    test("After creation input span should be disappear",() => {
        const component = create(<ProfileStatus status="TestStatus" />);
        const root = component.root;
        let span = root.findByType("span")                      //Find span
        span.props.onDoubleClick();                             //Software double click on span
        let input = root.findByType("input")
        expect(()=>{
            let span = root.findByType("span")                //find span, but it's not here
        }).toThrow();                                   //Wait error, if we get error - test is ok
    });

    test("callback should be called",() => {   //тест вызова колбека
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="TestStatus" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
