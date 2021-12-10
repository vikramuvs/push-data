import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/fd_responses/");
};

export default { getAll };

// axios
//     .get("/user", {
//       params: {
//         ID: 12345,
//       },
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });

//   axios
//     .post("/user", {
//       firstName: "Fred",
//       lastName: "Flintstone",
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   function getUserAccount() {
//     return axios.get("/user/12345");
//   }

//   function getUserPermissions() {
//     return axios.get("/user/12345/permissions");
//   }

//   Promise.all([getUserAccount(), getUserPermissions()]).then(function (
//     results
//   ) {
//     const acct = results[0];
//     const perm = results[1];
//   });
