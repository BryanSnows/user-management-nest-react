export class ErrorUtil {
  static readonly errorMessages = [
    'email-exists',
    'server',
    'save-error',
    'invalid-key',
    'invalid-image',
    'delete-error',
  ];

  static translateError(error: string, defaultError = '') {
    if (error && this.errorMessages.includes(error)) {
      return `error.${error}`;
    }

    return defaultError;
  }
}
