import "./App.css";
import Image from "./components/image";
import slides from "./data/imagedata.json";

function App() {
  return (
    <div className="App">
      <h1>Image Slider</h1>
      <br></br>
      <Image data={slides.slides} />
    </div>
  );
}

export default App;
