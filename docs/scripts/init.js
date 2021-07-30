import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog;

//display public timeline
const publicTimeline = mockroblog.getPublicTimeline();
const publicDisplay = document.querySelector('#publicTimeline-json');

publicTimeline.forEach(post => {
    publicDisplay.innerHTML += `<article class="post"><div class="userId">User: ${post.id}</div><div class="postText">${post.text}</div><div class="postTimestamp">${post.timestamp}</div></article>`;
});

//display myposts
const myPostsTimeline = mockroblog.getUserTimeline('ProfAvery');
const myPostsDisplay = document.querySelector('#myPostsTimeline-json'); 

if(myPostsDisplay != null){
    myPostsTimeline.forEach(post => {
        myPostsDisplay.innerHTML += `<article class="post"><div class="userId">User: ${post.id}</div><div class="postText">${post.text}</div><div class="postTimestamp">${post.timestamp}</div></article>`;
    });
}


//authenticate user data from login form on login button click
if(document.getElementById('loginButton')){
    const loginButton = document.getElementById('loginButton');
    loginButton.onclick = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let data = mockroblog.authenticateUser(username, password);
        console.log(data);
    }
}

//create a new post
if(document.getElementById('newPostButton')){
    const newPostButton = document.getElementById('newPostButton');
    newPostButton.onclick = () => {
        let postText = document.getElementById('PostText').value;
        let data = mockroblog.postMessage(4, postText)
        console.log(data);
    }
}


