/** Custom
 * 
 */
$(function() {	
	
	$(".price").maskMoney({prefix:'R$ ', allowNegative: false, thousands:'.', decimal:',', affixesStay: true});
	
	$("#selecTodos").on("click",function(){
		
		$('[name^="selecLinha___"]').each(function(i, el){
			
			var index = el.id.split("___")[1];

			$("#selecLinha___"+index).prop("checked","checked");

			if($("#selecLinha___"+index+":checked").length == 1 && $("#selecTodos"+":checked").length == 0){

				$("#selecLinha___"+index).removeAttr("checked");

			}

		});
		
	});
	
	switch(CURRENT_STATE) {
	  case 0:
	  case 4:
		  inicio();
		  break;
	  case 5: //5 - Revisão		  
		  revisao();
	    break;
	  case 11: //11 - Avaliação QSMS
		  avaliacaoQSMS();
	    break;
	  case 12: //12 - Avaliação Juridico
		  avaliacaoJuridico();
	    break;
	  case 13: //13 - Avaliação DP
		  avaliacaoDP();
	  case 15: //15 - Final
		  desabilitaIncluirFonec();
		  datasetCopyVendors();
	    break;
	}
});

function avaliacaoQSMS(){
	
	desabilitaCabec();
	desabilitaIncluirFonec();
	
	$(".reqIni").remove();
	$(".reqRHDP").remove();
	$(".reqJur").remove();
	$("#reportButton").remove();
	$(".reqQSMS").append("<strong>*</strong>");
	
	$('[name^="selecLinha___"]').each(function(i, el){
		
		console.log(el.id);

		var index = el.id.split("___")[1];
		var jur = $("#aval_jur___"+index).val();
		var rhdp = $("#aval_rhdp___"+index).val();
		var qsmsInput = $("#aval_qsms_input___"+index).val();
		var jurInput = $("#aval_jur_input___"+index).val();
		var rhdpInput = $("#aval_rhdp_input___"+index).val();

		$("#aval_jur_input___"+index).removeAttr("type");
		$("#aval_rhdp_input___"+index).removeAttr("type");
			
		$("#aval_jur_input___"+index).val(jur);
		$("#aval_rhdp_input___"+index).val(rhdp);
		
		$("#aval_jur___"+index).hide();
		$("#aval_rhdp___"+index).hide();
		
		$("#aval_jur_input___"+index).attr("readonly", "readonly");
		$("#aval_jur_input___"+index).css("background-color", "WhiteSmoke");
		
		$("#aval_rhdp_input___"+index).attr("readonly", "readonly");
		$("#aval_rhdp_input___"+index).css("background-color", "WhiteSmoke");
		
		if(qsmsInput == "Liberado" && jurInput == "Liberado" && rhdpInput == "Liberado"){
			
			$("#aval_jur_input___"+index).val(jurInput);
			$("#aval_rhdp_input___"+index).val(rhdpInput);
			$("#aval_qsms_input___"+index).val(qsmsInput);
			$("#aval_qsms_input___"+index).removeAttr("type");
			$("#aval_qsms_input___"+index).attr("readonly", "readonly");
			$("#aval_qsms_input___"+index).css("background-color", "WhiteSmoke");
			$("#aval_qsms___"+index).hide();
			$("#obs_qsms___"+index).prop("readonly",true);
			
		}
		
		$("#aval_jur_input___"+index).val(jurInput);
		$("#aval_rhdp_input___"+index).val(rhdpInput);
		$("#aval_qsms_input___"+index).val(qsmsInput);

		$("#aval_rhdp___"+index).val(rhdpInput);
		$("#aval_jur___"+index).val(jurInput);

		if(qsmsInput != 'Não Liberado'){
			$("#aval_qsms___"+index).val(qsmsInput);
		}

		if(qsmsInput == 'Não Liberado'){
			$("#aval_qsms_input___"+index).val('');
		}

	});	
	
}

