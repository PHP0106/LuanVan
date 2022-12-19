import { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Link, useHistory, useParams } from 'react-router-dom';
import { getProduct, getProductType } from '../../../api/productApi';

function ProductDetailPage() {
    const params = useParams();
    const [cart,setCart] = useState([]);
    const accId = params.id;
    console.log('accId:', accId);
    console.log('params', params)

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [accInfo, setAccInfo] = useState();
    // state
    const [loading, setLoading] = useState(false); // loading page
    const addProductToCart = (e,item) => {
        e.preventDefault();
        if(!!cart.find(el=>el.id===item.id)){
            cart.find(el=>el.id===item.id).qty++;
            localStorage.setItem('Cart',JSON.stringify(cart));
        } else {
            item.qty = 1;
            localStorage.setItem('Cart',JSON.stringify(cart.concat(item)));
            setCart([...cart].concat(item));
        }
        alert("Thêm giỏ hàng thành công");
    }

    const getDetail = async (id) => {
        await getProduct(id)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setAccInfo(res.data.data)
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }



    useEffect(() => {
        let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));
        if(!!cartLocalStorage){
            setCart(cartLocalStorage);
        }
        let params = {
            page: 1,
            rowsperpage: 100,
        };
        setLoading(true);
        getDetail(accId);
    }, [accId]);


    return (
        <React.Fragment>
            {

                accInfo ?
                    <section>
                        {/* <!-- Breadcrumb Section Begin --> */}
                        <Breadcrumb title={accInfo.name} />

                        {/* <!-- Product Details Section Begin --> */}
                        <section className="product-details spad">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="product__details__pic">
                                            <div className="product__details__pic__item">
                                                <img className="product__details__pic__item--large"
                                                    src={accInfo.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="product__details__text">
                                            <h3>{accInfo.name}</h3>
                                            <div className="product__details__rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <span>(18 reviews)</span>
                                            </div>
                                            <div className="product__details__price">{accInfo.price} VND</div>
                                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                                vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                                                quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                                            <div className="product__details__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="primary-btn" onClick={(event)=>addProductToCart(event,accInfo)}>Thêm vào giỏ hàng</a>
                                            <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                                            <ul>
                                                <li><b>Availability</b> <span>In Stock</span></li>
                                                <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                                <li><b>Weight</b> <span>0.5 kg</span></li>
                                                <li><b>Share on</b>
                                                    <div className="share">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <Box style={{ display: 'flex', justifyContent: 'center' }} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                    <Tab label="Mô tả sản phẩm" value="1" />
                                                    <Tab label="Đánh giá" value="2" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">Item One</TabPanel>
                                            <TabPanel value="2">Item Two</TabPanel>
                                        </TabContext>
                                    </Box>
                                </div>
                            </div>
                        </section>
                    </section>
                    : null
            }



        </React.Fragment>
    )
}
export default ProductDetailPage;
