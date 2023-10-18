<script>
  import chatcummunity from "../../../images/155472-OV6O7U-480.png";
  import phoneMeet from "../../../images/phone_meet.png";
</script>

<div
  class="flex justify-center items-center lg:flex-row flex-col m-2 lg:m-10 p-5"
>
  <div class="p-2 lg:w-1/2">
    <div class="flex md:items-center mb-10 justify-around">
      <div>
        <h1
          class="text-2xl lg:text-4xl font-extrabold text-gray-800 text-center lg:text-left"
        >
          Welcome to
        </h1>
        <span
          class="text-4xl lg:text-6xl md:text-6xl font-extrabold text-blue-600 pt-12"
          >Our <span class="text-green-600">ShareHub</span>
        </span>
      </div>
      <img src={phoneMeet} alt="phoneMeet" class="w-32 h-32 md:w-52 md:h-52" />
    </div>
    <div class="">
      <h2 class="text-2xl font-semibold text-red-600 mb-4 mt-2 lg:mt-6">
        Getting Started
      </h2>
      <p class="mb-4 text-justify text-gray-700">
        Joining ShareHub is a breeze. With just a few simple steps, you'll
        unlock the door to our thriving community. Here, you can share your
        passions, expand your knowledge, foster personal growth, and connect
        with like-minded individuals who share your interests. Let's embark on
        this exciting journey together!
      </p>
      <div class="w-full flex justify-center items-center gap-2">
        <p class="text-sm text-right text-blue-700 font-bold">
          Sign up Now and start sharing, connecting, and thriving with us.
        </p>
        <a
        href="/pages/signup"
          class="p-2 px-8 float-right bg-blue-700 rounded-md text-white hover:underline underline-offset-4"
          >Sing Up</a
        >
      </div>
    </div>
  </div>
  <div class="lg:w-1/2 flex items-center justify-center flex-col p-5">
    <code class="font-bold text-red-500 text-center"
      ><span class="text-green-600">"</span>Community is where your story
      begins, <br /> And ShareHub is where it thrives.<span
        class="text-green-600">"</span
      ></code
    >
    <img
      src={chatcummunity}
      alt="Chat Cummunity"
      class="w-5/6 h-5/6 lg:w-4/6 lg:h-4/6"
    />
    <p class="text-gray-600">Your Community Awaits</p>
    <div class="w-full flex justify-center items-center gap-2 mt-5">
      <p class="text-sm text-right text-blue-700 font-bold">
        Welcome back! Sign in to your ShareHub account.
      </p>
      <a
        href="/pages/login"
        class="p-2 px-4 float-right bg-blue-700 rounded-md text-white hover:underline underline-offset-4"
        >Login Now</a
      >
    </div>
  </div>
</div>
<hr class="border-blue-600 border" />
<section class="content py-10 px-6 shadow-md rounded-lg">
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Why Join ShareHub?</h2>
  <ul class="list-disc ml-6 text-blue-900">
    <li class="mb-2">
      Community Power: ShareHub empowers you to create, manage, and join
      communities that matter to you. Whether you're a group organizer or a
      community enthusiast, we've got the tools you need.
    </li>
    <li class="mb-2">
      Information Sharing: Discover a platform built for seamless information
      sharing. Stay informed, share your knowledge, and engage with like-minded
      individuals.
    </li>
    <li class="mb-2">
      Real-Time Interaction: Connect through group chats, forums, and events.
      ShareHub offers real-time interaction to keep your community engaged and
      informed.
    </li>
    <li class="mb-2">
      Educational Opportunities: Enhance your learning experience. Educators and
      students alike can benefit from our platform. Join online classes, share
      course materials, and engage in discussions.
    </li>
    <li class="mb-2">
      Support and Advocacy: Nonprofits, advocacy groups, and support communities
      can use ShareHub to mobilize supporters, share news, and coordinate
      activities.
    </li>
  </ul>
</section>
