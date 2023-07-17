document.addEventListener('keydown', function(event) {
          if (event.code === 'Enter') {
              RealizarLogin();
          }
      });
function RealizarLogin(){

        var $Login     = get('sLogin');
        var $PassWord  = get('sPassword');
        var $btnEnviar = get('btn_enviar');
    
        if($Login.value     == '')   { alert('Informe o nome de usuário !');   $Login.focus();  return false;  }
        if($PassWord.value  == '')   { alert('Informe sua senha !');           $PassWord.focus(); return false;  }  
       // $btnEnviar.disabled = true;
    $B.Ajax('/v1/serversettings/logindashboard/',function($r){              
            if($r == 'ok'){
                window.location.href = '/v1/serversettings/dashboard?user=1';
                return;
            };
            if($r == 'cnpj'){
                  window.location.href = '/v1/serversettings/configuratecompany';
            }else{
             var erro = get('sa-error');
             erro.click();
        }        
         },false,'login='+$Login.value+'&password='+$PassWord.value);  

}