import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalSeller from './modalSeller';
import ModalShipper from './modalShipper';

export default function Info({ data }) {

    const [userType, setUserType] = useState(localStorage.getItem("user_type"))

    function saveProfile() {
        toast.success("Cập nhật thành công")
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-3">
                    <label>Username</label>
                </div>
                <div className="col-md-9">
                    <p>{data ? data.user_name : "Default"}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label>Tên</label>
                </div>
                <div className="col-md-9">
                    <input type="text" id="full_name" name="full_name" value={data ? data.full_name : "Default"} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-3">
                    <label>Email</label>
                </div>
                <div className="col-md-9">
                    <p>{data ? data.email : "Default"}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label>Giới tính</label>
                </div>
                <div className="col-md-9">
                    <p>Nam</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label>Ngày sinh</label>
                </div>
                <div className="col-md-9">
                    <p>0101/1999</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label>Số điện thoại</label>
                </div>
                <div className="col-md-9">
                    <input type="text" id="phone_number" name="phone_number" value={data ? data.phone : "Default"} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-3">
                    <label>Nghề nghiệp</label>
                </div>
                <div className="col-md-9">
                    <input type="text" id="profession" name="profession" value={"Web Developer and Designe"} />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-3">
                    <label>Loại tài khoản</label>
                </div>
                <div className="col-md-9">
                    <p>
                        {
                            data
                                ? data.account_type == "shipper" 
                                    ? "Người giao hàng" : data.account_type == "store" ? "Người bán" 
                                    : "Người mua"
                                : "Người mua"
                        }
                    </p>
                    {userType == 'customer'
                        ?
                        <div>
                            <div className="mt-2">
                                <ModalSeller setUserType={setUserType} />
                            </div>
                            <div className="mt-2">
                                <ModalShipper setUserType={setUserType} />
                            </div>
                        </div>
                        : ""
                    }
                </div>
            </div>

            <div className="mb-3">
                <Button variant="contained" color="primary" onClick={saveProfile}>
                    Lưu
                </Button>
            </div>


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
    )
}