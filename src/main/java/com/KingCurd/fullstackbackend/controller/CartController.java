package com.KingCurd.fullstackbackend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.KingCurd.fullstackbackend.service.CartService;
import com.KingCurd.fullstackbackend.pojo.CartPojo;
import com.KingCurd.fullstackbackend.entity.Cart;



import java.util.List;
import java.util.Optional;

@RequestMapping("/cart")
@RestController
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @PostMapping("/save")
    public String saveCart(@Valid @RequestBody CartPojo cartPojo){
        cartService.saveCart(cartPojo);
        return "data created successfully yoh cart-item";
    }
    @GetMapping("/getAll")
    public List<Cart> findAll(){
        return cartService.findAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<Cart> findById(@PathVariable("id") Integer id){
        return cartService.findById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        cartService.deleteById(id);
    }
}
