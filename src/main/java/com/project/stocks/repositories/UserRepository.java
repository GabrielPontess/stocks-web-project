package com.project.stocks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.stocks.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
