export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "www.api.example.com"
    : "www.api.pord.example.com";

// as per our requirement in production or development mode, we can change our api.
