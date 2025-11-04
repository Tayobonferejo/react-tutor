import UserGreeting from "./UserGreeting.jsx"
import { Fragment } from "react";
function App() {

  return (
    <Fragment>
        <UserGreeting IsLoggedIn={true} username="Brocode"/>

    </Fragment>
  );
}

export default App
