import { format } from 'date-fns';
import { es } from 'date-fns/locale';


export const newDateArg = (fechaUTC) => {
  const fechaArgentina = new Date(fechaUTC);
  return format(fechaArgentina, " HH:mm", { locale: es });
};