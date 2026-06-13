package com.abes.JavaSambhav;

import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.*; 
 
@RestController 
@RequestMapping("/") 
public class SambhavController {
	 private Sambhav student; 

	    @GetMapping 
	    public String welcomeMessage() { 
	        return "Welcome to Management REST API"; 
	    } 
	 
	    @GetMapping("/student") 
	    public ResponseEntity<Sambhav> getStudent() { 
	        if (student == null) { 
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
	        }
	        return new ResponseEntity<>(student, HttpStatus.OK); 
	    } 
	 
	    @PostMapping("/student") 
	    public ResponseEntity<Sambhav> createStudent(@RequestBody Sambhav student) { 
	 
	        this.student = student; 
	        return new ResponseEntity<>(student, HttpStatus.CREATED); 
	    } 
	} 