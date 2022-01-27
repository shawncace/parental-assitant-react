import { useContext } from "react";
import { DataContext } from "../AppContext";

const DisplayActivity = () => {
  const {
    dispatch, 
    ACTION, 
    activityName, 
    activityIdea,
    image,
    alt,
    description,
    url
  }=useContext(DataContext)
  
  const handleGoBackClick=()=>{
    dispatch({
      type: ACTION.GO_BACK_CLICK
    })
  }

  

  return (
    <>
      <div>
        {activityName} Ideas
      </div>

      <button>Next Activity</button>

      <div>{activityIdea}</div>

      <div className="idea-wrapper">
        <img src={image} 
             alt={alt} 
             className='image'
        />

        <div className="description-container">
          <p className='description'>
            {description}
          </p>
        </div>

        <div className="btn-container">
          <a href={url}>
            <button>Take me there</button>
          </a>
          
        </div>
        
        
      </div>

      <button 
        className='go-back-btn'
        onClick={handleGoBackClick}>go back</button>
    </>
    );
}
 
export default DisplayActivity;