import "./App.css";
import DataStoryComp from "./components/dataStoryComp";


function App() {


  return (
    <div className="App">
        <DataStoryComp maxIndex={7} svgWidth={800} svgHeight={540}/>
    </div>
  );
}

export default App;
