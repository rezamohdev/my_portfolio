import logo from '../../logo.svg';
import './App.css';
import Button from '../Button/Button';
import SlideButton from '../SlideButton/SlideButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button lightButton={true}>	&#8592;	</Button>
        <Button lightButton={true}>	&#8594;</Button>
        <SlideButton />
        <SlideButton active={false} right={false} />
        <Button >Eol</Button>
      </header>
    </div>
  );
}

export default App;
