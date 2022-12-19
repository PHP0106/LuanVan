import React, { useEffect, useState } from 'react';

import Breadcrumb from '../../../components/breadcrumb/breadcrumb';

export default function CartPage(props) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));
        if (!!cartLocalStorage) {
            setCart(cartLocalStorage);
        }
    }, []);

    var delProductFromCart = (item) => {
        setCart([...cart.filter(el => el.id !== item.id)]);
        localStorage.setItem("Cart", JSON.stringify(cart.filter(el => el.id !== item.id)));
        alert("Bỏ sản phẩm thành công");
        //window.location.reload(); 
    }

    var delCart = () => {
        localStorage.removeItem('Cart');
        setCart([]);
        alert("Hủy giỏ hàng thành công");
        //window.location.reload();   
    }


    return (
        <React.Fragment>
            {/* <!-- Breadcrumb Section Begin --> */}
            <Breadcrumb title="Cart" />
            {/* <!-- Breadcrumb Section End --> */}


            {/* <!-- Shoping Cart Section Begin --> */}
            {
                cart.length === 0 ? (<h3 style={{textAlign:'center'}}>Vui lòng thêm sản phẩm vào giỏ hàng</h3>) : (
                    <section className="shoping-cart spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="shoping__cart__table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="shoping__product">Products</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(item =>
                                                    <tr>
                                                        <td className="shoping__cart__item">
                                                            <img src={item.image} width="50" alt="" />
                                                            <h5>{item.name}</h5>
                                                        </td>
                                                        <td className="shoping__cart__price">
                                                            {item.price} vnd
                                                        </td>
                                                        <td className="shoping__cart__quantity">
                                                            <div className="quantity">
                                                                <div className="pro-qty">
                                                                    <input type="text" value={item.qty} />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="shoping__cart__total">
                                                            {item.price * item.qty} vnd
                                                        </td>
                                                        <td className="shoping__cart__item__close" onClick={() => delProductFromCart(item)}>
                                                            <span className="icon_close" ></span>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="shoping__cart__btns">
                                        <a href="/" className="primary-btn cart-btn">Tiếp tục mua hàng</a>
                                        <a href="#" className="primary-btn cart-btn cart-btn-right" onClick={() => delCart()}>
                                            Hủy Giỏ hàng</a>
                                    </div>
                                </div>
                                <div className="col-lg-6"></div>
                                <div className="col-lg-6">
                                    <div className="shoping__checkout">

                                        <ul>
                                            <li>Tổng tiền <span>{cart.reduce((pre, cur) => pre + cur.price * cur.qty, 0)} vnd</span></li>
                                        </ul>
                                        <a href="checkout" className="primary-btn">Thanh toán</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* <!-- Shoping Cart Section End --> */}
        </React.Fragment>
    )
}

