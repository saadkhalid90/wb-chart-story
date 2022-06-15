import "./App.css";
import DataStoryComp from "./components/dataStoryComp";


function App() {


  return (
    <div className="App">
      <DataStoryComp maxIndex={4} svgWidth={800} svgHeight={460}/>
    </div>
  );
}

export default App;
