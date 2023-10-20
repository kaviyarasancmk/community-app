<script>

</script>

<main class="min-h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded shadow-lg w-4/12">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Create Community</h2>

    <form>
      <div class="mb-4">
        <label for="communityName" class="block font-semibold text-gray-800">Community Name</label>
        <input type="text" id="communityName" name="communityName" class="w-full px-3 py-2 border rounded-lg" required>
      </div>

      <div class="mb-4">
        <label for="communityDescription" class="block font-semibold text-gray-800">Community Description</label>
        <textarea id="communityDescription" name="communityDescription" class="w-full px-3 py-2 border rounded-lg" rows="4" required></textarea>
      </div>

      <div class="mb-4">
        <label for="adminFirstName" class="block font-semibold text-gray-800">Admin First Name</label>
        <input type="text" id="adminFirstName" name="adminFirstName" class="w-full px-3 py-2 border rounded-lg" required>
      </div>

      <div class="mb-4">
        <label for="adminLastName" class="block font-semibold text-gray-800">Admin Last Name</label>
        <input type="text" id="adminLastName" name="adminLastName" class="w-full px-3 py-2 border rounded-lg" required>
      </div>

      <div class="mb-4">
        <label for="adminAge" class="block font-semibold text-gray-800">Admin Age</label>
        <input type="number" id="adminAge" name="adminAge" class="w-full px-3 py-2 border rounded-lg" required>
      </div>

      <div class="mb-4">
        <label for="aadharNumber" class="block font-semibold text-gray-800">Aadhar Number & OTP</label>
        <input type="text" id="aadharNumber" name="aadharNumber" class="w-full px-3 py-2 border rounded-lg" required>
      </div>

      <div class="mb-4">
        <label for="phoneNumber" class="block font-semibold text-gray-800">Phone Number & OTP</label>
        <input type="text" id="phoneNumber" name="phoneNumber" class="w-full px-3 py-2 border rounded-lg" required>
      </div>

      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Create Community</button>
    </form>
    
    <a href="/" class="p-2 px-8 bg-blue-700 rounded-md text-white hover:underline underline-offset-4">Back Home</a>
  </div>
</main>
