// // src/components/LoggedInMessage.jsx
import React from "react";

const LoggedInMessage = ({ submitLogout }) => {
  return (
    <div>
      <h2>You're logged in!</h2>
      <form onSubmit={submitLogout}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
};

export default LoggedInMessage;
//////////////////////////////////////////////////
// import React from "react";

// const LoggedInMessage = ({ submitLogout }) => {
//   return (
//     <div>
//       <h2>You're logged in!</h2>
//       <form onSubmit={submitLogout}>
//         <button type="submit">Log out</button>
//       </form>
//     </div>
//   );
// };

// export default LoggedInMessage;
