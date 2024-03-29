import { BadRequestException } from '@nestjs/common';
import { ValidType } from './Enums';

export class Validations {
  private static instance: Validations;
  public static getInstance(): Validations {
    if (!Validations.instance) {
      Validations.instance = new Validations();
    }
    return Validations.instance;
  }

  validateWithRegex(str: string, description: string = 'campo', ...valid) {
    valid.forEach((data) => {
      if (data === ValidType.IS_BOOLEAN) {
        if (!this.validRegex(/^(true|false)$/, str)) {
          throw new BadRequestException(
            `O valor deve conter apenas false ou true`,
          );
        }
      }

      if (data === ValidType.IS_BIT) {
        if (!this.validRegex(/^(0|1)$/, str)) {
          throw new BadRequestException(
            `Campo cabinet_side aceita apenas 0 ou 1`,
          );
        }
      }

      if (data === ValidType.IS_NUMBER) {
        if (this.validRegex(/[a-zA-Z!@#$%^&*(),.?":{}|<>]/gm, str)) {
          throw new BadRequestException(
            `O campo ${description} deve conter apenas números`,
          );
        }
      }

      if (data === ValidType.DIFERENT_OF_ZERO) {
        if (this.validRegex(/^0/gm, str)) {
          throw new BadRequestException(
            `Não é possível cadastrar valores zero!`,
          );
        }
      }

      if (data === ValidType.IS_STRING) {
        if (this.validRegex(/[\d]/g, str)) {
          throw new BadRequestException(`O nome não pode conter números`);
        }
      }

      if (data === ValidType.NO_SPACE) {
        if (this.validRegex(/\s+/g, str)) {
          throw new BadRequestException(
            `O nome ${description} não pode conter espaços em branco!!`,
          );
        }
      }

      if (data === ValidType.NO_MANY_SPACE) {
        if (this.validRegex(/\s +/g, str)) {
          throw new BadRequestException(
            `O nome não pode conter 2 ou mais espaços em branco!!`,
          );
        }
      }

      if (data === ValidType.NO_SPECIAL_CHARACTER) {
        if (
          this.validRegex(
            /[\\£¢¬!@#$%'_`´=~^&§ªº°;+-/\\¨*(),.?":{}||<>-]/g,
            str,
          )
        ) {
          throw new BadRequestException(
            `O campo ${description} não pode conter caracteres especiais!!`,
          );
        }
      }

      if (data === ValidType.IS_EMAIL) {
        if (!this.validRegex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i, str)) {
          throw new BadRequestException('O email informado não é válido!!');
        }
      }

      if (data === ValidType.DATE) {
        if (!this.validRegex(/\d{2}\/\d{2}\/\d{4}/g, str)) {
          throw new BadRequestException(`Data está em um formato inválido!`);
        }
      }

      if (data === ValidType.DATE_BR) {
        if (
          !this.validRegex(
            /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g,
            str,
          )
        ) {
          throw new BadRequestException(`Data está em um formato inválido!`);
        }
      }

      if (data === ValidType.SPECIAL_CHARACTER) {
        if (!this.validRegex(/[!@#$%^&*(),.?":{}|<>-]/g, str)) {
          throw new BadRequestException(
            `A senha deve ter ao menos um caractere especial`,
          );
        }
      }

      if (data === ValidType.MINIMUM_ONE_NUMBER) {
        if (!this.validRegex(/[\d]/g, str)) {
          throw new BadRequestException(`O valor deve ter ao menos um número`);
        }
      }

      if (data === ValidType.MINIMUM_ONE_STRING) {
        if (!this.validRegex(/[a-zA-Z]+/gm, str)) {
          throw new BadRequestException(
            `O campo ${description} deve ter ao menos uma letra`,
          );
        }
      }
    });
  }

  verifyLength(
    value: string,
    description: string = 'campo',
    min: number = null,
    max: number = null,
  ) {
    if (value === null || value === undefined || value === '') {
      throw new BadRequestException(
        `O campo ${description}, não pode conter espaços vazios!`,
      );
    }

    if (min !== null) {
      if (value.length < min) {
        throw new BadRequestException(
          `O campo ${description}, não pode ter menos que ${min} caracteres!`,
        );
      }
    }

    if (max !== null) {
      if (value.length > max) {
        throw new BadRequestException(
          `O campo ${description}, não pode ter mais que ${max} caracteres!`,
        );
      }
    }
  }

  validRegex(regex: RegExp, value: string): boolean {
    return regex.test(value);
  }
}
