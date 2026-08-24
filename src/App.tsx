import { Navigate, Route, Routes } from "react-router-dom";
import { StoreProvider } from "./state/store";
import { Landing } from "./pages/Landing";
import { AppShell } from "./pages/AppShell";
import { Inbox } from "./pages/Inbox";
import { Cases } from "./pages/Cases";
import { Reenrollment } from "./pages/Reenrollment";
import { Resources } from "./pages/Resources";
import { Settings } from "./pages/Settings";

export function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<AppShell />}>
          <Route index element={<Inbox />} />
          <Route path="cases" element={<Cases />} />
          <Route path="reenrollment" element={<Reenrollment />} />
          <Route path="resources" element={<Resources />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </StoreProvider>
  );
}
