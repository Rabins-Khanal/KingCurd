package com.KingCurd.fullstackbackend.repository;

import com.KingCurd.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {


}
