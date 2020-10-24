let api;
let auth;

if (typeof ApiService !== 'undefined') api = ServiceResolver.getApiInstance();
if (typeof AuthService !== 'undefined') auth = ServiceResolver.getAuthInstance();
