<script>

  import { addSignup, getSignupData } from '../datastore/signupStore.js'

  let firstname = ''
  let lastname = ''
  let username = ''
  let email = ''
  let emailotp = ''
  let password = ''
  let confirmPassword = ''
  let validationError = ''

  async function sendOTP() {
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        // OTP email sent successfully
        alert('OTP sent successfully.')
      } else {
        // Handle error if the email sending failed
        alert('Failed to send OTP. Please try again.')
      }
    } catch (error) {
      console.error('Error sending OTP:', error)
    }
  }

  async function handleSignup(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      validationError = "Passwords don't match.";
      return;
    }

    const user = {
      firstname,
      lastname,
      username,
      email,
      emailotp,
      password,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        window.location.href = '/community/dashboard';
      } else {
        window.location.href = '/community/dashboard';
        // alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }

  const signupData = getSignupData();
</script>


<main class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-200 to-orange-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Sign Up</h1>

    <form on:submit={handleSignup} class="min-w-max">
      <div class="flex gap-2 flex-wrap justify-between">
        <div class="mb-4">
          <label for="firstname" class="block font-semibold text-gray-800">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            bind:value={firstname}
            class="w-40 px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div class="mb-4">
          <label for="lastname" class="block font-semibold text-gray-800">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            bind:value={lastname}
            class="w-36 px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

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
        <div class="flex gap-2 justify-between">
          <div>
            <input
              type="button"
              id="emailsend"
              name="emailsend"
              class="w-28 px-4 py-2 mt-6 border rounded-lg text-center bg-green-200 border-red-200"
              value="Send OTP"
              on:click={sendOTP}
            />
          </div>
          <div>
            <label for="emailotp" class="block font-semibold text-gray-800">Email OTP</label>
            <input
              type="number"
              id="emailotp"
              name="emailotp"
              bind:value={emailotp}
              class="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
        </div>
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
        <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <a href="/">Back Home</a>
        </button>
        
        <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Sign Up</button>
      </div>
    </form>
  </div>
</main>
