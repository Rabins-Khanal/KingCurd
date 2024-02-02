package com.KingCurd.fullstackbackend.service;

import com.KingCurd.fullstackbackend.entity.Product;
import com.KingCurd.fullstackbackend.pojo.ProductPojo;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    void saveProduct(ProductPojo productPojo) throws IOException;

    List<Product> findAll();

    Optional<Product> getProductById(Integer id);

    void deleteProductById(Integer id);
}
