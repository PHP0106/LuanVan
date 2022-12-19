package com.example.marketingonline.controller;


import com.example.marketingonline.dto.ProductDTO;
import com.example.marketingonline.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping(value = {"/product"})
public class ProductController {
    @Autowired
    ProductService productService;


    @GetMapping(value = "/getListProduct")
    public ResponseEntity<Object> getListProduct(){
        return new ResponseEntity<>(productService.getListProduct(), HttpStatus.OK);
    }

    @PutMapping(value = {"/lockProduct"})
    public ResponseEntity<Object> lockProduct(
            @RequestParam Integer productId){
        return new ResponseEntity<>(productService.lockProduct(productId),HttpStatus.OK);
    }

    @PutMapping(value = {"/unLockProduct"})
    public ResponseEntity<Object> unLockProduct(
            @RequestParam Integer productId){
        return new ResponseEntity<>(productService.unLockProduct(productId),HttpStatus.OK);
    }

    @PostMapping(value = {"/createProduct"})
    public ResponseEntity<Object> createProduct(@Valid @RequestBody ProductDTO productDTO){
        return new ResponseEntity<>(productService.createProduct(productDTO), HttpStatus.OK);
    }

    @PostMapping(value = {"/updateProduct"})
    public ResponseEntity<Object> updateProduct(@Valid @RequestBody ProductDTO productDTO){
        return new ResponseEntity<>(productService.updateProduct(productDTO), HttpStatus.OK);
    }

    @GetMapping(value = {"/getListProductExcel"})
    public ResponseEntity<Object>getListProductExcel(){
        return new ResponseEntity<>(productService.getListProductExcel(),HttpStatus.OK);
    }

    @PostMapping(value = {"/importProductExcel"})
    public ResponseEntity<Object> importProductExcel(@RequestParam String fileName) throws IOException {
        return new ResponseEntity<>(productService.importProductExcel(fileName), HttpStatus.OK);
    }
}
