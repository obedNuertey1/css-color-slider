import './App.css';
import Color from './components/namespaces/Color';

// An containing the shadow and background gradient of each color slide
const colorsExclusivePerSlide:Color.Icolor<String>[] = [
  {shadow: "shadow-red-800", backgroundGradient: "bg-gradient-to-b from-red-800 via-red-600 to-red-800"},
  {shadow: "shadow-green-800", backgroundGradient: "bg-gradient-to-b from-green-800 via-green-600 to-green-800"},
  {shadow: "shadow-blue-800", backgroundGradient: "bg-gradient-to-b from-blue-800 via-blue-600 to-blue-800"}
];

const colorSlides = new Color.ColorSlides<Color.Icolor<String>>(colorsExclusivePerSlide); // Create an instance of the ColorSlides Object
const displaySlides = colorSlides.getColorSlides(); // Get the method to display the slides

const App = ():JSX.Element => {
  return (
    <>
      <div className="container pt-2.5 pb-2.5 pl-0 pr-0">
        <h1 className="text-center font-bold font-impact">Color Markers</h1>
        {displaySlides}
      </div>
    </>
  );
};

export default App;
