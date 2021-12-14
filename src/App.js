import "./App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import facultyService from "./services/faculty.service";

function App() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = (id) => {
    facultyService
      .deleteById(id)
      .then((response) => {
        window.alert("Record deleted successfully");
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const fetchData = () => {
    facultyService
      .getAll()
      .then((response) => {
        // console.log(response.data);
        setFaculty(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      {/* <h1 className="text-center">List of Faculty</h1> */}
      {/* <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>{" "}
      </nav>
      <Outlet /> */}
      <div style={{ textAlign: "right" }}>
        <h1 className="text-center">List of Faculty</h1>
        <Link to="/addfaculty" className="btn btn-primary">
          {" "}
          Add Faculty
        </Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Full Name</th>
            <th scope="col">Current Designation</th>
            <th scope="col">Date of Joining RIT</th>
            <th scope="col">Email Address</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((fac) => (
            <tr key={fac.id}>
              <th scope="row">{fac.id}</th>
              <td>
                <img
                  src={fac.profile_Pic_URL}
                  height="70"
                  width="70"
                  alt="profile"
                />
              </td>
              <td>{fac.faculty_Full_Name}</td>
              <td>{fac.current_designation}</td>
              <td>{fac.date_of_Joining_RIT}</td>
              <td>{fac.email_Address}</td>
              <td>
                <Link className="btn btn-primary" to={`/facupdate/${fac.id}`}>
                  Update
                </Link>
                {/* <button className="btn-primary"></button> */}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure to delete ${fac.faculty_Full_Name} ?`
                      )
                    ) {
                      deleteHandler(fac.id);
                    }
                  }}
                >
                  Delete
                </button>
                {/* <button className="btn-primary"></button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
