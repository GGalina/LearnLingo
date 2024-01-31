import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'Redux/Auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectorIsLoggedIn);
    return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};