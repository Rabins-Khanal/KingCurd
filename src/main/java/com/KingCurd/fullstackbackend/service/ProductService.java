package com.KingCurd.fullstackbackend.service;

import com.KingCurd.fullstackbackend.model.Product;
import com.KingCurd.fullstackbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> existingProduct = productRepository.findById(id);

        if (existingProduct.isPresent()) {
            Product productToUpdate = existingProduct.get();
            productToUpdate.setName(updatedProduct.getName());
            productToUpdate.setPrice(updatedProduct.getPrice());
            productToUpdate.setDescription(updatedProduct.getDescription());
            productToUpdate.setCategory(updatedProduct.getCategory());
            productToUpdate.setQuantityInStock(updatedProduct.getQuantityInStock());

            return productRepository.save(productToUpdate);
        } else {
            return null;
        }
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}

