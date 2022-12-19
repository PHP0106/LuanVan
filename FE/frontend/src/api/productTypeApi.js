import { axiosInstance } from "./_axiosConfig";

export const getListProductType = async (params) => {
    const res = await axiosInstance.get("/product/productType");
    return res;
};