import '../stylesheets/DarkMode.css'

export default function Toggle(){
  let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
} else {
    body.classList.add(lightTheme)
}

  const switchTheme=(e)=>{
    if(theme==='dark'){
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      theme='light'
    }else{
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      theme='dark'
    }
    console.log(theme)
  }
  
  return(
    <>
      <div 
      className = {theme==='dark'?clickedClass: ''}
      id='darkMode'
      onClick={switchTheme}>
    </div>
    </>
  )
}