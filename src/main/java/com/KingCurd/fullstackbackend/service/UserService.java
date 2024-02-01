package com.KingCurd.fullstackbackend.service;

import com.KingCurd.fullstackbackend.entity.User;
import com.KingCurd.fullstackbackend.pojo.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {

    void saveUser(UserPojo userPojo);

    List<User> getAllData();

    Optional<User> getById(Integer id);

    void deleteById(Integer id);
}
