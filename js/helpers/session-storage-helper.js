class SessionStorageHelper {
	static storeJwtToken(token) {
		localStorage.setItem('token', token);
	}

	static deleteJwtToken() {
		localStorage.removeItem('token');
	}

	static getJwtToken() {
		return localStorage.getItem('token');
	}
}
