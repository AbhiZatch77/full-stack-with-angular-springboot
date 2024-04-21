package com.sboot.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

//	@RequestMapping(method = RequestMethod.GET,path = "/hello-world") or
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
}
