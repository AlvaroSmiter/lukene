//Funcao
function getHistory(){
	return documento.getElementById("historico-resultados").innerText;
}
//resultados anterios
function printHistory(num){
	documento.getElementById("historico-resultados").innerText=num;
}
//retornar
function getOutput(){
	return documento.getElementById("saida-value").innerText;
}
//mostrar
function printOutput(num){
	if(num==""){
		documento.getElementById("saida-value").innerText=num;
	}
	else{
		documento.getElementById("saida-value").innerText=getFormattedNumber(num);
	}	
}//formatar numero
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
//numeros r
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operacao = documento.getElementsByClassName("operacao");
for(var i =0;i<operacao.length;i++){
	operacao[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var saida=reverseNumberFormat(getOutput()).toString();
			if(saida){
				saida= saida.substr(0,saida.length-1);
				printOutput(saida);
			}
		}
		else{
			var saida=getOutput();
			var historico=getHistory();
			if(saida==""&&historico!=""){
				if(isNaN(historico[historico.length-1])){
					historico= historico.substr(0,historico.length-1);
				}
			}
			if(saida!="" || historico!=""){
				saida= saida==""?saida:reverseNumberFormat(saida);
				historico=historico+saida;
				if(this.id=="="){
					var result=eval(historico);
					printOutput(result);
					printHistory("");
				}
				else{
					historico=historico+this.id;
					printHistory(historico);
					printOutput("");
				}
			}
		}
		
	});
}
var numero = documento.getElementsByClassName("numero");
for(var i =0;i<numero.length;i++){
	numero[i].addEventListener('click',function(){
		var saida=reverseNumberFormat(getOutput());
		if(saida!=NaN){ 
			saida=saida+this.id;
			printOutput(saida);
		}
	});
}