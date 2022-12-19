package com.example.marketingonline.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
@Table(name = "store")
@Entity
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "storeid", nullable = false)
    private Integer storeId;

    @Column(name = "userid", nullable = false)
    private Integer userId;

    @Column(name = "storename", nullable = false, length = 100)
    private String storeName;

    @Column(name = "address", nullable = false, length = 500)
    private String address;

    @Column(name = "phonenumber", nullable = false, length = 11)
    private String phoneNumber;

    @Column(name = "storetype", nullable = false)
    private Integer storeType;

    @Column(name = "createduser")
    private String createdUser;

    @Column(name = "createddate")
    private LocalDate createdDate;

    @Column(name = "updateduser")
    private String updatedUser;

    @Column(name = "updateddate")
    private LocalDate updatedDate;

    @Column(name = "deleteduser")
    private String deletedUser;

    @Column(name = "deleteddate")
    private LocalDate deleteddate;

    @Column(name = "isdeleted")
    private Integer isdeleted = 0;

    @Column(name = "region")
    private Integer region;

    @Column(name = "ratting")
    private Integer ratting;

    @Column(name = "storeprofile")
    private String storeprofile;
}