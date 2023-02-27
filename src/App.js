// import React, { useEffect, useState } from "react";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';

// function App() {

//   const [figure, setFigures] = useState([]);

//   const fetchData = () => {
//     return fetch("http://localhost:8080/api/figures")
//           .then((response) => response.json())
//           .then((data) => setFigures(data));
//   }

//   useEffect(() => {
//     fetchData();
//   },[])

//   return ( 
//   <div>
//     <Box sx={{ flexGrow: 1 }}>
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//         >
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Figuren 
//         </Typography>
//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
//   </Box>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">ID</TableCell>
//             <TableCell style={{width: '70%'}}>Name</TableCell>
//             <TableCell style={{width: '10%'}} align="center"  >Race</TableCell>
//             <TableCell style={{width: '5%'}}  align="left">Quantity</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {figure && figure.length > 0 && figure.map((figureObj, index)=> (
//             <TableRow
//               key={figureObj.id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//               <TableCell>{figureObj.id}</TableCell>
//               <TableCell>{figureObj.name}</TableCell>
//               <TableCell align="right">{figureObj.race}</TableCell>
//               <TableCell align="right">{figureObj.quantity}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div> 
//   );
// }

// export default App;

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Figures from "./Figures";
import FigureDetail from "./FigureDetail";


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Figures />} />
          <Route path="figures/:id" element={<FigureDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
