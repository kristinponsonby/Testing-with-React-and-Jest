import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// The describe keyword is used to start a test in JS and React
// All individual tests are written inside the body
// First thing we want to test is how the component is handling it's props
// In this case the initialCount
// We added data-testid of "count" to the h3 tag in counter.js line 23
// However we shoud really onlu use this method when there's no other way to get that value
describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Increment"});
    //fireEvent will simulate a click on that button
    fireEvent.click(incrementBttn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
  it("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBttn = getByRole("button", { name: "Decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });
  it("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBttn = getByRole("button", { name: "Restart" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  it("count should invert signs if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBttn = getByRole("button", { name: "Switch Signs" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-50);
  });
});
