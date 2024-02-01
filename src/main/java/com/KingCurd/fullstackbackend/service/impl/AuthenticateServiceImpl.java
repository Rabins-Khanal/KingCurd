package com.KingCurd.fullstackbackend.service.impl;

import com.KingCurd.fullstackbackend.entity.User;
import com.KingCurd.fullstackbackend.pojo.AuthenticateRequest;
import com.KingCurd.fullstackbackend.pojo.AuthenticateResponse;
import com.KingCurd.fullstackbackend.repository.UserRepository;
import com.KingCurd.fullstackbackend.security.JwtService;
import com.KingCurd.fullstackbackend.service.AuthenticateService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticateServiceImpl implements AuthenticateService {

    private final UserRepository userRepo;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;


    @Override
    public AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticateRequest.getUserName(), authenticateRequest.getPassword()
                )
        );

        User user= userRepo.getUserByUserName(authenticateRequest.getUserName())
                .orElseThrow(() -> new EntityNotFoundException("User not found."));
        UserDetails userDetails = (UserDetails) user;
        String jwtToken = jwtService.generateToken(userDetails);
        return AuthenticateResponse.builder().token(jwtToken).userId(user.getId()).build();
    }
}
