import { axiosInstance } from "./_axiosConfig";

export const getListProduct = async (params) => {
    const res = await axiosInstance.get("/product");
    return res;
};

export const getProduct = async (id) => {
    const res = await axiosInstance.get(`/product/${id}`);
    return res;
};

export const getProductType = async (id_type) => {
    const res = await axiosInstance.get(`/product/type/${id_type}`);
    return res;
};