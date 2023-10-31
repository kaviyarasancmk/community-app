<script>
  import Chatdashboard from './chatdashboard.svelte';
  import CreateCommunity from '../cretecommunity.svelte';
  import { communityList } from '../../datastore/communitystore';

  let isDropdownOpen = false;
  let createCommunity = false;
  let chatdashboard = false;
  let selectedCommunity = null;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
    createCommunity = false;
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault();
      chatBoerd();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault();
    }
  }

  function chatBoerd() {
    createCommunity = !createCommunity;

    if (chatdashboard) {
      // If chat dashboard is open, you can handle it here
    } else if (createCommunity) {
      isDropdownOpen = true;
      selectedCommunity = false;
    }
  }

  let communities = [];
  communityList.subscribe((list) => {
    communities = list;
  });

  let commuityChatBoard = false;

  function selectCommunity(community) {
    selectedCommunity = community;
    commuityChatBoard = true;
    closeDropdown();
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
      <div class="absolute p-2 mt-px shadow-blue-500 shadow-md top-12 bg-gray-400 min-w-full left-0 border-2 border-blue-500">
        <div on:click={chatBoerd} on:keydown={handleKeyDown} on:keyup={handleKeyUp} class="block px-4 py-2 bg-gray-100 hover:bg-blue-300 rounded cursor-pointer">
          {#if !createCommunity}
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
        <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
        <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
        <div class="block px-4 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Sample Options</div>
      </div>
      {/if}
      </div>
    </div>
    <div style="height: 92vh;" class="bg-blue-50 border-blue-500 border-2">
      <div class="overflow-y-auto">
        {#each communities as community (community)}
        <a href="#" on:click={() => selectCommunity(community)}>
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

    {#if selectedCommunity}
    <div class="w-full">
      <Chatdashboard {selectedCommunity} />
    </div>
    {:else if createCommunity}
      <CreateCommunity {closeDropdown}/>
    {:else if commuityChatBoard}
      <div class="w-full">
        <Chatdashboard />
      </div>
    {:else}
    <div class="p-4 flex flex-col justify-center items-center gap-10 border-2 border-blue-600 h-full">
      <h1 class="lg:text-4xl md:text-2xl text-gray-300 font-serif font-black mt-10">Welcome to the Share Hub platform.</h1>
      <ul>
        <li class="text-gray-400 text-center my-10 font-semibold">Efficient community communication and information sharing</li>
        <li class="text-gray-400 text-center my-10 font-semibold">Streamlined event promotion and management.</li>
        <li class="text-gray-400 text-center my-10 font-semibold">Role-based user management for organized communities.</li>
        <li class="text-gray-400 text-center my-10 font-semibold">Enhanced group collaboration and real-time interaction.</li>
        <li class="text-gray-400 text-center my-10 font-semibold">Personalized and secure one-on-one chats.</li>
        <li class="text-gray-400 text-center my-10 font-semibold">Versatile use cases from education to corporate communication.</li>
      </ul>
    </div>
    {/if}
  </div>
</div>
