import { useState, useEffect } from "react";
import { useParams } from "react-router";
import facultyService from "../services/faculty.service";

function FacultyUpdate() {
  const [facultyDetails, setFacultyDetails] = useState([]);
  const [are_you_a_teaching_faculty, set_are_you_a_teaching_faculty] =
    useState("");
  const [areas_of_Interest_1, set_areas_of_Interest_1] = useState("");
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    facultyService
      .getById(id)
      .then((response) => {
        setFacultyDetails(response.data);
        set_areas_of_Interest_1(response.data.areas_of_Interest_1);
        // console.log(facultyDetails);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {/* <h3>Faculty details for {facultyDetails.faculty_Full_Name}</h3> */}
      <div>
        Faculty details for{" "}
        <input
          type="text"
          value={areas_of_Interest_1}
          onChange={(e) => {
            set_areas_of_Interest_1(e.target.value);
          }}
        />
      </div>

      <div className="d-flex ml-5">
        <img
          src={facultyDetails.profile_Pic_URL}
          height="100"
          width="100"
          alt="profile"
        />
        <div className="ml-5">
          <label for="exampleInputEmail1">Profile Pic URL</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.profile_Pic_URL}
          />
        </div>
      </div>
      <hr />
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.faculty_Full_Name}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Short Bio</label>
          <textarea
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.short_Bio}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.email_Address}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.phone_Number}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.are_you_a_teaching_faculty === "Yes" ? true : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Teaching Faculty?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Current Designation</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.current_designation}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Highest Qualification</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.highest_Qualification}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Date of Joining RIT</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.date_of_Joining_RIT}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            Number of Research students guided / guiding
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={
              facultyDetails.number_of_Research_Students_Guided_and_Guiding
            }
          />
        </div>
        <h4>Educational Details</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.do_you_have_educational_details_to_write === "Yes"
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Educational details to write?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Degree 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.degree_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            University from which Degree 1 was obtained?
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={
              facultyDetails.university_from_which_Degree_1_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Year of Completion of Degree 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.year_of_Completion_of_Degree_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Degree 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.degree_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            University from which Degree 2 was obtained?
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={
              facultyDetails.university_from_which_Degree_2_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Year of Completion of Degree 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.year_of_Completion_of_Degree_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Degree 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.degree_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            University from which Degree 3 was obtained?
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={
              facultyDetails.university_from_which_Degree_3_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Year of Completion of Degree 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.year_of_Completion_of_Degree_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Degree 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.degree_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            University from which Degree 4 was obtained?
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={
              facultyDetails.university_from_which_Degree_4_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Year of Completion of Degree 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.year_of_Completion_of_Degree_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Degree 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.degree_5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">
            University from which Degree 5 was obtained?
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={
              facultyDetails.university_from_which_Degree_5_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Year of Completion of Degree 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.year_of_Completion_of_Degree_5}
          />
        </div>
        <h4>Designations</h4>
        <div className="form-group">
          <label for="exampleInputEmail1">Designation 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.designation_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Designation 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Designation_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Place of Work of Designation 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.place_of_Work_of_Designation_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Designation 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.designation_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Designation 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Designation_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Place of Work of Designation 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.place_of_Work_of_Designation_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Designation 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.designation_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Designation 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Designation_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Place of Work of Designation 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.place_of_Work_of_Designation_3}
          />
        </div>
        <div className="form-group flex flex-col">
          <label for="exampleInputEmail1">Designation 4 </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.designation_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Designation 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Designation_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Place of Work of Designation 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.place_of_Work_of_Designation_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Designation 5 </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.designation_5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Designation 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Designation_5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Place of Work of Designation 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.place_of_Work_of_Designation_5}
          />
        </div>
        <h4>Projects</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.do_you_have_any_funded_projects === "Yes"
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Any funded projects?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Title of the Project 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.title_of_the_Project_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Project 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Project_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Amount for Project 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Amount_for_Project_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Agency for Project 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Agency_for_Project_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Title of the Project 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.title_of_the_Project_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Project 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Project_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Amount for Project 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Amount_for_Project_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Agency for Project 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Agency_for_Project_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Title of the Project 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.title_of_the_Project_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Project 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Project_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Amount for Project 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Amount_for_Project_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Agency for Project 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Agency_for_Project_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Title of the Project 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.title_of_the_Project_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Project 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Project_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Amount for Project 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Amount_for_Project_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Agency for Project 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Agency_for_Project_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Title of the Project 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.title_of_the_Project_5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Duration of Project 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.duration_of_Project_5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Amount for Project 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Amount_for_Project_5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Funding Agency for Project 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.funding_Agency_for_Project_5}
          />
        </div>
        <h4>Teaching Subjects</h4>
        <div className="form-group">
          <label for="exampleInputEmail1">Teaching Subject 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.teaching_Subject_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Teaching Subject 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.teaching_Subject_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Teaching Subject 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.teaching_Subject_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Teaching Subject 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.teaching_Subject_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Teaching Subject 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.teaching_Subject_5}
          />
        </div>
        <h4>Areas of Interest</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.do_you_have_any_areas_of_interest === "Yes"
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Any areas of interest?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Areas of Interest 1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.areas_of_Interest_1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Areas of Interest 2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.areas_of_Interest_2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Areas of Interest 3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.areas_of_Interest_3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Areas of Interest 4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.areas_of_Interest_4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Areas of Interest 5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.areas_of_Interest_5}
          />
        </div>
        <h4>Books and Patents</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.do_you_have_books_and_patents === "Yes"
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Any areas of interest?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #6</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp6}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #7</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp7}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #8</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp8}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #9</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp9}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Book / Patent #10</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.bp10}
          />
        </div>
        <h4>Honors and Awards</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.do_you_have_honors_awards_and_achievements ===
              "Yes"
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Any Honors and Awards?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #6</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha6}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #7</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha7}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #8</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha8}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #9</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha9}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Honors / Awards #10</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ha10}
          />
        </div>
        <h4>Research Publications</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.do_you_have_research_publications === "Yes"
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Any Research Publications?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #6</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp6}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #7</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp7}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #8</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp8}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #9</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp9}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Research Publication #10</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.rp10}
          />
        </div>
        <h4>Workshops & Guest Lectures</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.have_you_attended_any_workshops_or_delivered_guest_lectures ===
              "Yes"
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Any Workshops attended or delivered Guest Lectures?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #6</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg6}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #7</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg7}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #8</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg8}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #9</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg9}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Workshop / Guest Lecture #10</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.wg10}
          />
        </div>{" "}
        <h4>Membership of Professional Societies</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={
              facultyDetails.do_you_have_any_membership_of_professional_societies
                ? true
                : false
            }
          />
          <label className="form-check-label" for="exampleCheck1">
            Any Membership of Professional Societies?
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #1</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps1}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #2</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps2}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #3</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps3}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #4</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps4}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #5</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps5}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #6</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps6}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #7</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps7}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #8</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps8}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #9</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps9}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Professional Society #10</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={facultyDetails.ps10}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FacultyUpdate;
