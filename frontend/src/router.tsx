import { Route, createBrowserRouter, createRoutesFromElements, redirect } from "react-router-dom";
import HomeView from "./View/HomeView";
import LoginView from "./View/LoginView";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/login" element={<LoginView />} />
    <Route path="/" element={<HomeView />} loader={async () => {
      const token = window.sessionStorage.getItem("token");
      if (!token) return redirect("/login");
      return null;
    }} />
  </>
))

export { router };
