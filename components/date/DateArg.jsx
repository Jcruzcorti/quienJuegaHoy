
export const newDateArg = (fechaUTC) => {
  const dateArgentina = new Date(fechaUTC);

  const hours = dateArgentina.getUTCHours() - 3; 
  const minutes = dateArgentina.getUTCMinutes();

  const newDateArg = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return newDateArg;
};





