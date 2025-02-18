
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const styles = {
//     nav: {
//       padding: "10px 20px",
//       backgroundColor: "#333",
//       color: "#fff",
//       display: "flex",
//       justifyContent: "space-between",
//     },
//     ul: {
//       listStyleType: "none",
//       margin: 0,
//       padding: 0,
//       display: "flex",
//       gap: "20px",
//     },
//     li: {
//       display: "inline",
//     },
//     link: {
//       color: "#fff",
//       textDecoration: "none",
//     },
//   };

//   return (
//     <nav style={styles.nav}>
//       <ul style={styles.ul}>
//         <li style={styles.li}>
//           <Link to="/encode" style={styles.link}>Encode Message</Link>
//         </li>
//         <li style={styles.li}>
//           <Link to="/decode" style={styles.link}>Decode Message</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    nav: {
      padding: "15px 30px",
      backgroundColor: "#003366",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    ul: {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      gap: "30px",
    },
    li: {
      display: "inline",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "600",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#66ccff",
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/encode" style={styles.link} className="navbar-link">
            Encode Message
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/decode" style={styles.link} className="navbar-link">
            Decode Message
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
