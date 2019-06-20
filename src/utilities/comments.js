const baseUrl = `htpps://content.alexandralarouche.ca/wp-json/wp/v2/comments`;
// const inputMessage = document.getElementById("your-message");
// const inputName = document.getElementById("your-name");
// const submit = document.querySelector("input.btn");
// const refresh = document.getElementById("refresh");
// const chatMessages = document.querySelector("#messages ul");

// functions

// const populateNewMessages = (name, message) => {
//   chatMessages.insertAdjacentHTML('afterbegin', `<li>${message} posted by ${name}</li>`);
// };


// refresh.addEventListener('click', (event) => {
//   event.preventDefault();
//   fetch(baseUrl)
//     .then(response => response.json())
//     .then((data) => {
//       data.messages.forEach((message) => {
//         populateNewMessages(message.author, message.content);
//       });
//     });
// });


// submit.addEventListener('click', (event) => {
//   event.preventDefault();
//   const myData = { author: `${inputName.value}`, content: `${inputMessage.value}` };
//   fetch(baseUrl, {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(myData)
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// });


const createComment = () => {
  console.log('prout')
}

export default {createComment}
