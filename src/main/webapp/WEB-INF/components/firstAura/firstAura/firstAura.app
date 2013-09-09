<aura:application controller="js://firstAura.second" securityProvider="java://com.force.aus.security.FirstAuraSecurityProvider">
	<aura:attribute name="urlParam" type="String" />
	<div class="pageContainer">
		<h1>First Aura application</h1>
		<firstAura:new local="{!v.urlParam}" componentEventFired="{!c.handleTheEvents}"/>
		<firstAura:second />
		<firstAura:input />
	</div>
</aura:application>
