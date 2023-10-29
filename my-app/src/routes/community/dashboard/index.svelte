<script>
  import CreateCommunity from '../cretecommunity.svelte'

  let createCommunityVisible = false

  function toggleCreateCommunity() {
    createCommunityVisible = !createCommunityVisible
  }

  import AudioCallIcon from '../../../images/audiocall.png'
  import VideoCallIcon from '../../../images/videocall.png'

  let messages = [
    { text: 'Hello!', sender: 'Alice' },
    { text: 'Hi there!', sender: 'Bob' },
  ]

  let newMessage = ''

  function makeAudioCall() {
    // Handle audio call logic here
  }

  function makeVideoCall() {
    // Handle video call logic here
  }

  let messageContainer

  function addMessage() {
    if (newMessage) {
      messages = [...messages, { text: newMessage, sender: 'You' }]
      newMessage = ''

      // Scroll to the bottom
      messageContainer.scrollTop = messageContainer.scrollHeight
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addMessage()
    }
  }

  // Import the community store
  import { communityList } from '../../datastore/communitystore'

  let communities = []

  // Subscribe to the communityList store and keep the list updated
  communityList.subscribe((list) => {
    communities = list
  })
  
</script>

<div class="flex min-h-screen border-2 border-blue-600">
  <div class="lg:w-96 md:w-60 border-blue-600 bg-blue-100">
    <div class="w-full flex justify-between bg-blue-500">
    <h1 class="text-white md:ml-6 lg:ml-16 text-center font-black text-2xl">Share Hub</h1>
    <button
    on:click={toggleCreateCommunity}
    class="w-10 h-10 bg-green-500 text-white"
  >
    {#if !createCommunityVisible}
      <div class="menu-button cursor-pointer flex items-center justify-center flex-col p-1 gap-1"  onclick="toggleMenu()">
        <span class="bar h-1 w-6 bg-white"></span>
        <span class="bar h-1 w-6 bg-white"></span>
        <span class="bar h-1 w-6 bg-white"></span>
      </div>
      
    
    {:else}
      X
    {/if}
  </button>
    </div>

    <div class="mt-2 rounded-md p-1 overflow-y-auto" style="height: 89vh;">
        {#each communities as community (community)}
        <div class="pt-1 my-1 pb-px px-2 border-2 border-l-4 border-blue-400 border-l-green-600 rounded-md">
          <h2 class="text-violet-800 font-semibold capitalize">
            {community.name}
          </h2>
            <p class="text-xs text-gray-600 font-bold ">{community.category}</p>
          </div>
        {/each}
    </div>
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
      <div class="bg-gray-200 p-4 rounded-b-lg h-96 overflow-y-auto mb-4" bind:this={messageContainer}>
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
        <button on:click={addMessage} class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Send </button>
      </div>
    {/if}
  </div>
</div>

<!-- <style>
.menu-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6px;
}

.bar {
  width: 24px;
  height: 2px;
  background-color: #ffffff;
  margin: 4px;
}

</style> -->