<script>
  import AudioCallIcon from '../../../images/audiocall.png';
  import VideoCallIcon from '../../../images/videocall.png';

  let messages = [
    { text: 'Hello!', sender: 'Alice' },
    { text: 'Hi there!', sender: 'Bob' },
  ];

  let newMessage = '';

  function makeAudioCall() {
  }

  function makeVideoCall() {
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

<div class="flex min-h-screen">
  
  <div class="w-1/4 bg-gray-200 p-4">
    <a href="/community/cretecommunity" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Messaging Dashboard</a>

  </div>
 
  <div class="w-3/4 bg-gray-100 p-4">
    <h1 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Messaging Dashboard</h1>
    
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
  </div>
</div>
