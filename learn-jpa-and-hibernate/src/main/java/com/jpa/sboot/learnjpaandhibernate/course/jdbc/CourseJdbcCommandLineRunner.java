package com.jpa.sboot.learnjpaandhibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jpa.sboot.learnjpaandhibernate.course.Course;

@Component
public class CourseJdbcCommandLineRunner implements CommandLineRunner{

	@Autowired
	private CourseJdbcRepository repository;
	
	@Override
	public void run(String... args) throws Exception {
		
		repository.insert(new Course(1,"Learn AWS Now","Abhishek"));
		repository.insert(new Course(2,"Learn Angular Now","Abhishek"));
		repository.insert(new Course(3,"Learn Springboot Now","Abhishek"));
		
		repository.deleteById(1);
	}

}
