import { Routes, Route, Navigate } from "react-router-dom";
import MainChat from "./pages/main";
import Login from "./pages/login";
import Register from "./pages/register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <ChatContextProvider user={user}>
      <Routes>
        <Route path="/" element={user ? <MainChat /> : <Login />} />
        <Route path="/register" element={user ? <MainChat /> : <Register />} />
        <Route path="/login" element={user ? <MainChat /> : <Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ChatContextProvider>
  );
}
