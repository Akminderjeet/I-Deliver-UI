import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { getOrders } from '../../api/agentApi'

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.order._id}
                </TableCell>
                <TableCell align="left">{row.order.status === 0 ? <h6>Home</h6> : <h6>{row.current}</h6>}</TableCell>
                <TableCell align="left">{row.order.next}</TableCell>
                <TableCell align="left"> <Button variant="contained">Picked</Button></TableCell>
                <TableCell align="left"> <Button variant="contained">Delivered</Button></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Additional Information
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Payment</TableCell>
                                        <TableCell>Weight</TableCell>
                                        <TableCell align="right">Amount Mode</TableCell>
                                        <TableCell align="right">Contact Info</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {<h6>dfd</h6>}
                                        </TableCell>
                                        <TableCell>{ }</TableCell>
                                        <TableCell align="right">{ }</TableCell>
                                        <TableCell align="right">
                                            { }
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}



export default function Orders() {
    const [orders, setorders] = useState([]);
    useEffect(() => {
        const doit = async () => {
            var dataa = await getOrders();
            console.log(dataa.data);
            setorders(dataa.data);
            console.log(orders);
        }
        doit();
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell><b>OrderID</b> </TableCell>
                        <TableCell align="left"><b>Pickup</b></TableCell>
                        <TableCell align="left"><b>Delivery</b></TableCell>
                        <TableCell align="left"><b>Picked Up</b></TableCell>
                        <TableCell align="left"><b>Delivered</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}