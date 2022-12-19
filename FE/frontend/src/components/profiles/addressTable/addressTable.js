import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import Modal from '../../modal/modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, phone, address, isDefault) {
    return { name, phone, address, isDefault };
}

const rows = [
    createData('Nguyen Manh', '0912312313', 'Dak Lak', 1),
    createData('Duong Nhan', '0912313123', 'Long An', 0),
    createData('Khanh', '0912313123', 'HCM', 0),
    createData('Phat', '0912313123', 'Ho Chi Minh', 0),
    createData('Tien', '0912313123', 'Sai gon', 0),
];

export default function BasicTable() {
    const classes = useStyles();

    const [value, setValue] = useState('female');
    const [openModalDel, setOpenModalDel] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false); // to render modal delete

    function handleDefault(event) {

    }

    function confirmDelete(item) {
        setShowModalDel(true);
        setOpenModalDel(true);
    }

    function submitDelete(type) {
        setOpenModalDel(false);
        toast.success("Xoá địa chỉ thành công")
    }

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="right">

                                    <Button size="small" variant="outlined" color="primary" disabled={row.isDefault == 1 ? true : false}>
                                        Thiết lập mặc định
                                    </Button>

                                </TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" disabled={row.isDefault == 1 ? true : false}>
                                        <DeleteIcon onClick={() => confirmDelete(row)} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {showModalDel
                ?
                <Modal
                    title="Are you sure you want to delete this address?"
                    clrBtnRight="primary"
                    open={openModalDel}
                    setOpen={setOpenModalDel}
                    handleSubmit={() => submitDelete('lock')}
                />
                : null
            }

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </React.Fragment>
    );
}
