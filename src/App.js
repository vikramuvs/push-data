import "./App.css";
// import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import facultyService from "./services/faculty.service";

function App() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    facultyService
      .getAll()
      .then((response) => {
        console.log(response.data);
        setFaculty(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">List of Biotechnology Faculty</h1>
      {/* <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>{" "}
      </nav>
      <Outlet /> */}
      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Full Name</th>
            <th scope="col">Current Designation</th>
            <th scope="col">Date of Joining RIT</th>
            <th scope="col">Email Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((fac) => (
            <tr>
              <th scope="row">{fac.id}</th>
              <td>
                <img src={fac.profile_Pic_URL} height="70" width="70" />
              </td>
              <td>{fac.faculty_Full_Name}</td>
              <td>{fac.current_designation}</td>
              <td>{fac.date_of_Joining_RIT}</td>
              <td>{fac.email_Address}</td>
              <td><button className="btn-primary" onClick={}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
