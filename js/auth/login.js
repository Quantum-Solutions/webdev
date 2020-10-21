$('#btnLogin').click(async function (e) {
	e.preventDefault();

	$('#message').text('');

	const email = $('#email').val();
	const password = $('#password').val();

	if (email === '' || password === '') {
		$('#message').text('Invalid email/password');

		return;
	}

	$(this).text('Logging in...');
	$(this).prop('disabled', true);
	$(this).addClass('disabled');

	const credentials = { email, password };

	try {
		const response = await auth.login(credentials);

		console.log(response);

		if (response.ok) {
			const token = response.data;

			SessionStorageHelper.storeJwtToken(token);

			location.href = '/';
		} else {
			$('#message').text(response.message);
		}

		console.log(response);

		$(this).text('Login');
		$(this).prop('disabled', false);
		$(this).removeClass('disabled');
	} catch (err) {
		console.log(err);
		$('#message').text('Invalid email/password');

		console.log('fail');

		$(this).text('Login');
		$(this).prop('disabled', false);
		$(this).removeClass('disabled');
	}
});

$('#email, #password').on('keyup', () => {
	$('#message').text('');
});
