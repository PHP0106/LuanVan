//package com.example.marketingonline.controller;
//
//import com.example.marketingonline.service.StoreService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//
//@RestController
//@RequestMapping(value = {"/store"})
//public class StoreController {
//
//    @Autowired
//    StoreService storeService;
//
//    @GetMapping(value = {"/getStore"})
//    public ResponseEntity<Object> getStore(Integer storeId){
//        return new ResponseEntity<>(storeService.getStore(storeId), HttpStatus.OK);
//    }
//
//    @GetMapping(value = {"/getListStore"})
//    public ResponseEntity<Object> getListStore(){
//        return new ResponseEntity<>(storeService.getListStore(),HttpStatus.OK);
//    }
//
//    @PutMapping(value = {"/lockStore"})
//    public ResponseEntity<Object> lockStore(
//            @RequestParam Integer storeId
//    ){
//        return new ResponseEntity<>(storeService.lockStore(storeId),HttpStatus.OK);
//    }
//
//    @PutMapping(value = {"/unLockStore"})
//    public ResponseEntity<Object> unLockStore(
//            @RequestParam Integer storeId
//    ){
//        return new ResponseEntity<>(storeService.unLockStore(storeId),HttpStatus.OK);
//    }
//
//    @PostMapping(value = {"/updateStore"})
//    public ResponseEntity<Object> updateStore(@Valid @RequestBody StoreDTO storeDTO){
//        return new ResponseEntity<>(storeService.updateStore(storeDTO), HttpStatus.OK);
//    }
//
//    @PostMapping(value = {"/createStore"})
//    public ResponseEntity<Object> createStore(@Valid @RequestBody StoreDTO storeDTO){
//        return new ResponseEntity<>(storeService.createStore(storeDTO), HttpStatus.OK);
//    }
//}
