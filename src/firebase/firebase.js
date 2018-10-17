
const config = {
  type: process.env.REACT_FIREBASE_KEYS_TYPE,
  project_id: process.env.REACT_FIREBASE_KEYS_PROJECT_ID,
  private_key_id: process.env.REACT_FIREBASE_KEYS_PRIVATE_KEY_ID,
  private_key: process.env.REACT_FIREBASE_KEYS_PRIVATE_KEY,
  client_email: process.env.REACT_FIREBASE_KEYS_CLIENT_EMAIL,
  client_id: process.env.REACT_FIREBASE_KEYS_CLIENT_ID,
  auth_uri: process.env.REACT_FIREBASE_KEYS_AUTH_URI,
  token_uri: process.env.REACT_FIREBASE_KEYS_TOKEN_URI,
  auth_provider_x59_cert_url: process.env.REACT_FIREBASE_KEYS_AUTH_PROVIDER_X609_CERT_URL,
  client_x509_cert_url: process.env.REACT_FIREBASE_KEYS_CLIENT_X509_CERT_URL,
};

export { config as default };
