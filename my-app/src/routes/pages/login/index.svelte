<!-- login/index.svelte -->

<script>
  let email = '';
  let password = '';

  async function handleLogin(event) {
    event.preventDefault();

    // Perform login validation here (e.g., check credentials).
    // If login is successful, navigate to the MessagingDashboard.

    if (email === 'your-email@example.com' && password === 'your-password') {
      // Simulate a successful login by setting a flag.
      const isLoggedIn = true;
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));

      // Redirect to the MessagingDashboard.
      window.location.href = '/community/dashbord';
    } else {
      // Handle login error (e.g., show an error message).
      alert('Invalid credentials. Please try again.');
    }
  }
</script>

<main class="min-h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded shadow-lg w-4/12">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Log In</h2>

    <form on:submit={handleLogin} class="min-w-max">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={email}
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Your email"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          bind:value={password}
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Your password"
        />
      </div>

      <div class="mb-4 flex gap-2 flex-row justify-between">
        <button
          type="submit"
          class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </div>
    </form>
  </div>
</main>