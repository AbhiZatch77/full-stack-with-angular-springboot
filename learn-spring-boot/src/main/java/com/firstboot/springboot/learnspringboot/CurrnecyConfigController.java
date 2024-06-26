package com.firstboot.springboot.learnspringboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrnecyConfigController {
	
	@Autowired
	private CurrencyServiceConfiguration config;
	
	@RequestMapping("/currency-config")
	public CurrencyServiceConfiguration getAllCourses() {
		return this.config;
	}

}
