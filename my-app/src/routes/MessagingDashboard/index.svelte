<script>
    let messages = []; // Replace with your actual message data
    let newMessage = '';
  
    function sendMessage() {
      if (newMessage) {
        messages = [...messages, { text: newMessage, sentBy: 'user', timestamp: new Date() }]; // Simulated user message with timestamp
        newMessage = '';
      }
    }

    document.getElementById('1').addEventListener('click', function() {
    var hiddenSection = document.getElementById('hiddenSection');
    hiddenSection.style.display = hiddenSection.style.display === 'none' ? 'block' : 'none';
    });

  </script>
  
  <main class="flex h-screen">
    <aside class="w-1/4 border-r p-4">
      <!-- Sidebar -->
      <!-- You can add contacts, groups, or other components here -->
    </aside>
  
    <section class="w-3/4 p-4">
      <!-- Chat area -->
      <div class="border rounded p-4 h-3/4 mb-4 overflow-y-auto bg-gray-100">
        {#each messages as message (message.text)}
          <div class={message.sentBy === 'user' ? 'text-right' : 'text-left'}>
            <div class="p-3 rounded-lg mb-2 bg-white shadow-md">
              <div class="text-gray-700">{message.text}</div>
              <div class="text-xs text-gray-500 text-right mt-1">{message.timestamp.toLocaleString()}</div>
            </div>
          </div>
        {/each}
      </div>

      <div class="flex">
        <div class="flex">
          <div id="1" class="flex text-green-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M16 9h-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1H8a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>
                <path d="M16 9h-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1H8a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>
              </svg>                  
        </div>

          <div id="hiddenSection" class="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24 " class="flex text-green-500">
                <path d="M21 5a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v13h-2V5z"/>
                <path d="M15.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586l5.293-5.293z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                <path d="M21 4a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v13h-2V5z"/>
                <path d="M8 15.586V8.414L13.414 14H8v1.586z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                <path d="M21 5a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v13h-2V5z"/>
                <path d="M13 5v14l4-7z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                <path d="M21 6a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 1.414.586l4 4a2 2 0 0 1 .586 1.414V6z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                <path d="M13.973 4.054a4.5 4.5 0 1 1 3.973 15.938H19v3.001l5.377-3.001H23a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1.623L6 21l-6-4.5V22a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h4.52A4.5 4.5 0 0 1 12 4a4.5 4.5 0 0 1 1.973.454z"/>
                <path d="M4 14h16v2H4zm0-3h10v2H4zm0-3h16v2H4zm0-3h10v2H4z"/>
              </svg>
          </div>
        </div>
      </div>
      

      <div class="flex">
          <div class="flex">
            <div class="flex text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16 9h-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1H8a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>
                    <path d="M16 9h-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-1H8a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>
                  </svg>                  
                <div class="hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24 " class="flex text-green-500">
                    <path d="M21 5a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v13h-2V5z"/>
                    <path d="M15.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586l5.293-5.293z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                    <path d="M21 4a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v13h-2V5z"/>
                    <path d="M8 15.586V8.414L13.414 14H8v1.586z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                    <path d="M21 5a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v13h-2V5z"/>
                    <path d="M13 5v14l4-7z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                    <path d="M21 6a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 1.414.586l4 4a2 2 0 0 1 .586 1.414V6z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex text-green-500">
                    <path d="M13.973 4.054a4.5 4.5 0 1 1 3.973 15.938H19v3.001l5.377-3.001H23a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1.623L6 21l-6-4.5V22a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h4.52A4.5 4.5 0 0 1 12 4a4.5 4.5 0 0 1 1.973.454z"/>
                    <path d="M4 14h16v2H4zm0-3h10v2H4zm0-3h16v2H4zm0-3h10v2H4z"/>
                  </svg>         
                </div>                                                               
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              class="w-full p-2 rounded border border-gray-300 focus:outline-none"
              bind:value={newMessage}
            />
        </div>
        <button
          on:click={sendMessage}
          class="w-1/5 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </section>
  </main>
