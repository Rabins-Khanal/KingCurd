package com.KingCurd.fullstackbackend.controller;


import com.KingCurd.fullstackbackend.entity.Category;
import com.KingCurd.fullstackbackend.pojo.CategoryPojo;
import com.KingCurd.fullstackbackend.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("category")
@Service
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    @PostMapping(value = "/save")
    public String saveCategory(@Valid @RequestBody CategoryPojo categoryPojo){
        categoryService.saveCategory(categoryPojo);
        return "Saved successfully";
    }

    @GetMapping("/findAll")
    public List<Category> getAll(){
        return this.categoryService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Category> getById(@PathVariable("id") Integer id){
        return this.categoryService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        this.categoryService.deleteById(id);
    }

}



