package eirkdbd.controller;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eirkdbd.model.Person;
import eirkdbd.service.PersonService;

@RestController
@RequestMapping("/person")
public class PersonController {
	
	@Autowired
	private PersonService repository;
	
	@Autowired
	private SessionFactory factory;
	
	@RequestMapping("/{id}")
	public Person getPerson(@PathVariable("id") Integer id) {
		return repository.getPerson(id);
	}
	
	@RequestMapping("/hib/{id}")
	public Person getPerson2(@PathVariable("id") Integer id) {
		return repository.getPersonCustom(id);
	}
	
}
