import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddFaculty from "./routes/addfaculty";
import FacultyUpdate from "./routes/facultyupdate";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/facupdate" element={<FacultyUpdate />}>
        <Route path=":id" element={<FacultyUpdate />} />
      </Route>
      <Route path="addfaculty" element={<AddFaculty />} />
      {/* <Route path="invoices" element={} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);
