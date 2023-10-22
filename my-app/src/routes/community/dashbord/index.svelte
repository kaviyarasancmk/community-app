<script>
    import CreateCommunity from '../cretecommunity/index.svelte';

  let createCommunityVisible = false;

  function toggleCreateCommunity() {
    createCommunityVisible = !createCommunityVisible;
  }

  import AudioCallIcon from '../../../images/audiocall.png';
  import VideoCallIcon from '../../../images/videocall.png';

  let messages = [
    { text: 'Hello!', sender: 'Alice' },
    { text: 'Hi there!', sender: 'Bob' },
  ];

  let newMessage = '';

  function makeAudioCall() {
    // Handle audio call logic here
  }

  function makeVideoCall() {
    // Handle video call logic here
  }

  function addMessage() {
    if (newMessage) {
      messages = [...messages, { text: newMessage, sender: 'You' }];
      newMessage = '';
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addMessage();
    }
  }
</script>

<div class="flex min-h-screen  border-2 border-blue-600">
  <div class="w-96 bg-gray-200 p-4 border-blue-600">
    <button on:click={toggleCreateCommunity} class="px-4 w-60 py-2 shadow-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      <ul id="communitylist">
        <li></li>
      </ul>
      {#if !createCommunityVisible}
        Create Community
      {:else}
        Cancel Go Back
      {/if}
    </button>
  </div>

  <div class="w-full bg-gray-100 border-2 border-blue-600">
    {#if createCommunityVisible}
      <!-- Display Create Community content here -->
      <CreateCommunity />
    {:else}
      <!-- Add Chat Board content here -->
      <div class="flex justify-around p-2 bg-blue-200">
        <button on:click={makeAudioCall} class="flex">
          <img src={AudioCallIcon} alt="Audio Call" width="32" height="32" />
          <p>Voice Meet</p>
        </button>
        <button on:click={makeVideoCall} class="flex">
          <img src={VideoCallIcon} alt="Video Call" width="32" height="32" />
          <p>Video Meet</p>
        </button>
      </div>
      <div class="bg-gray-200 p-4 rounded-b-lg h-96 overflow-y-auto mb-4">
        {#each messages as message (message.text)}
          <div class="mb-2 bg-blue-100 rounded p-2">
            {#if message.sender === 'You'}
              <div class="text-right text-blue-600">{message.text}</div>
            {:else}
              <div class="text-left text-green-600">{message.text}</div>
            {/if}
          </div>
        {/each}
      </div>
      <div class="flex items-center space-x-2">
        <input
          type="text"
          id="newMessage"
          name="newMessage"
          class="flex-1 p-2 border rounded border-gray-300"
          placeholder="Type your message..."
          bind:value={newMessage}
          on:keydown={handleKeyPress}
        />
        <button
          on:click={addMessage}
          class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    {/if}
  </div>
</div>
