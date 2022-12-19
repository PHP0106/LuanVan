package com.example.marketingonline.service.Implement;


import com.example.marketingonline.common.ImportExcel;
import com.example.marketingonline.common.ResponseUtil;
import com.example.marketingonline.domain.Product;
import com.example.marketingonline.dto.ProductDTO;
import com.example.marketingonline.mapstruct.ProductMapper;
import com.example.marketingonline.repository.ProductRepository;
import com.example.marketingonline.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
//    @Autowired
//    private ProductMapper productMapper;


    @Override
    public HashMap<String, Object> getListProduct() {

        List<Product> productList = productRepository.findAll();

        if (productList.isEmpty()){
            return ResponseUtil.errorNotFound("shop");
        }

        return ResponseUtil.succeed(productList);
    }

    @Override
    public HashMap<String, Object> lockProduct(Integer productId) {
        Product product = productRepository.findById(productId).orElse(null);
        if(product == null){
            return ResponseUtil.errorNotFound("productId");
        }

        product.setIsdeleted(1);
        productRepository.save(product);
        return ResponseUtil.succeed();
    }

    @Override
    public HashMap<String, Object> unLockProduct(Integer productId) {
        Product product = productRepository.findById(productId).orElse(null);
        if(product == null){
            return ResponseUtil.errorNotFound("productId");
        }
        product.setIsdeleted(0);
        productRepository.save(product);
        return ResponseUtil.succeed();
    }

    @Override
    public HashMap<String, Object> createProduct(ProductDTO productDTO) {
//       X
        return ResponseUtil.succeed();
    }

    @Override
    public HashMap<String, Object> updateProduct(ProductDTO productDTO) {
        Product product = productRepository.findById(productDTO.getProductId()).orElse(null);
        if(product==null){
            return ResponseUtil.errorNotFound("productId");
        }
        product.setProductname(productDTO.getProductName());
        product.setProducttype(productDTO.getProductType());
        product.setStoreid(productDTO.getStoreId());
        product.setQuantity(productDTO.getQuantity());
        product.setCreateduser(productDTO.getCreatedUser());
        product.setVat(productDTO.getVat());
        product.setSaleprice(productDTO.getSalePrice());
        product.setCreateddate(LocalDate.now());
        product.setIsdeleted(productDTO.getIsDeleted());
        productRepository.save(product);
        return ResponseUtil.succeed();
    }

    @Override
    public HashMap<String, Object> importProductExcel(String fileName) throws IOException {
        List<ProductDTO> productDTOList = ImportExcel.writeExcel(fileName);
        for(ProductDTO productDTO : productDTOList){
            createProduct(productDTO);
        }
        return ResponseUtil.succeed();
    }

    @Override
    public HashMap<String, Object> getListProductExcel() {
        return null;
    }
}
