import { useContext } from "react";
import { DataContext } from "../../AppContext";

const CraftsButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK,
    })

    dispatch({
      type: ACTION.SET_COUPLES
    })
  }
  

  return (  
    <>
      <button className='btn'
              onClick={handleClick}>
              Crafts
      </button>
    </>
  );
}
 
export default CraftsButton;