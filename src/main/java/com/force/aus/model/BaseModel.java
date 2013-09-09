package com.force.aus.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class BaseModel {

	public Logger logger;
	
	public BaseModel() {
		logger = LoggerFactory.getLogger(this.getClass());
	}
}
