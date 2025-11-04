import Student from "./Student.jsx"
import { Fragment } from "react";
function App() {

  return (
    <Fragment>
        <Student name={"Spongebob"} age="80"
        isStudent = {true}/>
        <Student name={"timeout"} age={50} isStudent = {false}/>
        <Student age={30} />
        <Student></Student>
        <Student name={1234} age="40" isStudent="true" />

    </Fragment>
  );
}

export default App
