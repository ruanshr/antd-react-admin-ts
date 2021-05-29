import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { Provider } from "react-redux";
import store from "./store";

const AppView = (
  <Suspense fallback={<div>Loading</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);

ReactDOM.render(AppView, document.getElementById("root"));
