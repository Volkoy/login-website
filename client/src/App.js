import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Profile } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuth } from "./hooks/useAuth";
import { ProtectRoutes } from "./components/ProtectedRoute";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
