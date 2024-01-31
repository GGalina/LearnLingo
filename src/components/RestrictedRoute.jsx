import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from 'Redux/Auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectorIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};