import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRequest } from '../../api';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import './Request.css'
import { acceptRequest, deleteRequest } from '../../api/adminApi';

export default function BasicTable() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const doit = async () => {
            var dataa = await getRequest()
            console.log(dataa.data);
            setdata(dataa.data);
            console.log(data);
        }
        doit();
    }, [])
    function hello(index) {
        var roww = [...data];
        roww[index].setting = false;
        setdata(roww);
        console.log(data);
    }
    function hello2(index) {
        var roww = [...data];
        roww[index].setting = true;
        setdata(roww);
        console.log(data);
    }
    function accept(index) {
        console.log("called");
        acceptRequest(data[index]._id);
    }
    function deleteData(index) {
        console.log("Delete Called");
        deleteRequest(data[index]._id);
    }
    return (
        <TableContainer component={Paper} style={{ width: "100%", height: "92vh", overflowY: "scroll", overflowX: "hidden" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Agent Name</b></TableCell>
                        <TableCell align="right" onClick={() => { hello() }}><b>Agent Email</b></TableCell>
                        <TableCell align="right"><b>Agent City</b></TableCell>
                        <TableCell align="right"><b>Adhar Card No.</b></TableCell>
                        <TableCell align="right"><b>Bank UPI</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        (row.setting == true) ?
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => { hello(index) }}
                                className='listHover'
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}AABB
                                    {row.setting}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right"><Button variant="contained" onClick={() => { deleteData(index) }}>Delete</Button></TableCell>
                                <TableCell align="right"><Button variant="contained" onClick={() => { accept(index) }}>Accept</Button></TableCell>
                            </TableRow> :
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => { hello2(index) }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                    AA
                                    {row.setting}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.upi}</TableCell>
                                <TableCell align="right">{row.mobile}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
