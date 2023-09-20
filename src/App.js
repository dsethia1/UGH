import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StartPageImage from "./components/StartPageImage";
import HomeScreen from "./pages/HomeScreen";
import FailedVerification from "./pages/FailedVerification";
import ShiftToUser from "./pages/ShiftToUser";
import UserReadyToVerify from "./pages/UserReadyToVerify";
import SuccesfulVerification from "./pages/SuccesfulVerification";
import UserVerification from "./pages/UserVerification";
import ReadyToVerify from "./pages/ReadyToVerify";
import ReachedRider from "./pages/ReachedRider";
import FindRider from "./pages/FindRider";
import DetectionComplete from "./pages/DetectionComplete";
import DriverPlateSetUp from "./pages/DriverPlateSetUp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/failed-verification":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-18":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-17":
        title = "";
        metaDescription = "";
        break;
      case "/succesful-verification":
        title = "";
        metaDescription = "";
        break;
      case "/user-verification":
        title = "";
        metaDescription = "";
        break;
      case "/ready-to-verify":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-10":
        title = "";
        metaDescription = "";
        break;
      case "/find-rider":
        title = "";
        metaDescription = "";
        break;
      case "/detection-complete":
        title = "";
        metaDescription = "";
        break;
      case "/driver-plate-setup":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/failed-verification" element={<FailedVerification />} />
      <Route path="/iphone-14-18" element={<ShiftToUser />} />
      <Route path="/iphone-14-17" element={<UserReadyToVerify />} />
      <Route path="/succesful-verification" element={<SuccesfulVerification />}/>
      <Route path="/user-verification" element={<UserVerification />} />
      <Route path="/ready-to-verify" element={<ReadyToVerify />} />
      <Route path="/iphone-14-10" element={<ReachedRider />} />
      <Route path="/find-rider" element={<FindRider />} />
      <Route path="/detection-complete" element={<DetectionComplete />} />
      <Route path="/driver-plate-setup" element={<DriverPlateSetUp />} />
    </Routes>
  );
}
export default App;