function avaliacaoJuridico(){
	
	desabilitaCabec();
	desabilitaIncluirFonec();
	
	$(".reqIni").remove();
	$(".reqRHDP").remove();
	$(".reqQSMS").remove();
	$("#reportButton").remove();
	$(".reqJur").append("<strong>*</strong>");
	
	$('[name^="selecLinha___"]').each(function(i, el){

		var index = el.id.split("___")[1];
		var qsms = $("#aval_qsms___"+index).val();
		var rhdp = $("#aval_rhdp___"+index).val();
		var qsmsInput = $("#aval_qsms_input___"+index).val();
		var jurInput = $("#aval_jur_input___"+index).val();
		var rhdpInput = $("#aval_rhdp_input___"+index).val();
			
		$("#aval_qsms_input___"+index).removeAttr("type");
		$("#aval_rhdp_input___"+index).removeAttr("type");
		
		$("#aval_qsms_input___"+index).val(qsms);
		$("#aval_rhdp_input___"+index).val(rhdp);
				
		$("#aval_qsms___"+index).hide();
		$("#aval_rhdp___"+index).hide();
		
		$("#aval_qsms_input___"+index).attr("readonly", "readonly");
		$("#aval_qsms_input___"+index).css("background-color", "WhiteSmoke");
		
		$("#aval_rhdp_input___"+index).attr("readonly", "readonly");
		$("#aval_rhdp_input___"+index).css("background-color", "WhiteSmoke");
		
		if(qsmsInput == "Liberado" && jurInput == "Liberado" && rhdpInput == "Liberado"){
			
			$("#aval_qsms_input___"+index).val(qsmsInput);
			$("#aval_rhdp_input___"+index).val(rhdpInput);
			$("#aval_jur_input___"+index).val(jurInput);
			$("#aval_jur_input___"+index).removeAttr("type");
			$("#aval_jur_input___"+index).attr("readonly", "readonly");
			$("#aval_jur_input___"+index).css("background-color", "WhiteSmoke");
			$("#aval_jur___"+index).hide();
			$("#obs_jur___"+index).prop("readonly",true);
			
		}
		
		$("#aval_qsms_input___"+index).val(qsmsInput);
		$("#aval_rhdp_input___"+index).val(rhdpInput);
		$("#aval_jur_input___"+index).val(jurInput);

		$("#aval_rhdp___"+index).val(rhdpInput);
		$("#aval_jur___"+index).val(jurInput);
		
		if(jurInput != 'Não Liberado'){
			$("#aval_jur___"+index).val(jurInput);
		}

		if(jurInput == 'Não Liberado'){
			$("#aval_jur_input___"+index).val('');
		}

	});
	
	
}

function avaliacaoDP(){
	
	desabilitaCabec();
	desabilitaIncluirFonec();
	
	$(".reqIni").remove();
	$(".reqJur").remove();
	$(".reqQSMS").remove();
	$("#reportButton").remove();
	$(".reqRHDP").append("<strong>*</strong>");
	
	$('[name^="selecLinha___"]').each(function(i, el){
		
		var index = el.id.split("___")[1];
		var qsms = $("#aval_qsms___"+index).val();
		var jur = $("#aval_jur___"+index).val();
		var qsmsInput = $("#aval_qsms_input___"+index).val();
		var jurInput = $("#aval_jur_input___"+index).val();
		var rhdpInput = $("#aval_rhdp_input___"+index).val();
						
		$("#aval_qsms_input___"+index).removeAttr("type");
		$("#aval_jur_input___"+index).removeAttr("type");
		
		$("#aval_qsms_input___"+index).val(qsms);
		$("#aval_jur_input___"+index).val(jur);
		
		$("#aval_qsms___"+index).hide();
		$("#aval_jur___"+index).hide();
		
		$("#aval_qsms_input___"+index).attr("readonly", "readonly");
		$("#aval_qsms_input___"+index).css("background-color", "WhiteSmoke");
		
		$("#aval_jur_input___"+index).attr("readonly", "readonly");
		$("#aval_jur_input___"+index).css("background-color", "WhiteSmoke");
		
		if(qsmsInput == "Liberado" && jurInput == "Liberado" && rhdpInput == "Liberado"){
			
			$("#aval_qsms_input___"+index).val(qsmsInput);
			$("#aval_jur_input___"+index).val(jurInput);
			$("#aval_rhdp_input___"+index).val(rhdpInput);
			$("#aval_rhdp_input___"+index).removeAttr("type");
			$("#aval_rhdp_input___"+index).attr("readonly", "readonly");
			$("#aval_rhdp_input___"+index).css("background-color", "WhiteSmoke");
			$("#aval_rhdp___"+index).hide();
			$("#obs_rhdp___"+index).prop("readonly",true);
			
		}
		
		$("#aval_qsms_input___"+index).val(qsmsInput);
		$("#aval_jur_input___"+index).val(jurInput);
		$("#aval_rhdp_input___"+index).val(rhdpInput);
		
		$("#aval_qsms___"+index).val(qsmsInput);
		$("#aval_jur___"+index).val(jurInput);

		if(rhdpInput != 'Não Liberado'){
			$("#aval_rhdp___"+index).val(rhdpInput);
		}

		if(rhdpInput == 'Não Liberado'){
			$("#aval_rhdp_input___"+index).val('');
		}

	});
	
}

