class HttpClient {
	static async makeRequest(request) {
		const response = await fetch(request);

		if (!response.ok && response.type) {
			throw new Error(response.statusText);
		}

		const contentType = response.headers.get('Content-Type');

		if (contentType.startsWith('application/json'))
			return JSON.parse(await response.text());
		else return await response.blob();
	}

	static async get(endpoint, headers = {}) {
		const request = new Request(endpoint, {
			body: null,
			headers,
			method: 'GET',
			mode: 'cors',
		});

		return await HttpClient.makeRequest(request);
	}

	static async post(endpoint, headers = {}, body = {}) {
		body = JSON.stringify(body);

		console.log(body);

		const request = new Request(endpoint, {
			body,
			headers,
			method: 'POST',
			mode: 'cors',
		});

		return await HttpClient.makeRequest(request);
	}

	static async put(endpoint, headers = {}, body = {}) {
		body =
			headers['Content-Type'] &&
			headers['Content-Type'].startsWith('application/json')
				? JSON.stringify(body)
				: body;

		const request = new Request(endpoint, {
			body,
			headers,
			method: 'PUT',
			mode: 'cors',
		});

		return await HttpClient.makeRequest(request);
	}

	static async patch(endpoint, headers = {}, body = {}) {
		const request = new Request(endpoint, {
			body: JSON.stringify(body),
			headers,
			method: 'PATCH',
			mode: 'cors',
		});

		return await HttpClient.makeRequest(request);
	}

	static async delete(endpoint, headers = {}) {
		const request = new Request(endpoint, {
			body: null,
			headers,
			method: 'DELETE',
			mode: 'cors',
		});

		return await HttpClient.makeRequest(request);
	}
}
