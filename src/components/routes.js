import { LOGIN_ROUTE, CHAT_ROUTE } from "../utils/const";
import Login from "./Login";
import Chat from "./Chat";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
