package eirkdbd.service;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eirkdbd.model.Person;
import eirkdbd.repository.PersonRepository;

@Service
public class PersonService {
	
	@Autowired
	private PersonRepository repository;
	
	@Autowired
	private SessionFactory factory;
	
	/**
	 * Return single person object 
	 * @param id
	 * @return Person object 
	 */
	@Transactional
	public Person getPerson(Integer id) {
		return repository.findOne(id);
	}
	
	@Transactional
	public Person getPersonCustom(Integer id) {		
		Session session = factory.openSession();
		Person person = (Person)session.createQuery("FROM Person WHERE personId=?")
				.setParameter(0, id).uniqueResult();
		session.close();
		return person;
	}
}
