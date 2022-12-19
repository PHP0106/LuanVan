import React, { useEffect, useState } from 'react';
import UserHeader from './header/userHeader';
import UserFooter from './footer/userFooter';

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/elegant-icons.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/style.css';

import '../../assets/scss/style.scss';

export default function UserLayout(props) {

    return (
        <React.Fragment>
            <UserHeader />

            {props.children}

            <UserFooter />
        </React.Fragment>
    )
};