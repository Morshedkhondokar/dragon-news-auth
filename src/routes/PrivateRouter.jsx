import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../pages/Loading";


const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
};


PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRouter;