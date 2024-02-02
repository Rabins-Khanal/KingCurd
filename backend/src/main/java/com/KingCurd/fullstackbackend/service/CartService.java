package com.KingCurd.fullstackbackend.service;



import com.KingCurd.fullstackbackend.pojo.CartPojo;
import com.KingCurd.fullstackbackend.entity.Cart;


import java.util.List;


import java.util.Optional;

public interface CartService {

    void saveCart(CartPojo cartPojo);

    List<Cart> findAll();

    Optional<Cart> findById(Integer id);

    void deleteById(Integer id);
}
