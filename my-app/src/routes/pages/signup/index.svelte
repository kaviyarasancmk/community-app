<!-- signup/index.svelte -->

<script>
  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let validationError = '';

  async function handleSignup(event) {
    event.preventDefault();

    // Add validation logic here (e.g., check if the password matches confirmPassword).
    if (password !== confirmPassword) {
      validationError = "Passwords don't match.";
      return;
    }

    // After successful signup, you can navigate to the MessagingDashboard.
    // For example:
    window.location.href = '/community/dashbord';
  }


  // Import the signupStore functions
  import { addSignup, getSignupData } from '../../datastore/signupStore.js';


  // Function to handle sign-up form submission
  function handleSubmit(event) {
    event.preventDefault();
    
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Add the sign-up data to the store
    addSignup({ username, email, password });

    // Optionally, you can redirect the user to the dashboard or another page.
    // router.navigate('/dashboard');
  }

  // To retrieve sign-up data, you can use getSignupData()
  const signupData = getSignupData();

  // import { goto } from '@svelte-routing';

  // function navigateToDashboard() {
  //   goto('/community/dashboard');
  // }

</script>

<main class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-200 to-orange-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Sign Up</h1>

    <form on:submit={handleSignup} class="min-w-max">
      <div class="mb-4">
        <label for="username" class="block font-semibold text-gray-800">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          bind:value={username}
          class="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block font-semibold text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={email}
          class="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block font-semibold text-gray-800">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          bind:value={password}
          class="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div class="mb-4">
        <label for="confirmPassword" class="block font-semibold text-gray-800">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          bind:value={confirmPassword}
          class="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      {#if validationError}
        <p class="text-red-600">{validationError}</p>
      {/if}
      <div class="flex gap-5">

      <button
      type="submit"
      class="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
      Sign Up
      </button>

      <button
        type="submit"
        class="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <a href="/">
          Back Home
        </a>
      </button>
      
    </div>
    </form>

  </div>
</main>
