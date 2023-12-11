import logo from '../../logo.svg';
import './App.css';
import Button from '../Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button lightButton={true}>Hello</Button>
        <Button >Eol</Button>
      </header>
    </div>
  );
}

export default App;
