// const baseUrl = `https://content.alexandralarouche.ca/wp-json/wp/v2/comments`;
// const inputMessage = document.getElementById("test-btn");
// console.log(inputMessage)


// functions

// const callApi = () => {
//   console.log('calling api')
//   fetch(baseUrl, {
//     method: 'POST'
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
// }

// inputMessage.addEventListener('click', () => {
//   console.log('clicked')
//   callApi()
// })

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


