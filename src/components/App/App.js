import logo from '../../logo.svg';
import './App.css';
import Button from '../Button/Button';
import SlideButton from '../SlideButton/SlideButton';
import { GalleryCard } from '../GalleryCard/GalleryCard';
import Header from '../Header/Header';
import Cover from '../Cover/Cover';
import Skills from '../Skills/Skills';
import CardSlider from '../CardSlider/CardSlider';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';

function App() {
  const sliderClick = (slider) => {
    alert("hello world");
  }
  const slides = [
    { image: "https://picsum.photos/200/300", title: "This is a title", description: "This is a description", clickEvent: sliderClick },
    { image: "https://picsum.photos/600/500", title: "This is a second title", description: "This is a second description", clickEvent: sliderClick },
    { image: "https://picsum.photos/700/600", title: "This is a third title", description: "This is a third description", clickEvent: sliderClick },
    { image: "https://picsum.photos/500/400", title: "This is a fourth title", description: "This is a fourth description", clickEvent: sliderClick },
    { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick },
    { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description", clickEvent: sliderClick },
    { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description", clickEvent: sliderClick },
  ]
  return (
    <div className="App">
      <Header />
      <Cover />
      <Skills />
      {/* <CardSlider slides={slides} /> */}
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
