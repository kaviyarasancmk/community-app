<script>
  // JavaScript validation function
  function validateForm(event) {
    event.preventDefault();
``
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email.trim() === "") {
      alert("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.trim() === "") {
      alert("Password is required.");
      return;
    }

    // If all validations pass, you can proceed with form submission or other actions
    alert("Form submitted successfully!");
  }

  // Email validation function
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // import { navigate } from '@sveltejs/kit/navigation';
  let isRegistered = false; // Simulated successful registration
  import { navigate } from '@sveltekit/navigation';

  function handleSignUp() {
    if (isRegistered) {
      navigate('/messagingDashboard/index');
    }
  }
</script>

<main class="min-h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded shadow-lg lg:w-6/12 w-8/12">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Log In</h2>

    <form on:submit={validateForm} action="/MessagingDashboard">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
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
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Your password"
        />
      </div>

      <div class="mb-4 flex gap-2 flex-row justify-between">
        <button type="button" class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <a href="/">Back Home</a>
        </button>
        
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" on:click={handleSignUp}>Sign Up</button>
      </div>
    </form>
  </div>
</main>
