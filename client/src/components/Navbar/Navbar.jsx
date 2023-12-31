import React , { useEffect }from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import decode from "jwt-decode";


import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";


const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

   
  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
    navigate("/");
    dispatch(setCurrentUser(null));
  };
  

  useEffect(() => {
    const token = User?.token;
    if (token){
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);


  return (
    <nav className="main-nav">
      <div className="navbar">
        <p>Login and Registration</p>

        {User === null?(
         <Link to ='/Auth' className='nav-item nav-links'>
          Log in
          </Link> 
        ):(
         <>
         <Avatar backgroundColor='#009dff' 
         px="10px"
          py="7px" 
          borderRadius="50%"
          color='white'
          >
            <Link to={`/Users/${User?.result?._id}`} 
            style={{color: "white",textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
         <button className="nav-item nav-links" onClick= { handleLogout }>
          Log out
          </button>
         </>

       ) }
      
      </div>
    </nav>
  );
};

export default Navbar;
