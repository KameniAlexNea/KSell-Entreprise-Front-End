
import { InjectionToken } from '@angular/core';


export const defaultErrors = {
  required: (error) => `Ce champ est obligatoire`,
  minlength: ({ requiredLength, actualLength }) => `Attendu ${requiredLength} reçu ${actualLength}`,
  email: (error) => `email invalide`,
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});


