export interface ErrorMessage {
  error: string;
  message: string;
}

export const DEFAULT_REQUIRED_ERROR_MESSAGE = {
  error: 'required',
  message: 'This value is required'
}

export const DEFAULT_EMAIL_ERROR_MESSAGE = {
  error: 'email',
  message: 'Please provide a valid email address'
}
