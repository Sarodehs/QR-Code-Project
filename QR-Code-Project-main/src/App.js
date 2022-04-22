import './App.css';
import Signin  from './components/signin';
import Ip from './components/ip';

function App() {
  // change true and false for different results
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Ip />;
  }
  return <Signin />;
}

export default App;
