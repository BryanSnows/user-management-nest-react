import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorUtil {
  constructor() {}

  isValidEmail(email: string) {
    if (email && email.substr(0, email.indexOf('@')).length > 64) {
      return false;
    }

    return true;
  }

  isValidZipCode(zipCode: string) {
    if (!zipCode) {
      return false;
    }

    return /^[0-9]{2}\.?[0-9]{3}-?\d{3}$/.test(zipCode);
  }

  isValidCNPJ(cnpj: string) {
    if (!cnpj) {
      return false;
    }

    const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    if ((cnpj = cnpj.replace(/[^0-9]/g, '')).length !== 14) {
      return false;
    }

    if (/0{14}/.test(cnpj)) {
      return false;
    }

    let i;
    let n;

    for (i = 0, n = 0; i < 12; n += Number(cnpj[i]) * b[++i]) {}

    // tslint:disable-next-line: no-conditional-assignment
    if (cnpj[12] !== ((n %= 11) < 2 ? 0 : 11 - n).toString()) {
      return false;
    }

    for (i = 0, n = 0; i <= 12; n += Number(cnpj[i]) * b[i++]) {}

    // tslint:disable-next-line: no-conditional-assignment
    if (cnpj[13] !== ((n %= 11) < 2 ? 0 : 11 - n).toString()) {
      return false;
    }

    return true;
  }
}
