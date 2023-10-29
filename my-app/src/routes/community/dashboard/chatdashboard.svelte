<script>
    import CreateCommunity from '../cretecommunity.svelte'
    import AudioCallIcon from '../../../images/audiocall.png'
    import VideoCallIcon from '../../../images/videocall.png'
    import { communityList } from '../../datastore/communitystore'

  let isDropdownOpen = false;
  let createCommunityVisible = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function toggleCreateCommunity() {
    createCommunityVisible = !createCommunityVisible;
    if (createCommunityVisible) {
      isDropdownOpen = true;
    }
  }

  function closeDropdown() {
    isDropdownOpen = false;
    createCommunityVisible = false;
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault();
      toggleCreateCommunity();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault();
    }
  }

  let newMessage = ''
  
  let messages = [
      { text: 'Hello!', sender: 'Alice' },
      { text: 'Hi there!', sender: 'Bob' },
    ]

  let communities = [];

  communityList.subscribe((list) => {
    communities = list;
  });

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

    function makeAudioCall() {
      // Handle audio call logic here
    }
  
    function makeVideoCall() {
      // Handle video call logic here
    }

</script>

<div class="flex min-h-screen border-2 border-blue-600">
  <div class="w-96 border-blue-600 bg-blue-100">
    <div class="w-full flex justify-between items-center bg-blue-500 relative group">
      <h1 class="text-white md:ml-6 lg:ml-16 font-black text-2xl">Share Hub</h1>
      <div class="">
        <button class="w-8 h-10 m-1 bg-green-500 text-white cursor-pointer border border-gray-200 rounded flex items-center justify-center flex-col p-1 px-2 gap-1" on:click={toggleDropdown}>
          {#if !isDropdownOpen}
            <span class="h-1 w-6 bg-white"></span>
            <span class="h-1 w-6 bg-white"></span>
            <span class="h-1 w-6 bg-white"></span>
          {:else}
            <span class="text-3xl font-bold text-red-600 pb-1">x</span>
          {/if}
        </button>

        {#if isDropdownOpen}
          <div class="absolute p-2 mt-px top-12 bg-gray-400 min-w-full left-0">
            <div on:click={toggleCreateCommunity} on:keydown={handleKeyDown} on:keyup={handleKeyUp} class="block px-4 py-2 bg-gray-100 hover:bg-blue-300 rounded cursor-pointer">
              {#if !createCommunityVisible}
                <span>Create Community</span>
              {:else}
                <span>Cancel Community</span>
                {/if}
              </div>
                <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
                <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
                <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
                <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
                <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
                <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
                <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
          </div>
        {/if}
      </div>
    </div>

    <div class="overflow-y-auto" style="height: 89vh;">
      {#each communities as community (community)}
        <a href="">
          <div class="border-2 border-l-8 border-blue-400 bg-blue-200 hover:border-green-600 hover:bg-green-200 border-l-green-600 px-2">
            <h2 class="text-violet-800 font-semibold capitalize">
              {community.name}
            </h2>
            <p class="text-xs text-gray-500 font-bold">{community.category}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <div class="w-full bg-gray-100 border border-blue-600" style="height: 99.4vh;">
    {#if createCommunityVisible}
      <CreateCommunity {closeDropdown} />
    {:else}

    <div class="p-2">

      <div class="bg-gray-200 rounded h-80 p-4 mb-4">
        {#each messages as message (message.text)}
          <div class="mb-4 p-2 rounded-lg {message.sender === 'You' ? 'self-end bg-blue-200' : 'self-start bg-green-200'}">
            <div class="{message.sender === 'You' ? 'text-right text-blue-600' : 'text-left text-green-600'}">
              {message.text}
            </div>
          </div>
        {/each}
      </div>

      <div class="flex items-center space-x-2">
        <input
          type="text"
          id="newMessage"
          name="newMessage"
          class="flex-1 p-2 border rounded border-gray-300 focus:border-green-600 outline-0"
          placeholder="Type your message..."
          bind:value={newMessage}
          on:keydown={handleKeyPress}
        />
        <button on:click={addMessage} class="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
      </div>

      <div class="flex justify-between items-center mt-4 p-2 rounded bg-stone-500">
        <h2 class="text-xl font-semibold text-gray-800">Chat Board</h2>
        <div class="flex space-x-4">
          <button on:click={makeAudioCall} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <img src={AudioCallIcon} alt="Audio Call" class="w-6 h-6" />
            <span class="ml-2">Voice Call</span>
          </button>
          <button on:click={makeVideoCall} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <img src={VideoCallIcon} alt="Video Call" class="w-6 h-6" />
            <span class="ml-2">Video Call</span>
          </button>
        </div>
      </div>
    </div>
    {/if}
  </div>
</div>
