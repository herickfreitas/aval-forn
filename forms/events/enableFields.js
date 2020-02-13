function enableFields(form){
	
	var activity = getValue('WKNumState');
	
		
		var checklist = form.getChildrenFromTable("tableProducts");
		if(checklist != null && !checklist.isEmpty()){
			var iterator = checklist.entrySet().iterator();
			while(iterator.hasNext()){
				var item = iterator.next();
				
				if(item.getKey().indexOf("obs_rhdp___") > -1 ||  item.getKey().indexOf("obs_qsms___") > -1 ||  item.getKey().indexOf("obs_jur___") > -1)				
					form.setEnabled(item.getKey(), false);
			}
		}		
		
		
		
	if(activity != 0 && activity != 4 && activity != 5){
				
		form.setEnabled("periodoMes", false);
		form.setEnabled("nomeObra", false);
		
	}
		
	if(activity == 5){
	
		var checklist = form.getChildrenFromTable("tableProducts");
		
		if(checklist != null && !checklist.isEmpty()){

			var iterator = checklist.entrySet().iterator();

			while(iterator.hasNext()){

				var item = iterator.next();
				var index = item.getKey().split("___")[1];

				if((form.getValue("aval_rhdp___"+index) == 'Liberado' || form.getValue("aval_rhdp___"+index) == 'Liberado c/ Pend.') &&
					(form.getValue("aval_qsms___"+index) == 'Liberado' || form.getValue("aval_qsms___"+index) == 'Liberado c/ Pend.') &&
					(form.getValue("aval_jur___"+index) == 'Liberado' || form.getValue("aval_jur___"+index) == 'Liberado c/ Pend.')){
				
					form.setEnabled("vendor___"+index, false);
					form.setEnabled("status_forn___"+index, false);
					form.setEnabled("selecLinha___"+index, false);
					form.setEnabled("selecTodos", false);

				}else{
					
					form.setEnabled("selecLinha___"+index, false);
					form.setEnabled("vendor___"+index, false);
					form.setEnabled("selecTodos", false);

				}

			}

		}

	}
	
	if(activity == 13){
		
		var checklist = form.getChildrenFromTable("tableProducts");
		if(checklist != null && !checklist.isEmpty()){
			var iterator = checklist.entrySet().iterator();
			while(iterator.hasNext()){
				var item = iterator.next();
				
				if(item.getKey().indexOf("vendor___") > -1 ||  item.getKey().indexOf("status_forn___") > -1)				
					form.setEnabled(item.getKey(), false);
								
				var index = item.getKey().split("___")[1];
				
				form.setEnabled("obs_rhdp___"+index, true);
				
			}
		}
		
		
	}	
	
	if(activity == 12){
		
		var checklist = form.getChildrenFromTable("tableProducts");
		if(checklist != null && !checklist.isEmpty()){
			var iterator = checklist.entrySet().iterator();
			while(iterator.hasNext()){
				var item = iterator.next();
				
				if(item.getKey().indexOf("vendor___") > -1 ||  item.getKey().indexOf("status_forn___") > -1)				
					form.setEnabled(item.getKey(), false);
								
				var index = item.getKey().split("___")[1];
				
				form.setEnabled("obs_jur___"+index, true);
				
				
			}
		}
		
		
	}	
	
	
	if(activity == 11){
		
		var checklist = form.getChildrenFromTable("tableProducts");
		if(checklist != null && !checklist.isEmpty()){
			var iterator = checklist.entrySet().iterator();
			while(iterator.hasNext()){
				var item = iterator.next();
				
				if(item.getKey().indexOf("vendor___") > -1 ||  item.getKey().indexOf("status_forn___") > -1)				
					form.setEnabled(item.getKey(), false);
								
				var index = item.getKey().split("___")[1];
				
				form.setEnabled("obs_qsms___"+index, true);
				
				
			}
		}
		
		
	}	
	
	
}