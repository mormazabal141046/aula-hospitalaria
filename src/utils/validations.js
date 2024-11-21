export function requiredField(val) {
   return !val ? "Este campo es requerido." : true
}
export function emailFormat(val) {
   let withEmojis = /\p{Extended_Pictographic}/u;
   if(withEmojis.test(val)) return false;
   let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   return !regex.test(val) ? "Email inválido. Por favor revisa nuevamente." : true;
}
export function phoneFormat(val) {
   let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/im;
   return !regex.test(val) ? "Formato inválido. Por favor revisa nuevamente." : true;
}
export function rutFormat(val) {
   const regex = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/im;
   if(regex.test(val)) {
      let tmp 	= val.split('-');
      let digv	= tmp[1].replace('K','k');
      let rut 	= parseInt(tmp[0].replaceAll('.',''));

      let M=0,S=1;
      for(;rut;rut=Math.floor(rut/10)) {
         S=(S+rut%10*(9-M++%6))%11;
      }
      let validation =  S?S-1:'k';

      if(validation == digv)
         return true;
   }
   return "Rut inválido. Por favor revisa nuevamente.";
}
export function alphaField(val) {
   const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
   return !regex.test(val) ? "Solo letras. Por favor revisa nuevamente." : true
}
export function alphaNumericField(val) {
   const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]*$/;
   return !regex.test(val) ? "Solo letras y números. Por favor revisa nuevamente." : true
}
