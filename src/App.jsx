import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./firebase-messaging-sw";
import { useEffect } from "react";
import { getMessaging, onMessage } from "firebase/messaging";

function App() {
  useEffect(() => {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log("Message received. useEffect", payload);
      const options = {
        body: payload.notification.body,
        icon: payload.notification.image,
        vibrate: [200, 100, 200],
      };
      const notification = new Notification(
        payload.notification.title,
        options
      );
      notification.onclick = (event) => {
        event.preventDefault();
        window.open("https://xvideos.com", "_blank");
      };
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Routes>
      <Routes path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
