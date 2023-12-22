package com.KingCurd.fullstackbackend.service;

import com.KingCurd.fullstackbackend.model.User;
import com.KingCurd.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired


    private UserRepository userRepository;
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User registerUser(User user) {
        validateRegistration(user);

        return userRepository.save(user);
    }

    public User loginUser(String usernameOrEmail, String password) {
        Optional<User> user = userRepository.findByUsernameOrEmail( usernameOrEmail,usernameOrEmail);
        if (user.isPresent() && password.equals(user.get().getPassword())) {
            return user.get();
        }
        throw new RuntimeException("Invalid login credentials");
    }

    private void validateRegistration(User user) {
        Optional<User> existingUserByUsername = userRepository.findByUsername(user.getUsername());
        Optional<User> existingUserByEmail = userRepository.findByEmail(user.getEmail());

        if (existingUserByUsername.isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        if (existingUserByEmail.isPresent()) {
            throw new RuntimeException("Email already exists");
        }
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();

    }
}






