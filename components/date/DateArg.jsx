
export const newDateArg = (fechaUTC) => {
  const dateArgentina = new Date(fechaUTC);
  dateArgentina.setUTCHours(dateArgentina.getUTCHours() - 3);
  

  const hours = dateArgentina.getUTCHours(); 
  const minutes = dateArgentina.getUTCMinutes();

  const newDateArg = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return newDateArg;
};





