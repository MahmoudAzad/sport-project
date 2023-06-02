import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/Styles/style.css";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Fragment>
      <Provider store={Store}>
        <AppRouter />
        <ToastContainer />
      </Provider>
    </Fragment>
  );
};

export default App;
