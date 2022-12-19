package com.example.marketingonline.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "system_user")
public class SystemUser {
    @Id
    @Column(name = "userid", nullable = false)
    private Integer userId;

    @Column(name = "username", nullable = false, length = 50)
    private String userName;

    @Column(name = "fullname", length = 100)
    private String fullName;

    @Column(name = "gender", nullable = false)
    private Integer gender;

    @Column(name = "address", length = 200)
    private String address;

    @Column(name = "region")
    private Integer region;

    @Column(name = "phonenumber", length = 11)
    private String phoneNumber;

    @Column(name = "usertype", nullable = false)
    private Integer userType;

    @Column(name = "password", nullable = false, length = 100)
    private String password;

    @Column(name = "createduser", length = 20)
    private String createdUser;

    @Column(name = "createddate", nullable = false)
    private LocalDate createdDate;

    @Column(name = "updateduser", length = 20)
    private String updatedUser;

    @Column(name = "updateddate")
    private LocalDate updatedDate;

    @Column(name = "deleteduser", length = 20)
    private String deletedUser;

    @Column(name = "deleteddate")
    private LocalDate deletedDate;

    @Column(name = "isdeleted", nullable = false)
    private Integer isDeleted;

    @Column(name = "token", length = 5000)
    private String token;

    @Column(name = "refresh_token", length = 5000)
    private String refreshToken;

}
