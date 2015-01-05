package eirkdbd.model;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table ( name = "EIRKDBD_WANTED_PERSON")
public class Person {
	/**
	 * Person name
	 */
	private String personName;
	/**
	 * Person identifier
	 */
	private Integer personId;
	/**
	 * Person avatar
	 */
	private Blob personAvatar;
	
	@Column (name = "name")
	public String getPersonName() {
		return personName;
	}	
	public void setPersonName(String personName) {
		this.personName = personName;
	}
	@Id
	@Column (name = "id")
	public Integer getPersonId() {
		return personId;
	}
	public void setPersonId(Integer personId) {
		this.personId = personId;
	}
	@Column (name = "avatar")
	public Blob getPersonAvatar() {
		return personAvatar;
	}
	public void setPersonAvatar(Blob personAvatar) {
		this.personAvatar = personAvatar;
	}
	
	
}
