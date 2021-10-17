const ValidateContactName = {
  MIN_NAME: 1,
  MAX_NAME: 40,
};

const Subscription = {
  STANDARD: 'starter',
  PREMIUM: 'pro',
  VIP: 'business',
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 410,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
  ValidateContactName,
  Subscription,
  HttpCode,
};
