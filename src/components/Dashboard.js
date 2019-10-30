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
        </TableBody>
        </Table>
     </div>
     </div>
    )
}


export default Dashboard
