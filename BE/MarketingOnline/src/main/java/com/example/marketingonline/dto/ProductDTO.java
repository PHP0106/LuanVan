package com.example.marketingonline.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ProductDTO {
    private Integer productId;
    private String productName;
    private Integer productType;
    private Integer storeId;
    private Integer quantity;
    private Integer vat;
    private Integer salePrice;
    private String createdUser;
    private LocalDate createDate;
    private Integer isDeleted;

    public ProductDTO(
            String productName, Integer productType, Integer storeId, Integer quantity, Integer vat, Integer salePrice,
            String createdUser, LocalDate createDate, Integer isDeleted
    ){

        this.productName = productName;
        this.productType = productType;
        this.storeId = storeId;
        this.quantity = quantity;
        this.vat = vat;
        this.salePrice = salePrice;
        this.createdUser = createdUser;
        this.createDate = createDate;
        this.isDeleted = isDeleted;
    }

    public ProductDTO(){
    }
}
