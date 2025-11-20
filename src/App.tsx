import "./App.css";
import Mainview from "./components/MainView/MainView";
import SideView from "./components/Sideview/SideView";

function App() {


  return (
    <div className="fullscreen">
      <Mainview/>
      <SideView/>
    </div>
  );
}

export default App;
