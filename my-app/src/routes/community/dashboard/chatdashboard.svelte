<script>
  import AudioCallIcon from '../../../images/audiocall.png';
  import VideoCallIcon from '../../../images/videocall.png';
  import pointsIcon from '../../../images/points.png';
  import { onDestroy } from 'svelte';

  let newMessage = '';
  let messages = [
    { id: 1, text: 'Hello!', sender: 'Alice' },
    { id: 2, text: 'Hi there!', sender: 'Bob' }
  ];

  let messageContainer;

  function addMessage() {
    if (newMessage) {
      messages = [...messages, { id: messages.length + 1, text: newMessage, sender: 'You' }];
      newMessage = '';

      setTimeout(() => {
        if (messageContainer) {
          messageContainer.scrollTop = messageContainer.scrollHeight;
        }
      }, 100);
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addMessage();
    }
  }

  function makeAudioCall() {

  }

  function makeVideoCall() {

  }

  function otherTool() {

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

  let isSubButtonsVisible = false;
    
    function toggleSubButtons() {
      isSubButtonsVisible = !isSubButtonsVisible;
    }
    
    function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === 'Space') {
      toggleSubButtons();
    }
  }

  function handleClickOutside(event) {
    if (isSubButtonsVisible) {  
      let subButtons = document.getElementById("sample");
      // const subButtons = document.querySelector('.sub-buttons');
      if (subButtons && !subButtons.contains(event.target)) {
        isSubButtonsVisible = false;
      }
    }
  }
  
  window.addEventListener('click', handleClickOutside);

  onDestroy(() => {
    window.removeEventListener('click', handleClickOutside);
  });

  function triggerFileUpload(inputId) {
  const fileInput = document.getElementById(inputId);
  if (fileInput) {
    fileInput.click();
    toggleSubButtons(); // Hide the dropdown after a file is selected
  }
}

</script>

<div class="bg-gray-200 border-l border-2 border-blue-500 h-screen w-full">
    <div style="height: 5vh;" class="bg-gray-50 py-1 px-5 text-violet-800 font-bold text-center">DEMO - <span>model categorie</span></div>
    <div class="px-10 overflow-y-auto" bind:this={messageContainer} style="height: 50vh;">
    {#each messages as message (message.id)}
      <div class="my-2 p-2 px-4 rounded {message.sender === 'You' ? 'self-end bg-teal-600' : 'self-start bg-teal-700 '}">
        <div class="{message.sender === 'You' ? 'text-right text-white' : 'text-left text-white'}">
          {message.text}
        </div>
      </div>
    {/each}
  </div>
  
  <div class="flex flex-nowrap items-center justify-between space-x-2 mx-8 duration-500" 
  style="height: 10vh; transition: height 200ms;">
    <div id="sample" class="relative w-full flex flex-nowrap items-center justify-between gap-2">
      <input
        type="text"
        id="newMessage"
        name="newMessage"
        class="flex-1 p-2 w-9/12 border rounded border-gray-300 focus:border-green-600 outline-0"
        placeholder="Type your message..."
        bind:value={newMessage}
        on:keydown={handleKeyPress}
      />
      <button on:click={addMessage} class="p-2 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
  
      <div class="w-10 h-10 flex justify-center items-center rounded-full bg-blue-500 text-white text-center leading-12 cursor-pointer "
        on:click={toggleSubButtons}
        on:keydown={handleKeyDown}>
        <span>+</span>
      </div>
        <div class={isSubButtonsVisible ? ' absolute bottom-14 right-0 flex flex-col bg-gray-300 p-1 max-w-fit' : 'hidden'}>
          <button on:click={() => triggerFileUpload('imageInput')} class="px-2 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Image</button>
          <input type="file" accept="image/*" id="imageInput" class="hidden" />
          <button on:click={() => triggerFileUpload('videoInput')} class="px-2 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Video</button>
          <input type="file" accept="video/*" id="videoInput" class="hidden" />
          <button on:click={() => triggerFileUpload('audioInput')} class="px-2 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Audio</button>
          <input type="file" accept="audio/*" id="audioInput" class="hidden" />      
          <button on:click={() => triggerFileUpload('fileInput')} class="px-2 m-px py-2 bg-gray-100 hover:bg-blue-300 rounded-sm cursor-pointer">Document</button>
          <input type="file" id="fileInput" class="hidden" />      
      </div>
      </div>
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
          <span class="ml-2">Voice Meet</span>
        </button>
        <button on:click={makeVideoCall} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={VideoCallIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Video Meet</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        <button on:click={otherTool} class="flex items-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <img src={pointsIcon} alt="Video Call" class="w-6 h-6" />
          <span class="ml-2">Others</span>
        </button>
        </div>
      </div>
    </div>
  </div>
</div>
