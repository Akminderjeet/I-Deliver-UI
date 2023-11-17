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
import { getOrders, acceptOrder, deliverOrder, getLocation } from '../../api/agentApi'
import { useNavigate } from 'react-router-dom';
import { getHistory } from '../../api/clientApi';
import PlaceIcon from '@mui/icons-material/Place';
import './History.css'

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row._id}
                </TableCell>
                <TableCell align="left">{row.owner}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell className='history-outer'><PlaceIcon className='accesstimeicon'></PlaceIcon></TableCell>
            </TableRow>
            {/* <TableRow>
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
                                        <TableCell align="right"><Button variant="outlined" onClick={async () => {
                                            const route = '/agent/addNode';
                                            const params = await getLocation(row);

                                            // Use the push method to navigate to the new page with parameters
                                            navigate(route, { state: params });

                                        }}>Show on Map</Button></TableCell>
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
            </TableRow> */}
        </React.Fragment>
    );
}



export default function History() {
    const [orders, setorders] = useState([]);
    useEffect(() => {
        const doit = async () => {
            var dataa = await getHistory();
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
                        <TableCell align="left"><b>Owner</b></TableCell>
                        <TableCell align="left"><b>Status</b></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
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