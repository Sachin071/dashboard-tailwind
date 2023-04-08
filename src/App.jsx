import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<div>This is login page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
