
"strcict"
// form validation
//target all the ID selectors from the HTML injs
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//create submievent listener for the form that can
//prevent default behaviour of our app
//create func name formvalidation

form.addEventListener("submit", (e) => {
  // console.log(e.currentTarget)
  e.preventDefault();
  console.log("buttom clicked");
  formValidation();
});
//we are going to use if statement inside or form validation
//form validation help us to prevent user submitting blank space

function formValidation() {
  if (input.value === "") {
    msg.innerHTML = "post  cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    input.innerHTML = "";
    //we need the acceptData() func to work when the user clicks the submit button
    //for that we will fire the func in this func in else statement of our formValidation func
    accepData();
  }
}
//to accept data from input
//whatever data we get from the input fields, we will store them in an object
//lets create object name data and create a function named accepData;
//the main idea is that using the func we collect data from the input and store them in our obj data;
//let dat={}
//let acceptData=()=>{}
let data = {};
let accepData = () => {
  data["text"] = input.value;
  console.log(data);
  //in our acceptyData fun we will fire our createPost fun 
  createPost()
};

//How to create posts using js template literals
//in order to create our post input on the right side we need to create
//a div elemnt and append it to the post's div
//the buckticks are template literals. it will work as templete for us
//here we need 3 things : parent div, the input itself and the option div which carries the edit and delete icons;
//create createPOst func;

let createPost = () => {
  posts.innerHTML += `
<div>
<p>${data.text}</p>
<span class="option">
<i  onClick="editPost(this)" class="fas fa-edit"></i>
<i  onClick="deletePost(this)" class="fas fa-trash-alt" ></i>
</span>
</div>`;
input.value="";
};

//how to delete post
//inorder to delete a post first of all lets create a deltePost FUN
//we fire this deletPost fun inside all of our delete icons using onClick attribute.
//you will write the lines in HTML and the templete literal:
{/* <i onclick="deletePost(this)" class="fas fa-trash-alt"></i> */}
//this key word refers to the elemnt that fired the event, in our case the this refers to the deleted button;
//the parent of the delete button is the span with class name option,
//the parent of the span is the div, so we write parentElement twice so that we can jump from the delte icon to the div and target it durect to remove it

let deletePost=(e)=>{
   e.parentElement.parentElement.remove()

}

//How to edit post
//create edit fun
//we fire this editPost fun inside all of our edit icons using onClick attribute.
//you will write the lines in HTML and the templete literal:
{/* <i onclick="editPost(this)" class="fas fa-edit"></i> */}
//this key word refers to the elemnt that fired the event, in our case the this refers to the edit button;
//the parent of the edit button is the span with class name options. The parent of the span is the div. So, we write parentElement twice so that we can jump from the edit icon to the div and target it directly to remove it.
let editPost=(e)=>{
   console.log(e)
   input.value=e.parentElement.previousElementSibling.innerHTML;
   e.parentElement.parentElement.remove();
}