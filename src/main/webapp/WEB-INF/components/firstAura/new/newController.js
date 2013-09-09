{
	handleClick : function(component, event) {
		var attributes = component.getAttributes();
		var attString = "Attribute name=local value="+attributes.get('local');
		attString += "\nAttribute name=model value="+component.getValue("m.simple");
		alert(attString);
	},

	fireComponentEvent : function(component, event) {
		var attributes = component.getAttributes();
		var compEvents = component.getEvent("componentEventFired");
		compEvents.setParams({"context" : "ComponentEvent"});
		compEvents.fire();
	},

	fireApplicationEvent : function(component, event) {
		
		var attributes = component.getAttributes();
		var appEvent = $A.get("e.firstAura:appEvent");
		appEvent.setParams({"context" : "ApplicationEvent"});
		appEvent.fire();
	}
}