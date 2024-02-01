package com.KingCurd.fullstackbackend.repository;



import com.KingCurd.fullstackbackend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
}
