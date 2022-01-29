import { useContext } from "react";
import { DataContext } from "../AppContext";

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


  

  return (
    <>
      <div>
        {data[index].category} Ideas
      </div>

      <button onClick={handleNextActivityClick}>Next Activity</button>

      <div>{data[index].idea}</div>

      <div className="idea-wrapper">
        <img src={data[index].image} 
             alt={data[index].alt} 
             className='image'
        />

        <div className="description-container">
          <p className='description'>
            {data[index].description}
          </p>
        </div>

        <div className="btn-container">
          <a href={data[index].url} rel='noopener noreferrer' target='_blank'>
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