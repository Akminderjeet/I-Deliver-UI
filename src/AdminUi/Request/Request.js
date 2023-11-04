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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
    return (
        <TableContainer component={Paper} style={{ width: "100%", height: "100%" }}>
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
                                <TableCell align="right"><Button variant="contained">Delete</Button></TableCell>
                                <TableCell align="right"><Button variant="contained">Accept</Button></TableCell>
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
