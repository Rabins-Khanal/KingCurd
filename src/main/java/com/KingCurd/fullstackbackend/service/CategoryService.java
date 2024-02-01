package com.KingCurd.fullstackbackend.service;


import com.KingCurd.fullstackbackend.entity.Category;
import com.KingCurd.fullstackbackend.pojo.CategoryPojo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CategoryService {
    void saveCategory(CategoryPojo categoryPojo);

    List<Category> findAll();


    Optional<Category> findById(Integer id);

    void deleteById(Integer id);
}
