package eirkdbd.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import eirkdbd.model.Person;

@Transactional
public interface PersonRepository extends JpaRepository<Person, Integer>{

}
