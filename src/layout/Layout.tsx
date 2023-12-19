import { Outlet } from "react-router-dom";
import NavigationComponent from "../components/NavigationComponent/NavigationComponent";

export default function Layout() {
  return (
    <>
      <div className="container-movie">
        <div className="container__body">
          <NavigationComponent />
          <Outlet />
        </div>
      </div>
    </>
  );
}
