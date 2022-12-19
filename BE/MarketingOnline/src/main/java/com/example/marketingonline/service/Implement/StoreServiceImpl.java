//package com.example.marketingonline.service.Implement;
//
//import com.example.marketingonline.common.ResponseUtil;
//import com.example.marketingonline.domain.Store;
//import com.example.marketingonline.repository.StoreRepository;
//import com.example.marketingonline.service.StoreService;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//import java.util.HashMap;
//import java.util.List;
//
//
//@Service
//public class StoreServiceImpl implements StoreService {
//
//    @Autowired
//    private StoreRepository storeRepository;
//
//    @Override
//    public HashMap<String, Object> getStore(Integer storeId) {
//        Store store = storeRepository.findById(storeId).orElse(null);
//        if(store == null){
//            return ResponseUtil.errorNotFound("storeId");
//        }
//        return ResponseUtil.succeed(store);
//    }
//
//    @Override
//    public HashMap<String, Object> getListStore() {
//
//        List<Store> storeList = storeRepository.findAll();
//        if(storeList.isEmpty()){
//            return ResponseUtil.errorNotFound("store");
//        }
//        return ResponseUtil.succeed(storeList);
//    }
//
//    @Override
//    public HashMap<String, Object> lockStore(Integer storeId) {
//        Store store = storeRepository.findById(storeId).orElse(null);
//        if(store == null){
//            return ResponseUtil.errorNotFound("store");
//        }
//        store.setIsdeleted(1);
//        store.setDeleteddate(LocalDate.now());
//        storeRepository.save(store);
//        return ResponseUtil.succeed();
//    }
//
//    @Override
//    public HashMap<String, Object> unLockStore(Integer storeId) {
//        Store store = storeRepository.findById(storeId).orElse(null);
//        if(store == null){
//            return ResponseUtil.errorNotFound("store");
//        }
//        store.setIsdeleted(0);
//        store.setDeleteddate(null);
//        storeRepository.save(store);
//        return ResponseUtil.succeed();
//    }
//
//    @Override
//    public HashMap<String, Object> updateStore(StoreDTO storeDTO) {
//        Store store = storeRepository.findById(storeDTO.getStoreId()).orElse(null);
//        if(store == null){
//            return ResponseUtil.errorNotFound("store");
//        }
//        store.setUserId(storeDTO.getUserId());
//        store.setStoreName(storeDTO.getStoreName());
//        store.setAddress(storeDTO.getAddress());
//        store.setPhoneNumber(storeDTO.getPhoneNumber());
//        store.setStoreType(storeDTO.getStoreType());
//        storeRepository.save(store);
//        return ResponseUtil.succeed();
//    }
//
//    @Override
//    public HashMap<String, Object> createStore(StoreDTO storeDTO) {
//        StoreMapper storeMapper = new StoreMapper();
//        Store store = storeMapper.getStore(storeDTO);
//        store.setCreatedDate(LocalDate.now());
////        store.setIsdeleted(0);
//        storeRepository.save(store);
//        return ResponseUtil.succeed();
//    }
//}
