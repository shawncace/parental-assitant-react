const Footer = () => {
  return (  
    <footer className='footer-container'>
      
      <p>Made by 
      <a className='footer-link' href='https://shawnyboy.netlify.app/'>
        Shawn Caceres
        </a>
      </p>

      <p>
        {'Copyright © '}
        {new Date().getFullYear()}
      </p>
    
    </footer>
  );
}
 
export default Footer;