import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isValidInput(value: string): boolean {
    
    const validCharacters = /^[0-9+\-*/=]*$/;
    return validCharacters.test(value);
  }
}
