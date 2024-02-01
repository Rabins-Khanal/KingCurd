package com.KingCurd.fullstackbackend.pojo;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductPojo {


    private Integer id;

    @NotNull
    private String productName;

    @NotNull
    private Integer categoryId;

    @NotNull
    private MultipartFile productImage;

    @NotNull
    private double price;

    @NotNull
    private int quantityInStock;

    private String description;
}
