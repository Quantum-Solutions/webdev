class MockApiService {
  login({ username, password }) {
    return { username, password };
  }
}