const emojiTemplate = require("./emojiTemplate");
const emojiLinks = [
  "https://media3.giphy.com/media/YNDLZBTq8hGPDJkmYo/giphy.gif?cid=790b7611uzvk78j6bz8k7e747zafmwnem6howjhrau4oskyc&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/S3nZ8V9uemShxiWX8g/giphy.gif?cid=790b761199k9mbqd8jig3lqabvjw6gcjraorrdxzbaydd5sq&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/hp3dmEypS0FaoyzWLR/giphy.gif?cid=790b7611f64b1e50ed6ab0f626bab05a6b50b2dc5be38775&rid=giphy.gif&ct=g",
];
function blogCard(id) {
  return `
    <a
      id="card-link-${id}"
      href="./blog.html"
      class="blog-card hover:text-gray-600"
    >
      <div
        id="card-${id}"
        class="card my-1 w-screen max-w-xl overflow-hidden bg-white shadow-md dark:bg-gray-700 dark:shadow-gray-700 sm:flex sm:h-auto sm:m-5 sm:rounded-lg sm:hover:bg-gray-600 sm:hover:scale-105 hover:shadow-2xl hover:dark:shadow-gray-700 transition duration-150 ease-in-out"
      >
        <img
          id="card-gif-${id}"
          class="object-cover w-full h-64 sm:w-1/2"
          src=""
          alt="Article"
        />
        <div class="flex flex-col justify-between w-full">
          <div class="p-6 w-full">
            <div>
              <h3
                id="card-title-${id}"
                class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white "
              ></h3>
              <span
                id="card-date-${id}"
                class="mx-1 text-xs text-gray-600 dark:text-gray-300"
              ></span>
              <p
                id="card-content-${id}"
                class="mt-2 text-sm text-gray-600 dark:text-gray-400"
              ></p>
            </div>
          </div>
          <div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span id="comments-${id}"></span>
          </div>
          <div
            id="emoji-container-${id}"
            class="flex justify-between sm:pl-3 corner-round sm:ml-36 overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            ${emojiTemplate(emojiLinks[0], `${id}-1`)}
            ${emojiTemplate(emojiLinks[1], `${id}-2`)}
            ${emojiTemplate(emojiLinks[2], `${id}-3`)}
          </div>
        </div>
      </div>
    </a>
  `;
}
module.exports = blogCard;
