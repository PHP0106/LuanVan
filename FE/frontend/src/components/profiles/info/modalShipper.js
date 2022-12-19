import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Previews from '../../dropzone/dropzone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { upgradeShipper } from '../../../api/userApi';

export default function ModalShipper({ setUserType }) {
  const [open, setOpen] = useState(false);
  const [vaccine, setVaccine] = useState(0);
  const userId = localStorage.getItem("user_id");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSubmit = () => {
    let data = {
      account_id: userId ? parseInt(userId) : 1,
      VACCINE: vaccine,
      id_front_link: "https://luatduonggia.vn/wp-content/uploads/2015/08/dung-chung-minh-nhan-dan-gia-bi-xu-phat-nhu-the-nao.jpg",
      id_back_link: "https://i.pinimg.com/originals/63/21/ae/6321aea41990552b5148a00998413374.jpg",
      covid_image_verification: "https://vcdn-vnexpress.vnecdn.net/2021/09/13/Da-tiem-vaccine-So-suc-khoe-di-9926-9497-1631541611.jpg" // the xanh covid
    }

    upgradeShipper(data)
      .then((res) => {
        console.log(res);
        if (res.status === 200 && typeof res.data.ErrorCode !== 'undefined') {
          if (res.data.ErrorCode == 0) {
            toast.success("Đã gửi đơn yêu cầu thành công, chờ duyệt");
            setUserType("store");
          } else {
            toast.error("Gửi đơn lỗi");
          }
          setOpen(false);
        } else {
          toast.error("Gửi đơn lỗi");
        }
      })
      .catch((err) => {
        toast.error("Thất bại");
      })
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Trở thành người giao hàng
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Đăng ký giao hàng</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vui lòng cung cấp những thông tin dưới đây
          </DialogContentText>
          {/* CMND */}
          <Previews title={"Cung cấp hình ảnh CMND/CCCD mặt trước và sau ở đay"} />
          <div className="mt-3 mb-2">
            <input type="number" className="custom-input" placeholder="Số mũi Vaccine" onChange={e => setVaccine(e.target.value)} />
          </div>
          <Previews title={"Cung cấp hình ảnh chứng nhận tiêm vaccine"} />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>

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
    </div>
  );
}
