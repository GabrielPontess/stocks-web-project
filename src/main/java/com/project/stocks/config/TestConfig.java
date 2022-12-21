package com.project.stocks.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.project.stocks.entities.User;
import com.project.stocks.repositories.UserRepository;

@Configuration 
@Profile("test")
public class TestConfig implements CommandLineRunner{
// essa classe vai servir por enquanto para popular o database com os objetos.
//datbase seeding
	
	
	@Autowired //para que o spring consiga resolver essa dependencia, e associar uma instancia do User.. no meu teste config
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

<<<<<<< HEAD
		User u1 = new User(null, "Maria", "Boneca", 80f, "Brinquedo");
		User u2 = new User(null, "Anna", "kit cozinha", 50f, "Brinquedo");
		User u3 = new User(null, "Andrez", "Patins", 350f, "Brinquedo");
		User u4 = new User(null, "Beatriz", "Skate", 250f, "Brinquedo");
		User u5 = new User(null, "Helena", "Uno", 30f, "Brinquedo");
		User u6 = new User(null, "Isaac", "Bola", 200f, "Brinquedo");
=======
		User u1 = new User(null,"Guilherme", "guilherme@gmail.com", "25/06", "123456@",'m' );
		User u2 = new User(null,"Barata", "barata@gmail.com", "24/12", "123456!", 'm');
		User u3 = new User(null,"Gabriel", "pontes@gmail.com", "15/05", "123456@", 'm' );
		User u4 = new User(null,"Augusto", "gugusto@gmail.com", "15/09", "123456!",'m' );
		User u5 = new User(null,"Arthur", "tutu@gmail.com", "19/09", "123456@", 'm' );
		User u6 = new User(null,"Fran", "fransurf@gmail.com", "25/06", "123456@", 'f');
>>>>>>> eb2989d75b46023c79c193104438de46f5cf6529
		userRepository.saveAll(Arrays.asList(u1, u2, u3, u4, u5, u6));
	}
	
	
}	
	
