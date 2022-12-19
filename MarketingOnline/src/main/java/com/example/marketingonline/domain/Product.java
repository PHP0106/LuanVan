package com.example.marketingonline.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "product")
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productid", nullable = false)
    private Integer productId;

    @Column(name = "productname", nullable = false, length = 200)
    private String productname;

    @Column(name = "producttype", nullable = false)
    private Integer producttype;

    @Column(name = "storeid", nullable = false)
    private Integer storeid;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "vat", nullable = false)
    private Integer vat;

    @Column(name = "saleprice", nullable = false)
    private Integer saleprice;

    @Column(name = "createduser")
    private String createduser;

    @Column(name = "createddate")
    private LocalDate createddate;

    @Column(name = "updateduser")
    private String updateduser;

    @Column(name = "updateddate")
    private LocalDate updateddate;

    @Column(name = "deleteduser")
    private String deleteduser;

    @Column(name = "deleteddate")
    private LocalDate deleteddate;

    @Column(name = "isdeleted")
    private Integer isdeleted;

    @Column(name = "image")
    private String image;

}