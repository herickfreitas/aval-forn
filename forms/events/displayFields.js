function displayFields(form,customHTML){ 
	
	var CURRENT_STATE = getValue("WKNumState") ? getValue("WKNumState") : 0;	
	//var CURRENT_USER  = getValue("WKUser");
	var CURRENT_USER  = fluigAPI.getUserService().getCurrent().getFullName();
	
	customHTML.append('<script>' +
	' var NUM_PROCES = ' + getValue("WKNumProces") + '; ' +
	' var CURRENT_USER = \''  + CURRENT_USER + '\'; ' +
	' var CURRENT_STATE = ' + CURRENT_STATE + '; ' +
	'</script>');
}