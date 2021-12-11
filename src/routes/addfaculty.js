import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import facultyService from "../services/faculty.service";

function AddFaculty() {
  const ppref = useRef(null);
  const fnref = useRef(null);
  const sbref = useRef(null);
  const emref = useRef(null);
  const phref = useRef(null);
  const tfchkref = useRef(null);
  const cdref = useRef(null);
  const hqref = useRef(null);
  const djref = useRef(null);
  const nrggref = useRef(null);
  const edchkref = useRef(null);
  const dg1ref = useRef(null);
  const dg1uniref = useRef(null);
  const dg1yocref = useRef(null);
  const dg2ref = useRef(null);
  const dg2uniref = useRef(null);
  const dg2yocref = useRef(null);
  const dg3ref = useRef(null);
  const dg3uniref = useRef(null);
  const dg3yocref = useRef(null);
  const dg4ref = useRef(null);
  const dg4uniref = useRef(null);
  const dg4yocref = useRef(null);
  const dg5ref = useRef(null);
  const dg5uniref = useRef(null);
  const dg5yocref = useRef(null);
  const desig1ref = useRef(null);
  const desig1duraref = useRef(null);
  const desig1powref = useRef(null);
  const desig2ref = useRef(null);
  const desig2duraref = useRef(null);
  const desig2powref = useRef(null);
  const desig3ref = useRef(null);
  const desig3duraref = useRef(null);
  const desig3powref = useRef(null);
  const desig4ref = useRef(null);
  const desig4duraref = useRef(null);
  const desig4powref = useRef(null);
  const desig5ref = useRef(null);
  const desig5duraref = useRef(null);
  const desig5powref = useRef(null);
  const proj1titref = useRef(null);
  const proj1duraref = useRef(null);
  const projref = useRef(null);
  const proj1amtref = useRef(null);
  const proj1ageref = useRef(null);
  const proj2titref = useRef(null);
  const proj2duraref = useRef(null);
  const proj2amtref = useRef(null);
  const proj2ageref = useRef(null);
  const proj3titref = useRef(null);
  const proj3duraref = useRef(null);
  const proj3amtref = useRef(null);
  const proj3ageref = useRef(null);
  const proj4titref = useRef(null);
  const proj4duraref = useRef(null);
  const proj4amtref = useRef(null);
  const proj4ageref = useRef(null);
  const proj5titref = useRef(null);
  const proj5duraref = useRef(null);
  const proj5amtref = useRef(null);
  const proj5ageref = useRef(null);
  const ts1 = useRef(null);
  const ts2 = useRef(null);
  const ts3 = useRef(null);
  const ts4 = useRef(null);
  const ts5 = useRef(null);
  const aoi = useRef(null);
  const aoi1 = useRef(null);
  const aoi2 = useRef(null);
  const aoi3 = useRef(null);
  const aoi4 = useRef(null);
  const aoi5 = useRef(null);
  const bp = useRef(null);
  const bp1 = useRef(null);
  const bp2 = useRef(null);
  const bp3 = useRef(null);
  const bp4 = useRef(null);
  const bp5 = useRef(null);
  const bp6 = useRef(null);
  const bp7 = useRef(null);
  const bp8 = useRef(null);
  const bp9 = useRef(null);
  const bp10 = useRef(null);

  // const [facultyDetails, setFacultyDetails] = useState([ = useRef(null);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);
  // const [facultyDetails, setFacultyDetails] = useState([]);

  const { id } = useParams();

  // useEffect(() => {
  //   facultyService
  //     .getById(id)
  //     .then((response) => {
  //       setFacultyDetails(response.data);
  //       set_areas_of_Interest_1(response.data.areas_of_Interest_1);
  //       // console.log(facultyDetails);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="container">
      {/* <h3>Faculty details for {facultyDetails.faculty_Full_Name}</h3> */}
      <div>Add Faculty details</div>

      <div class="form-group">
        <label for="pp">Profile Pic URL</label>
        <input
          type="text"
          className="form-control"
          id="pp"
          aria-describedby="pp"
          placeholder="Profile Pic URL"
          ref={ppref}
        />
      </div>

      <hr />
      <form>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            aria-describedby="fullName"
            placeholder="Faculty Full Name"
            ref={fnref}
          />
        </div>

        <div className="form-group">
          <label for="shortBio">Short Bio</label>
          <textarea
            type="text"
            className="form-control"
            id="shortBio"
            aria-describedby="shortBio"
            placeholder="Short Bio"
            ref={sbref}
          />
        </div>

        <div className="form-group">
          <label for="email-add">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-add"
            aria-describedby="email-add"
            placeholder="Email Address"
            ref={emref}
          />
        </div>

        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            aria-describedby="phone"
            placeholder="Phone Number"
            ref={phref}
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="teachingFaculty"
            ref={tfchkref}
          />
          <label className="form-check-label" for="teachingFaculty">
            Teaching Faculty?
          </label>
        </div>

        <div className="form-group">
          <label for="currentDesignation">Current Designation</label>
          <input
            type="text"
            className="form-control"
            id="currentDesignation"
            aria-describedby="currentDesignation"
            placeholder="Current Designation"
            ref={cdref}
          />
        </div>

        <div className="form-group">
          <label for="highestQualification">Highest Qualification</label>
          <input
            type="text"
            className="form-control"
            id="highestQualification"
            aria-describedby="highestQualification"
            placeholder="Highest Qualification"
            ref={hqref}
          />
        </div>

        <div className="form-group">
          <label for="joiningDate">Date of Joining RIT</label>
          <input
            type="text"
            className="form-control"
            id="joiningDate"
            aria-describedby="joiningDate"
            placeholder="Date of Joining RIT"
            ref={djref}
          />
        </div>

        <div className="form-group">
          <label for="rsg">Number of Research students guided / guiding</label>
          <input
            type="text"
            className="form-control"
            id="rsg"
            aria-describedby="rsg"
            placeholder="Number of Research students guided / guiding"
            ref={nrggref}
          />
        </div>

        <h4>Educational Details</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="educationalDetailstoWrite"
            ref={edchkref}
          />
          <label className="form-check-label" for="educationalDetailstoWrite">
            Educational details to write?
          </label>
        </div>

        <div className="form-group">
          <label for="degree1">Degree 1</label>
          <input
            type="text"
            className="form-control"
            id="degree1"
            aria-describedby="degree1"
            placeholder="Degree 1"
            ref={dg1ref}
          />
        </div>

        <div className="form-group">
          <label for="deg1uni">
            University from which Degree 1 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg1uni"
            aria-describedby="deg1uni"
            placeholder="University from which Degree 1 was obtained?"
            ref={dg1uniref}
          />
        </div>

        <div className="form-group">
          <label for="deg1year">Year of Completion of Degree 1</label>
          <input
            type="text"
            className="form-control"
            id="deg1year"
            aria-describedby="deg1year"
            placeholder="Year of Completion of Degree 1"
            ref={dg1yocref}
          />
        </div>

        <div className="form-group">
          <label for="degree2">Degree 2</label>
          <input
            type="text"
            className="form-control"
            id="degree2"
            aria-describedby="degree2"
            placeholder="Degree 2"
            ref={dg2ref}
          />
        </div>

        <div className="form-group">
          <label for="deg2uni">
            University from which Degree 2 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg2uni"
            aria-describedby="deg2uni"
            placeholder="University from which Degree 2 was obtained?"
            ref={dg2uniref}
          />
        </div>

        <div className="form-group">
          <label for="deg2year">Year of Completion of Degree 2</label>
          <input
            type="text"
            className="form-control"
            id="deg2year"
            aria-describedby="deg2year"
            placeholder="Year of Completion of Degree 2"
            ref={dg2yocref}
          />
        </div>

        <div className="form-group">
          <label for="degree3">Degree 3</label>
          <input
            type="text"
            className="form-control"
            id="degree3"
            aria-describedby="degree3"
            placeholder="Degree 3"
            ref={dg3ref}
          />
        </div>

        <div className="form-group">
          <label for="deg3uni">
            University from which Degree 3 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg3uni"
            aria-describedby="deg3uni"
            placeholder="University from which Degree 3 was obtained?"
            ref={dg3uniref}
          />
        </div>

        <div className="form-group">
          <label for="deg3year">Year of Completion of Degree 3</label>
          <input
            type="text"
            className="form-control"
            id="deg3year"
            aria-describedby="deg3year"
            placeholder="Year of Completion of Degree 3"
            ref={dg3yocref}
          />
        </div>

        <div className="form-group">
          <label for="degree4">Degree 4</label>
          <input
            type="text"
            className="form-control"
            id="degree4"
            aria-describedby="degree4"
            placeholder="Degree 4"
            ref={dg4ref}
          />
        </div>

        <div className="form-group">
          <label for="deg4uni">
            University from which Degree 4 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg4uni"
            aria-describedby="deg4uni"
            placeholder="University from which Degree 4 was obtained?"
            ref={dg4uniref}
          />
        </div>

        <div className="form-group">
          <label for="deg4year">Year of Completion of Degree 4</label>
          <input
            type="text"
            className="form-control"
            id="deg4year"
            aria-describedby="deg4year"
            placeholder="Year of Completion of Degree 4"
            ref={dg4yocref}
          />
        </div>

        <div className="form-group">
          <label for="degree5">Degree 5</label>
          <input
            type="text"
            className="form-control"
            id="degree5"
            aria-describedby="degree5"
            placeholder="Degree 5"
            ref={dg5ref}
          />
        </div>

        <div className="form-group">
          <label for="deg5uni">
            University from which Degree 5 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg5uni"
            aria-describedby="deg5uni"
            placeholder="University from which Degree 5 was obtained?"
            ref={dg5uniref}
          />
        </div>

        <div className="form-group">
          <label for="deg5year">Year of Completion of Degree 5</label>
          <input
            type="text"
            className="form-control"
            id="deg5year"
            aria-describedby="deg5year"
            placeholder="Year of Completion of Degree 5"
            ref={dg5yocref}
          />
        </div>

        <h4>Designations</h4>
        <div className="form-group">
          <label for="desig1">Designation 1</label>
          <input
            type="text"
            className="form-control"
            id="desig1"
            aria-describedby="desig1"
            placeholder="Designation 1"
            ref={desig1ref}
          />
        </div>

        <div className="form-group">
          <label for="desig1duration">Duration of Designation 1</label>
          <input
            type="text"
            className="form-control"
            id="desig1duration"
            aria-describedby="desig1duration"
            placeholder="Duration of Designation 1"
            ref={desig1duraref}
          />
        </div>

        <div className="form-group">
          <label for="desig1pow">Place of Work of Designation 1</label>
          <input
            type="text"
            className="form-control"
            id="desig1pow"
            aria-describedby="desig1pow"
            placeholder="Place of Work of Designation 1"
            ref={desig1powref}
          />
        </div>

        <div className="form-group">
          <label for="desig2">Designation 2</label>
          <input
            type="text"
            className="form-control"
            id="desig2"
            aria-describedby="desig2"
            placeholder="Designation 1"
            ref={desig2ref}
          />
        </div>

        <div className="form-group">
          <label for="desig2duration">Duration of Designation 2</label>
          <input
            type="text"
            className="form-control"
            id="desig2duration"
            aria-describedby="desig2duration"
            placeholder="Duration of Designation 2"
            ref={desig2duraref}
          />
        </div>

        <div className="form-group">
          <label for="desig2pow">Place of Work of Designation 2</label>
          <input
            type="text"
            className="form-control"
            id="desig2pow"
            aria-describedby="desig2pow"
            placeholder="Place of Work of Designation 2"
            ref={desig2powref}
          />
        </div>

        <div className="form-group">
          <label for="desig3">Designation 3</label>
          <input
            type="text"
            className="form-control"
            id="desig3"
            aria-describedby="desig3"
            placeholder="Designation 3"
            ref={desig3ref}
          />
        </div>

        <div className="form-group">
          <label for="desig3duration">Duration of Designation 3</label>
          <input
            type="text"
            className="form-control"
            id="desig3duration"
            aria-describedby="desig3duration"
            placeholder="Duration of Designation 3"
            ref={desig3duraref}
          />
        </div>

        <div className="form-group">
          <label for="desig3pow">Place of Work of Designation 3</label>
          <input
            type="text"
            className="form-control"
            id="desig3pow"
            aria-describedby="desig3pow"
            placeholder="Place of Work of Designation 3"
            ref={desig3powref}
          />
        </div>

        <div className="form-group">
          <label for="desig4">Designation 4</label>
          <input
            type="text"
            className="form-control"
            id="desig4"
            aria-describedby="desig4"
            placeholder="Designation 4"
            ref={desig4ref}
          />
        </div>

        <div className="form-group">
          <label for="desig4duration">Duration of Designation 4</label>
          <input
            type="text"
            className="form-control"
            id="desig4duration"
            aria-describedby="desig4duration"
            placeholder="Duration of Designation 4"
            ref={desig4duraref}
          />
        </div>

        <div className="form-group">
          <label for="desig4pow">Place of Work of Designation 4</label>
          <input
            type="text"
            className="form-control"
            id="desig4pow"
            aria-describedby="desig4pow"
            placeholder="Place of Work of Designation 4"
            ref={desig4powref}
          />
        </div>

        <div className="form-group">
          <label for="desig5">Designation 5</label>
          <input
            type="text"
            className="form-control"
            id="desig5"
            aria-describedby="desig5"
            placeholder="Designation 5"
            ref={desig5ref}
          />
        </div>

        <div className="form-group">
          <label for="desig5duration">Duration of Designation 5</label>
          <input
            type="text"
            className="form-control"
            id="desig5duration"
            aria-describedby="desig5duration"
            placeholder="Duration of Designation 5"
            ref={desig5duraref}
          />
        </div>

        <div className="form-group">
          <label for="desig5pow">Place of Work of Designation 5</label>
          <input
            type="text"
            className="form-control"
            id="desig5pow"
            aria-describedby="desig5pow"
            placeholder="Place of Work of Designation 5"
            ref={desig5powref}
          />
        </div>

        <h4>Projects</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="projects"
            ref={projref}
          />
          <label className="form-check-label" for="projects">
            Any funded projects?
          </label>
        </div>

        <div className="form-group">
          <label for="proj1tit">Title of the Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1tit"
            aria-describedby="proj1tit"
            placeholder="Title of the Project 1"
            ref={proj1titref}
          />
        </div>

        <div className="form-group">
          <label for="proj1dur">Duration of Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1dur"
            aria-describedby="proj1dur"
            placeholder="Duration of Project 1"
            ref={proj1duraref}
          />
        </div>

        <div className="form-group">
          <label for="proj1amt">Funding Amount for Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1amt"
            aria-describedby="proj1amt"
            placeholder="Funding Amount for Project 1"
            ref={proj1amtref}
          />
        </div>

        <div className="form-group">
          <label for="proj1age">Funding Agency for Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1age"
            aria-describedby="proj1age"
            placeholder="Funding Agency for Project 1"
            ref={proj1ageref}
          />
        </div>

        <div className="form-group">
          <label for="proj2tit">Title of the Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2tit"
            aria-describedby="proj2tit"
            placeholder="Title of the Project 2"
            ref={proj2titref}
          />
        </div>

        <div className="form-group">
          <label for="proj2dur">Duration of Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2dur"
            aria-describedby="proj2dur"
            placeholder="Duration of Project 2"
            ref={proj2duraref}
          />
        </div>

        <div className="form-group">
          <label for="proj2amt">Funding Amount for Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2amt"
            aria-describedby="proj2amt"
            placeholder="Funding Amount for Project 2"
            ref={proj2amtref}
          />
        </div>

        <div className="form-group">
          <label for="proj2age">Funding Agency for Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2age"
            aria-describedby="proj2age"
            placeholder="Funding Agency for Project 2"
            ref={proj2ageref}
          />
        </div>

        <div className="form-group">
          <label for="proj3tit">Title of the Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3tit"
            aria-describedby="proj3tit"
            placeholder="Title of the Project 3"
            ref={proj3titref}
          />
        </div>

        <div className="form-group">
          <label for="proj3dur">Duration of Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3dur"
            aria-describedby="proj3dur"
            placeholder="Duration of Project 3"
            ref={proj3duraref}
          />
        </div>

        <div className="form-group">
          <label for="proj3amt">Funding Amount for Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3amt"
            aria-describedby="proj3amt"
            placeholder="Funding Amount for Project 3"
            ref={proj3amtref}
          />
        </div>

        <div className="form-group">
          <label for="proj3age">Funding Agency for Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3age"
            aria-describedby="proj3age"
            placeholder="Funding Agency for Project 3"
            ref={proj3ageref}
          />
        </div>

        <div className="form-group">
          <label for="proj4tit">Title of the Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4tit"
            aria-describedby="proj4tit"
            placeholder="Title of the Project 4"
            ref={proj4titref}
          />
        </div>

        <div className="form-group">
          <label for="proj4dur">Duration of Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4dur"
            aria-describedby="proj4dur"
            placeholder="Duration of Project 4"
            ref={proj4duraref}
          />
        </div>

        <div className="form-group">
          <label for="proj4amt">Funding Amount for Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4amt"
            aria-describedby="proj4amt"
            placeholder="Funding Amount for Project 4"
            ref={proj4amtref}
          />
        </div>

        <div className="form-group">
          <label for="proj4age">Funding Agency for Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4age"
            aria-describedby="proj4age"
            placeholder="Funding Agency for Project 4"
            ref={proj4ageref}
          />
        </div>

        <div className="form-group">
          <label for="proj5tit">Title of the Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5tit"
            aria-describedby="proj5tit"
            placeholder="Title of the Project 5"
            ref={proj5titref}
          />
        </div>

        <div className="form-group">
          <label for="proj5dur">Duration of Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5dur"
            aria-describedby="proj5dur"
            placeholder="Duration of Project 5"
            ref={proj5duraref}
          />
        </div>

        <div className="form-group">
          <label for="proj5amt">Funding Amount for Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5amt"
            aria-describedby="proj5amt"
            placeholder="Funding Amount for Project 5"
            ref={proj5amtref}
          />
        </div>

        <div className="form-group">
          <label for="proj5age">Funding Agency for Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5age"
            aria-describedby="proj5age"
            placeholder="Funding Agency for Project 5"
            ref={proj5ageref}
          />
        </div>

        <h4>Teaching Subjects</h4>
        <div className="form-group">
          <label for="teachsub1">Teaching Subject 1</label>
          <input
            type="text"
            className="form-control"
            id="teachsub1"
            aria-describedby="teachsub1"
            placeholder="Teaching Subject 1"
            ref={ts1}
          />
        </div>

        <div className="form-group">
          <label for="teachsub2">Teaching Subject 2</label>
          <input
            type="text"
            className="form-control"
            id="teachsub2"
            aria-describedby="teachsub2"
            placeholder="Teaching Subject 2"
            ref={ts2}
          />
        </div>

        <div className="form-group">
          <label for="teachsub3">Teaching Subject 3</label>
          <input
            type="text"
            className="form-control"
            id="teachsub3"
            aria-describedby="teachsub3"
            placeholder="Teaching Subject 3"
            ref={ts3}
          />
        </div>

        <div className="form-group">
          <label for="teachsub4">Teaching Subject 4</label>
          <input
            type="text"
            className="form-control"
            id="teachsub4"
            aria-describedby="teachsub4"
            placeholder="Teaching Subject 4"
            ref={ts4}
          />
        </div>

        <div className="form-group">
          <label for="teachsub5">Teaching Subject 5</label>
          <input
            type="text"
            className="form-control"
            id="teachsub5"
            aria-describedby="teachsub5"
            placeholder="Teaching Subject 5"
            ref={ts5}
          />
        </div>

        <h4>Areas of Interest</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="aoi"
            ref={aoi}
          />
          <label className="form-check-label" for="aoi">
            Any areas of interest?
          </label>
        </div>

        <div className="form-group">
          <label for="aoi1">Areas of Interest 1</label>
          <input
            type="text"
            className="form-control"
            id="aoi"
            aria-describedby="aoi"
            placeholder="Areas of Interest 1"
            ref={aoi1}
          />
        </div>

        <div className="form-group">
          <label for="aoi2">Areas of Interest 2</label>
          <input
            type="text"
            className="form-control"
            id="aoi2"
            aria-describedby="aoi2"
            placeholder="Areas of Interest 2"
            ref={aoi2}
          />
        </div>

        <div className="form-group">
          <label for="aoi3">Areas of Interest 3</label>
          <input
            type="text"
            className="form-control"
            id="aoi3"
            aria-describedby="aoi3"
            placeholder="Areas of Interest 3"
            ref={aoi3}
          />
        </div>

        <div className="form-group">
          <label for="aoi4">Areas of Interest 4</label>
          <input
            type="text"
            className="form-control"
            id="aoi4"
            aria-describedby="aoi4"
            placeholder="Areas of Interest 4"
            ref={aoi4}
          />
        </div>

        <div className="form-group">
          <label for="aoi5">Areas of Interest 5</label>
          <input
            type="text"
            className="form-control"
            id="aoi5"
            aria-describedby="aoi5"
            placeholder="Areas of Interest 5"
            ref={aoi5}
          />
        </div>

        <h4>Books and Patents</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="books"
            ref={bp}
          />
          <label className="form-check-label" for="books">
            Any books & patents?
          </label>
        </div>

        <div className="form-group">
          <label for="bp1">Book / Patent #1</label>
          <input
            type="text"
            className="form-control"
            id="bp1"
            aria-describedby="bp1"
            placeholder="Book / Patent 1"
            ref={bp1}
          />
        </div>

        <div className="form-group">
          <label for="bp2">Book / Patent #2</label>
          <input
            type="text"
            className="form-control"
            id="bp2"
            aria-describedby="bp2"
            placeholder="Book / Patent 2"
            ref={bp2}
          />
        </div>

        <div className="form-group">
          <label for="bp3">Book / Patent #3</label>
          <input
            type="text"
            className="form-control"
            id="bp3"
            aria-describedby="bp3"
            placeholder="Book / Patent 3"
            ref={bp3}
          />
        </div>

        <div className="form-group">
          <label for="bp4">Book / Patent #4</label>
          <input
            type="text"
            className="form-control"
            id="bp4"
            aria-describedby="bp4"
            placeholder="Book / Patent 4"
            ref={bp4}
          />
        </div>

        <div className="form-group">
          <label for="bp5">Book / Patent #5</label>
          <input
            type="text"
            className="form-control"
            id="bp5"
            aria-describedby="bp5"
            placeholder="Book / Patent 5"
            ref={bp5}
          />
        </div>

        <div className="form-group">
          <label for="bp6">Book / Patent #6</label>
          <input
            type="text"
            className="form-control"
            id="bp6"
            aria-describedby="bp6"
            placeholder="Book / Patent 6"
            ref={bp6}
          />
        </div>

        <div className="form-group">
          <label for="bp7">Book / Patent #7</label>
          <input
            type="text"
            className="form-control"
            id="bp7"
            aria-describedby="bp7"
            placeholder="Book / Patent 7"
            ref={bp7}
          />
        </div>

        <div className="form-group">
          <label for="bp8">Book / Patent #8</label>
          <input
            type="text"
            className="form-control"
            id="bp8"
            aria-describedby="bp8"
            placeholder="Book / Patent 8"
            ref={bp8}
          />
        </div>

        <div className="form-group">
          <label for="bp9">Book / Patent #9</label>
          <input
            type="text"
            className="form-control"
            id="bp9"
            aria-describedby="bp9"
            placeholder="Book / Patent 9"
            ref={bp9}
          />
        </div>

        <div className="form-group">
          <label for="bp7">Book / Patent #10</label>
          <input
            type="text"
            className="form-control"
            id="bp10"
            aria-describedby="bp10"
            placeholder="Book / Patent 7"
            ref={bp10}
          />
        </div>

        <h4>Honors and Awards</h4>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="honors" />
          <label className="form-check-label" for="honors">
            Any Honors and Awards?
          </label>
        </div>

        <div className="form-group">
          <label for="hon1">Honors / Awards #1</label>
          <input
            type="text"
            className="form-control"
            id="hon1"
            aria-describedby="hon1"
            placeholder="Honors / Awards #1"
          />
        </div>

        <div className="form-group">
          <label for="hon2">Honors / Awards #2</label>
          <input
            type="text"
            className="form-control"
            id="hon2"
            aria-describedby="hon2"
            placeholder="Honors / Awards #2"
          />
        </div>

        <div className="form-group">
          <label for="hon3">Honors / Awards #3</label>
          <input
            type="text"
            className="form-control"
            id="hon3"
            aria-describedby="hon3"
            placeholder="Honors / Awards #1"
          />
        </div>

        <div className="form-group">
          <label for="hon4">Honors / Awards #4</label>
          <input
            type="text"
            className="form-control"
            id="hon4"
            aria-describedby="hon4"
            placeholder="Honors / Awards #4"
          />
        </div>

        <div className="form-group">
          <label for="hon5">Honors / Awards #5</label>
          <input
            type="text"
            className="form-control"
            id="hon5"
            aria-describedby="hon5"
            placeholder="Honors / Awards #5"
          />
        </div>

        <div className="form-group">
          <label for="hon6">Honors / Awards #6</label>
          <input
            type="text"
            className="form-control"
            id="hon6"
            aria-describedby="hon6"
            placeholder="Honors / Awards #6"
          />
        </div>

        <div className="form-group">
          <label for="hon7">Honors / Awards #7</label>
          <input
            type="text"
            className="form-control"
            id="hon7"
            aria-describedby="hon7"
            placeholder="Honors / Awards #7"
          />
        </div>

        <div className="form-group">
          <label for="hon8">Honors / Awards #8</label>
          <input
            type="text"
            className="form-control"
            id="hon8"
            aria-describedby="hon8"
            placeholder="Honors / Awards #8"
          />
        </div>

        <div className="form-group">
          <label for="hon9">Honors / Awards #9</label>
          <input
            type="text"
            className="form-control"
            id="hon9"
            aria-describedby="hon9"
            placeholder="Honors / Awards #9"
          />
        </div>

        <div className="form-group">
          <label for="hon10">Honors / Awards #10</label>
          <input
            type="text"
            className="form-control"
            id="hon10"
            aria-describedby="hon10"
            placeholder="Honors / Awards #10"
          />
        </div>

        <h4>Research Publications</h4>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="rp" />
          <label className="form-check-label" for="rp">
            Any Research Publications?
          </label>
        </div>

        <div className="form-group">
          <label for="rp1">Research Publication #1</label>
          <input
            type="text"
            className="form-control"
            id="rp1"
            aria-describedby="rp1"
            placeholder="Research Publication #1"
          />
        </div>

        <div className="form-group">
          <label for="rp2">Research Publication #2</label>
          <input
            type="text"
            className="form-control"
            id="rp2"
            aria-describedby="rp2"
            placeholder="Research Publication #2"
          />
        </div>

        <div className="form-group">
          <label for="rp3">Research Publication #3</label>
          <input
            type="text"
            className="form-control"
            id="rp3"
            aria-describedby="rp3"
            placeholder="Research Publication #3"
          />
        </div>

        <div className="form-group">
          <label for="rp4">Research Publication #4</label>
          <input
            type="text"
            className="form-control"
            id="rp4"
            aria-describedby="rp4"
            placeholder="Research Publication #4"
          />
        </div>

        <div className="form-group">
          <label for="rp5">Research Publication #5</label>
          <input
            type="text"
            className="form-control"
            id="rp5"
            aria-describedby="rp5"
            placeholder="Research Publication #5"
          />
        </div>

        <div className="form-group">
          <label for="rp6">Research Publication #6</label>
          <input
            type="text"
            className="form-control"
            id="rp6"
            aria-describedby="rp6"
            placeholder="Research Publication #6"
          />
        </div>

        <div className="form-group">
          <label for="rp7">Research Publication #7</label>
          <input
            type="text"
            className="form-control"
            id="rp7"
            aria-describedby="rp7"
            placeholder="Research Publication #7"
          />
        </div>

        <div className="form-group">
          <label for="rp8">Research Publication #8</label>
          <input
            type="text"
            className="form-control"
            id="rp8"
            aria-describedby="rp8"
            placeholder="Research Publication #8"
          />
        </div>

        <div className="form-group">
          <label for="rp9">Research Publication #2</label>
          <input
            type="text"
            className="form-control"
            id="rp9"
            aria-describedby="rp9"
            placeholder="Research Publication #9"
          />
        </div>

        <div className="form-group">
          <label for="rp10">Research Publication #10</label>
          <input
            type="text"
            className="form-control"
            id="rp10"
            aria-describedby="rp10"
            placeholder="Research Publication #10"
          />
        </div>

        <h4>Workshops & Guest Lectures</h4>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="wg" />
          <label className="form-check-label" for="wg">
            Any Workshops attended or delivered Guest Lectures?
          </label>
        </div>

        <div className="form-group">
          <label for="wg1">Workshop / Guest Lecture #1</label>
          <input
            type="text"
            className="form-control"
            id="wg1"
            aria-describedby="wg1"
          />
        </div>

        <div className="form-group">
          <label for="wg2">Workshop / Guest Lecture #2</label>
          <input
            type="text"
            className="form-control"
            id="wg2"
            aria-describedby="wg2"
          />
        </div>

        <div className="form-group">
          <label for="wg3">Workshop / Guest Lecture #3</label>
          <input
            type="text"
            className="form-control"
            id="wg3"
            aria-describedby="wg3"
          />
        </div>

        <div className="form-group">
          <label for="wg4">Workshop / Guest Lecture #4</label>
          <input
            type="text"
            className="form-control"
            id="wg4"
            aria-describedby="wg4"
          />
        </div>

        <div className="form-group">
          <label for="wg5">Workshop / Guest Lecture #5</label>
          <input
            type="text"
            className="form-control"
            id="wg5"
            aria-describedby="wg5"
          />
        </div>

        <div className="form-group">
          <label for="wg6">Workshop / Guest Lecture #6</label>
          <input
            type="text"
            className="form-control"
            id="wg6"
            aria-describedby="wg6"
          />
        </div>

        <div className="form-group">
          <label for="wg7">Workshop / Guest Lecture #7</label>
          <input
            type="text"
            className="form-control"
            id="wg7"
            aria-describedby="wg7"
          />
        </div>

        <div className="form-group">
          <label for="wg8">Workshop / Guest Lecture #8</label>
          <input
            type="text"
            className="form-control"
            id="wg8"
            aria-describedby="wg8"
          />
        </div>

        <div className="form-group">
          <label for="wg9">Workshop / Guest Lecture #9</label>
          <input
            type="text"
            className="form-control"
            id="wg9"
            aria-describedby="wg9"
          />
        </div>

        <div className="form-group">
          <label for="wg10">Workshop / Guest Lecture #10</label>
          <input
            type="text"
            className="form-control"
            id="wg10"
            aria-describedby="wg10"
          />
        </div>

        <h4>Membership of Professional Societies</h4>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="ps" />
          <label className="form-check-label" for="ps">
            Any Membership of Professional Societies?
          </label>
        </div>

        <div className="form-group">
          <label for="ps1">Professional Society #1</label>
          <input
            type="text"
            className="form-control"
            id="ps1"
            aria-describedby="ps1"
          />
        </div>

        <div className="form-group">
          <label for="ps2">Professional Society #2</label>
          <input
            type="text"
            className="form-control"
            id="ps2"
            aria-describedby="ps2"
          />
        </div>

        <div className="form-group">
          <label for="ps3">Professional Society #3</label>
          <input
            type="text"
            className="form-control"
            id="ps3"
            aria-describedby="ps3"
          />
        </div>

        <div className="form-group">
          <label for="ps4">Professional Society #4</label>
          <input
            type="text"
            className="form-control"
            id="ps4"
            aria-describedby="ps4"
          />
        </div>

        <div className="form-group">
          <label for="ps5">Professional Society #5</label>
          <input
            type="text"
            className="form-control"
            id="ps5"
            aria-describedby="ps5"
          />
        </div>

        <div className="form-group">
          <label for="ps6">Professional Society #6</label>
          <input
            type="text"
            className="form-control"
            id="ps6"
            aria-describedby="ps6"
          />
        </div>

        <div className="form-group">
          <label for="ps7">Professional Society #7</label>
          <input
            type="text"
            className="form-control"
            id="ps7"
            aria-describedby="ps7"
          />
        </div>

        <div className="form-group">
          <label for="ps8">Professional Society #8</label>
          <input
            type="email"
            className="form-control"
            id="ps8"
            aria-describedby="ps8"
          />
        </div>

        <div className="form-group">
          <label for="ps9">Professional Society #9</label>
          <input
            type="text"
            className="form-control"
            id="ps9"
            aria-describedby="ps9"
          />
        </div>

        <div className="form-group">
          <label for="ps10">Professional Society #10</label>
          <input
            type="text"
            className="form-control"
            id="ps10"
            aria-describedby="ps10"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddFaculty;
