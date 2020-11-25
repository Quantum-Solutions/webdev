class UserAuthHelper {
	static isUserAuthenticated() {
		const token = SessionStorageHelper.getJwtToken();

		return token !== null;
	}

	static getUserId() {
		const token = SessionStorageHelper.getJwtToken();

		return JwtTokenHelper.decodeJwt(token).userId;
	}

	static getUserType() {
		const token = SessionStorageHelper.getJwtToken();

		return JwtTokenHelper.decodeJwt(token).userType;
	}
}
