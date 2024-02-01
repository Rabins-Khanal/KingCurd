package com.KingCurd.fullstackbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name="cart_items")
public class Cart {
    @Id
    @SequenceGenerator(name = "cart_item_seq_gen", sequenceName = "cart_item_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "cart_item_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)

    private Product product;

    private String productImage;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;













    @Column(name="quantity", nullable = false, length = 255)
    private Integer quantity;

}