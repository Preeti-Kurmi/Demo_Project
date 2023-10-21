const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };
  return date.toLocaleDateString('en-IN', options);
};
document.getElementById("submit-btn").addEventListener("click", function () {
  const currentDate = new Date();
     const returnDate = new Date(currentDate);
     returnDate.setHours(returnDate.getHours() + 1);
  const bookName = document.getElementById("book-name").value;
  let fine=0;


  
  
  


const entries = { bookName, currentDate, returnDate, fine };
  axios.post('http://localhost:8000/add', entries)
        .then((response) => {
          getinput(); 
          console.log("post");// Display the newly added entry
        })
        .catch((error) => {
          console.log(error);
        });
  
});
// Add an event listener to trigger the function when the page loads
// window.onload = getAndDisplayData;

// function getAndDisplayData() {
//   getinput();
// }

function Display(data) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
 

  data.forEach((entry) => {

   
    const newBookDiv = document.createElement("div");
    newBookDiv.className = "book";

    newBookDiv.innerHTML = `
      <p>BOOK name: ${entry.bookname}</p>
      <p>Book taken date: ${formatDate(new Date(entry.currentdate))}</p>
      <p>Book return date: ${formatDate(new Date(entry.returndate))}</p>
      <p>Current fine: ${entry.fine} Rs</p>
      <button class="return-btn" data-id="${entry.id}">Return Book</button>
    `;

    // Append the new book div to the book list
    bookList.appendChild(newBookDiv);
  });
  const returnbtn=bookList.querySelector('.return-btn');
  returnbtn.addEventListener('click',function(){
    const expecteddate=new Date();
    // Displayreturn(entries);
    
  })

}

// Displayreturn(data){
//   const bookreturn=document.getElementById('bookreturn');
//   bookreturn.innerHTML="";
//   // data.forEach((entry) => {
//     const newBook = document.createElement("div");
//     newBook.className = "book";

//     newBook.innerHTML = `
//       <p>BOOK name: ${entry.bookName}</p>
//       <p>Book taken date: ${formatDate(new Date(entry.currentDate))}</p>
//       <p>Book return date: ${formatDate(new Date(entry.returnDate))}</p>
//       <p>Current fine: ${entry.fine} Rs</p>
     
//     `;
//      // Append the new book div to the book list
//      bookreturn.appendChild(newBook);
    
  
// }


function getinput() {
  axios.get('http://localhost:8000/get')
    .then((response) => {

      
      Display(response.data); // Display the retrieved data
    })
    .catch((error) => {
      console.log(error);
    });
}
document.addEventListener('DOMContentLoaded', () => {
  getinput();
  })


