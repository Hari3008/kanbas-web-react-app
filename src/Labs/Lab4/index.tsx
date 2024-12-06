import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <PassingDataOnEvent/>
      <StringStateVariables />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <DateStateVariable/>
      <ParentStateComponent />
      <ReduxExamples />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
