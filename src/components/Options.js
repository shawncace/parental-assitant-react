import CraftsButton from "./optionButtons/CraftsButton";
import EducationalButton from "./optionButtons/EducationalButton";
import FoodButton from "./optionButtons/FoodButton";
import GamesButton from "./optionButtons/GamesButton";
import OutdoorsButton from "./optionButtons/OutdoorsButton";
import SoloButton from "./optionButtons/SoloButton";
import DisplayActivity from "./DisplayActivity";
import Crafts from "../data/crafts.json"

const Options = () => {
  return (  
    <div className="options-section">
      
      <div className="options-header">
        Choose an Activity
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

      <button className="random-activity-btn">Random Activity</button>

    </div>
  );
}
 
export default Options;