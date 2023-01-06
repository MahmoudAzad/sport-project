import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteUserData, setIsLoggedOut } from '../Redux/usefulActions';


const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        async function handleLogOut() {
            logoutDispatches();
            navigate("/login");
        }

        handleLogOut();
    }, []);

    const logoutDispatches = () => {
        try {
            dispatch(deleteUserData());
            dispatch(setIsLoggedOut());
        } catch (errors) {
            console.log('Err dispatch logout.jsx  =>', errors);
        }
    }

    return null;
};

export default Logout;