function avaliaResultado(){
	
	var avaliacao = "liberado";		
	var indexes = getIndexes('obs_rhdp');
	var iterator = indexes.iterator();	

	while(iterator.hasNext()){
		var index = iterator.next();
						
		if (hAPI.getCardValue("aval_rhdp_input___" + index) == "Não Liberado" || 
			hAPI.getCardValue("aval_qsms_input___" + index) == "Não Liberado" ||
			hAPI.getCardValue("aval_jur_input___" + index) == "Não Liberado"){
				
				avaliacao = "nao_liberado";
				
		}else if (hAPI.getCardValue("aval_rhdp___" + index) == "Não Liberado" || 
				  hAPI.getCardValue("aval_qsms___" + index) == "Não Liberado" ||
				  hAPI.getCardValue("aval_jur___" + index) == "Não Liberado"){
					
			avaliacao = "nao_liberado";
					
		}
	}	
	
	return avaliacao;
		
}