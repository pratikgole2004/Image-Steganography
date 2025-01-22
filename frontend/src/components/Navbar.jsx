// import React from "react";

// function Navbar() {
//   return (
//     <div style={styles.navbar}>
//       <h2 style={styles.logo}>Image Steganography</h2>
//     </div>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: "#333",
//     padding: "15px",
//     textAlign: "center",
//     color: "#fff",
//     borderRadius: "10px 10px 0 0",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     marginBottom: "20px",
//   },
//   logo: {
//     fontSize: "1.8em",
//     fontWeight: "bold",
//     margin: 0,
//   },
// };

// export default Navbar;

/*Working code ................. */
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/encode">Encode Message</Link></li>
//         <li><Link to="/decode">Decode Message</Link></li>
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
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
    },
    ul: {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      gap: "20px",
    },
    li: {
      display: "inline",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/encode" style={styles.link}>Encode Message</Link>
        </li>
        <li style={styles.li}>
          <Link to="/decode" style={styles.link}>Decode Message</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
