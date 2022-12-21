package com.project.stocks.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.stocks.entities.User;
import com.project.stocks.repositories.UserRepository;
import com.project.stocks.services.exceptions.ResourceNotFoundException;

// Aqui vamos criar 2 opercoes buscar todos usuarios e buscar por id


@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	public List<User> findAll(){
		return repository.findAll();
	}
	
	public User findById(Long id) {
		Optional<User>obj = repository.findById(id);
		return obj.orElseThrow(()-> new ResourceNotFoundException(id));
	}
}
