package com.KingCurd.fullstackbackend.repository;

import com.KingCurd.fullstackbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface ProductRepository extends JpaRepository<Product, Long> {


    Optional<Product> findById(Long id);
}
