import { axiosInstance } from "./_axiosConfig";

export const AddOrder = async (data) => {
    const res = await axiosInstance.post("/order/sale-orders",data);
    return res;
};

