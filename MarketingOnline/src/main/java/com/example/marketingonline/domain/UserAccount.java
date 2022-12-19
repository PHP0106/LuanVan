//package com.example.marketingonline.domain;
//
//import lombok.Getter;
//import lombok.Setter;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import javax.persistence.Basic;
//import javax.persistence.Column;
//import java.util.Collection;
//
//@Getter
//@Setter
//public class UserAccount implements UserDetails {
//
//    @Basic
//    private String userName;
//
//    @Basic
//    private String password;
//
//    @Basic
//    @Column(name = "is_clock", length = 100)
//    private Boolean isLock;
//
////    @Override
////    public Collection<? extends GrantedAuthority> getAuthorities() {
////        return null;
////    }
//
//    @Override
//    public String getPassword() {
//        return this.password;
//    }
//
//    @Override
//    public String getUsername() {
//        return this.userName;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return !this.getIsLock();
//    }
//}
