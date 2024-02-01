package com.KingCurd.fullstackbackend.service;

import com.KingCurd.fullstackbackend.entity.Order;
import com.KingCurd.fullstackbackend.pojo.OrderPojo;

import java.util.List;


import java.util.List;
import java.util.Optional;

public interface OrderService {


    void saveItem(OrderPojo orderPojo);

    List<Order> findAll();

    Optional<Order> findById(Integer id);

    void deleteById(Integer id);
}

