// import React from "react";
// import { Navigate } from "react-router-dom";

// const RoleBasedRoute = ({ isAuthenticated, userRole, allowedRoles, children }) => {
//   if (!isAuthenticated) {
    
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(userRole)) {
    
//     return <Navigate to="/not-authorized" />;
//   }

//   return children;
// };

// export default RoleBasedRoute;
