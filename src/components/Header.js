import Toggle from "./Toggle";

const Header = () => {
  return (  
    <header>
      <div className="title">
        Kid's Activity Zone
      </div>
      <div className="subtitle">
        Make some memories!
      </div>
      <div className="toggle">
        <Toggle />
      </div>
    </header>
  );
}
 
export default Header;