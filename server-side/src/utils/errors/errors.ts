export class ApplicationError extends Error {
  constructor(public status: number, public message: string) {
    super();
  }
}

export class TransactionNotFound extends ApplicationError {
  constructor() {
    super(404, 'User not found');
  }
}

export class CustomerNotFound extends ApplicationError {
  constructor() {
    super(404, 'User not found');
  }
}
