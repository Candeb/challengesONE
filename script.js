function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c == 32); // [a-z ]
  }
  
  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
  }
    
  function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)) {
      elem.classList.add('invalido');
        if((validarEntrada(txt))==false){
          alert("Texto Incorrecto");
          document.getElementById("area").value = "";
          }
    } else {
      elem.classList.remove('invalido');
    }
  }


function copiarTexto(){
    window.onload = function (){
    };
    var textoCopy= document.getElementById("resultado1");
    textoCopy.select();
    document.execCommand('copy');
}

function limpiarText (){
  var txt='';
  document.getElementById("area").value = "";
  validarEntrada(txt);
} 

 //document.getElementById("resultado1").value = "";

 function aDesencriptar (){
    var textoArea = document.getElementById("area").value;
    if(textoArea.trim() != ''){
      
      var texto = decodificar(textoArea);
      
      document.getElementById("resultado1").innerHTML = texto;
      limpiarText();
    }
  }

  var desencriptar = document.querySelector(".desencriptar");
  desencriptar.onclick = aDesencriptar;


/*DE-CODIFICAR*/
  function decodificar(s) {
    var r = '';
    for (var j = 0; j < s.length;j++) {
      switch(s[j]) {
      case 'e': 
        if (s[j + 4] === 'r') { r += 'e'; j += 4; }
        else { return false; }
        break;
      case 'i': 
        if (s[j + 3] === 's') { r += 'i'; j += 3; }
        else { return false; }
        break;
      case 'a': 
        if (s[j + 1] === 'i') { r += 'a'; j += 1; }
        else { return false; }
        break;
      case 'o': 
        if (s[j + 3] === 'r') { r += 'o'; j += 3; }
        else { return false; }
        break;
      case 'u': 
        if (s[j + 3] === 't') { r += 'u'; j += 3; }
        else { return false; }
        break;
      default:
        r += s[j];
      }
    }
    return r;
  }

  function aEncriptar (){
    var textoArea = document.getElementById("area").value;
    if(textoArea.trim() != ''){
       var resultado1='';
       var texto=codificar(textoArea);
       document.getElementById("resultado1").innerHTML = texto;
       limpiarText();
     }
   }
   
   var aencriptar = document.querySelector(".bencriptar");
   aencriptar.onclick = aEncriptar;
   
  
   /*CODIFICAR*/
   function Cod(x) {
      switch(x) {
      case 'e': return 'enter';
      case 'i': return 'imes';
      case 'a': return 'ai';
      case 'o': return 'ober';
      case 'u': return 'ufat';
      default : return x;
      }
    }
    
    function codificar(s) {
      var r = '';
      for (const c of s) {
          r += Cod(c);
      }
      return r;
    }