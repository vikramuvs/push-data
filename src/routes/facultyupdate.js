import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import facultyService from "../services/faculty.service";

function FacultyUpdate() {
  const [facultyDetails, setFacultyDetails] = useState([]);
  // const [deptId, setDeptId] = useState("");

  const deptref = useRef(null);
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
  const honors = useRef(null);
  const hon1 = useRef(null);
  const hon2 = useRef(null);
  const hon3 = useRef(null);
  const hon4 = useRef(null);
  const hon5 = useRef(null);
  const hon6 = useRef(null);
  const hon7 = useRef(null);
  const hon8 = useRef(null);
  const hon9 = useRef(null);
  const hon10 = useRef(null);
  const rp = useRef(null);
  const rp1 = useRef(null);
  const rp2 = useRef(null);
  const rp3 = useRef(null);
  const rp4 = useRef(null);
  const rp5 = useRef(null);
  const rp6 = useRef(null);
  const rp7 = useRef(null);
  const rp8 = useRef(null);
  const rp9 = useRef(null);
  const rp10 = useRef(null);
  const wg = useRef(null);
  const wg1 = useRef(null);
  const wg2 = useRef(null);
  const wg3 = useRef(null);
  const wg4 = useRef(null);
  const wg5 = useRef(null);
  const wg6 = useRef(null);
  const wg7 = useRef(null);
  const wg8 = useRef(null);
  const wg9 = useRef(null);
  const wg10 = useRef(null);
  const ps = useRef(null);
  const ps1 = useRef(null);
  const ps2 = useRef(null);
  const ps3 = useRef(null);
  const ps4 = useRef(null);
  const ps5 = useRef(null);
  const ps6 = useRef(null);
  const ps7 = useRef(null);
  const ps8 = useRef(null);
  const ps9 = useRef(null);
  const ps10 = useRef(null);
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
        console.log(response.data);
        //setDeptId(response.data.departmentId);
        //console.log(response.data.departmentId);
        deptref.current.value = response.data.departmentId;
        edchkref.current.checked =
          response.data.do_you_have_educational_details_to_write === "Yes"
            ? true
            : false;
        tfchkref.current.checked =
          response.data.are_you_a_teaching_faculty === "Yes" ? true : false;
        projref.current.checked =
          response.data.do_you_have_any_funded_projects === "Yes"
            ? true
            : false;
        aoi.current.checked =
          response.data.do_you_have_any_areas_of_interest === "Yes"
            ? true
            : false;
        bp.current.checked =
          response.data.do_you_have_books_and_patents === "Yes" ? true : false;
        //console.log(response.data.do_you_have_books_and_patents);
        honors.current.checked =
          response.data.do_you_have_honors_awards_and_achievements === "Yes"
            ? true
            : false;
        rp.current.checked =
          response.data.do_you_have_research_publications === "Yes"
            ? true
            : false;
        wg.current.checked =
          response.data
            .have_you_attended_any_workshops_or_delivered_guest_lectures ===
          "Yes"
            ? true
            : false;
        ps.current.checked =
          response.data.do_you_have_any_membership_of_professional_societies ===
          "Yes"
            ? true
            : false;
        // set_areas_of_Interest_1(response.data.areas_of_Interest_1);
        // console.log(facultyDetails);
      })
      .catch((error) => console.log(error));
  });

  const submitBtnHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    const facDetails = {
      departmentId: parseInt(deptref.current.value),
      profile_Pic_URL: ppref.current.value,
      faculty_Full_Name: fnref.current.value,
      short_Bio: sbref.current.value,
      email_Address: emref.current.value,
      phone_Number: phref.current.value,
      are_you_a_teaching_faculty: tfchkref.current.checked ? "Yes" : "No",
      current_designation: cdref.current.value,
      highest_Qualification: hqref.current.value,
      date_of_Joining_RIT: djref.current.value,
      number_of_Research_Students_Guided_and_Guiding: nrggref.current.value,
      do_you_have_educational_details_to_write: edchkref.current.checked
        ? "Yes"
        : "No",
      degree_1: dg1ref.current.value,
      university_from_which_Degree_1_was_obtained: dg1uniref.current.value,
      year_of_Completion_of_Degree_1: dg1yocref.current.value,
      degree_2: dg2ref.current.value,
      university_from_which_Degree_2_was_obtained: dg2uniref.current.value,
      year_of_Completion_of_Degree_2: dg2yocref.current.value,
      degree_3: dg3ref.current.value,
      university_from_which_Degree_3_was_obtained: dg3uniref.current.value,
      year_of_Completion_of_Degree_3: dg3yocref.current.value,
      degree_4: dg4ref.current.value,
      university_from_which_Degree_4_was_obtained: dg4uniref.current.value,
      year_of_Completion_of_Degree_4: dg4yocref.current.value,
      degree_5: dg5ref.current.value,
      university_from_which_Degree_5_was_obtained: dg5uniref.current.value,
      year_of_Completion_of_Degree_5: dg5yocref.current.value,
      designation_1: desig1ref.current.value,
      duration_of_Designation_1: desig1duraref.current.value,
      place_of_Work_of_Designation_1: desig1powref.current.value,
      designation_2: desig2ref.current.value,
      duration_of_Designation_2: desig2duraref.current.value,
      place_of_Work_of_Designation_2: desig2powref.current.value,
      designation_3: desig3ref.current.value,
      duration_of_Designation_3: desig3duraref.current.value,
      place_of_Work_of_Designation_3: desig3powref.current.value,
      designation_4: desig4ref.current.value,
      duration_of_Designation_4: desig4duraref.current.value,
      place_of_Work_of_Designation_4: desig4powref.current.value,
      designation_5: desig5ref.current.value,
      duration_of_Designation_5: desig5duraref.current.value,
      place_of_Work_of_Designation_5: desig5powref.current.value,
      title_of_the_Project_1: proj1titref.current.value,
      duration_of_Project_1: proj1duraref.current.value,
      do_you_have_any_funded_projects: projref.current.checked ? "Yes" : "No",
      funding_Amount_for_Project_1: proj1amtref.current.value,
      funding_Agency_for_Project_1: proj1ageref.current.value,
      title_of_the_Project_2: proj2titref.current.value,
      duration_of_Project_2: proj2duraref.current.value,
      funding_Amount_for_Project_2: proj2amtref.current.value,
      funding_Agency_for_Project_2: proj2ageref.current.value,
      title_of_the_Project_3: proj3titref.current.value,
      duration_of_Project_3: proj3duraref.current.value,
      funding_Amount_for_Project_3: proj3amtref.current.value,
      funding_Agency_for_Project_3: proj3ageref.current.value,
      title_of_the_Project_4: proj4titref.current.value,
      duration_of_Project_4: proj4duraref.current.value,
      funding_Amount_for_Project_4: proj4amtref.current.value,
      funding_Agency_for_Project_4: proj4ageref.current.value,
      title_of_the_Project_5: proj5titref.current.value,
      duration_of_Project_5: proj5duraref.current.value,
      funding_Amount_for_Project_5: proj5amtref.current.value,
      funding_Agency_for_Project_5: proj5ageref.current.value,
      teaching_Subject_1: ts1.current.value,
      teaching_Subject_2: ts2.current.value,
      teaching_Subject_3: ts3.current.value,
      teaching_Subject_4: ts4.current.value,
      teaching_Subject_5: ts5.current.value,
      do_you_have_any_areas_of_interest: aoi.current.checked ? "Yes" : "No",
      areas_of_Interest_1: aoi1.current.value,
      areas_of_Interest_2: aoi2.current.value,
      areas_of_Interest_3: aoi3.current.value,
      areas_of_Interest_4: aoi4.current.value,
      areas_of_Interest_5: aoi5.current.value,
      do_you_have_books_and_patents: bp.current.checked ? "Yes" : "No",
      bp1: bp1.current.value,
      bp2: bp2.current.value,
      bp3: bp3.current.value,
      bp4: bp4.current.value,
      bp5: bp5.current.value,
      bp6: bp6.current.value,
      bp7: bp7.current.value,
      bp8: bp8.current.value,
      bp9: bp9.current.value,
      bp10: bp10.current.value,
      do_you_have_honors_awards_and_achievements: honors.current.checked
        ? "Yes"
        : "No",
      ha1: hon1.current.value,
      ha2: hon2.current.value,
      ha3: hon3.current.value,
      ha4: hon4.current.value,
      ha5: hon5.current.value,
      ha6: hon6.current.value,
      ha7: hon7.current.value,
      ha8: hon8.current.value,
      ha9: hon9.current.value,
      ha10: hon10.current.value,
      do_you_have_research_publications: rp.current.checked ? "Yes" : "No",
      rp1: rp1.current.value,
      rp2: rp2.current.value,
      rp3: rp3.current.value,
      rp4: rp4.current.value,
      rp5: rp5.current.value,
      rp6: rp6.current.value,
      rp7: rp7.current.value,
      rp8: rp8.current.value,
      rp9: rp9.current.value,
      rp10: rp10.current.value,
      have_you_attended_any_workshops_or_delivered_guest_lectures: wg.current
        .checked
        ? "Yes"
        : "No",
      wg1: wg1.current.value,
      wg2: wg2.current.value,
      wg3: wg3.current.value,
      wg4: wg4.current.value,
      wg5: wg5.current.value,
      wg6: wg6.current.value,
      wg7: wg7.current.value,
      wg8: wg8.current.value,
      wg9: wg9.current.value,
      wg10: wg10.current.value,
      do_you_have_any_membership_of_professional_societies: ps.current.checked
        ? "Yes"
        : "No",
      ps1: ps1.current.value,
      ps2: ps2.current.value,
      ps3: ps3.current.value,
      ps4: ps4.current.value,
      ps5: ps5.current.value,
      ps6: ps6.current.value,
      ps7: ps7.current.value,
      ps8: ps8.current.value,
      ps9: ps9.current.value,
      ps10: ps10.current.value,
    };

    // console.log(facDetails);

    facultyService
      .updateDetails(id, facDetails)
      .then((response) => {
        // setFacultyDetails(response.data);
        // set_areas_of_Interest_1(response.data.areas_of_Interest_1);
        //document.getElementById("fac_form").reset();
        window.alert("Data successfully modified!");
        console.log(response);
      })
      .catch((error) => {
        window.alert("cant push data right now");
        console.log(error);
      });
  };

  return (
    <div className="container">
      {/* <h3>Faculty details for {facultyDetails.faculty_Full_Name}</h3> */}
      <form id="update-form">
        <div>Faculty details for {facultyDetails.faculty_Full_Name}</div>
        <div className="d-flex ml-5">
          <img
            src={facultyDetails.profile_Pic_URL}
            height="100"
            width="100"
            alt="profile"
          />
          <div className="ml-5">
            <label htmlFor="pp">Profile Pic URL</label>
            <input
              type="text"
              className="form-control"
              id="pp"
              aria-describedby="pp"
              placeholder="Profile Pic URL"
              ref={ppref}
              required
              defaultValue={facultyDetails.profile_Pic_URL}
            />
          </div>
        </div>
        <div>Last updated on {facultyDetails.timestamp}</div>
        <hr />
        {/* <div class="form-group">
        <label htmlFor="pp">Profile Pic URL</label>
          <input
            type="text"
            className="form-control"
            id="pp"
            aria-describedby="pp"
            placeholder="Profile Pic URL"
            ref={ppref}
            required
            defaultValue={facultyDetails.faculty_Full_Name}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            aria-describedby="fullName"
            placeholder="Faculty Full Name"
            required
            ref={fnref}
            defaultValue={facultyDetails.faculty_Full_Name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dept">Department</label>
          <select
            name="dept"
            id="dept"
            className="form-select"
            aria-describedby="dept"
            ref={deptref}
            required
            //value={deptId}
            onChange={(e) => {
              deptref.current.value = e.target.value;
              console.log(deptref.current.value);
            }}
            // onChange={() => {
            //   console.log(parseInt(deptref.current.value));
            // }}
          >
            <option value="" disabled>
              Choose a dept
            </option>
            <option value={19}>Architecture</option>
            <option value={1}>Biotechnology</option>
            <option value={2}>Chemical Engineering</option>
            <option value={15}>Chemistry</option>
            <option value={5}>Civil Engg.</option>
            <option value={6}>CSE</option>
            <option value={16}>EEE</option>
            <option value={3}>ECE</option>
            <option value={4}>EIE</option>
            <option value={12}>ETE</option>
            <option value={17}>Humanities</option>
            <option value={7}>IEM</option>
            <option value={9}>ISE</option>
            <option value={13}>Maths</option>
            <option value={14}>MBA</option>
            <option value={10}>MCA</option>
            <option value={8}>Mechanical</option>
            <option value={11}>Medical Electronics</option>
            <option value={18}>Physics</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="shortBio">Short Bio</label>
          <textarea
            type="text"
            className="form-control"
            id="shortBio"
            aria-describedby="shortBio"
            placeholder="Short Bio"
            required
            ref={sbref}
            defaultValue={facultyDetails.short_Bio}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email-add">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-add"
            aria-describedby="email-add"
            placeholder="Email Address"
            required
            ref={emref}
            defaultValue={facultyDetails.email_Address}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            aria-describedby="phone"
            placeholder="Phone Number"
            required
            ref={phref}
            defaultValue={facultyDetails.phone_Number}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="teachingFaculty"
            ref={tfchkref}
            // defaultChecked={
            //   facultyDetails.are_you_a_teaching_faculty === "Yes" ? true : false
            // }
          />
          <label className="form-check-label" htmlFor="teachingFaculty">
            Teaching Faculty?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="currentDesignation">Current Designation</label>
          <input
            type="text"
            className="form-control"
            id="currentDesignation"
            aria-describedby="currentDesignation"
            placeholder="Current Designation"
            required
            ref={cdref}
            defaultValue={facultyDetails.current_designation}
          />
        </div>
        <div className="form-group">
          <label htmlFor="highestQualification">Highest Qualification</label>
          <input
            type="text"
            className="form-control"
            id="highestQualification"
            aria-describedby="highestQualification"
            placeholder="Highest Qualification"
            required
            ref={hqref}
            defaultValue={facultyDetails.highest_Qualification}
          />
        </div>
        <div className="form-group">
          <label htmlFor="joiningDate">Date of Joining RIT</label>
          <input
            type="text"
            className="form-control"
            id="joiningDate"
            aria-describedby="joiningDate"
            placeholder="Date of Joining RIT"
            ref={djref}
            defaultValue={facultyDetails.date_of_Joining_RIT}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rsg">
            Number of Research students guided / guiding
          </label>
          <input
            type="text"
            className="form-control"
            id="rsg"
            aria-describedby="rsg"
            placeholder="Number of Research students guided / guiding"
            ref={nrggref}
            defaultValue={
              facultyDetails.number_of_Research_Students_Guided_and_Guiding
            }
          />
        </div>
        <h4>Educational Details</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="educationalDetailstoWrite"
            ref={edchkref}
            // checked={
            //   facultyDetails.do_you_have_educational_details_to_write === "Yes"
            //     ? true
            //     : false
            // }
          />
          <label
            className="form-check-label"
            htmlFor="educationalDetailstoWrite"
          >
            Educational details to write?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="degree1">Degree 1</label>
          <input
            type="text"
            className="form-control"
            id="degree1"
            aria-describedby="degree1"
            placeholder="Degree 1"
            ref={dg1ref}
            defaultValue={facultyDetails.degree_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg1uni">
            University from which Degree 1 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg1uni"
            aria-describedby="deg1uni"
            placeholder="University from which Degree 1 was obtained?"
            ref={dg1uniref}
            defaultValue={
              facultyDetails.university_from_which_Degree_1_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg1year">Year of Completion of Degree 1</label>
          <input
            type="text"
            className="form-control"
            id="deg1year"
            aria-describedby="deg1year"
            placeholder="Year of Completion of Degree 1"
            ref={dg1yocref}
            defaultValue={facultyDetails.year_of_Completion_of_Degree_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree2">Degree 2</label>
          <input
            type="text"
            className="form-control"
            id="degree2"
            aria-describedby="degree2"
            placeholder="Degree 2"
            ref={dg2ref}
            defaultValue={facultyDetails.degree_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg2uni">
            University from which Degree 2 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg2uni"
            aria-describedby="deg2uni"
            placeholder="University from which Degree 2 was obtained?"
            ref={dg2uniref}
            defaultValue={
              facultyDetails.university_from_which_Degree_2_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg2year">Year of Completion of Degree 2</label>
          <input
            type="text"
            className="form-control"
            id="deg2year"
            aria-describedby="deg2year"
            placeholder="Year of Completion of Degree 2"
            ref={dg2yocref}
            defaultValue={facultyDetails.year_of_Completion_of_Degree_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree3">Degree 3</label>
          <input
            type="text"
            className="form-control"
            id="degree3"
            aria-describedby="degree3"
            placeholder="Degree 3"
            ref={dg3ref}
            defaultValue={facultyDetails.degree_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg3uni">
            University from which Degree 3 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg3uni"
            aria-describedby="deg3uni"
            placeholder="University from which Degree 3 was obtained?"
            ref={dg3uniref}
            defaultValue={
              facultyDetails.university_from_which_Degree_3_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg3year">Year of Completion of Degree 3</label>
          <input
            type="text"
            className="form-control"
            id="deg3year"
            aria-describedby="deg3year"
            placeholder="Year of Completion of Degree 3"
            ref={dg3yocref}
            defaultValue={facultyDetails.year_of_Completion_of_Degree_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree4">Degree 4</label>
          <input
            type="text"
            className="form-control"
            id="degree4"
            aria-describedby="degree4"
            placeholder="Degree 4"
            ref={dg4ref}
            defaultValue={facultyDetails.degree_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg4uni">
            University from which Degree 4 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg4uni"
            aria-describedby="deg4uni"
            placeholder="University from which Degree 4 was obtained?"
            ref={dg4uniref}
            defaultValue={
              facultyDetails.university_from_which_Degree_4_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg4year">Year of Completion of Degree 4</label>
          <input
            type="text"
            className="form-control"
            id="deg4year"
            aria-describedby="deg4year"
            placeholder="Year of Completion of Degree 4"
            ref={dg4yocref}
            defaultValue={facultyDetails.year_of_Completion_of_Degree_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree5">Degree 5</label>
          <input
            type="text"
            className="form-control"
            id="degree5"
            aria-describedby="degree5"
            placeholder="Degree 5"
            ref={dg5ref}
            defaultValue={facultyDetails.degree_5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg5uni">
            University from which Degree 5 was obtained?
          </label>
          <input
            type="text"
            className="form-control"
            id="deg5uni"
            aria-describedby="deg5uni"
            placeholder="University from which Degree 5 was obtained?"
            ref={dg5uniref}
            defaultValue={
              facultyDetails.university_from_which_Degree_5_was_obtained
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="deg5year">Year of Completion of Degree 5</label>
          <input
            type="text"
            className="form-control"
            id="deg5year"
            aria-describedby="deg5year"
            placeholder="Year of Completion of Degree 5"
            ref={dg5yocref}
            defaultValue={facultyDetails.year_of_Completion_of_Degree_5}
          />
        </div>
        <h4>Designations</h4>
        <div className="form-group">
          <label htmlFor="desig1">Designation 1</label>
          <input
            type="text"
            className="form-control"
            id="desig1"
            aria-describedby="desig1"
            placeholder="Designation 1"
            ref={desig1ref}
            defaultValue={facultyDetails.designation_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig1duration">Duration of Designation 1</label>
          <input
            type="text"
            className="form-control"
            id="desig1duration"
            aria-describedby="desig1duration"
            placeholder="Duration of Designation 1"
            ref={desig1duraref}
            defaultValue={facultyDetails.duration_of_Designation_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig1pow">Place of Work of Designation 1</label>
          <input
            type="text"
            className="form-control"
            id="desig1pow"
            aria-describedby="desig1pow"
            placeholder="Place of Work of Designation 1"
            ref={desig1powref}
            defaultValue={facultyDetails.place_of_Work_of_Designation_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig2">Designation 2</label>
          <input
            type="text"
            className="form-control"
            id="desig2"
            aria-describedby="desig2"
            placeholder="Designation 1"
            ref={desig2ref}
            defaultValue={facultyDetails.designation_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig2duration">Duration of Designation 2</label>
          <input
            type="text"
            className="form-control"
            id="desig2duration"
            aria-describedby="desig2duration"
            placeholder="Duration of Designation 2"
            ref={desig2duraref}
            defaultValue={facultyDetails.duration_of_Designation_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig2pow">Place of Work of Designation 2</label>
          <input
            type="text"
            className="form-control"
            id="desig2pow"
            aria-describedby="desig2pow"
            placeholder="Place of Work of Designation 2"
            ref={desig2powref}
            defaultValue={facultyDetails.place_of_Work_of_Designation_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig3">Designation 3</label>
          <input
            type="text"
            className="form-control"
            id="desig3"
            aria-describedby="desig3"
            placeholder="Designation 3"
            ref={desig3ref}
            defaultValue={facultyDetails.designation_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig3duration">Duration of Designation 3</label>
          <input
            type="text"
            className="form-control"
            id="desig3duration"
            aria-describedby="desig3duration"
            placeholder="Duration of Designation 3"
            ref={desig3duraref}
            defaultValue={facultyDetails.duration_of_Designation_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig3pow">Place of Work of Designation 3</label>
          <input
            type="text"
            className="form-control"
            id="desig3pow"
            aria-describedby="desig3pow"
            placeholder="Place of Work of Designation 3"
            ref={desig3powref}
            defaultValue={facultyDetails.place_of_Work_of_Designation_3}
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="desig4">Designation 4</label>
          <input
            type="text"
            className="form-control"
            id="desig4"
            aria-describedby="desig4"
            placeholder="Designation 4"
            ref={desig4ref}
            defaultValue={facultyDetails.designation_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig4duration">Duration of Designation 4</label>
          <input
            type="text"
            className="form-control"
            id="desig4duration"
            aria-describedby="desig4duration"
            placeholder="Duration of Designation 4"
            ref={desig4duraref}
            defaultValue={facultyDetails.duration_of_Designation_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig4pow">Place of Work of Designation 4</label>
          <input
            type="text"
            className="form-control"
            id="desig4pow"
            aria-describedby="desig4pow"
            placeholder="Place of Work of Designation 4"
            ref={desig4powref}
            defaultValue={facultyDetails.place_of_Work_of_Designation_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig5">Designation 5</label>
          <input
            type="text"
            className="form-control"
            id="desig5"
            aria-describedby="desig5"
            placeholder="Designation 5"
            ref={desig5ref}
            defaultValue={facultyDetails.designation_5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig5duration">Duration of Designation 5</label>
          <input
            type="text"
            className="form-control"
            id="desig5duration"
            aria-describedby="desig5duration"
            placeholder="Duration of Designation 5"
            ref={desig5duraref}
            defaultValue={facultyDetails.duration_of_Designation_5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desig5pow">Place of Work of Designation 5</label>
          <input
            type="text"
            className="form-control"
            id="desig5pow"
            aria-describedby="desig5pow"
            placeholder="Place of Work of Designation 5"
            ref={desig5powref}
            defaultValue={facultyDetails.place_of_Work_of_Designation_5}
          />
        </div>
        <h4>Projects</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="projects"
            ref={projref}
            // defaultChecked={
            //   facultyDetails.do_you_have_any_funded_projects === "Yes"
            //     ? true
            //     : false
            // }
          />
          <label className="form-check-label" htmlFor="projects">
            Any funded projects?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="proj1tit">Title of the Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1tit"
            aria-describedby="proj1tit"
            placeholder="Title of the Project 1"
            ref={proj1titref}
            defaultValue={facultyDetails.title_of_the_Project_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj1dur">Duration of Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1dur"
            aria-describedby="proj1dur"
            placeholder="Duration of Project 1"
            ref={proj1duraref}
            defaultValue={facultyDetails.duration_of_Project_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj1amt">Funding Amount for Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1amt"
            aria-describedby="proj1amt"
            placeholder="Funding Amount for Project 1"
            ref={proj1amtref}
            defaultValue={facultyDetails.funding_Amount_for_Project_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj1age">Funding Agency for Project 1</label>
          <input
            type="text"
            className="form-control"
            id="proj1age"
            aria-describedby="proj1age"
            placeholder="Funding Agency for Project 1"
            ref={proj1ageref}
            defaultValue={facultyDetails.funding_Agency_for_Project_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj2tit">Title of the Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2tit"
            aria-describedby="proj2tit"
            placeholder="Title of the Project 2"
            ref={proj2titref}
            defaultValue={facultyDetails.title_of_the_Project_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj2dur">Duration of Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2dur"
            aria-describedby="proj2dur"
            placeholder="Duration of Project 2"
            ref={proj2duraref}
            defaultValue={facultyDetails.duration_of_Project_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj2amt">Funding Amount for Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2amt"
            aria-describedby="proj2amt"
            placeholder="Funding Amount for Project 2"
            ref={proj2amtref}
            defaultValue={facultyDetails.funding_Amount_for_Project_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj2age">Funding Agency for Project 2</label>
          <input
            type="text"
            className="form-control"
            id="proj2age"
            aria-describedby="proj2age"
            placeholder="Funding Agency for Project 2"
            ref={proj2ageref}
            defaultValue={facultyDetails.funding_Agency_for_Project_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj3tit">Title of the Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3tit"
            aria-describedby="proj3tit"
            placeholder="Title of the Project 3"
            ref={proj3titref}
            defaultValue={facultyDetails.title_of_the_Project_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj3dur">Duration of Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3dur"
            aria-describedby="proj3dur"
            placeholder="Duration of Project 3"
            ref={proj3duraref}
            defaultValue={facultyDetails.duration_of_Project_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj3amt">Funding Amount for Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3amt"
            aria-describedby="proj3amt"
            placeholder="Funding Amount for Project 3"
            ref={proj3amtref}
            defaultValue={facultyDetails.funding_Amount_for_Project_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj3age">Funding Agency for Project 3</label>
          <input
            type="text"
            className="form-control"
            id="proj3age"
            aria-describedby="proj3age"
            placeholder="Funding Agency for Project 3"
            ref={proj3ageref}
            defaultValue={facultyDetails.funding_Agency_for_Project_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj4tit">Title of the Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4tit"
            aria-describedby="proj4tit"
            placeholder="Title of the Project 4"
            ref={proj4titref}
            defaultValue={facultyDetails.title_of_the_Project_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj4dur">Duration of Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4dur"
            aria-describedby="proj4dur"
            placeholder="Duration of Project 4"
            ref={proj4duraref}
            defaultValue={facultyDetails.duration_of_Project_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj4amt">Funding Amount for Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4amt"
            aria-describedby="proj4amt"
            placeholder="Funding Amount for Project 4"
            ref={proj4amtref}
            defaultValue={facultyDetails.funding_Amount_for_Project_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj4age">Funding Agency for Project 4</label>
          <input
            type="text"
            className="form-control"
            id="proj4age"
            aria-describedby="proj4age"
            placeholder="Funding Agency for Project 4"
            ref={proj4ageref}
            defaultValue={facultyDetails.funding_Agency_for_Project_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj5tit">Title of the Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5tit"
            aria-describedby="proj5tit"
            placeholder="Title of the Project 5"
            ref={proj5titref}
            defaultValue={facultyDetails.title_of_the_Project_5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj5dur">Duration of Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5dur"
            aria-describedby="proj5dur"
            placeholder="Duration of Project 5"
            ref={proj5duraref}
            defaultValue={facultyDetails.duration_of_Project_5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj5amt">Funding Amount for Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5amt"
            aria-describedby="proj5amt"
            placeholder="Funding Amount for Project 5"
            ref={proj5amtref}
            defaultValue={facultyDetails.funding_Amount_for_Project_5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="proj5age">Funding Agency for Project 5</label>
          <input
            type="text"
            className="form-control"
            id="proj5age"
            aria-describedby="proj5age"
            placeholder="Funding Agency for Project 5"
            ref={proj5ageref}
            defaultValue={facultyDetails.funding_Agency_for_Project_5}
          />
        </div>
        <h4>Teaching Subjects</h4>
        <div className="form-group">
          <label htmlFor="teachsub1">Teaching Subject 1</label>
          <input
            type="text"
            className="form-control"
            id="teachsub1"
            aria-describedby="teachsub1"
            placeholder="Teaching Subject 1"
            ref={ts1}
            defaultValue={facultyDetails.teaching_Subject_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teachsub2">Teaching Subject 2</label>
          <input
            type="text"
            className="form-control"
            id="teachsub2"
            aria-describedby="teachsub2"
            placeholder="Teaching Subject 2"
            ref={ts2}
            defaultValue={facultyDetails.teaching_Subject_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teachsub3">Teaching Subject 3</label>
          <input
            type="text"
            className="form-control"
            id="teachsub3"
            aria-describedby="teachsub3"
            placeholder="Teaching Subject 3"
            ref={ts3}
            defaultValue={facultyDetails.teaching_Subject_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teachsub4">Teaching Subject 4</label>
          <input
            type="text"
            className="form-control"
            id="teachsub4"
            aria-describedby="teachsub4"
            placeholder="Teaching Subject 4"
            ref={ts4}
            defaultValue={facultyDetails.teaching_Subject_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teachsub5">Teaching Subject 5</label>
          <input
            type="text"
            className="form-control"
            id="teachsub5"
            aria-describedby="teachsub5"
            placeholder="Teaching Subject 5"
            ref={ts5}
            defaultValue={facultyDetails.teaching_Subject_5}
          />
        </div>
        <h4>Areas of Interest</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="aoi"
            ref={aoi}
            // defaultChecked={
            //   facultyDetails.do_you_have_any_areas_of_interest === "Yes"
            //     ? true
            //     : false
            // }
          />
          <label className="form-check-label" htmlFor="aoi">
            Any areas of interest?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="aoi1">Areas of Interest 1</label>
          <input
            type="text"
            className="form-control"
            id="aoi"
            aria-describedby="aoi"
            placeholder="Areas of Interest 1"
            ref={aoi1}
            defaultValue={facultyDetails.areas_of_Interest_1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aoi2">Areas of Interest 2</label>
          <input
            type="text"
            className="form-control"
            id="aoi2"
            aria-describedby="aoi2"
            placeholder="Areas of Interest 2"
            ref={aoi2}
            defaultValue={facultyDetails.areas_of_Interest_2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aoi3">Areas of Interest 3</label>
          <input
            type="text"
            className="form-control"
            id="aoi3"
            aria-describedby="aoi3"
            placeholder="Areas of Interest 3"
            ref={aoi3}
            defaultValue={facultyDetails.areas_of_Interest_3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aoi4">Areas of Interest 4</label>
          <input
            type="text"
            className="form-control"
            id="aoi4"
            aria-describedby="aoi4"
            placeholder="Areas of Interest 4"
            ref={aoi4}
            defaultValue={facultyDetails.areas_of_Interest_4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aoi5">Areas of Interest 5</label>
          <input
            type="text"
            className="form-control"
            id="aoi5"
            aria-describedby="aoi5"
            placeholder="Areas of Interest 5"
            ref={aoi5}
            defaultValue={facultyDetails.areas_of_Interest_5}
          />
        </div>
        <h4>Books and Patents</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="books"
            ref={bp}
            // defaultChecked={
            //   facultyDetails.do_you_have_books_and_patents === "Yes"
            //     ? true
            //     : false
            // }
          />
          <label className="form-check-label" htmlFor="books">
            Any books and patents?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="bp1">Book / Patent #1</label>
          <input
            type="text"
            className="form-control"
            id="bp1"
            aria-describedby="bp1"
            placeholder="Book / Patent 1"
            ref={bp1}
            defaultValue={facultyDetails.bp1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp2">Book / Patent #2</label>
          <input
            type="text"
            className="form-control"
            id="bp2"
            aria-describedby="bp2"
            placeholder="Book / Patent 2"
            ref={bp2}
            defaultValue={facultyDetails.bp2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp3">Book / Patent #3</label>
          <input
            type="text"
            className="form-control"
            id="bp3"
            aria-describedby="bp3"
            placeholder="Book / Patent 3"
            ref={bp3}
            defaultValue={facultyDetails.bp3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp4">Book / Patent #4</label>
          <input
            type="text"
            className="form-control"
            id="bp4"
            aria-describedby="bp4"
            placeholder="Book / Patent 4"
            ref={bp4}
            defaultValue={facultyDetails.bp4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp5">Book / Patent #5</label>
          <input
            type="text"
            className="form-control"
            id="bp5"
            aria-describedby="bp5"
            placeholder="Book / Patent 5"
            ref={bp5}
            defaultValue={facultyDetails.bp5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp6">Book / Patent #6</label>
          <input
            type="text"
            className="form-control"
            id="bp6"
            aria-describedby="bp6"
            placeholder="Book / Patent 6"
            ref={bp6}
            defaultValue={facultyDetails.bp6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp7">Book / Patent #7</label>
          <input
            type="text"
            className="form-control"
            id="bp7"
            aria-describedby="bp7"
            placeholder="Book / Patent 7"
            ref={bp7}
            defaultValue={facultyDetails.bp7}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp8">Book / Patent #8</label>
          <input
            type="text"
            className="form-control"
            id="bp8"
            aria-describedby="bp8"
            placeholder="Book / Patent 8"
            ref={bp8}
            defaultValue={facultyDetails.bp8}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp9">Book / Patent #9</label>
          <input
            type="text"
            className="form-control"
            id="bp9"
            aria-describedby="bp9"
            placeholder="Book / Patent 9"
            ref={bp9}
            defaultValue={facultyDetails.bp9}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bp7">Book / Patent #10</label>
          <input
            type="text"
            className="form-control"
            id="bp10"
            aria-describedby="bp10"
            placeholder="Book / Patent 7"
            ref={bp10}
            defaultValue={facultyDetails.bp10}
          />
        </div>
        <h4>Honors and Awards</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="honors"
            ref={honors}
            // defaultChecked={
            //   facultyDetails.do_you_have_honors_awards_and_achievements ===
            //   "Yes"
            //     ? true
            //     : false
            // }
          />
          <label className="form-check-label" htmlFor="honors">
            Any Honors and Awards?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="hon1">Honors / Awards #1</label>
          <input
            type="text"
            className="form-control"
            id="hon1"
            ref={hon1}
            aria-describedby="hon1"
            placeholder="Honors / Awards #1"
            defaultValue={facultyDetails.ha1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon2">Honors / Awards #2</label>
          <input
            type="text"
            className="form-control"
            id="hon2"
            ref={hon2}
            aria-describedby="hon2"
            placeholder="Honors / Awards #2"
            defaultValue={facultyDetails.ha2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon3">Honors / Awards #3</label>
          <input
            type="text"
            className="form-control"
            id="hon3"
            ref={hon3}
            aria-describedby="hon3"
            placeholder="Honors / Awards #3"
            defaultValue={facultyDetails.ha3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon4">Honors / Awards #4</label>
          <input
            type="text"
            className="form-control"
            id="hon4"
            ref={hon4}
            aria-describedby="hon4"
            placeholder="Honors / Awards #4"
            defaultValue={facultyDetails.ha4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon5">Honors / Awards #5</label>
          <input
            type="text"
            className="form-control"
            id="hon5"
            ref={hon5}
            aria-describedby="hon5"
            placeholder="Honors / Awards #5"
            defaultValue={facultyDetails.ha5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon6">Honors / Awards #6</label>
          <input
            type="text"
            className="form-control"
            ref={hon6}
            id="hon6"
            aria-describedby="hon6"
            placeholder="Honors / Awards #6"
            defaultValue={facultyDetails.ha6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon7">Honors / Awards #7</label>
          <input
            type="text"
            className="form-control"
            ref={hon7}
            id="hon7"
            aria-describedby="hon7"
            placeholder="Honors / Awards #7"
            defaultValue={facultyDetails.ha7}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon8">Honors / Awards #8</label>
          <input
            type="text"
            className="form-control"
            ref={hon8}
            id="hon8"
            aria-describedby="hon8"
            placeholder="Honors / Awards #8"
            defaultValue={facultyDetails.ha8}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon9">Honors / Awards #9</label>
          <input
            type="text"
            className="form-control"
            ref={hon9}
            id="hon9"
            aria-describedby="hon9"
            placeholder="Honors / Awards #9"
            defaultValue={facultyDetails.ha9}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hon10">Honors / Awards #10</label>
          <input
            type="text"
            className="form-control"
            ref={hon10}
            id="hon10"
            aria-describedby="hon10"
            placeholder="Honors / Awards #10"
            defaultValue={facultyDetails.ha10}
          />
        </div>
        <h4>Research Publications</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rp"
            ref={rp}
            // defaultChecked={
            //   facultyDetails.do_you_have_research_publications === "Yes"
            //     ? true
            //     : false
            // }
          />
          <label className="form-check-label" htmlFor="rp">
            Any Research Publications?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="rp1">Research Publication #1</label>
          <input
            type="text"
            className="form-control"
            ref={rp1}
            id="rp1"
            aria-describedby="rp1"
            placeholder="Research Publication #1"
            defaultValue={facultyDetails.rp1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp2">Research Publication #2</label>
          <input
            type="text"
            className="form-control"
            id="rp2"
            ref={rp2}
            aria-describedby="rp2"
            placeholder="Research Publication #2"
            defaultValue={facultyDetails.rp2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp3">Research Publication #3</label>
          <input
            type="text"
            className="form-control"
            id="rp3"
            ref={rp3}
            aria-describedby="rp3"
            placeholder="Research Publication #3"
            defaultValue={facultyDetails.rp3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp4">Research Publication #4</label>
          <input
            type="text"
            className="form-control"
            ref={rp4}
            id="rp4"
            aria-describedby="rp4"
            placeholder="Research Publication #4"
            defaultValue={facultyDetails.rp4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp5">Research Publication #5</label>
          <input
            type="text"
            className="form-control"
            id="rp5"
            ref={rp5}
            aria-describedby="rp5"
            placeholder="Research Publication #5"
            defaultValue={facultyDetails.rp5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp6">Research Publication #6</label>
          <input
            type="text"
            ref={rp6}
            className="form-control"
            id="rp6"
            aria-describedby="rp6"
            placeholder="Research Publication #6"
            defaultValue={facultyDetails.rp6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp7">Research Publication #7</label>
          <input
            type="text"
            className="form-control"
            ref={rp7}
            id="rp7"
            aria-describedby="rp7"
            placeholder="Research Publication #7"
            defaultValue={facultyDetails.rp7}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp8">Research Publication #8</label>
          <input
            type="text"
            className="form-control"
            ref={rp8}
            id="rp8"
            aria-describedby="rp8"
            placeholder="Research Publication #8"
            defaultValue={facultyDetails.rp8}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp9">Research Publication #2</label>
          <input
            type="text"
            className="form-control"
            ref={rp9}
            id="rp9"
            aria-describedby="rp9"
            placeholder="Research Publication #9"
            defaultValue={facultyDetails.rp9}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rp10">Research Publication #10</label>
          <input
            type="text"
            className="form-control"
            ref={rp10}
            id="rp10"
            aria-describedby="rp10"
            placeholder="Research Publication #10"
          />
        </div>
        <h4>Workshops & Guest Lectures</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="wg"
            ref={wg}
            // defaultChecked={
            //   facultyDetails.have_you_attended_any_workshops_or_delivered_guest_lectures ===
            //   "Yes"
            //     ? true
            //     : false
            // }
          />
          <label className="form-check-label" htmlFor="wg">
            Any Workshops attended or delivered Guest Lectures?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="wg1">Workshop / Guest Lecture #1</label>
          <input
            type="text"
            className="form-control"
            ref={wg1}
            id="wg1"
            aria-describedby="wg1"
            defaultValue={facultyDetails.wg1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg2">Workshop / Guest Lecture #2</label>
          <input
            type="text"
            className="form-control"
            ref={wg2}
            id="wg2"
            aria-describedby="wg2"
            defaultValue={facultyDetails.wg2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg3">Workshop / Guest Lecture #3</label>
          <input
            type="text"
            className="form-control"
            ref={wg3}
            id="wg3"
            aria-describedby="wg3"
            defaultValue={facultyDetails.wg3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg4">Workshop / Guest Lecture #4</label>
          <input
            type="text"
            className="form-control"
            id="wg4"
            ref={wg4}
            aria-describedby="wg4"
            defaultValue={facultyDetails.wg4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg5">Workshop / Guest Lecture #5</label>
          <input
            type="text"
            className="form-control"
            id="wg5"
            ref={wg5}
            aria-describedby="wg5"
            defaultValue={facultyDetails.wg5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg6">Workshop / Guest Lecture #6</label>
          <input
            type="text"
            className="form-control"
            id="wg6"
            ref={wg6}
            aria-describedby="wg6"
            defaultValue={facultyDetails.wg6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg7">Workshop / Guest Lecture #7</label>
          <input
            type="text"
            className="form-control"
            id="wg7"
            ref={wg7}
            aria-describedby="wg7"
            defaultValue={facultyDetails.wg7}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg8">Workshop / Guest Lecture #8</label>
          <input
            type="text"
            className="form-control"
            id="wg8"
            ref={wg8}
            aria-describedby="wg8"
            defaultValue={facultyDetails.wg8}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg9">Workshop / Guest Lecture #9</label>
          <input
            type="text"
            className="form-control"
            id="wg9"
            ref={wg9}
            aria-describedby="wg9"
            defaultValue={facultyDetails.wg9}
          />
        </div>
        <div className="form-group">
          <label htmlFor="wg10">Workshop / Guest Lecture #10</label>
          <input
            type="text"
            className="form-control"
            id="wg10"
            ref={wg10}
            aria-describedby="wg10"
            defaultValue={facultyDetails.wg10}
          />
        </div>{" "}
        <h4>Membership of Professional Societies</h4>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="ps"
            ref={ps}
            // defaultChecked={
            //   facultyDetails.do_you_have_any_membership_of_professional_societies
            //     ? true
            //     : false
            // }
          />
          <label className="form-check-label" htmlFor="ps">
            Any Membership of Professional Societies?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="ps1">Professional Society #1</label>
          <input
            type="text"
            className="form-control"
            ref={ps1}
            id="ps1"
            aria-describedby="ps1"
            defaultValue={facultyDetails.ps1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps2">Professional Society #2</label>
          <input
            type="text"
            className="form-control"
            ref={ps2}
            id="ps2"
            aria-describedby="ps2"
            defaultValue={facultyDetails.ps2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps3">Professional Society #3</label>
          <input
            type="text"
            className="form-control"
            ref={ps3}
            id="ps3"
            aria-describedby="ps3"
            defaultValue={facultyDetails.ps3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps4">Professional Society #4</label>
          <input
            type="text"
            className="form-control"
            id="ps4"
            ref={ps4}
            aria-describedby="ps4"
            defaultValue={facultyDetails.ps4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps5">Professional Society #5</label>
          <input
            type="text"
            className="form-control"
            ref={ps5}
            id="ps5"
            aria-describedby="ps5"
            defaultValue={facultyDetails.ps5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps6">Professional Society #6</label>
          <input
            type="text"
            className="form-control"
            ref={ps6}
            id="ps6"
            aria-describedby="ps6"
            defaultValue={facultyDetails.ps6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps7">Professional Society #7</label>
          <input
            type="text"
            className="form-control"
            ref={ps7}
            id="ps7"
            aria-describedby="ps7"
            defaultValue={facultyDetails.ps7}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps8">Professional Society #8</label>
          <input
            type="email"
            className="form-control"
            ref={ps8}
            id="ps8"
            aria-describedby="ps8"
            defaultValue={facultyDetails.ps8}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps9">Professional Society #9</label>
          <input
            type="text"
            className="form-control"
            ref={ps9}
            id="ps9"
            aria-describedby="ps9"
            defaultValue={facultyDetails.ps9}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ps10">Professional Society #10</label>
          <input
            type="text"
            className="form-control"
            ref={ps10}
            id="ps10"
            aria-describedby="ps10"
            defaultValue={facultyDetails.ps10}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            submitBtnHandler(e);
          }}
        >
          Submit
        </button>{" "}
        {"             "}
        <Link to="/" className="btn btn-secondary">
          Go back to Faculty List
        </Link>
      </form>
    </div>
  );
}

export default FacultyUpdate;
