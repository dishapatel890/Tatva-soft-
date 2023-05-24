import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/Product.css';

function createData(
    id: Number,
    T: String,
    Data: String,
    Query: String,
) {
    return { id, T, Data, Query };
}

const rows = [
    createData(1, 'Followup', 'Data Source 1', 'Test'),
    createData(2, 'Followup', 'Data Source 2', 'Test'),
    createData(3, 'Followup', 'Data Source 3', 'Test'),
    createData(4, 'Followup', 'Data Source 4', 'Test'),
    createData(5, 'Followup', 'Data Source 5', 'Test'),
];

function Product() {
    return (
        <>
            <Header />
            <div className="product">
                <h1><center>Product Component</center></h1><br />
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">T</TableCell>
                            <TableCell align="right">Data&nbsp;</TableCell>
                            <TableCell align="right">Query&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.T}</TableCell>
                                <TableCell align="right">{row.Data}</TableCell>
                                <TableCell align="right">{row.Query}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="success">Edit</Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button className="delete" variant="contained" color='error'>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Product;