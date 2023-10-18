// signupStore.js

// Initialize an array to store sign-up data
const signupData = [];

// Function to add new sign-up data
function addSignup(user) {
  signupData.push(user);
}

// Function to retrieve sign-up data
function getSignupData() {
  return signupData;
}

module.exports = { addSignup, getSignupData };
