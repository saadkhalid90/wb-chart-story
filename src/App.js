import "./App.css";
import DataStoryComp from "./components/dataStoryComp";


function App() {


  return (
    <div className="App">
      <DataStoryComp maxIndex={8} svgWidth={800} svgHeight={520}/>
    </div>
  );
}

export default App;
