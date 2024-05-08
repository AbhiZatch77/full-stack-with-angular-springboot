package com.jpa.sboot.learnjpaandhibernate.course.springdatajpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpa.sboot.learnjpaandhibernate.course.Course;
import java.util.List;


public interface CourseSpringDataJpaRepository extends JpaRepository<Course, Long>{
	
	List<Course> findByAuthor(String author);
	
	List<Course> findByName(String name);

}
