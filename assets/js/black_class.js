//// -------------------------------------------------------- in�cio da classe -----------------------------------------------------
function Objeto($id){
	
	// Fun��es dispon�veis	
	this.get              = get              // Carrega um objeto e retorna o mesmo
	this.mask_value       = mask_value;      // Mascara um valor de Imput ou Text area   
	this.mask_money       = mask_money;      // Mascara o valor do imput para valor monetario 
	this.MaskNum          = MaskNum          // Permite a digita��o de apenas numeros no imput 
	this.mask_cep         = mask_cep         // Mascara de CEP
	this.v_email          = v_email;         // Veirifica se o campo possui um e-mail v�lido
    this.aleatorio        = aleatorio;       // Cria um n�mero aleat�rio 
	this.RemoveAtributo   = RemoveAtributo;  // Remove Um atributo do objeto
    this.atributo         = atributo;        // Seta Um atributo para o objeto
	this.Numerico         = Numerico         // Permite a digita��o de apenas numeros
	this.isset            = isset;           // Fun��o verifica se o objeto ou vari�vel existe
	this.openajax         = openajax		 // Fun��o respos�vel por criar a conec��o ajax  	
	this.Ajax             = Ajax			 // Fun��o respons�vel por enviar e receber dados via ajax 
	this.AjaxD            = AjaxD			 // Fun��o respons�vel por enviar e receber dados via ajax 
	this.ExtraiScript     = ExtraiScript;    // Executa o javascript do ajax	
	this.novoJS           = novoJS;          // Fun��o carraga novos Js 
	this.novoCSS          = novoCSS          // Fun��o carregar novas folhas de estilos css
	this.LimpaNumero      = LimpaNumero;     // Fun��o limpar as vigulas e pontos do n�mero;
	this.Formata_moeda    = Formata_moeda;   // Fun��o Formatar numero p/ Moeda
	this.txtPARAhmtl      = txtPARAhmtl;     // Converte o valor de um campo textarea \n para HTML <br>
	this.nPARAtxt         = nPARAtxt;        // Reverte o HTML <br> para \n no text area
	this.BuscaCep         = BuscaCep;        // retorna um array de cep
	this.Extend           = Extend           // Extende a class com novos JSs
	this.CarregaJS        = CarregaJS;       // 
	this.Replace          = Replace;         // Replace mais eficiente que o replace do JS
	this.addEvent         = addEvent;		 // Adiciona evento sem atrapalhar os outros
	this.verificaData     = verificaData;    // retorna true ou false com execu��o de fun��o nos dois eventos de sucesso e erro
	this.difDate          = difDate;		 // Retorna a deiferenca de dias entre 2 datas formato 99/99/9999
	this.addAntes         = addAntes         // Insere um alemento antes do descrito 
	this.addDepois        = addDepois        // Insere um alemento depois do descrito 	
	
	// Vari�veis Diposn�veis
    if($id != '' || undefined || null){ this.obj = get($id); }else{ this.obj = ''; }	

	this.idd         = aleatorio(1,100000);
	this.Nocache     = true;	
	this.HTTP_persist= 0; // vari�vel para tentar v�rias vezes caso o retorne 404 AJAX
	this.Memo_link   = '';
	this.Memo_Func   = '';
	this.HTTP        = 'GET';
	this.JSs         =  new Array(); // array de javascript para carregar
	this.JSi         =  0; // indice dos JSs
	this.Jsloaded    =  0;
	this.JSsExes     =  new Array(); // arrau de javascript para carregar
	
	this.Decimais    = 2;
	

this.porcento = function($porcentagem,$valor){	
	return (($valor / 100) * $porcentagem);	
}
this.porcentoValor = function($valor1,$valor2){
	
	if($valor1 == 0 || $valor2 == 0){ return 100; }
	
	return (($valor2/$valor1)*100);
}
	
/// Fun��o retorna objeto ///////////////////////////////////////////////////////////////////////////////////////////////////////////
function get($id){ 	return document.getElementById($id); }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addEvent($obj, evType, $func, useCapture){
	
	if(typeof($obj) == 'string'){ $obj = get($obj); }
	
    if($obj.addEventListener)
    {
        $obj.addEventListener(evType, $func, useCapture);
    } else
    if($obj.attachEvent)
    {
        $obj.attachEvent("on" + evType, $func);
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addAntes(node,tag,id){ 
	var ne = document.createElement(tag); 
	if(id) ne.id = id; 
	node.parentNode.insertBefore(ne,node); 
	return ne;
} 

function addDepois(node,tag,id){ 
	if(typeof(tag) == 'string')
	{ 	
		var ne = document.createElement(tag);  
	}
	else
	{
		var ne = tag;  
	}

	if(id) ne.id = id; 
	node.parentNode.insertBefore(ne,node.nextSibling); 
	return ne;
} 

/// Fun��o value objeto txt /////////////////////////////////////////////////////////////////////////////////////////////////////////
function mask_value($ini_txt,$obj){
 
 if($obj == undefined){
 	var $obj = this.obj;
 }
 $obj.setAttribute('placeholder',$ini_txt);
}

/// Fun��o Verifica E-mail //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function v_email(){
	//var $valor = this.obj.value;
    var $obj = this.obj;
      $obj.onblur  = function(){ if(this.value == ''){ 
	  $obj.style.border = '1px solid #FF9595';
	 }else{
		  var $erro = false;
		  if($obj.value.indexOf('@') == -1){ $erro = true;}
		  if($obj.value.indexOf('.') == -1){ $erro = true;}
	
	if($erro == true){
		$obj.style.border = '1px solid #FF9595';
	}else{
		$obj.style.border = '1px solid #009700';
		
	}
 }}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o setar atributos ao campo /////////////////////////////////////////////////////////////////////////////////////////////////
function atributo($atr, $valor, $obj) {
	if($obj != undefined){
    var newAttr = document.createAttribute($atr);
    newAttr.nodeValue = $valor;
	//if($obj == undefined || $obj == ''){
    //this.obj.setAttributeNode(newAttr);
	//}else{
	$obj.setAttributeNode(newAttr);
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o remover atributos ao campo /////////////////////////////////////////////////////////////////////////////////////////////////
function RemoveAtributo($atr,$obj) {
	
	if($obj == undefined){ var $obj = this.obj;  }
    var m = $obj.removeAttribute($atr);
        if (m != true) {
           // alert("Erro na remo��o do atributo no objeto"+$obj+' atributo '+$atr);
        }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o gera numero aleatorio /////////////////////////////////////////////////////////////////////////////////////////////////
function aleatorio(i, f){
	if(arguments[0] == null){
			return Math.random();
	}else{
		if (i > f) {numInicial = f;numFinal = i+1;}else{numInicial = i;numFinal = f+1;}
		numRandom = Math.floor((Math.random()*(numFinal-numInicial))+numInicial);
		return numRandom;
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Perminte apenas N�meros  /////////////////////////////////////////////////////////////////////////////////////////////////
function Numerico($txt){
	$aceitos  = '1234567890';
	$ok = true;
	$txt = $txt+'';
	$nums = $txt.split('');
	
	for($i = 0; $i<$nums.length;$i++){
		if($aceitos.indexOf($nums[$i]) == -1){ $nums[$i] = ''; }
	}
    $nums = $nums.join('');
	 return $nums;	
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o verifica se o objeto ou vari�vel existe  /////////////////////////////////////////////////////////////////////////////////
function isset(o) {   if (o != undefined && o != null){  return true; }else{  return false; }}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o Mascara o valor Monet�rio  ///////////////////////////////////////////////////////////////////////////////////////////////
function mask_money($obj,$comandos,$versao,$casasDecimais){
	
	if(!$casasDecimais){ $casasDecimais = this.Decimais; }
	
	if($obj == undefined){ var $obj = this.obj;   }
	
	$obj.setAttribute('monetario','s');
	$obj.setAttribute('placeholder',$B.vlr(0,'h'));
	$obj.setAttribute('decimais',$casasDecimais);

	if($comandos == 'remove'){
			$obj.onkeypress = function(){}
			$obj.onkeyup = function(){}
	}
	
	$B.addEvent($obj,'blur',function (){ this.value = 'R$ '+$B.vlr(this.value,'h',this); });
	$B.addEvent($obj,'focus',function (){ if($B.vlr(this.value) < 0.01){ this.value = ''; return true;  } this.value = $B.vlr(this.value,'h',this); window.setTimeout(function(t){ t.select();},10,this); });
	$obj.onkeypress = function(){ }
	$obj.onkeyup = function(){ }
	return true;
	
	
	if($versao == 2){
			
			$B.addEvent($obj,'blur',function (){ this.value = 'R$ '+$B.vlr(this.value,'h'); });
			$B.addEvent($obj,'focus',function (){ this.value = $B.vlr(this.value,'h'); this.select(); });
			$obj.onkeypress = function(){ }
			$obj.onkeyup = function(){ }
			return true;
			
	}
	
	if(!$comandos){
			$obj.onkeypress = function (){  if(document.getSelection() == this.value && event.keyCode != 13){ this.value = ''; }  this.value = 'R$ '+$B.vlr(this.value,'h')+'';}
			$obj.onkeyup = function (){ this.value = 'R$ '+$B.Formata_moeda (this.value)+''; }
	}
	

	
	if($comandos == ','){
			$obj.onkeypress = function (){ if(document.getSelection() == this.value && event.keyCode != 13){ this.value = ''; }   this.value = 'R$ '+$B.vlr(this.value,'h');}
			$obj.onkeyup = function (){   this.value = 'R$ '+$B.vlr(this.value,'h');}
	}
}

this.mask_porcent = function ($obj){
	
	if($obj == undefined){ var $obj = this.obj;   }
	$obj.onkeypress = function (){    this.value = $B.Formata_nun (this.value,8)+'';}
	$obj.onkeyup = function (){    this.value = $B.Formata_nun (this.value,8)+'';}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o Mascara o valor Num�rico  ///////////////////////////////////////////////////////////////////////////////////////////////
function MaskNum($obj,$excessao){

	if($obj == undefined){ $obj = this.obj; }
	
	var $func = function (){	
				
				if(event.keyCode == 13){ return true; }
				
				if($excessao == undefined){ $excessao = ''; }
				
				var $aceitos  = '1234567890'+$excessao;
				var $ok = true;
				var $txt = this.value+'';
				var $nums = $txt.split('');
				
				for($i = 0; $i<$nums.length;$i++){
					if($aceitos.indexOf($nums[$i]) == -1){ $nums[$i] = ''; }
				}
				$nums = $nums.join('');
				this.value = $nums; 
	}
	
	
	if($excessao == 'remove'){
		$obj.removeEventListener('keyup', $func, false);
		return false;	
	}

	$B.addEvent($obj,'keyup',$func);
	
}

// desabilitada
this.obs = function($obj,$txt){  
					
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o Mascara de cep ///////////////////////////////////////////////////////////////////////////////////////////////////////////

function mask_cep($obj){
	if($obj == undefined){ $obj = this.obj;  }
	
	$B.addEvent($obj,'blur',function(){  Cep_(this); if(this.value.length < 9){ this.value = '';}});
	$B.addEvent($obj,'keypress',function(){  Cep_(this); });
	$obj.setAttribute('maxlength', '9');
}

this.mask_fone = function($obj){

		$B.atributo('maxlength', '14', $obj); 
		
		$obj.onkeyup = function(){
			
		var $num       = this.value + '';		
		var $numeros   = $B.Numerico($num);
		$numeros       = $numeros.split('');
		var $total     = $numeros.length;
		var $resultado = '';
		for ($i = 0; $i<$total; $i ++){
			if ($i == 0){
				$resultado += '(';
				}	
			$resultado += $numeros[$i];
			
			if ($i == 1){
				$resultado += ')';
				}
			if ($i == 1){
				$resultado += ' ';
				}
			if ($i == 5){
				$resultado += '-';
				}
		}
		
		this.value = $resultado;
		
		 } 
		 
		 $obj.onblur = function(){ if(this.value < 14){ this.value = ''; }}
		 
}

this.mask_cpf = function($obj){  


		//$B.atributo('maxlength', '14', $obj);
		$obj.onkeyup = function(){  
		
		var $num       = this.value + '';
		var $numeros   = $B.Numerico($num);
		$numeros       = $numeros.split('');
		var $total     = $numeros.length;
		
		if($num.length > 14){ $B.mask_cnpj(this); this.onkeyup(); return false; }
		
		if(event.keyCode == 8){ return true; }
		
		var $resultado = '';
		for ($i = 0; $i<$total; $i ++){
				
			$resultado += $numeros[$i];
			
			if ($i == 2){
				$resultado += '.';
				}
			if ($i == 5){
				$resultado += '.';
				}
			if ($i == 8){
				$resultado += '-';
				}
		}
		
		this.value = $resultado;
		
		 } 
		 		
}


this.validarCPF = function(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;
 
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
        return false;
     
    // Valida 1o digito
   	var add = 0;
    for (var i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
     
    // Valida 2o digito
    var add = 0;
    for (var i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
         
    return true;
    
}

this.validDoc = function($obj){
	
	$B.mask_cpf($obj);
	
	if(typeof($obj) == 'string'){  $obj = get($obj); }
	
			$B.addEvent($obj,'blur',function(){
				var $valido = true;
				
				var $verif  =   this.value.replace(/[^\d]+/g,'');

				if($verif.length > 11)
				{ 
					if(!$B.validarCNPJ(this.value)){ $valido = false; }
					var $tipo = 'CNPJ';
				}
				else
				{  
					if(!$B.validarCPF(this.value)){ $valido = false; }
					var $tipo = 'CPF';
				}
				
				if(!$valido){ $B.shake(this);	this.className = 'inputErro'; $B.toast($tipo+' inv&aacute;lido'); this.value = ''; }else{ this.className = 'inputNormal'; }
				
				
			});
	
}
this.shake = function($obj,$repet){
		
		var $l = $B.vlr($obj.style.marginLeft);
		var w = window;
		var st = $obj.style;
		
		w.setTimeout(function(){ st.marginLeft = ($l-4)+'px'; },100);
		w.setTimeout(function(){ st.marginLeft = ($l-0)+'px'; },140);
		w.setTimeout(function(){ st.marginLeft = ($l+4)+'px'; },180);
		w.setTimeout(function(){ st.marginLeft = ($l)+'px'; },200);
			
		if(!$repet){
			 $B.shake($obj,1);
		}
}


this.mask = function(campo, mask, evt) {
		

 campo.setAttribute('maskb',mask);
 campo.setAttribute('maxlength',mask.length);
 campo.setAttribute('placeholder',this.Replace('#','_',this.Replace('!','_',mask)));
 
 this.addEvent(campo,'keydown',function(){ 
					 
				var key = event.keyCode; 
				var mask = this.getAttribute('maskb');
				var campo = this;



					if (key == 8 || key == 46 || key == 9 || key == 13 || key == 27 || key == 45) {	return true;  }
					 
					 var string = campo.value;  
					 var i = string.length;		
					 var ok = false;
					 
					
					 
					 get('log').innerHTML = mask.charAt(i) +' | '+mask.charAt(i+1);
					 
					 if(mask.charAt(i) != '#' && mask.charAt(i) != '!'){
						  
						  campo.value += mask.charAt(i);
						  
					 	if(mask.charAt(i+1) == '!'){

							 if (key > 47 && key < 58){ }else if(key > 96 && key < 105){  }else{  event.preventDefault();  }
						 
					 	}
						//if(mask.charAt(i+2) != '#' && mask.charAt(i+2) != '!'){  campo.value += mask.charAt(i+2);  }
						return true;
					 }
					 
					 if(mask.charAt(i) == '!'){

							 if (key > 47 && key < 58){ }else if(key > 96 && key < 105){  }else{  event.preventDefault();  }
						 
					 }		  
	}); 

}



this.validarCNPJ = function (cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0,tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

this.dataDb = function($data){ if($data.indexOf('/') < 0){ return $data; } var $h = $data.split(' ')[1]; if(!$h){ $h = ''; }else{ $h = ' '+$h; }  var $d = $data.split(' ')[0].split('/'); return  $d[2]+'-'+$d[1]+'-'+$d[0] + $h; }

this.mask_data = function($obj){ 

		$B.atributo('maxlength', '10', $obj); 
		
		$B.addEvent($obj,'blur',function(){ if(!$B.verificaData(this)){ this.className = 'inputErro'; this.value = ''; }else{ this.className = 'inputNormal'; }  });

		
		$B.addEvent($obj,'keypress',function(){  
	
		var $num       = this.value + '';
		var $numeros   = $B.Numerico($num);
			$numeros       = $numeros.split('');
		var $total     = $numeros.length;
		var $resultado = '';
		for ($i = 0; $i<$total; $i ++){
				
			$resultado += $numeros[$i];
			
			if ($i == 1){
				$resultado += '/';
				}
			if ($i == 3){
				$resultado += '/';
				}
		}
		
		this.value = $resultado;
		
		});



 }
 
function difDate(data1,data2) {

   var d1=new Date(data1.substr(6,4), data1.substr(3,2)-1, data1.substr(0,2));
   var d2=new Date(data2.substr(6,4), data2.substr(3,2)-1, data2.substr(0,2));
   return( Math.ceil((d2.getTime()-d1.getTime())/1000/60/60/24) );
} 

function verificaData($obj,$funcErro,$funcSucess){
	
	if(typeof($funcErro)   != 'function'){ $funcErro = function(){}; }
	if(typeof($funcSucess) != 'function'){ $funcSucess = function(){}; }
	

        var bissexto = 0;
		if(typeof($obj)        == 'object'){  var data = $obj.value;  }else{  var data = $obj; }
        var tam = data.length;
		
        if (tam == 10) 
        {
                var dia = data.substr(0,2)
                var mes = data.substr(3,2)
                var ano = data.substr(6,4)
                if ((ano > 1900)||(ano < 2100))
                {
                        switch (mes) 
                        {
                                case '01':
                                case '03':
                                case '05':
                                case '07':
                                case '08':
                                case '10':
                                case '12':
                                        if  (dia <= 31) 
                                        {
                                                $funcSucess($obj); return true;
                                        }
                                        break
                                
                                case '04':              
                                case '06':
                                case '09':
                                case '11':
                                        if  (dia <= 30) 
                                        {
                                                $funcSucess($obj); return true;
                                        }
                                        break
                                case '02':
                                        /* Validando ano Bissexto / fevereiro / dia */ 
                                        if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) 
                                        { 
                                                bissexto = 1; 
                                        } 
                                        if ((bissexto == 1) && (dia <= 29)) 
                                        { 
                                                $funcSucess($obj); return true;                             
                                        } 
                                        if ((bissexto != 1) && (dia <= 28)) 
                                        { 
                                                $funcSucess($obj); return true; 
                                        }                       
                                        break                                           
                        }
                }
        }       
        $funcErro($obj); return false;
}

this.mask_cnpj = function($obj){ 

		$B.atributo('maxlength', '18', $obj); 
		$obj.onkeyup = function(){  
	
		var $num       = this.value + '';

		if($num.length < 14){ $B.mask_cpf(this); this.onkeyup(); return false; }
		
		var $numeros   = $B.Numerico($num);
		$numeros       = $numeros.split('');
		var $total     = $numeros.length;
		var $resultado = '';
		
		if(event.keyCode == 8){ return true; }
		
		for ($i = 0; $i<$total; $i ++){
				
			$resultado += $numeros[$i];
			
			if ($i == 1){
				$resultado += '.';
				}
			if ($i == 4){
				$resultado += '.';
				}
			if ($i == 7){
				$resultado += '/';
				}
			if ($i == 11){
				$resultado += '-';
				}
		}
		
		this.value = $resultado;
		
		 } 
		 
 } 
 
this.valida_email = function ($obj){
		
		$obj.onblur = function(){
		var $value = this.value;
		if(this.getAttribute('oldStyle') == undefined){
		   $B.atributo('oldStyle',this.getAttribute('style'),this);
		}
		
		if($value.indexOf("@") == -1 || $value.indexOf(".") == -1 || $value.indexOf(" ") == 1){ 
			this.value = ''; this.style.border = '1px solid red';
		}else{;
			$B.RemoveAtributo('style',this);
			$B.atributo('style',this.getAttribute('oldStyle'),this);
		}
	}
} 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// fun��o ajax para a classe  =D ///////////////////////////////////////////////////////////////////////////////////////////////////
function openajax(){
				var ajax; /* Defini a Vari�vel */
					try{ ajax = new XMLHttpRequest(); /* Tenta Instanciar o Objeto */}
										catch(ee){ try {
											ajax = new ActiveXObject("Msxm12.XMLHTTP"); /* Se Nao Conseguiu o Anterior Tenta esse*/
										}catch(e){
										try{
												ajax = new ActiveXObject("Microsoft.XMLHTTP"); /* E o mesmo se repete aqui*/
										}catch(E){
										ajax = false; /* Se nao conseguiu em Nenhum retorna False pois o Navegador Usado nao Suporta Ajax*/
					}
					}
				}
				return ajax; /* Retorna um Boleano*/
}
// segunda parte

function Ajax($link,$func,$comandos,$POSTVARS){ 
		
			
			var ajax = this.openajax(); 
			// retiro o cache ^^ 
			if(this.Nocache == true){ $verif = $link.indexOf('?'); if($verif == -1){ $link+= '?NO_CACHE_sess='+Math.random();}else{ $link+= '&NO_CACHE_sess='+Math.random(); } } 
			
			
					
			
			if($POSTVARS){
				ajax.open("POST",$link,true);
				ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			}else{
				ajax.open("GET",$link,true);	
			}



			/* true = Assicrono ou n�o = Dando o Refresh no Browser ou Nao*/
			ajax.onreadystatechange = function(){/* ajax.onreadystatechange = O que ele fara de acordo com o tempo de execua��o*/
			
			if (ajax.readyState < 4){}/* ajax.readystate = Estado que se encontra a Requisi��o*/
			if (ajax.readyState == 4){
			if (ajax.status == 200){
			/* Estado de Carregamento*/
			//alert(ajax.getResponseHeader('Content-Length'));
			var $resp = ajax.responseText;
			$B.ExtraiScript($resp); // executo os codigos javascript se ouver 
			$func($resp,$link); if($comandos){ $comandos(); }
			}else{ $func(404);  } 
			
			}
			}
			
			ajax.send($POSTVARS);

}


function AjaxD($link,$func,$comandos,$POSTVARS){ 
		
			
			var ajax = this.openajax(); 
			// retiro o cache ^^ 
			//if(this.Nocache == true){ $verif = $link.indexOf('?'); if($verif == -1){ $link+= '?NO_CACHE_sess='+Math.random();}else{ $link+= '&NO_CACHE_sess='+Math.random(); } } 
			
			
					
			
			if($POSTVARS){
				ajax.open("POST",$link,true);
				ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				ajax.setRequestHeader("Access-Control-Allow-Origin", "*");
				ajax.setRequestHeader ("Authorization", "Basic " + btoa('teorema' + ":" + '1811'));
			}else{
				ajax.open("GET",$link,true);	
			}



			/* true = Assicrono ou n�o = Dando o Refresh no Browser ou Nao*/
			ajax.onreadystatechange = function(){/* ajax.onreadystatechange = O que ele fara de acordo com o tempo de execua��o*/
			
			if (ajax.readyState < 4){}/* ajax.readystate = Estado que se encontra a Requisi��o*/
			if (ajax.readyState == 4){
			if (ajax.status == 200){
			/* Estado de Carregamento*/
			//alert(ajax.getResponseHeader('Content-Length'));
			var $resp = ajax.responseText;
			$B.ExtraiScript($resp); // executo os codigos javascript se ouver 
			$func($resp,$link); if($comandos){ $comandos(); }
			}else{ $func(404);  } 
			
			}
			}
			
			ajax.send($POSTVARS);

}

this.avisaErro = function($resp,$link,$errN){
		
		// return false;
		// if($link.indexOf('?p=inc/login.dll') > -1 || link.indexOf('?p=inc/l.dll') > -1){ return false; }
		// if(!$errN){ $errN = 0; }else{ $errN+1; }
		
		// var $url = new Array(
		// 					'http://backup.prontosoft.com.br/erro/img.php?ac=erro'
		// 					);
							
		// 					if(!$url[$errN]){ return false; }
							
		// var $dados = {}
							
		// $dados.url  = window.location.href;
		// $dados.ajax = $link;
		// $dados.resp = $resp;
		
		// var $s = JSON.stringify($dados);
				
		// var $img = document.createElement('img');
		// 	$img.src = $url[$errN]+'&dados='+encode64($s);
			
		// 	$img . onerror = function(){ this.avisaErro($resp,$link,$errN); }
			
		// 	$img.setAttribute('style','width:1px; height:1px; opacity:0.1');
			
		// 	document.body.appendChild($img);
			
			
						
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// fun��o carrega js  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
function novoJS($js,$cache,$comandos){
		this.JSs[this.JSi]           = $js;
		this.JSsExes[this.JSi]       = $comandos;
		this.JSi++;
}
function CarregaJS($cache,$tipo){
	

	if(this.Jsloaded > this.JSi){ return false; }
	var $js = this.JSs[this.Jsloaded];
	

	
	var $BL = this;
	
	if($tipo == 'script'){
		//alert($js);
		var idd = $B.Replace('.','_',$B.Replace('/','_',$js));
		//alert(get(idd));
		if(get(idd) != null){  this.JSsExes[this.Jsloaded](); $B.CarregaJS(); $BL.Jsloaded++; return true; }
		
		var novo = document.createElement("script");
			novo.type         = 'text/javascript';
			novo.language     = 'javascript';
			novo.src = $js;
			novo.id = idd;
			novo.setAttribute('indice',this.Jsloaded);
			novo.onload  = function(){  $B.CarregaJS(); $B.execJs(this.getAttribute('indice')); }
			document.body.appendChild(novo);
		
			$BL.Jsloaded++;

			return true;
			
	}

		
	if($cache == true){
		this.Nocache = false;
	}

	
	this.Ajax($js,function($codigo,$link,$comandos){
			var novo = document.createElement("script");
			novo.type         = 'text/javascript';
			novo.language     = 'javascript';
			novo.text = $codigo;
			novo.uri  = $link;
			novo.uri  = $comandos;
			
			document.body.appendChild(novo);
			$BL.Jsloaded++;
	if($BL.Jsloaded < $BL.JSi){ $BL.CarregaJS(); }else{   $BL.Nocache = true; }

	
	},this.JSsExes[this.Jsloaded]);
}
this.execJs = function($i){}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// fun��o carrega css //////////////////////////////////////////////////////////////////////////////////////////////////////////////
function novoCSS($css,$cache){

	var novo = document.createElement("link");
		novo.rel         = 'stylesheet';
		novo.type        = 'text/css';
		novo.href        = $css+'?sess='+Math.random();			
		document.body.appendChild(novo);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// fun��o carrega js  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ExtraiScript(texto){

    // inicializa o inicio ><
    var ini = 0;
    // loop enquanto achar um script
    while (ini!=-1){
        // procura uma tag de script
        ini = texto.indexOf('<script', ini);
        // se encontrar
        if (ini >=0){
            // define o inicio para depois do fechamento dessa tag
            ini = texto.indexOf('>', ini) + 1;
            // procura o final do script
            var fim = texto.indexOf('</script>', ini);
            // extrai apenas o script
            codigo = texto.substring(ini,fim);
            novo = document.createElement("script")
			novo.type         = 'text/javascript';
			novo.language     = 'javascript';
            novo.text = codigo;
			
			if(!get('_AreaScriptsDinamicos_')){
				var $area = document.createElement('AreaScriptsDinamicos');
				$area.style.display = 'none';
				$area.id = '_AreaScriptsDinamicos_';
				document.body.appendChild($area);
			}
			
			get('_AreaScriptsDinamicos_').innerHTML = '';
			get('_AreaScriptsDinamicos_').appendChild(novo);
			
        }
    }
	
}
/// Fun��o limpar as vigulas e pontos do n�mero ///////////////////////////////////////////////////////////////////////////////////
function LimpaNumero($NUM,$excessao){
	
	var $valor = $NUM+'';
	var $string = '';
	
	if(!$excessao){ $excessao = ''; }	 
	try{ $string = $valor.split(''); }catch(e){}
	
	var $return = '';
	if($string.length > 0){
	
	var $permitidos = '1234567890-'+$excessao;
    for(var $i=0;$i <= $string.length; $i++ ) {
		if($permitidos.indexOf($string[$i]) != -1 && $string[$i] != undefined){
			$return = $return+''+$string[$i]; 
		}
	}

return $return;

}else{ return 0; }
}// fim da fun��o de limpar n�meros 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o Formatar numero p/ Moeda /////////////////////////////////////////////////////////////////////////////////////////////////
function Formata_moeda($NUM,$casa){

	if(!$casa){ $casa = '.'; }
	var $numeros = this.LimpaNumero($NUM);
	if($numeros){ 
	$numeros   = $numeros / 100;
	$numeros   = $numeros.toFixed(2)+'';
	 return ($numeros+'').replace('.',$casa);
	}else{
	 return ('0.00').replace('.',$casa);
	}

}

this.Formata_nun = function($NUM,$CASAS){
	var $numeros = this.LimpaNumero($NUM);
	if($numeros > 0){ 
	$numeros   = $numeros / 100;
	$numeros   = $numeros.toFixed($CASAS)+'';
	 return $numeros //$numeros.replace('.',',');
	}else{
	 return '0.00';	
	}

}

this.vlr = function vlr($valor,$tipo,$obj){

		var $valor = ($valor+'');
		
		if($valor.indexOf('e-') != -1){ $valor = '0'; }
			
		//if(!$B.Decimais){ $B.Decimais = 2; }
		
		var $Decimais = $B.Decimais;
	
		if($obj){ 
			
			var $v = $obj.getAttribute('decimais');
				if($v){ $Decimais = $v;  }
		}
		
	
	
	
	if($valor.indexOf(',') > -1 && $valor.indexOf('.') == -1){			
				$valor = $valor.replace(',','.');
	}
	if($valor.indexOf(',') > -1 && $valor.indexOf('.') > -1){			
				$valor = $valor.replace('.','').replace(',','.');
	}

	if(!$tipo){ var $tipo = 'c'; }
	var r = false;



	if($tipo == 'c'){ // c�lculo
		r =  parseFloat($B.LimpaNumero(($valor + '').replace(',','.'),'.'));
		if(!r){ return 0; }else{ return r; }
	}
	if($tipo == 'h'){ // humano

		if(typeof($valor) != 'number'){  $valor = this.vlr($valor,'c'); }
			
		r = ($valor.toFixed($Decimais) + '').replace('.',',');
		if(!r){ r = 0; return (r.toFixed($Decimais) + '').replace('.',','); }else{ return r; }
	}
	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o trocar \n por <br> /////////////////////////////////////////////////////////////////////////////////////////////////
function txtPARAhmtl($obj){
	if($obj == undefined || $obj == ''){ var $txt = this.obj.value; }else{
	var $txt = $obj.value;
	}
	return this.Replace("\n",'<br>',$txt);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o trocar  <br> por '' /////////////////////////////////////////////////////////////////////////////////////////////////
function nPARAtxt($obj){
	if($obj == undefined || $obj == ''){ var $txt = this.obj.value; }else{
	var $txt = $obj.value;
	}
	return this.Replace('<br>',"\n",$txt);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o Buscar cep /////////////////////////////////////////////////////////////////////////////////////////////////
function BuscaCep($cep,$func){}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Cria a tag para js /////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Extend($JS){
 document.writeln('<script type="text/javascript" src="'+$JS+'"></script>');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o semelhante a do php str_replace///////////////////////////////////////////////////////////////////////////////////////////
function Replace($search,$replace,$txt){
					  $txt = $txt+'';
					  $txt = $txt.split($search);
					  $txt = $txt.join($replace);
					  return  $txt;	
}



this.toast = function($txt){
		
		var $div = document.createElement('div');	
			$div.innerHTML = $txt;
			$div.setAttribute('opc',0);
			$div.setAttribute('style','position:absolute; z-index:9999; left:50%; top:50%; min-width:100px; height:20px; padding:10px; border-radius:10px; background:#000; color:#FFF; text-align:center; opacity:0.0; font-size:14px; box-shadow:1px 1px 20px #000; font-family:Verdana, Geneva, sans-serif; ');
			

			document.body.appendChild($div);

			$div.style.marginLeft = '-'+($div.offsetWidth / 2)+'px';
			$div.style.marginTop = '-'+($div.offsetHeight / 2)+'px';
			
			
		var $func = function($obj,$fn){
						
						var op = eval($obj.getAttribute('opc'));
						op += 2;

						$obj.setAttribute('opc',op);
						$obj.style.opacity = '0.'+(op > 9? op : '0'+op  ) ;
						
						if(op < 98){  window.setTimeout($func ,30,$obj,$fn);   return false; }else{  $obj.parentNode.removeChild($obj); }						
							
			}
			
			 
			 window.setTimeout($func ,30,$div,$func);
	
}

this.numberMin = function($obj,$ini,$fim,$time,$incremento){
	
			var $ini = $B.vlr($ini);
			var $fim = $B.vlr($fim);
		
			if(!$time){ $time = 10;  }

			if(!$incremento){ $incremento = 1; }
			
			if(typeof($obj) == 'string'){ var $obj = get($obj);  }
			
			var $soma = ($ini - $fim);
				
			var $tempo = window.setInterval(function(){
									
				if($ini < $fim){
					
					$ini += $incremento;
					if($obj.tagName == 'INPUT'){  $obj.value = $ini; }else{
						$obj.innerHTML = $ini;
					}
						
				}else{ window.clearInterval($tempo); }

						
			},$time);	
}

this.inpProx = function($obj,$prox,$acObj){

	if($acObj){ if($acObj.inpProxKey.tagName == 'SELECT'){ $acObj.inpProxKey.focus(); }else{ $acObj.inpProxKey.focus(); $acObj.inpProxKey.select(); } return true; }


	$obj.inpProxKey = $prox;
	
	if($obj.tagName == 'SELECT'){ 
	
			$obj.setAttribute('enterseq',0);
			$B.addEvent($obj,'change',function(){ if(event.keyCode != 13){ $B.inpProx(false,false,this); this.setAttribute('enterseq',0); }});
			$B.addEvent($obj,'keypress',function(){ 
												var seq = $B.vlr(this.getAttribute('enterseq'));
													if(event.keyCode == 13 && seq > 0){ event.preventDefault(); this.setAttribute('enterseq',0); $B.inpProx(false,false,this);
													}else{ this.setAttribute('enterseq',seq+1); }
													});
	}else{
			$B.addEvent($obj,'keydown',function(){ 
													if(event.keyCode == 9){ event.preventDefault(); $B.inpProx(false,false,this); }
													if(event.keyCode == 13){ $B.inpProx(false,false,this); }
													});
}

	
							
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}// fim da classe 

/// -----------------------------------------------------------------------------------------------------------------------------
function onload(func){

	//by Micox - based in jquery bindReady and Diego Perini IEContentLoaded
    //flag global para indicar que j� rodou e function que roda realmente
    done = false
    init = function($quem){ if(!done) { done=true; func(); } }
    var d=document; //apelido para o document
    //pra quem tem o DOMContent (FF)
    if(document.addEventListener){ d.addEventListener("DOMContentLoaded", init, false ); return; }
    
    if( /msie/i.test( navigator.userAgent ) ){ //IE
        (function () {
            try { // throws errors until after ondocumentready                
                d.documentElement.doScroll("left");
            } catch (e) {
                setTimeout(arguments.callee, 10); return;
            }
            // no errors, fire
            init(1); return;
        })();
    }
    if ( window.opera ){
        d.addEventListener( "DOMContentLoaded", function () {
            if (done) return;
            //no opera, os estilos s� s�o habilitados no fim do DOMready
            for (var i = 0; i < d.styleSheets.length; i++){
                if (d.styleSheets[i].disabled)
                    setTimeout( arguments.callee, 10 ); return;
            }
            // fire
            init(2); return;
        }, false);
    }
    if (/webkit/i.test( navigator.userAgent )){ //safari's
        if(done) return;
        //testando o readyState igual a loaded ou complete
        if ( /loaded|complete/i.test(d.readyState)===false ) {
            setTimeout( arguments.callee, 10 );    return;
        }
        init(3);  return;
    }
    //se nada funfou eu mando a velha window.onload lenta mesmo
    if(!done) window.onload = init
}
/// -----------------------------------------------------------------------------------------------------------------------------



// fun��o para carregar o objeto
function get($id){
		return document.getElementById($id);
	
}


//fun��o make cep
function Cep_($obj){
		var $num       = $obj.value + '';
		var $numeros   = Numerico($num);
		$numeros       = $numeros.split('');
		var $total     = $numeros.length;
		var $resultado = '';
		for ($i = 0; $i<$total; $i ++){
			
			$resultado += $numeros[$i];
			if ($i == 4){
				$resultado += '-';
				}	
		}
		
		$obj.value = $resultado;
}
//

///////////////////////////////////////////////////////////////////////////////////////////
function Numerico($txt){
	$aceitos  = '1234567890';
	$ok = true;
	$txt = $txt+'';
	$nums = $txt.split('');
	
	for($i = 0; $i<$nums.length;$i++){
		if($aceitos.indexOf($nums[$i]) == -1){ $nums[$i] = ''; }
	}
    $nums = $nums.join('');
	 return $nums;
	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Fun��o Mascara data  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Data_Masc($obj){
		
		var $num       = $obj.value + '';
		var $numeros   = this.limpar($num);
		$numeros       = $numeros.split('');
		var $total     = $numeros.length;
		var $resultado = '';
		
		for ($i = 0; $i<$total; $i ++){
				
			$resultado += $numeros[$i];
			
			if ($i == 1){
				$resultado += '/';
				}
			if ($i == 3){
				$resultado += '/';
				}
		}
		$obj.value = $resultado;
}



$B = new Objeto();


// onload de qualquer lugar \o/ 
$ArrOnload = new Array();
function AddOnload($func){  $ArrOnload[$ArrOnload.length] = $func;   }

onload(function(){
	for(var $i=0;$i<$ArrOnload.length;$i++){	
	$ArrOnload[$i]();
}
	
});