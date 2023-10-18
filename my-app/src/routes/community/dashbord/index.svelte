<!-- src/routes/community/dashbord/index.svelte -->

<script>
  // Sample data for demonstration
  let messages = [
    { text: 'Hello!', sender: 'Alice' },
    { text: 'Hi there!', sender: 'Bob' },
    // Add more messages here
  ];

  let newMessage = '';

  function addMessage() {
    if (newMessage) {
      messages = [...messages, { text: newMessage, sender: 'You' }];
      newMessage = '';
    }
  }
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div class="w-full md:w-3/4 lg:w-1/2 bg-white p-4 rounded shadow-md my-4">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Messaging Dashboard</h1>

    <!-- Messages container -->
    <div class="bg-gray-200 p-4 rounded-lg h-96 overflow-y-auto mb-4">
      {#each messages as message (message.text)}
        <div class="mb-2">
          {#if message.sender === 'You'}
            <div class="text-right text-blue-600">{message.text}</div>
          {:else}
            <div class="text-left text-green-600">{message.text}</div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Message input -->
    <div class="flex items-center space-x-2">
      <input
        type="text"
        id="newMessage"
        name="newMessage"
        class="flex-1 p-2 border rounded border-gray-300"
        placeholder="Type your message..."
        bind:value={newMessage}
      />
      <button
        on:click={addMessage}
        class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  </div>

  <a href="/" class="p-2 px-8 bg-blue-700 rounded-md text-white hover:underline underline-offset-4">Back Home</a>
</main>
