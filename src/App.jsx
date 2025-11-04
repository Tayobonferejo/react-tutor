import Student from "./Student.jsx"
import { Fragment } from "react";
function App() {

  return (
    <>
        <Student name={"Spongebob"} age={30} isStudent = {true}/>
        <Student name={"timeout"} age={50} isStudent = {false}/>
        <Student age={30} />
    </>
  );
}

export default App
