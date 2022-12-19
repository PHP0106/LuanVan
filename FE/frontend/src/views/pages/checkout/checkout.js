import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import { AddOrder } from '../../../api/orderApi';






export default function CheckoutPage(props) {
    const history = useHistory();
    const [description, setDescription] = useState('');
    const [payment, setPayment] = useState(1)
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));
        if (!!cartLocalStorage) {
            setCart(cartLocalStorage);
        }
    }, []);

    const createOrder = async () => {
        let orderDetail = [];
        cart.forEach(el => {
            orderDetail.push({
                "PRODUCT_ID": el.id,
                "PRICE": el.price,
                "QUANTITY": el.qty
            })
        });
        const order = {
            "customer_id": 1,
            "order_description": description,
            "total": cart.reduce((pre, cur) => pre + cur.price * cur.qty, 0),
        
            "payment_type": payment,
            "listDetails": orderDetail
        };
        await AddOrder(order);
        alert("Đơn hàng được thêm thành công");
        localStorage.removeItem('Cart');
        setCart([]);
        history.push('/');
    }

    return (
        <React.Fragment>
            {/* <!-- Breadcrumb Section Begin --> */}
            <Breadcrumb title="Checkout" />
            {/* <!-- Breadcrumb Section End --> */}


            {/* <!-- Checkout Section Begin --> */}
            <section className="checkout spad">
                <div className="checkout__order">
                    <h4>Your Order</h4>
                    <div className="checkout__order__products">Products <span>Total</span></div>
                    <ul>
                        {
                            cart.map(item =>
                                <li>{item.name} <span>{item.price * item.qty} vnd</span></li>
                            )
                        }
                    </ul>
                    <div className="checkout__order__subtotal">Subtotal <span>{cart.reduce((pre, cur) => pre + cur.price * cur.qty, 0)} vnd</span></div>
                    <div className="checkout__order__total">Total <span>{cart.reduce((pre, cur) => pre + cur.price * cur.qty, 0)} vnd</span></div>
                    Mô tả đơn hàng: <input type="text" classname="checkout_order_description" onChange={event => setDescription(event.target.value)} /><br />
                    Hình thức thanh toán:
                    <select name='payment' onChange={event => setPayment(event.target.value)}>
                        <option value="1">Tiền mặt</option>
                        <option value="2">Thanh toán online</option>
                    </select>
                    <button type="submit" onClick={createOrder} className="site-btn">Tạo đơn hàng </button>
                </div>

            </section>
            {/* <!-- Checkout Section End --> */}
        </React.Fragment>
    )
}
{/* {description} -> ordescription
    {payment}  -> payment*/}

