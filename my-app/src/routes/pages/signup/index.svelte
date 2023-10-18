<script>
  // JavaScript validation function
  function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please confirm your password.");
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
  import { navigate } from '@sveltejs/kit/navigation';
  let isRegistered = false; // Simulated successful registration

  function handleSignUp() {
    if (isRegistered) {
      navigate('/messagingDashboard/index');
    }
  }
</script>

<main class="min-h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded shadow-lg lg:w-6/12 w-8/12">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h1>

    <form on:submit={validateForm}>
      <div class="mb-4">
        <label for="username" class="block font-semibold text-gray-800">Username</label>
        <input type="text" id="username" name="username" class="w-full px-3 py-2 border rounded-lg" required />
      </div>

      <div class="mb-4">
        <label for="email" class="block font-semibold text-gray-800">Email</label>
        <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg" required />
      </div>

      <div class="mb-4">
        <label for="password" class="block font-semibold text-gray-800">Password</label>
        <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-lg" required />
      </div>

      <div class="mb-4">
        <label for="confirmPassword" class="block font-semibold text-gray-800">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-3 py-2 border rounded-lg" required />
      </div>
      <div class="mb-4 flex gap-2 flex-row justify-between">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"><a href="/">Back Home</a></button>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" on:click={handleSignUp}>Sign Up</button>
      </div>
    </form>
  </div>
</main>
