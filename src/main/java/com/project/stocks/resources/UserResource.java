package com.project.stocks.resources;

<<<<<<< HEAD
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
=======
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
>>>>>>> eb2989d75b46023c79c193104438de46f5cf6529
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.stocks.entities.User;
<<<<<<< HEAD
=======
import com.project.stocks.services.UserService;
>>>>>>> eb2989d75b46023c79c193104438de46f5cf6529

@RestController
@RequestMapping(value="/users")
public class UserResource {
	
<<<<<<< HEAD
	@GetMapping
	public ResponseEntity<User>findAll(){
		User u = new User(1L, "Maria", "Boneca", 80f, "Brinquedo");
		return ResponseEntity.ok().body(u);
=======
	@Autowired
	private UserService service;
	
	@GetMapping
	public ResponseEntity<List<User>>findAll(){
		List<User> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value="/{id}")
	public ResponseEntity<User> findById(@PathVariable Long id){
		User obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
>>>>>>> eb2989d75b46023c79c193104438de46f5cf6529
	}
}
