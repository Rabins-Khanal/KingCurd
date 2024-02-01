//package com.KingCurd.fullstackbackend.service.impl;
//
//
//
//
//import com.KingCurd.fullstackbackend.repository.OrderRepository;
//import com.KingCurd.fullstackbackend.repository.ProductRepository;
//import com.KingCurd.fullstackbackend.repository.UserRepository;
//import com.KingCurd.fullstackbackend.service.OrderService;
//import org.springframework.stereotype.Service;
//import com.KingCurd.fullstackbackend.entity.Product;
//import com.KingCurd.fullstackbackend.entity.Order;
//import com.KingCurd.fullstackbackend.entity.User;
//import com.KingCurd.fullstackbackend.pojo.OrderPojo;
//
//
//
//
//import lombok.RequiredArgsConstructor;
//
//import java.util.List;
//
//import java.util.Optional;
//
//@Service
//@RequiredArgsConstructor
//public class OrderServiceImpl implements OrderService {
//    private final OrderRepository orderRepository;
//    private final ProductRepository productRepository;
//    private final UserRepository userRepository;
//    @Override
//    public void saveItem(OrderPojo orderPojo) {
//        Order order=new Order();
//        Product product=productRepository.findById(Long.valueOf(orderPojo.getId())).get();
//        User user=userRepository.findById(Long.valueOf(orderPojo.getId())).get();
//        order.setProduct(product);
//        order.setUser(user);
//        order.setSales_Quantity(orderPojo.getSalesQuantity());
//
////        if(orderPojo.getId()!=null){
////            order=orderRepository.findById(orderPojo.getId())
////                    .orElseThrow(()-> new NoSuchElementException("No data found"));
////        }
////
////        order.setItemName(orderPojo.getItemName());
////        item.setItemImage(itemPojo.getItemImage());
////        item.setItemDescription(itemPojo.getItemDescription());
////        item.setItemQuantity(itemPojo.getItemQuantity());
////        item.setItemPerPrice(itemPojo.getItemPerPrice());
//
//        orderRepository.save(order);
//
//    }
//
//    @Override
//    public List<Order> findAll() {
//        return orderRepository.findAll();
//    }
//
//    @Override
//    public Optional<Order> findById(Integer id) {
//
//        return orderRepository.findById(id);
//    }
//
//    @Override
//    public void deleteById(Integer id) {
//        orderRepository.deleteById(id);
//    }
//
//
//}
