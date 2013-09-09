{

	handleTheEvents : function(component,event) {
	
		var attributes = component.getAttributes();
		var context = event.getParam("context");
		aura.log(context);
		var appEventCounter = attributes.get("numberAppEvents");
		var cmpEventCounter = attributes.get("numberCompEvents");
		attributes.setValue("eventType", context);
		if(context == "ComponentEvent") {
			attributes.setValue("numberCompEvents", ++cmpEventCounter);
		}
		if(context == "ApplicationEvent") {
			attributes.setValue("numberAppEvents", ++appEventCounter);
		}
		
	}

}