import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ConfigProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

const glpi = {
  url: "http://glpi.iz-spb.keenetic.pro",
  secrets: {
    appToken: process.env.app_token,
    userToken: process.env.user_token,
  },
};

root.render(
  <StrictMode>
    <ConfigProvider>
      <AppRoot>
        <Div>Header</Div>
        <App />
      </AppRoot>
    </ConfigProvider>
  </StrictMode>
);
