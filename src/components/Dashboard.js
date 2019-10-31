import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
  } from "@material-ui/core";
import Navigation from './Navigation';

  const ITEM_HEIGHT = 48;
const Dashboard = (props) => {
    // fill out this component
 

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

    return (
        <div>
        <Navigation />
        <div className="dashboard-div">
    
        
     <Table className="table">
       <TableHead>

          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Hours</TableCell>
            <TableCell align="left">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell align="left">HomeSlice Pizza</TableCell>
                <TableCell align="left">HomeSlice Pizza is an independent neighborhood pizza joint serving authentic NY-styled pizza- by the pie or by the slice- to nice people like you. We offer our homemade, hand tossed, bona fide pies for either dine in or carry out. </TableCell>
                <TableCell align="left">11AM - 11PM</TableCell>
                <TableCell align="left">1415 S Congress Ave, Austin TX, 78704</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Joe's Coffee</TableCell>
                <TableCell align="left">Stumptown Coffee, Baked goods & sandwiches in colorful digs with outdoor area for people-watching.</TableCell>
                <TableCell align="left">7AM - 9PM</TableCell>
                <TableCell align="left">242 W 2nd St, Austin TX, 78701</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">The Brass Tap</TableCell>
                <TableCell align="left">Festive pub with a patio offering myriad beer options, wine & TVs tuned to sports plus live music.</TableCell>
                <TableCell align="left">11AM - 2AM</TableCell>
                <TableCell align="left">10910 Domain Dr, Austin, TX 78758</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">IPIC Austin</TableCell>
                <TableCell align="left">Upscale cinema chain with plush seating, gourmet light bites & cocktails, plus in-theater service.</TableCell>
                <TableCell align="left">11AM - 1AM</TableCell>
                <TableCell align="left">3225 Amy Donovan Plaza, Austin, TX 78758</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">Gloria's Latin Cuisine</TableCell>
                <TableCell align="left">Family-friendly chain featuring Salvadoran & Tex-Mex favorites, plus mojitos & margaritas.</TableCell>
                <TableCell align="left">11AM - 10PM</TableCell>
                <TableCell align="left">3309 Esperanza Crossing Suite #100, Austin, TX 78758</TableCell>
            </TableRow>
           
        </TableBody>
        </Table>
     </div>
     </div>
    )
}


export default Dashboard
