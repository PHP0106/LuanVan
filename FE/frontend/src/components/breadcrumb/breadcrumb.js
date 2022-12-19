import React from 'react';

import imageBreadCump from '../../assets/img/breadcrumb.jpg';

export default function Breadcrumb(props) {

    return (
        <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${imageBreadCump})` }} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>{ props.title }</h2>
                            <div className="breadcrumb__option">
                                <a href="./index.html">Home</a>
                                {/* <a href="./index.html">Vegetables</a> */}
                                <span>{ props.title }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}