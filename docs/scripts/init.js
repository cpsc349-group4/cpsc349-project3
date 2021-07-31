import * as mockroblog from './mockroblog.js'
window.mockroblog = mockroblog;

//display public timeline
const publicTimeline = mockroblog.getPublicTimeline();
const homeTimeline = mockroblog.getHomeTimeline(window.sessionStorage.getItem('user'));
const userTimeline = mockroblog.getUserTimeline(window.sessionStorage.getItem('user'));
const curTimeLine = mockroblog.getUserTimeline(window.sessionStorage.getItem('usersearch'));


const publicDisplay = document.querySelector('#publicTimeline-json');
if(publicDisplay != null){
    publicTimeline.forEach(post => {
        publicDisplay.innerHTML += `<article class="post"><div class="userId">User: ${mockroblog.GetUserFromId(post.user_id)}</div><div class="postText">${post.text}</div><div class="postTimestamp">${post.timestamp}</div></article>`;
    });
}
const userpubDisplay = document.querySelector('#myPostsTimeline-json');
if(userpubDisplay != null){
    userTimeline.forEach(post => {
        userpubDisplay.innerHTML += `<article class="post"><div class="userId">User: ${mockroblog.GetUserFromId(post.user_id)}</div><div class="postText">${post.text}</div><div class="postTimestamp">${post.timestamp}</div></article>`;
    });
}
const homeDisplay = document.querySelector('#homeTimeline-json');
if(homeDisplay != null){
    homeTimeline.forEach(post => {
        homeDisplay.innerHTML += `<article class="post"><div class="userId">User: ${mockroblog.GetUserFromId(post.user_id)}</div><div class="postText">${post.text}</div><div class="postTimestamp">${post.timestamp}</div></article>`;
    });
}
const curDisplay = document.querySelector('#curatedTimeline-json');
if(curDisplay != null){
    curTimeLine.forEach(post => {
        curDisplay.innerHTML += `<article class="post"><div class="userId">User: ${mockroblog.GetUserFromId(post.user_id)}</div><div class="postText">${post.text}</div><div class="postTimestamp">${post.timestamp}</div></article>`;
    });
}


//authenticate user data from login form on login button click
if(document.getElementById('loginButton')){
    const loginButton = document.getElementById('loginButton');
    loginButton.onclick = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let data = mockroblog.authenticateUser(username, password);
        if(data != null){
            window.sessionStorage.setItem('userid', data.id);
            window.sessionStorage.setItem('user', data.username);
            console.log(data);
            window.location += 'myPosts.html';
        }
    }
}

//SearchUser
if(document.getElementById('Search')){
    const loginButton = document.getElementById('Search');
    loginButton.onclick = () => {
        let username = document.getElementById('User').value;
        if(username != null){
            console.log(username);
            window.sessionStorage.setItem('usersearch', username);
            location.reload();
        }
    }
}

//create a new post
if(document.getElementById('newPostButton')){
    const newPostButton = document.getElementById('newPostButton');
    newPostButton.onclick = () => {
        let postText = document.getElementById('postText').value;
        let data = mockroblog.postMessage(window.sessionStorage.getItem('userid') , postText);
        console.log(data);
    }
}