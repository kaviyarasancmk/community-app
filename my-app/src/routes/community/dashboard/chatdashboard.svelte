<script>
	import App from './../../../App.svelte';
  import { communityList } from './../../datastore/communitystore.js';
  import CreateCommunity from '../cretecommunity.svelte';
  import AudioCallIcon from '../../../images/audiocall.png';
  import VideoCallIcon from '../../../images/videocall.png';

  let isDropdownOpen = false;
  let createCommunityVisible = false;
  let newMessage = '';
  let messages = [
    { text: 'Hello!', sender: 'Alice' },
    { text: 'Hi there!', sender: 'Bob' }
  ];
  let communities = [];

  communityList.subscribe((list) => {
    communities = list;
  });

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

  function addMessage() {
    if (newMessage) {
      messages = [...messages, { text: newMessage, sender: 'You' }];
      newMessage = '';
      // Scroll to the bottom
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addMessage();
    }
  }

  function makeAudioCall() {
    // Handle audio call logic here

  }

  function otherTool() {
    // Handle other tool logic here
  }

  let doorOpen = true; 

  function openDoor() {
    var button = document.getElementById("tool_btn");
    var doorbtn = document.getElementById("doorbtn");

    if (doorOpen) {
      button.classList.remove("bg-green-600");
      button.classList.add("bg-red-500");
      doorbtn.style.height = ("0");
      
    } else {
      button.classList.remove("bg-red-500");
      button.classList.add("bg-green-600");
      doorbtn.style.height = ("25.8vh");
    }

    doorOpen = !doorOpen; 
  }

</script>


<div class="flex h-screen">
  <div class=" w-96 h-screen">
    <div class="bg-blue-500 relative" style="height: 8vh;">
      <div class="flex justify-between items-center">
        <h1 class="text-white md:ml-6 lg:ml-16 p-1 font-black text-2xl">Share Hub</h1>
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
      <div class="absolute p-2 mt-px top-12 bg-gray-400 min-w-full left-0 border-2 border-blue-500">
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
    <div style="height: 92vh;" class="bg-blue-50 border-blue-500 border-2 border-r">
      <div class="overflow-y-auto">
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
  </div>

  <div class="w-full bg-gray-100" style="height: 100vh;">
    {#if createCommunityVisible}
      <div class="w-full border-blue-500">
      <CreateCommunity {closeDropdown}/>
      </div>
    {:else}
    <div class="bg-gray-200 h-full border-l border-2 border-blue-500" style="height: 100vh;">
      <div class="px-10 py-4 overflow-y-auto" style="height: 55vh;">
        {#each messages as message (message.text)}
          <div class="my-2 p-2 rounded {message.sender === 'You' ? 'self-end bg-teal-600' : 'self-start bg-teal-700 '}">
            <div class="{message.sender === 'You' ? 'text-right text-white' : 'text-left text-white'}">
              {message.text}
            </div>
          </div>
        {/each}
      </div>
      <div class="flex items-center space-x-2 mx-8 duration-500" style="height: 10vh;">
        <input
          type="text"
          id="newMessage"
          name="newMessage"
          class="flex-1 p-2 border rounded border-gray-300 focus:border-green-600 outline-0"
          placeholder="Type your message..."
          bind:value={newMessage}
          on:keydown={handleKeyPress}
        />
        <button on:click={addMessage} class="p-2 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
      </div>
      <div class="mt-4 p-1 rounded-t bg-stone-500" style="height: 32vh;">
        <div class="bg-gray-200 p-1 px-3 rounded-t w-fit">
          <h2 class="text-xl font-bold ml-2 flex items-center">Community Tools
            <button id="tool_btn" on:click={openDoor} class="p-3 text-center w-14 mx-3 bg-green-600 rounded" />
        </h2>
        </div>
        <hr>

        <div class="relative">
          <div id="doorbtn" class="absolute w-full bg-black" style="height: 25.8vh; transition: height 200ms;">
          </div>
        </div>

        <div class="border border-white">
          <div class="overflow-auto" style="height: 25.5vh;">
            <div class="mt-2 py-2 px-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <button on:click={makeAudioCall} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <img src={AudioCallIcon} alt="Audio Call" class="w-6 h-6" />
              <span class="ml-2">Voice</span>
            </button>
            <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <span class="ml-2">Other</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/if}
  </div>
</div>
