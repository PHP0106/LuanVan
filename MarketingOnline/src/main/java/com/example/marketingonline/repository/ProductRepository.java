package com.example.marketingonline.repository;

import com.example.marketingonline.domain.Product;
import com.example.marketingonline.dto.ProductDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value =
            "SELECT DISTINCT NEW com.example.marketingonline.dto.ProductDTO(pr.productname, pr.producttype, pr.storeid, pr.quantity, pr.vat, pr.saleprice, pr.createduser, pr.createddate, pr.isdeleted) " +
                    "FROM Product pr")
    List<ProductDTO> getListAll();
}
