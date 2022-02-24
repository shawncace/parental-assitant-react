import { useContext } from "react";
import { DataContext } from "../../AppContext";

const CraftsButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK,
    })

    dispatch({
      type: ACTION.SET_CRAFTS
    })
  }
  

  return (  
    <>
      <button className='options-btn'
              onClick={handleClick}>
              Crafts
      </button>
    </>
  );
}
 
export default CraftsButton;