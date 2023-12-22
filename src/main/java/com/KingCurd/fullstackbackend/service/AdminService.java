package com.KingCurd.fullstackbackend.service;

import com.KingCurd.fullstackbackend.model.Admin;
import com.KingCurd.fullstackbackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin registerAdmin(Admin admin) {
        // Add validation or specific logic for admin registration
        return adminRepository.save(admin);
    }

    public Admin loginAdmin(String usernameOrEmail, String password) {
        Optional<Admin> admin = adminRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail);
        if (admin.isPresent() && password.equals(admin.get().getPassword())) {
            return admin.get();
        }
        throw new RuntimeException("Invalid admin login credentials");
    }
}