function desabilitaCabec(){

	/*
	$("#periodoMes").attr("disabled",true);
	$("#nomeObra").attr("disabled",true);
	*/
	
}

function desabilitaIncluirFonec(){
	
	$(".colunaItem").hide();
	
	$("#addProduct").hide();
	$("#delProduct").hide();

	if(CURRENT_STATE == 15){

		$('[name^="selecLinha___"]').each(function(i, el){

			var index = el.id.split("___")[1];
			var qsmsInput = $("#aval_qsms_input___"+index).val();
			var jurInput = $("#aval_jur_input___"+index).val();
			var rhdpInput = $("#aval_rhdp_input___"+index).val();

			$("#aval_qsms___"+index).text(qsmsInput);
			$("#aval_jur___"+index).text(jurInput);
			$("#aval_rhdp___"+index).text(rhdpInput);

		})
	
	}
	
}


function deleteLines(){
	
	if(CURRENT_STATE != 5){
	
		$('[name^="selecLinha___"]').each(function(i, el){

				if(el.checked)
					deleteFornec(el);
				
		});

	}
	
	
}

function deleteFornec(element){
	
	fnWdkRemoveChild(element);
	
}


function inicio(){
	
	var ano = new Date().getFullYear();
	var dataAbertura = dataAtual();
	var horaAbertura = horaAtual();
	
	$("#periodoAno").val(ano);
	$("#login").val(CURRENT_USER);
	$("#dataAbertura").val(dataAbertura);
	$("#horaAbertura").val(horaAbertura);

	$("#aval_rhdp").attr("disabled",true);
	$("#aval_qsms").attr("disabled",true);
	$("#aval_jur").attr("disabled",true);
	
	$("#obs_rhdp").prop("readonly",true);
	$("#obs_qsms").prop("readonly",true);
	$("#obs_jur").prop("readonly",true);
	
	$("#reportButton").remove();
	
	$(".reqIni").append("<strong>*</strong>");
	
}


function revisao(){
	
	var perMer = $("#periodoMes").val();
	var nmObra = $("#nomeObra").val();
	
	if(CURRENT_STATE == 5){

		$("#addProduct").hide();
		$("#delProduct").hide();

	}
	
	$("#periodoMes_input").removeAttr("type");
	$("#nomeObra_input").removeAttr("type");
	
	$("#periodoMes_input").val(perMer);
	$("#nomeObra_input").val(nmObra);
	
	$("#periodoMes").hide();
	$("#nomeObra").hide();
	
	$("#periodoMes_input").attr("readonly", "readonly");
	$("#nomeObra_input").attr("readonly", "readonly");

	$("#periodoMes_input").css("background-color", "WhiteSmoke");
	$("#nomeObra_input").css("background-color", "WhiteSmoke");

	$('[name^="selecLinha___"]').each(function(i, el){
		
		var index = el.id.split("___")[1];
		var qsms = $("#aval_qsms___"+index).val();
		var jur = $("#aval_jur___"+index).val();
		var rhdp = $("#aval_rhdp___"+index).val();

		$("#aval_jur_input___"+index).val(jur);
		$("#aval_qsms_input___"+index).val(qsms);
		$("#aval_rhdp_input___"+index).val(rhdp);
			
		if($("#aval_rhdp___"+index).val() == 'Não Liberado' ||
			$("#aval_qsms___"+index).val() == 'Não Liberado' ||
			$("#aval_jur___"+index).val() == 'Não Liberado'){

			$("#vendor___"+index).prop("readonly",true);		

		}

		$("#aval_rhdp___"+index).attr("disabled",true);		
		$("#aval_qsms___"+index).attr("disabled",true);
		$("#aval_jur___"+index).attr("disabled",true);

	});	
	
}

