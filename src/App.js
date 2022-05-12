import NavigationRoute from "./Navigation/NavigationRoute";
import Sigin from "./SignIn";
import "./App.css";

function App() {

  //change booolean value to differ output

  const isLoggedIn = true;
  if (isLoggedIn) {
    return <NavigationRoute />;
  }
  return <Sigin />;
}
export default App;
