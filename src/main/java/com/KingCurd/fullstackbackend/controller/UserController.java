package com.KingCurd.fullstackbackend.controller;

import com.KingCurd.fullstackbackend.model.User;
import com.KingCurd.fullstackbackend.repository.UserRepository;
import com.KingCurd.fullstackbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/api/users")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@Validated @RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }



        @PostMapping("/login")
        public ResponseEntity<User> loginUser (@RequestParam String usernameOrEmail, @RequestParam String password){
            User loggedInUser = userService.loginUser(usernameOrEmail, password);
            return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
        }
    }
