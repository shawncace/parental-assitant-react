import {DataProvider} from "./AppContext";
import './stylesheets/App.css'
import './stylesheets/Responsive.css'

import Header from "./components/Header";
import Options from "./components/Options"
import Footer from "./components/Footer"

function App() {
  return (
    <DataProvider>
      <Header />
      <Options />
      <Footer />
    </DataProvider>
    
  );
}

export default App;
