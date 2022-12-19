package com.example.marketingonline.repository;

import com.example.marketingonline.domain.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SystemUserRepository extends JpaRepository<SystemUser, Integer> {
}
