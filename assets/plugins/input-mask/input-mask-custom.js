$(document).ready(function() {
    $('#date-mask-input').mask("00/00/0000", {placeholder: "__/__/____"});
    $('#time-mask-input').mask('00:00:00', {placeholder: "__:__:__"});
    $('#date-and-time-mask-input').mask('00/00/0000 00:00:00', {placeholder: "__/__/____ __:__:__"});
    $('#zip-code-mask-input').mask('00000-000', {placeholder: "_____-___"});
    $('#money-mask-input').mask('000.000.000.000.000,00', {reverse: true});
    $('#phone-mask-input').mask('0000-0000', {placeholder: "____-____"});
    $('#phone-with-code-area-mask-input').mask('(00) 0000-0000', {placeholder: "(__) ____-____"});
    $('#us-phone-mask-input').mask('(000) 000-0000', {placeholder: "(___) ___-____"});
    $('#ip-address-mask-input').mask('099.099.099.099');
    $('#mixed-mask-input').mask('AAA 000-S0S');
    // $('#cnpj-mask').mask('00.000.000/0000-00', {placeholder: "__.___.___/____-__"});

    $('#cpfcnpj').mask('000.000.000-00', {
  onKeyPress : function(cpfcnpj, e, field, options) {
    const masks = ['000.000.000-000', '00.000.000/0000-00'];
    const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
    $('#cpfcnpj').mask(mask, options);
  }
});

});