function addLine(){
	
	if(CURRENT_STATE != 5){

		wdkAddChild('tableProducts')

	}

}

function dataAtual() {
	
    var data = new Date();
    var dia  = data.getDate();
    var mes  = data.getMonth() + 1;
    var ano  = data.getFullYear();

    dia  = (dia<=9 ? "0"+dia : dia);
    mes  = (mes<=9 ? "0"+mes : mes);

    var newData = dia+"/"+mes+"/"+ano;

    return newData;
    
} 

function horaAtual() {
	
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    var newTime = hora+":"+minuto;

    return newTime;
    
} 

function setSelectedZoomItem(selectedItem) {

	var index = selectedItem.inputId.split("___")[1];

	$("#vendor_input___"+index).val($("#vendor___"+index).val());

}

function persistData(value, id){
		
	var index = id.split("___")[1];

	if(CURRENT_STATE == 12){

		$("#aval_jur_input___"+index).val(value);

	}

	if(CURRENT_STATE == 11){

		$("#aval_qsms_input___"+index).val(value);

	}

	if(CURRENT_STATE == 13){

		
		$("#aval_rhdp_input___"+index).val(value);


	}

}

function enableRemoveLinha(){

	var checked = false;

	$('[name^="selecLinha___"]').each(function(i, el){

		var index = el.id.split("___")[1];

		if($("#selecLinha___"+index+":checked").length == 1 && $('[name^="selecLinha___"]').length > 0){

			checked = true;

		}

	});

	if(checked){
	
		$("#delProduct").attr("disabled", false);

	}else{

		$("#delProduct").attr("disabled", true);

	}
	
}

function enableRemoveTodos(){

	if($('[name^="selecLinha___"]').length > 0 && $("#selecTodos"+":checked").length == 1){
	
		$("#delProduct").attr("disabled", false);

	}else{

		$("#delProduct").attr("disabled", true);

	}

}

