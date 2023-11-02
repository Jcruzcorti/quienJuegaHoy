
// export const newDateArg = (fechaUTC) => {
//   const dateArgentina = new Date(fechaUTC);
//   dateArgentina.setUTCHours(dateArgentina.getUTCHours() - 3);
  

//   const hours = dateArgentina.getUTCHours(); 
//   const minutes = dateArgentina.getUTCMinutes();

//   const newDateArg = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

//   return newDateArg;
// };

export const newDateArg = (fechaUTC) => {
  const dateArgentina= new Date (fechaUTC).toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return dateArgentina
}



