import { useContext } from "react";
import { DataContext } from "../AppContext";

const DisplayActivity = () => {
  const {dispatch, ACTION, activityName}=useContext(DataContext)
  
  const handleGoBackClick=()=>{
    dispatch({
      type: ACTION.GO_BACK_CLICK
    })
  }

  return (
    <>
      <div>
        Activity Name Ideas
      </div>

      <div>{activityName}</div>

      <button onClick={handleGoBackClick}>go back</button>
    </>
    );
}
 
export default DisplayActivity;