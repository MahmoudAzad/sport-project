import AppRouter from "./AppRouter";
import "antd/dist/antd.variable.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "./assets/Styles/style.css";
import { Fragment } from "react";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Fragment>
      <Provider store={Store}>
        <ConfigProvider direction="rtl" csp={{ nonce: "YourNonceCode" }}>
          <AppRouter />
          <ToastContainer />
        </ConfigProvider>
      </Provider>
    </Fragment>
  );
};

export default App;
