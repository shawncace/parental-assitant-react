import {useState} from 'react'

const CraftsButton = () => {
  const[btnClicked, SetBtnClicked]=useState(false)

  const displayActivity=()=>{
    SetBtnClicked(true)    
  }

  return (  
    <>
      <button className='btn'
              onClick={displayActivity}>
              Crafts
      </button>
    </>
  );
}
 
export default CraftsButton;