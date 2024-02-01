package com.KingCurd.fullstackbackend.pojo;



import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderPojo {
    private Integer id;
    private Integer userId;
    private Integer productId;
    private Integer salesQuantity;


}