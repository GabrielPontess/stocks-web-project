package com.project.stocks.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="estoque")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	private String nome;
<<<<<<< HEAD
	private String tipo;
	private float valor;
	private String categoria;
=======
	private String email;
	private String dataDeNacimento;
	private char genero;
	private String senha;
>>>>>>> eb2989d75b46023c79c193104438de46f5cf6529
	
	public User() {
	}

<<<<<<< HEAD
	public User(Long id, String nome, String tipo, float valor, String categoria) {
		super();
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.valor = valor;
		this.categoria = categoria;
	}

=======
	

	public User(Long id, String nome, String email, String dataDeNacimento, 
			String senha, char genero) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.dataDeNacimento = dataDeNacimento;
		this.senha = senha;
		this.genero = genero;
	}



	public char getGenero() {
		return genero;
	}



	public void setGenero(char genero) {
		this.genero = genero;
	}



>>>>>>> eb2989d75b46023c79c193104438de46f5cf6529
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
<<<<<<< HEAD
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public float getValor() {
		return valor;
	}

	public void setValor(float valor) {
		this.valor = valor;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
=======
	}	



	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDataDeNacimento() {
		return dataDeNacimento;
	}

	public void setDataDeNacimento(String dataDeNacimento) {
		this.dataDeNacimento = dataDeNacimento;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
>>>>>>> eb2989d75b46023c79c193104438de46f5cf6529
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(id, other.id);
	}

	
	
	
}



