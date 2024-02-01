package com.KingCurd.fullstackbackend.service;

import com.KingCurd.fullstackbackend.pojo.AuthenticateRequest;
import com.KingCurd.fullstackbackend.pojo.AuthenticateResponse;

public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
