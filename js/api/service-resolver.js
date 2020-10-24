class ServiceResolver {
  static useMock = true;

  static api;
  static mockApi;
  static auth;
  static mockAuth;

  static getApiInstance() {
    if (api == null) {
      if (this.useMock)
        this.mockApi = new MockApiService();
      else
        this.api = new ApiService();
    }

    return this.useMock ? this.mockApi : this.api;
  }

  static getAuthInstance() {
    if (auth == null) {
      if (this.useMock)
        this.mockAuth = new MockAuthService();
      else
        this.auth = new AuthService();
    }

    return this.useMock ? this.mockAuth : this.auth;
  }
}