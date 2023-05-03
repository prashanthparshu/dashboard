import "./App.css";
import Navbar from "./components/Navbar";
import Source from "./components/Source";
import Subscribers from "./components/Subscribers";
import MainSinglePage from "./Page/MainSinglePage";

function App() {
  return (
    <div>
      <Navbar />
      <MainSinglePage />
      <div style={{ display: "flex" }}>
        <Subscribers />
        <Source />
      </div>
    </div>
  );
}

export default App;
