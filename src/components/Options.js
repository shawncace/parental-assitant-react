import CraftButton from "./optionButtons/CraftButton";
import EducationalButton from "./optionButtons/EducationalButton";
import FoodButton from "./optionButtons/FoodButton";
import GamesButton from "./optionButtons/GamesButton";
import OutdoorsButton from "./optionButtons/OutdoorsButton";
import SoloButton from "./optionButtons/SoloButton";

const Options = () => {
  return (  
    <div className="options-section">
      
      <div className="options-header">
        Select an Option
      </div>
      
      <div className="select-options-container">
        <div className="options-grid">
          <CraftButton />
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