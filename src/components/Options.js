import { useContext } from "react";
import { DataContext } from "../AppContext";

import CraftsButton from "./optionButtons/CraftsButton";
import EducationalButton from "./optionButtons/EducationalButton";
import FoodButton from "./optionButtons/FoodButton";
import GamesButton from "./optionButtons/GamesButton";
import OutdoorsButton from "./optionButtons/OutdoorsButton";
import SoloButton from "./optionButtons/SoloButton";
import DisplayActivity from "./DisplayActivity";



const Options = () => {
  const {clicked}=useContext(DataContext)

  return (  
    <div className="options-section">
      {
        clicked ?
        <DisplayActivity />
        :
        <>
          <div className="options-header">
            Choose a Category
          </div>
          
          
          
          <div className="select-options-container">
            <div className="options-grid">
              <CraftsButton />
              <EducationalButton />
              <FoodButton />
              <GamesButton />
              <OutdoorsButton />
              <SoloButton />
            </div>
          </div>

          <button className="action-btn">Random Activity</button>
          </>
      }
    </div>
      
      
      
  );
}
 
export default Options;