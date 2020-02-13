function validateForm(form) {
		
	if (getValue('WKCompletTask') == 'true'){
				
		var activity = getValue('WKNumState');
		if(activity == 0 || activity == 4 || activity == 5){
					
			if (form.getValue("periodoMes") == null || form.getValue("periodoMes") == "") {						
				throw "Periodo mes n\u00E3o pode ser vazio.";				
			}
			
			if (form.getValue("nomeObra") == null || form.getValue("nomeObra") == "") {			
				throw "Nome Obra n\u00E3o pode ser vazio.";				
			}		
			
			var checklist = form.getChildrenFromTable("tableProducts");
			if(checklist != null && !checklist.isEmpty()){
				var iterator = checklist.entrySet().iterator();
				while(iterator.hasNext()){
					var item = iterator.next();					
					var index = item.getKey().split("___")[1];
					if (form.getValue("vendor_input___"+index) == null || form.getValue("vendor_input___"+index) == "") {						
						throw "Fornecedor n\u00E3o pode ser vazio.";						
					}
					
				}
			}
			
			
		}else{
	
			var checklist = form.getChildrenFromTable("tableProducts");
			if(checklist != null && !checklist.isEmpty()){
				
				var iterator = checklist.entrySet().iterator();
				while(iterator.hasNext()){
					var item = iterator.next();
					
					var index = item.getKey().split("___")[1];
					
					if(activity == 11){
						
						
						if (form.getValue("aval_qsms_input___"+index) == null || form.getValue("aval_qsms_input___"+index) == "") {
							
							throw "Aval QSMS n\u00E3o pode ser vazio.";
							
						}
						else{
							
							if ((form.getValue("aval_qsms_input___"+index) == "Liberado c/ Pend." || form.getValue("aval_qsms_input___"+index) == "Não Liberado") &&
								(form.getValue("obs_qsms___"+index) == null || form.getValue("obs_qsms___"+index) == "")){
							
								throw "Observacao QSMS n\u00E3o pode ser vazia.";
							}
							
						}
						
						
					}
					
					if(activity == 12){

						
						if (form.getValue("aval_jur_input___"+index) == null || form.getValue("aval_jur_input___"+index) == "") {
							
							throw "Aval Juridico  n\u00E3o pode ser vazio.";
							
						}
						else{
							
							if ((form.getValue("aval_jur_input___"+index) == "Liberado c/ Pend." || form.getValue("aval_jur_input___"+index) == "Não Liberado") &&
								(form.getValue("obs_jur___"+index) == null || form.getValue("obs_jur___"+index) == "")){
							
								throw "Observacao Juridico n\u00E3o pode ser vazia.";
							}
							
						}
												
						
					}
					
					
					if(activity == 13){
						
						
						if (form.getValue("aval_rhdp_input___"+index) == null || form.getValue("aval_rhdp_input___"+index) == "") {
							
							throw "Aval RHDP n\u00E3o pode ser vazio.";
							
						}
						else{
							
							if ((form.getValue("aval_rhdp_input___"+index) == "Liberado c/ Pend." || form.getValue("aval_rhdp_input___"+index) == "Não Liberado") &&
								(form.getValue("obs_rhdp___"+index) == null || form.getValue("obs_rhdp___"+index) == "")){
							
								throw "Observacao RHDP n\u00E3o pode ser vazia.";
							}
								
						}
						
					}
					
			
				} //while

					
					
					
					
					
		
			} //if checklist

					
					
		} //else		
			
			
	} //if WKCompletTask	

	
}
