import axios from 'axios';

// create new user  (thêm tài khoản)
export const createUser = async (data) => {
    const url = process.env.REACT_APP_API_BASE_URL_ACCOUNT + 'account/create';
    const token = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    }
    const res = await axios.post(url, data, config);
    return res;
}


// profile
export const getDetailUser = async (id) => {
    const token = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME);
    const url = process.env.REACT_APP_API_BASE_URL_ACCOUNT + 'account/' + id;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        },
    }
    const res = await axios.get(url, config);
    return res;
}

// upgrade to store
export const upgradeStore = async (data) => {
    const url = process.env.REACT_APP_API_BASE_URL_ACCOUNT + 'account/upgrade-to-store';
    const token = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    }
    const res = await axios.post(url, data, config);
    return res;
}

// upgrade to shipper
export const upgradeShipper = async (data) => {
    const url = process.env.REACT_APP_API_BASE_URL_ACCOUNT + 'account/upgrade-to-shipper';
    const token = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    }
    const res = await axios.post(url, data, config);
    return res;
}

