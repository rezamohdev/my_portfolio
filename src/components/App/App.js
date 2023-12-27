import logo from '../../logo.svg';
import './App.css';
import Button from '../Button/Button';
import SlideButton from '../SlideButton/SlideButton';
import { GalleryCard } from '../GalleryCard/GalleryCard';
import Header from '../Header/Header';
import Cover from '../Cover/Cover';
import Skills from '../Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Skills />
    </div>
  );
}

export default App;
