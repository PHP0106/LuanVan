package com.example.marketingonline.dto;


import lombok.Data;

@Data
public class StoreDTO {
    private Integer storeId;
    private Integer userId;
    private String storeName;
    private String address;
    private String phoneNumber;
    private Integer storeType;

    public StoreDTO(
            Integer storeId, Integer userId,  String storeName, String address, String phoneNumber, Integer storeType
    ){
        this.storeId = storeId;
        this.userId = userId;
        this.storeName = storeName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.storeType = storeType;
    }

    public StoreDTO(){

    }
}
