<script>
  import { communityList } from "../datastore/communitystore";

  let communityName = '';
  let communityDescription = '';
  let communityCategory = '';
  let selectedCategory = '';
  let communityEmail = '';
  let communityNumber = '';
  let communityYoutube = '';
  let communityInstagram = '';
  let communityFacebook = '';
  let communityTwitter = '';
  let communityPostAccess = false;
  let communityEditAccess = false;
  let communityDeleteAccess = false;
  let communityPollsAccess = false;
  let communityInviteAccess = false;
  let communityChatManagerAccess = false;
  let communityChatMemberAccess = false;

  const categories = [
  'Friendship',
  'Family',
  'Love',
  'Health and Wellness',
  'Education',
  'Career and Job',
  'Personal Development',
  'Hobbies and Interests',
  'Mental Health',
  'Physical Fitness',
  'Relationships',
  'Parenting',
  'Marriage',
  'Dating and Romance',
  'Finances and Budgeting',
  'Travel and Adventure',
  'Food and Cooking',
  'Home and Interior Design',
  'Technology and Gadgets',
  'Environment and Sustainability',
  'Arts and Creativity',
  'Entertainment',
  'Religion and Spirituality',
  'Self-Care',
  'Time Management',
  'Stress Management',
  'Aging and Retirement',
  'Fashion and Style',
  'Social Issues',
  'Personal Finance',
  'Business and Entrepreneurship',
  'Politics and Government',
  'Science and Technology',
  'Education and Learning',
  'Mental Health and Wellbeing',
  'Parenting and Family',
  'Lifestyle and Travel',
  'Health and Fitness',
  'Relationships and Dating',
  'Hobbies and Interests',
  'Arts and Culture',
  'Music and Entertainment',
  'Books and Literature',
  'Home and Garden',
  'Sports and Recreation',
  'Pets and Animals',
  'DIY and Home Improvement',
];

  categories.sort();

  function selectCategory(category) {
    selectedCategory = category;
    communityCategory = category;
  }

  function handleCreateCommunity(event) {
    event.preventDefault();
    const phoneNumber = communityNumber;
    const email = communityEmail;

    // Validation checks
    if (communityName.length < 5) {
      alert("Community Name must be at least 5 characters.");
      return;
    }

    if (communityDescription.length < 10 || communityDescription.length > 500) {
      alert("Community Description must be between 100 and 1000 characters.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("Phone Number must have exactly 10 digits.");
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Create a community object
    const newCommunity = {
      name: communityName,
      description: communityDescription,
      category: communityCategory,
      email: communityEmail,
      number: communityNumber,
      youtube: communityYoutube,
      instagram: communityInstagram,
      facebook: communityFacebook,
      twitter: communityTwitter,
      permissions: {
        postAccess: communityPostAccess,
        editAccess: communityEditAccess,
        deleteAccess: communityDeleteAccess,
        pollsAccess: communityPollsAccess,
        inviteAccess: communityInviteAccess,
        chatManagerAccess: communityChatManagerAccess,
        chatMemberAccess: communityChatMemberAccess,
      },
    };

    // Add the new community to the list
    communityList.update((communities) => [...communities, newCommunity]);

    // Clear the input fields and other logic
    communityName = '';
    communityDescription = '';
    communityCategory = '';
    selectedCategory = '';
    communityEmail = '';
    communityNumber = '';
    communityYoutube = '';
    communityInstagram = '';
    communityFacebook = '';
    communityTwitter = '';
    communityPostAccess = false;
    communityEditAccess = false;
    communityDeleteAccess = false;
    communityPollsAccess = false;
    communityInviteAccess = false;
    communityChatManagerAccess = false;
    communityChatMemberAccess = false;
  }
</script>

<div class="w-full flex flex-wrap p-4">
  <h1 class="text-2xl text-center font-semibold text-gray-800 mb-4 w-full">Create Community</h1>

  <form class="w-full" on:submit={handleCreateCommunity}>
    <div class="w-full flex flex-col gap-4">
      <div class="flex justify-between gap-4 w-full">
        <div class="mb-4 w-full">
          <label for="communityName" class="block text-sm font-medium text-gray-600">Community Name</label>
          <input
            type="text"
            id="communityName"
            name="communityName"
            bind:value={communityName}
            class="w-full p-2 border rounded border-gray-300"
            placeholder="Enter community name"
            required
          />
        </div>

        <div class="mb-4 w-full">
          <label for="communityCategory" class="block text-sm font-medium text-gray-600">Community Category</label>
          <select id="communityCategory" name="communityCategory" bind:value={communityCategory} class="w-full p-2 border rounded border-gray-300" required>
            <option value="" disabled selected>Select a category</option>
            {#each categories as category}
              <option value={category} on:click={() => selectCategory(category)}>{category}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="mb-4 w-full">
        <label for="communityDescription" class="block text-sm font-medium text-gray-600">Community Description</label>
        <textarea
          id="communityDescription"
          name="communityDescription"
          bind:value={communityDescription}
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Enter community description"
          rows="4"
          required
        />
      </div>
    </div>

    <div class="mb-4 w-full">
      <h2 class="text-lg text-center font-semibold text-gray-800 mb-2">Manager Contacts</h2>
      <div class="flex justify-between gap-4 w-full">
        <div class="mb-4 w-full">
          <label for="phoneNumber" class="block text-sm font-medium text-gray-600">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            bind:value={communityNumber}
            class="w-full p-2 border rounded border-gray-300"
            placeholder="Enter phone number"
          />
        </div>

        <div class="mb-4 w-full">
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            bind:value={communityEmail}
            class="w-full p-2 border rounded border-gray-300"
            placeholder="Enter email"
          />
        </div>
      </div>

      <h3 class="text-md text-center font-medium text-gray-600 mb-2">Social Media Links (Optional)</h3>

      <div class="mb-4 w-full flex justify-between items-center gap-4">
        <label for="youtubeLink" class="max-w-full w-24 block text-sm font-medium text-gray-600">YouTube</label>
        <input
          type="url"
          id="youtubeLink"
          name="youtubeLink"
          bind:value={communityYoutube}
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Enter YouTube link"
        />
      </div>

      <div class="mb-4 w-full flex justify-between items-center gap-4">
        <label for="instagramLink" class="max-w-full w-24 block text-sm font-medium text-gray-600">Instagram</label>
        <input
          type="url"
          id="instagramLink"
          name="instagramLink"
          bind:value={communityInstagram}
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Enter Instagram link"
        />
      </div>

      <div class="mb-4 w-full flex justify-between items-center gap-4">
        <label for="facebookLink" class="max-w-full w-24 block text-sm font-medium text-gray-600">Facebook</label>
        <input
          type="url"
          id="facebookLink"
          name="facebookLink"
          bind:value={communityFacebook}
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Enter Facebook link"
        />
      </div>

      <div class="mb-4 w-full flex justify-between items-center gap-4">
        <label for="twitterLink" class="max-w-full w-24 block text-sm font-medium text-gray-600">Twitter</label>
        <input
          type="url"
          id="twitterLink"
          name="twitterLink"
          bind:value={communityTwitter}
          class="w-full p-2 border rounded border-gray-300"
          placeholder="Enter Twitter link"
        />
      </div>
    </div>

    <div class="mb-4 w-full">
      <h2 class="text-lg text-center font-semibold text-gray-800 mb-2">Permissions for Admins</h2>
      <div class="ml-10 grid lg:grid-cols-3 grid-cols-2">
        <div class="mb-4 w-full">
          <label for="adminPostAccess" class="block text-sm font-medium text-gray-600">Post Access</label>
          <input type="checkbox" id="adminPostAccess" name="adminPostAccess" class="mr-2"  bind:value={communityPostAccess}/>
          <span class="text-sm text-gray-600">Grant Post Access</span>
        </div>

        <div class="mb-4 w-full">
          <label for="adminEditAccess" class="block text-sm font-medium text-gray-600">Edit Access</label>
          <input type="checkbox" id="adminEditAccess" name="adminEditAccess" class="mr-2"  bind:value={communityEditAccess}/>
          <span class="text-sm text-gray-600">Grant Edit Access</span>
        </div>

        <div class="mb-4 w-full">
          <label for="adminDeleteAccess" class="block text-sm font-medium text-gray-600">Delete Messages Access</label>
          <input type="checkbox" id="adminDeleteAccess" name="adminDeleteAccess" class="mr-2"  bind:value={communityDeleteAccess}/>
          <span class="text-sm text-gray-600">Grant Delete Messages Access</span>
        </div>

        <div class="mb-4 w-full">
          <label for="adminPollsAccess" class="block text-sm font-medium text-gray-600">Grant Polls Access</label>
          <input type="checkbox" id="adminPollsAccess" name="adminPollsAccess" class="mr-2"  bind:value={communityPollsAccess}/>
          <span class="text-sm text-gray-600">Grant Polls Access</span>
        </div>

        <div class="mb-4 w-full">
          <label for="adminInviteAccess" class="block text-sm font-medium text-gray-600">Invite Access</label>
          <input type="checkbox" id="adminInviteAccess" name="adminInviteAccess" class="mr-2" bind:value={communityInviteAccess}/>
          <span class="text-sm text-gray-600">Grant Invite Access</span>
        </div>

        <div class="mb-4 w-full">
          <label for="adminChatManagerAccess" class="block text-sm font-medium text-gray-600">Chat Manager Access</label>
          <input type="checkbox" id="adminChatManagerAccess" name="adminChatManagerAccess" class="mr-2" bind:value={communityChatManagerAccess}/>
          <span class="text-sm text-gray-600">Grant Chat Manager Access</span>
        </div>

        <div class="mb-4 w-full">
          <label for="adminChatMemberAccess" class="block text-sm font-medium text-gray-600">Chat Member Access</label>
          <input type="checkbox" id="adminChatMemberAccess" name="adminChatMemberAccess" class="mr-2" bind:value={communityChatMemberAccess}/>
          <span class="text-sm text-gray-600">Grant Chat Member Access</span>
        </div>

        <!-- Add more permissions as needed -->
      </div>
    </div>

    <div class="mb-4 w-full flex justify-end">
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Create Community</button>
    </div>
  </form>
</div>