function showCopy(){

	var msg = 'Selecione o período que deseja copiar:<p></p>'						
		msg +=	'<select name="periodoCopy" id="periodoCopy" class="form-control">'
		msg +=		'<option value=""></option>'
		msg +=		'<option value="1">Janeiro</option>'
		msg +=		'<option value="2">Fevereiro</option>'
		msg +=		'<option value="3">Mar&ccedil;o</option>'
		msg +=		'<option value="4">Abril</option>'
		msg +=		'<option value="5">Maio</option>'
		msg +=		'<option value="6">Junho</option>'
		msg +=		'<option value="7">Julho</option>'
		msg +=		'<option value="8">Agosto</option>'
		msg +=		'<option value="9">Setembro</option>'
		msg +=		'<option value="10">Outubro</option>'
		msg +=		'<option value="11">Novembro</option>'
		msg +=		'<option value="12">Dezembro</option>'
		msg +=	'</select>'

	FLUIGC.message.confirm({

		message: msg,
		title: 'Copiar Fornecedores',
		labelYes: 'Confirmar',
		labelNo: 'Cancelar'

	}, function(result, el, ev) {

		if(!result){

			return

		}
		
		var periodo = $("#periodoCopy").val();

		var cst = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
		var constraints = new Array(cst);
		 
		var datasetPrincipal = DatasetFactory.getDataset("ds_avalforn", null, constraints, null);
				
		var documentId = datasetPrincipal.values[periodo]["metadata#id"];
		var documentVersion = datasetPrincipal.values[periodo]["metadata#version"];
		
		var c1 = DatasetFactory.createConstraint("tablename", "tableProducts", "tableProducts", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
		
		var constraintsFilhos = new Array(c1, c2, c3);
		
		var datasetFilhos = DatasetFactory.getDataset("ds_avalforn", null, constraintsFilhos, null);
		
		$('[name^="selecLinha___"]').each(function(i, el){
	
			deleteFornec(el);
			
		});
	
		for(var i = 0; i < datasetFilhos.values.length; i++){
	
			wdkAddChild('tableProducts')
				
		}
	
		$('[name^="vendor___"]').each(function(i, el){
			
			var index = el.id.split("___")[1];
			
			window["vendor___" + index].setValue(datasetFilhos.values[i].vendor);
			$("#vendor_input___" + index).val(datasetFilhos.values[i].vendor);
			
		});
		
	});

	$("#periodoCopy").focus();
	
}

function report(){

	var msg = 'Selecione o tipo de relatório:<p></p>'						
		msg +=	'<select name="report" id="report" class="form-control">'
		msg +=		'<option value=""></option>'
		msg +=		'<option value="1">PDF</option>'
		msg +=		'<option value="2">Planilha</option>'
		msg +=	'</select>'

	FLUIGC.message.confirm({

		message: msg,
		title: 'Gerar Relatório',
		labelYes: 'Confirmar',
		labelNo: 'Cancelar'

	}, function(result, el, ev) {

		if(!result){

			return

		}
		
		var tipo = $("#report").val();

		var cst = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
		var constraints = new Array(cst);
		
		var datasetPrincipal = DatasetFactory.getDataset("ds_avalforn", null, constraints, null);
		
		var atualForm = datasetPrincipal.values.length - 1;

		var documentId = datasetPrincipal.values[atualForm]["metadata#id"];
		var documentVersion = datasetPrincipal.values[atualForm]["metadata#version"];
		
		var c1 = DatasetFactory.createConstraint("tablename", "tableProducts", "tableProducts", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
		
		var constraintsFilhos = new Array(c1, c2, c3);
		
		var datasetFilhos = DatasetFactory.getDataset("ds_avalforn", null, constraintsFilhos, null);

		if(tipo == 1){
							
			var docDefinition = {

				pageSize: 'A4',
				pageOrientation: 'landscape',
				defaultStyle: {
					fontSize: 10
				},
				content: [{
					layout: 'lightHorizontalLines',
						table: { 

							headerRows: 1, 
							body: [

								[ 
									
									{text: 'Fornecedor', bold: true},
									{text: 'Aval. RH/DP', bold: true},
									{text: 'Obs. RH/DP', bold: true},
									{text: 'Aval. QSMS', bold: true},
									{text: 'Obs. QSMS', bold: true},
									{text: 'Aval. JUR', bold: true},
									{text: 'Obs. JUR', bold: true},
									{text: 'Situação Atual', bold: true}
									
								]

							]

						}

				}]

			}

			for(var i = 0; i < datasetFilhos.values.length; i++){

				docDefinition.content[0].table.body.push(
			
					new Array(
					
						datasetFilhos.values[i].vendor,
						datasetFilhos.values[i].aval_rhdp,
						datasetFilhos.values[i].obs_rhdp,
						datasetFilhos.values[i].aval_qsms,
						datasetFilhos.values[i].obs_qsms,
						datasetFilhos.values[i].aval_jur,
						datasetFilhos.values[i].obs_jur,
						datasetFilhos.values[i].status_forn

					)
				
				)

			}
				
			pdfMake.createPdf(docDefinition).download();
		
		}

		if(tipo == 2){

			var strCSV = 'Fornecedor;Aval. RH/DP;Obs. RH/DP;Aval. QSMS;Obs. QSMS;Aval. JUR;Obs. JUR;Situacao Atual;\r\n'; 

			for(var i = 0; i < datasetFilhos.values.length; i++){
								
				strCSV += datasetFilhos.values[i].vendor + ';'
				strCSV += datasetFilhos.values[i].aval_rhdp + ';'
				strCSV += datasetFilhos.values[i].obs_rhdp + ';'
				strCSV += datasetFilhos.values[i].aval_qsms + ';'
				strCSV += datasetFilhos.values[i].obs_qsms + ';'
				strCSV += datasetFilhos.values[i].aval_jur + ';'
				strCSV += datasetFilhos.values[i].obs_jur + ';'
				strCSV += datasetFilhos.values[i].status_forn + ';\r\n'

			}

			var a = document.createElement('a');
			
			a.href = 'data:attachment/csv,' +  encodeURIComponent(strCSV);
			a.target = '_blank';
			a.download = 'myFile.csv';
			document.body.appendChild(a);
			a.click();

		}

	});

	$("#report").focus();

}