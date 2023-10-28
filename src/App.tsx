import AuthLayout from "./_auth/AuthLayout";
import SignIn from "./_auth/forms/SignIn";
import SignUp from "./_auth/forms/SignUp";
import { Home } from "./_root/pages";
import "./css/global.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
