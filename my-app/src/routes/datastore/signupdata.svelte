<script>
    // Import the getSignupData function from the datastore
  import { getSignupData } from './signupStore.js';
  
    // Get the sign-up data
    const signupData = getSignupData();
  </script>
  
  <h1>Sign-up Data</h1>

  <ul>
    {#each signupData as signup, i (signup.email)}
      <li>
        <strong>User {i + 1}:</strong>
        <p>Username: {signup.username}</p>
        <p>Email: {signup.email}</p>
        <p>Password: {signup.password}</p>
      </li>
    {/each}
  </ul>
  