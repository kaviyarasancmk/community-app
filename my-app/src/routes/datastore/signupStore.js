

const signupData = [];

// Function to add new sign-up data
export function addSignup(user) {
  signupData.push(user);
}

// Function to retrieve sign-up data
export function getSignupData() {
  return signupData;
}
