import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import InputPage from "../pages/InputPage/InputPage";
import MainPage from "../pages/MainPage/MainPage";
import RecoveryPage from "../pages/RecoveryPage/RecoveryPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import SendMeassagePage from "../pages/SendMeassagePage/SendMeassagePage";

function App() {
  const authorization = [
    { path: "entrance", element: <InputPage /> },
    { path: "recovery", element: <RecoveryPage /> },
    { path: "registration", element: <RegistrationPage /> },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          {authorization.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
          <Route path="send-message" element={<SendMeassagePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
