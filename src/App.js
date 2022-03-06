import {DataProvider} from "./AppContext";
import './stylesheets/App.css'
import './stylesheets/DarkMode.css'
import Header from "./components/Header";
import Options from "./components/Options"
import Footer from "./components/Footer"

function App() {
  return (
    <DataProvider>
      <div className="App">
        yo
        <Header />
        <Options />
        <Footer />
      </div>
    </DataProvider>
    
  );
}

export default App;
