package com.KingCurd.fullstackbackend.repository;

import com.KingCurd.fullstackbackend.model.Admin;
import com.KingCurd.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByUsernameOrEmail(String username, String email);


}
