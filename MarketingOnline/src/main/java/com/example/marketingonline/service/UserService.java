//package com.example.marketingonline.service;
//
//import com.example.marketingonline.repository.SystemUserRepository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.stereotype.Service;
//
//
//
//@Service
//public class UserService implements UserDetailsService {
//
//    @Autowired
//    private SystemUserRepository systemUserRepository;
//    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        if (StringUtil.isNullOrEmpty(username)) {
//            return null;
//        }
//
//        List<SystemUser> userList = systemUserRepository.findAll();
//
//        UserAccount userAccount = new UserAccount();
//        userAccount.setUserName(userList.get(0).getUserName());
//
//
//        String encryptPassword = bCryptPasswordEncoder.encode(userList.get(0).getPassword());
//
//        userAccount.setPassword(encryptPassword);
//        userAccount.setIsLock(false);
//        return userAccount;
//    }
//}