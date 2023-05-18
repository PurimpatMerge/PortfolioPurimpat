import NavBar from "./components/Navigationbar";
import Header from "./components/Header";
import Credential from "./components/Credential";
function App() {
  return (
    <div className="overflow-hidden" >
    <NavBar/>
    <Header/>
    <Credential id="sectionA"/>
    </div>
  );
}

export default App;
