import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FacultyUpdate from "./routes/facultyupdate";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/facupdate" element={<FacultyUpdate />} >
          <Route path=":id" element={<FacultyUpdate />} />
        </Route>
        {/* <Route path="invoices" element={} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);
