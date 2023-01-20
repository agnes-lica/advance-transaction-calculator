import { Routes, Route } from "react-router-dom";
import Calculator from "../pages/calculator";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="*" element={<Calculator />} />
    </Routes>
  );
};

export default RoutesApplication;
