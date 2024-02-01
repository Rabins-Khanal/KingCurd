package com.KingCurd.fullstackbackend.service.impl;

import com.KingCurd.fullstackbackend.repository.ProductRepository;
import com.KingCurd.fullstackbackend.util.ImageToBase64;
import com.KingCurd.fullstackbackend.entity.Cart;
import com.KingCurd.fullstackbackend.pojo.CartPojo;
import com.KingCurd.fullstackbackend.service.CartService;
import com.KingCurd.fullstackbackend.entity.Product;
import com.KingCurd.fullstackbackend.repository.CartRepository;








import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    ImageToBase64 imageToBase64 = new ImageToBase64();
    @Override
    public void saveCart(CartPojo cartPojo) {
        Cart cart=new Cart();
        if(cartPojo.getId()!=null){
            cart=cartRepository.findById(cartPojo.getId())
                    .orElseThrow(()-> new NoSuchElementException("No data found"));
        }

        cart.setQuantity(cartPojo.getQuantity());


       Product product=productRepository.findById(cartPojo.getProductId()).get();
        cart.setProduct(product);
        cartRepository.save(cart);

    }


    @Override
    public List<Cart> findAll() {
        return cartRepository.findAll().stream().map(product -> {
            product.setProductImage(imageToBase64.getImageBase64("/productImage/" + product.getProduct().getProductImage()));
            return product;
        }).collect(Collectors.toList());
    }

    @Override
    public Optional<Cart> findById(Integer id) {
        return cartRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        cartRepository.deleteById(id);
    }


}
