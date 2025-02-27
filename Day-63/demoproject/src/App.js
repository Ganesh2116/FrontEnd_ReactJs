import logo from './logo.svg';
import './App.css';
import { User } from './User';

function App() {

  function Inner()
  {
    return <h1>this is inner component...</h1>;
  }

  return (
    <div className="App">
      <User/>
      <Inner/>
    </div>
  );
}

export default App;
