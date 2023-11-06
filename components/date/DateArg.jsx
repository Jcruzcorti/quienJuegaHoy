
export const newDateArg = (fechaUTC) => {
  const dateArgentina = new Date(fechaUTC);
  dateArgentina.setUTCHours(dateArgentina.getUTCHours() - 3);
  

  const hours = dateArgentina.getUTCHours(); 
  const minutes = dateArgentina.getUTCMinutes();

  const newDateArg = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return newDateArg;
};



//   import { utcToZonedTime } from 'date-fns-tz';

// // ...

// const dateArgentina = utcToZonedTime(new Date(fechaUTC), 'America/Argentina/Buenos_Aires');

// // ...


// export const newDateArg = (fechaUTC) => {
//   const fechaArgentina = new Date(fechaUTC);
//   const offsetArgentina = -3; // UTC-3 para Argentina
//   const offsetUTC = fechaArgentina.getTimezoneOffset() / 60;

//   const nuevaFecha = new Date(fechaArgentina.getTime() + (offsetUTC + offsetArgentina) * 60 * 60 * 1000);
//   return nuevaFecha;
// };




// export const newDateArg = (fechaUTC) => {
//   const dateArgentina= new Date (fechaUTC).toLocaleTimeString('es-AR', {
//     hour: '2-digit',
//     minute: '2-digit',
//   });
//   return dateArgentina
// }



