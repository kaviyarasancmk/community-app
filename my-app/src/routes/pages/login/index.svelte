<script>
  import { getSignupData } from '../../datastore/signupStore.js';

  let email = '';
  let password = '';

  async function handleLogin(event) {
    event.preventDefault();

    const signupData = getSignupData();
    const user = signupData.find((userData) => userData.email === email && userData.password === password);

    if (user) {
      // Authentication successful
      // You can set a user session or redirect the user to the dashboard here
    } else {
      // Authentication failed; show an error message or handle it as needed
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
