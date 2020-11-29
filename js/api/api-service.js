class ApiService {
	headers = {
		Accept: 'application/json',
		Authorization: `Bearer <insert token here>`,
		'Content-Type': 'application/json; charset=utf-8',
	};

	apiUrl = 'https://quantum-academia-api.azurewebsites.net/api';

	static instance = new this();
	static getInstance = () => this.instance;

	async doRequest(
		method,
		url,
		body = null,
		headers = this.headers,
		addTrailingSlash = true
	) {
		if (url.startsWith('/')) url = url.substring(1, url.length);
		if (!url.endsWith('/') && addTrailingSlash) url += '/';

		const fullUrl = `${this.apiUrl}/${url}`;
		method = method.toUpperCase();

		switch (method) {
			case 'GET':
				return await HttpClient.get(fullUrl, headers);
			case 'POST':
				return await HttpClient.post(fullUrl, headers, body);
			case 'PUT':
				return await HttpClient.put(fullUrl, headers, body);
			case 'DELETE':
				return await HttpClient.delete(fullUrl, headers);
			default:
				return;
				
		}
		
	}	
	//Get Calls
	getUser = async (id) => this.doRequest('GET', `users/${id}`);
	getModules = async (id) => this.doRequest('GET', `users/${id}/modules`);
	getMarks = async (id) => this.doRequest('GET', `users/${id}/modules/marks`);
	getTimetable = async (id) => this.doRequest('GET', `users/${id}/timetable`);
	getClassRegister = async (id) => this.doRequest('GET', `modules/${id}/register`);
	getPosts = async (id) => this.doRequest('GET', `modules/${id}/posts`);

	//Post Calls
	postPosts = async (id) => this.doRequest('POST', `modules/${id}/posts`);

	//Put Calls
	putProfile = async (id, user) => this.doRequest('PUT', `users/${id}`, user);
}
