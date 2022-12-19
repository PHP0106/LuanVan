import { useEffect, useState } from 'react';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getListProduct, getProductType } from '../../../api/productApi'
import { Link, useHistory } from 'react-router-dom';

export default function Homepage(props) {

    const history = useHistory();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productInfo1, setProductInfo1] = useState([]);
    const [productInfo2, setProductInfo2] = useState([]);
    const [productInfo3, setProductInfo3] = useState([]);
    const [productInfo4, setProductInfo4] = useState([]);
    const [openModalDel, setOpenModalDel] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false); // to render modal delete
    const [cart, setCart] = useState([]);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addProductToCart = (e, item) => {
        e.preventDefault();
        if (!!cart.find(el => el.id === item.id)) {
            cart.find(el => el.id === item.id).qty++;
            localStorage.setItem('Cart', JSON.stringify(cart));
        } else {
            item.qty = 1;
            localStorage.setItem('Cart', JSON.stringify(cart.concat(item)));
            setCart([...cart].concat(item));
        }
    }

    const getDetail1 = async (id) => {
        await getProductType(id)
            .then((res) => {
                if (res.status === 200) {
                    setProductInfo1(res.data.data)
                    console.log(res.data.data)
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    const getDetail4 = async (id) => {
        await getProductType(id)
            .then((res) => {
                if (res.status === 200) {
                    setProductInfo4(res.data.data)
                    console.log(res.data.data)
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    const getDetail2 = async (id) => {
        await getProductType(id)
            .then((res) => {
                if (res.status === 200) {
                    setProductInfo2(res.data.data)
                    console.log(res.data.data)
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    const getDetail3 = async (id) => {
        await getProductType(id)
            .then((res) => {
                if (res.status === 200) {
                    setProductInfo3(res.data.data)
                    console.log(res.data.data)
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    useEffect(() => {
        // list products
        let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));
        if (!!cartLocalStorage) {
            setCart(cartLocalStorage);
        }
        let params = {
            page: 1,
            rowsperpage: 100,
        };
        getListProduct()
            .then((res) => {
                if (res.status === 200) {
                    setList(res.data.data);
                    setLoading(false);
                    console.log(res.data.data);
                }
            })
            .catch((err) => {
                setList([]);
                setLoading(false);
            });

        getDetail1(1);
        getDetail2(2);
        getDetail3(3);
        getDetail4(4);

    }, [])


    return (
        <React.Fragment>
            {/* <!-- Hero Section Begin --> */}
            ?
            {/* <!-- Hero Section End --> */}

            {/* <!-- Featured Section Begin --> */}
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box style={{ display: 'flex', justifyContent: 'center' }} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="All" value="1" />
                                            <Tab label="Lương thực" value="2" />
                                            <Tab label="Thực Phẩm Tươi Sống" value="3" />
                                            <Tab label="Hàng Công Nghệ Thực Phẩm" value="4" />
                                            <Tab label="Nhu Yếu Phẩm Cần Thiết" value="5" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <div className="row featured__filter">
                                            {list.map((item, index) =>
                                                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                                    <div className="featured__item">
                                                        <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                                            <ul className="featured__item__pic__hover">
                                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                                <li><a href="#" onClick={() => { history.push(`/product/${item.id}`) }}><i className="fa fa-retweet"></i></a></li>
                                                                <li><a href="#" onClick={(event) => addProductToCart(event, item)}><i className="fa fa-shopping-cart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="featured__item__text">
                                                            <h6><a href="#" style={{ color: 'blue', fontWeight: '700' }}>{item.name}</a></h6>
                                                            <h5 style={{ fontWeight: '200' }}>{item.price} VND / {item.unit}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div className="row featured__filter">
                                            {productInfo1.map((item, index) =>
                                                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                                    <div className="featured__item">
                                                        <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                                            <ul className="featured__item__pic__hover">
                                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                                <li><a href="#" onClick={() => { history.push(`/product/${item.id}`) }}><i className="fa fa-retweet"></i></a></li>
                                                                <li><a href="#" onClick={(event) => addProductToCart(event, item)}><i className="fa fa-shopping-cart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="featured__item__text">
                                                            <h6><a href="#" style={{ color: 'blue', fontWeight: '700' }}>{item.name}</a></h6>
                                                            <h5 style={{ fontWeight: '200' }}>{item.price} VND / {item.unit}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <div className="row featured__filter">
                                            {productInfo2.map((item, index) =>
                                                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                                    <div className="featured__item">
                                                        <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                                            <ul className="featured__item__pic__hover">
                                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                                <li><a href="#" onClick={() => { history.push(`/product/${item.id}`) }}><i className="fa fa-retweet"></i></a></li>
                                                                <li><a href="#" onClick={(event) => addProductToCart(event, item)}><i className="fa fa-shopping-cart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="featured__item__text">
                                                            <h6><a href="#" style={{ color: 'blue', fontWeight: '700' }}>{item.name}</a></h6>
                                                            <h5 style={{ fontWeight: '200' }}>{item.price} VND / {item.unit}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </TabPanel>
                                    <TabPanel value="4">
                                        <div className="row featured__filter">
                                            {productInfo3.map((item, index) =>
                                                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                                    <div className="featured__item">
                                                        <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                                            <ul className="featured__item__pic__hover">
                                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                                <li><a href="#" onClick={() => { history.push(`/product/${item.id}`) }}><i className="fa fa-retweet"></i></a></li>
                                                                <li><a href="#" onClick={(event) => addProductToCart(event, item)}><i className="fa fa-shopping-cart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="featured__item__text">
                                                            <h6><a href="#" style={{ color: 'blue', fontWeight: '700' }}>{item.name}</a></h6>
                                                            <h5 style={{ fontWeight: '200' }}>{item.price} VND / {item.unit}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </TabPanel>
                                    <TabPanel value="5">
                                        <div className="row featured__filter">
                                            {productInfo4.map((item, index) =>
                                                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                                    <div className="featured__item">
                                                        <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                                            <ul className="featured__item__pic__hover">
                                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                                <li><a href="#" onClick={() => { history.push(`/product/${item.id}`) }}><i className="fa fa-retweet"></i></a></li>
                                                                <li><a href="#" onClick={(event) => addProductToCart(event, item)}><i className="fa fa-shopping-cart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="featured__item__text">
                                                            <h6><a href="#" style={{ color: 'blue', fontWeight: '700' }}>{item.name}</a></h6>
                                                            <h5 style={{ fontWeight: '200' }}>{item.price} VND / {item.unit}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- Featured Section End --> */}
        </React.Fragment>
    )
};