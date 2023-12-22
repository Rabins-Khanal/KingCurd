package com.KingCurd.fullstackbackend.controller;

import com.KingCurd.fullstackbackend.model.Admin;
import com.KingCurd.fullstackbackend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admins")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/register")
    public ResponseEntity<Admin> registerAdmin(@Validated @RequestBody Admin admin) {
        Admin registeredAdmin = adminService.registerAdmin(admin);
        return new ResponseEntity<>(registeredAdmin, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Admin> loginAdmin(@RequestParam String usernameOrEmail, @RequestParam String password) {
        Admin loggedInAdmin = adminService.loginAdmin(usernameOrEmail, password);
        return new ResponseEntity<>(loggedInAdmin, HttpStatus.OK);
    }
}


