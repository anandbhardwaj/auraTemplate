package com.force.aus.model;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Model;

@Model
public class SimpleObject extends BaseModel{

	private String simple;
	
	public SimpleObject() {
		super();
		logger.info("Initialising simple string");
		simple = "This is a simple string value";
	}
	@AuraEnabled
	public String getSimple() {
		return simple;
	}
	
}
