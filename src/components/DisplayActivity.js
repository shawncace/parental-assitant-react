import { useContext } from "react";
import { DataContext } from "../AppContext";
import ImageLoad from "./ImageLoad";

const DisplayActivity = () => {
  const {
    dispatch, 
    ACTION, 
    data,
    index
  }=useContext(DataContext)
  
  const handleNextActivityClick=()=>{
    dispatch({type: ACTION.NEXT_CLICK})
  }

  const handleGoBackClick=()=>{
    dispatch({
      type: ACTION.GO_BACK_CLICK
    })
  }

  return(
    <>
      <div className='category-title'>
        {data[index].category} Ideas
      </div>

      <button className='next-activity-btn' onClick={handleNextActivityClick}>Next Activity</button>

      <div className='specific-activity-title'>{data[index].idea}</div>

      <div className="idea-wrapper">
        <ImageLoad
          src={data[index].image}
          alt={data[index].alt}
        />
        
        <div className="description-container">
          <p className='description'>
            {data[index].description}
          </p>
        </div>

        <div className="btn-container">
          <a href={data[index].url} rel='noopener noreferrer' target='_blank'>
            <button className="take-me-there-btn">Take me there</button>
          </a>
        </div>
      </div>

      <button className='go-back-btn' onClick={handleGoBackClick}>go back</button>
    </>
  );
}
 
export default DisplayActivity;