// // utils/useLogout.js
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export const useLogout = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const accessToken = localStorage.getItem("accessToken");
//       const refreshToken = localStorage.getItem("refreshToken");

//       if (accessToken && refreshToken) {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         };

//         await axios.post(
//           "http://127.0.0.1:8000/api/logout/",
//           { refresh: refreshToken },
//           config
//         );
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         console.log("Logout successful!");
//         navigate("/account");
//       }
//     } catch (error) {
//       console.error("Failed to logout", error.response?.data || error.message);
//     }
//   };

//   return handleLogout;
// };
