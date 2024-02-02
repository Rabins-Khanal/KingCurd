package com.KingCurd.fullstackbackend.pojo;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CartPojo {
    private Integer id;


    private Integer userId;

    @NotNull
    private Integer productId;

    private Integer quantity;















}
