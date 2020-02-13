function avalRHDP(){
	
	var avaliacao = 'liberado';	
	var indexes = getIndexes('obs_rhdp');

	log.info("AQUI2");
	log.info(hAPI.getCardValue('aval_rhdp_input___2'));
	log.info(indexes.size());

    for(var i = 1; i < indexes.size() + 1; i++){
					
        if (hAPI.getCardValue('aval_rhdp_input___' + i) == 'Não Liberado' ||
			hAPI.getCardValue('aval_rhdp___' + i) == 'Não Liberado'){
					
			avaliacao = 'nao_liberado';
					
        }
        
	}	
	
	return avaliacao;
		
}