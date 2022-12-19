package com.example.marketingonline.mapstruct;


import com.example.marketingonline.domain.Store;
import com.example.marketingonline.dto.StoreDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;


public class StoreMapper {
    @Autowired
    private final ModelMapper mapper = new ModelMapper();
    public Store getStore(StoreDTO storeDTO) {
        // Lấy User entity ra từ DB

        // Map thành DTO
        Store store = mapper.map(storeDTO, Store.class);

        return store;
    }


}

