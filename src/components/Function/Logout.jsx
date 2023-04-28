import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logOutUser } from "../../redux/Reducers/UserReducer";

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
      dispatch(logOutUser());
    } catch (errors) {
      console.log("Error : logout : dont logout  =>", errors);
    }
  };

  return null;
};

export default Logout;
