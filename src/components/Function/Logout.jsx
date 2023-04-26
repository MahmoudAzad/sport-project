import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteUserData, SetIsLoggedOut } from "../../redux/Actions";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleLogOut() {
      logoutDispatches();
      navigate("/my-account");
    }

    handleLogOut();
  }, []);

  const logoutDispatches = () => {
    try {
      dispatch(DeleteUserData());
      dispatch(SetIsLoggedOut());
    } catch (errors) {
      console.log("Err dispatch logout.jsx  =>", errors);
    }
  };

  return null;
};

export default Logout;
