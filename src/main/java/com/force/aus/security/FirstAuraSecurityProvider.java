package com.force.aus.security;

import org.auraframework.def.DefDescriptor;
import org.auraframework.def.SecurityProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class FirstAuraSecurityProvider implements SecurityProvider{

	private Logger logger;
	public FirstAuraSecurityProvider(){
		logger = LoggerFactory.getLogger(this.getClass());
	}
	@Override
	public boolean isAllowed(DefDescriptor<?> arg0) {
		
		logger.warn("No security provider has been implemented");
		
		return true;
	}

	
	
}
