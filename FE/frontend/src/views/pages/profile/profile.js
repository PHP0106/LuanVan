import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CollapsibleTable from '../../../components/profiles/orderTable/orderTable';
import AddressTable from '../../../components/profiles/addressTable/addressTable';
import Info from '../../../components/profiles/info/info';
import { getDetailUser } from '../../../api/userApi';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginTop: "2rem"
    },
}));


export default function ProfilePage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const userId = localStorage.getItem("user_id");
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        getDetailUser(userId)
            .then((res) => {
                console.log(res);
                if (res.status === 200 && typeof res.data.ErrorCode !== 'undefined') {
                    if (res.data.ErrorCode == 0) {
                        setUserInfo(res.data.Data);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div className="container bootstrap snippet">

                <div className="row">
                    <div className="col-sm-3">
                        <div className="mt-4">
                            <div className="text-center">
                                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                                <h6>Tải lên ảnh...</h6>
                                <input type="file" className="text-center center-block file-upload" />
                            </div>

                            <ul className="list-group mt-3 mb-3">
                                <li className="list-group-item text-muted">Hoạt động <i className="fa fa-dashboard fa-1x"></i></li>
                                <li className="list-group-item text-right"><span className="pull-left"><strong>Lượt share</strong></span> 125</li>
                                <li className="list-group-item text-right"><span className="pull-left"><strong>Lượt thích</strong></span> 13</li>
                                <li className="list-group-item text-right"><span className="pull-left"><strong>Đang theo dõi</strong></span> 78</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className={classes.root}>
                            <AppBar position="static">
                                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                    <Tab label="Hồ sơ" {...a11yProps(0)} />
                                    <Tab label="Danh sách đƠn hàng" {...a11yProps(1)} />
                                    <Tab label="Địa chỉ" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <Info data={userInfo} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <CollapsibleTable />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <AddressTable />
                            </TabPanel>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}