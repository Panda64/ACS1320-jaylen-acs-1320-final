import './App.css';
import Heading from './Heading';
import MetalMeta from './MetalMeta';
import Band from './Band';
import data from './metal.json'


function App() {

  const bands = data.map(({ band_name, fans, formed, origin, split, style }, i) => {
    return (
      <Band
        id={i}
        key={band_name}
        name={band_name}
        fans={fans}
        formed={formed}
        origin={origin}
        split={split}
      />
    )
  })

  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <div className="BandsWrapper">
        <div className="Bands">
          { bands }
        </div>
      </div>
    </div>
  );
}

export default App;
