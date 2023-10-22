import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1 >To Do List</h1>
        <div className="links">
          <Link to="/" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>Home</Link>
          <Link to="/AllNotes" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>All Notes</Link>
            <Link to="/AllGoals" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
        
          }}>All Goals</Link>
       </div>
      </nav>
     );
}
 
export default Navbar;