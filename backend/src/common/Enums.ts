export enum VerifyCredentials {
  verify_email = 'email',
  verify_password = 'password',
}

export enum SqlType {
  SQL = 'SQL',
  NORMAL = 'NORMAL',
  BR = 'BR',
}

export enum SortingType {
  ID = 'ID',
  NAME = 'NAME',
  DATE = 'DATE',
  NUMBER = 'NUMBER',
  FIRST_DATE = 'FIRST_DATE',
  LAST_DATE = 'LAST_DATE',
}

export enum ShiftType {
  PRIMEIRO_TURNO = '1° Turno',
  SEGUNDO_TURNO = '2° Turno',
}

export enum ValidType {
  IS_BOOLEAN = 'IS_BOOLEAN',
  IS_BIT = 'IS_BIT',
  NO_SPACE = 'NO_SPACE',
  NO_MANY_SPACE = 'NO_MANY_SPACE',
  IS_STRING = 'IS_STRING',
  IS_NUMBER = 'IS_NUMBER',
  IS_NUMBER_FLOAT = 'IS_NUMBER_FLOAT',
  NO_SPECIAL_CHARACTER = 'NO_SPECIAL_CHARACTER',
  OFFICE_NO_SPECIAL_CHARACTER = 'OFFICE_NO_SPECIAL_CHARACTER',
  SHIFT_NO_SPECIAL_CHARACTER = 'SHIFT_NO_SPECIAL_CHARACTER',
  IS_EMAIL = 'IS_EMAIL',
  DATE = 'DATE',
  DATE_BR = 'DATE_BR',
  IS_CNPJ = 'IS_CNPJ',
  SPECIAL_CHARACTER = 'SPECIAL_CHARACTER',
  MINIMUM_ONE_NUMBER = 'MINIMUM_ONE_NUMBER',
  MINIMUM_ONE_NUMBER_STRING_SPECIAL_CHARACTER = 'MINIMUM_ONE_NUMBER_STRING_SPECIAL_CHARACTER',
  MINIMUM_ONE_STRING = 'MINIMUM_ONE_STRING',
  DIFERENT_OF_ZERO = 'DIFERENT_OF_ZERO',
  SLOTS_BLISTER = 'SLOTS_BLISTERS',
  BLANK_SPACES_BEGINNING = 'BLANK_SPACES_BEGINNING',
}

export enum ObjectSize {
  INTEGER = 2147483646,
  DEFAULT_DAYS = 35,
}

export enum DateOperation {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export enum TypeEmail {
  CREATE = 'CREATE',
  RESET = 'RESET',
}
