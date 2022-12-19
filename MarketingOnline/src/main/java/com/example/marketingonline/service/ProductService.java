package com.example.marketingonline.service;

import com.example.marketingonline.dto.ProductDTO;

import java.io.IOException;
import java.util.HashMap;

public interface ProductService {
    HashMap<String, Object> getListProduct();
    HashMap<String, Object> lockProduct(Integer productId);
    HashMap<String, Object> unLockProduct(Integer productId);
    HashMap<String, Object> createProduct(ProductDTO productDTO);
    HashMap<String, Object> updateProduct(ProductDTO productDTO);
    HashMap<String, Object> importProductExcel(String fileName) throws IOException;
    HashMap<String, Object> getListProductExcel();
}
