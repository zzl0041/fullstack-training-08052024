const email = 'agew.';

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  function validateEmail(email) {
    return /@/.test(email)
      ? email
      : new ValidationError(`invalid email: ${email}`);
  }
  
  try {
    console.log(validateEmail(email));
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
  
