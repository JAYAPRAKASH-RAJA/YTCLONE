import { render } from "preact";
import { App } from './app.tsx';
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/Index";
import { WindowWidthProvider } from "./Pages/WindowWidthProvider.tsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const clientId = '1063278230644-l8r621g3ln6hb7mq5uctoiauhhn41np6.apps.googleusercontent.com';
render(
  <Provider store={store}>
    <WindowWidthProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </WindowWidthProvider>
  </Provider>,
  document.getElementById("root")!
);
