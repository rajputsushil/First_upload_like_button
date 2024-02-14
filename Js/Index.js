let bg_stories=document.querySelector('.bg-story');
let Story =document.getElementsByClassName('story');
let Stories =document.querySelector('.stories')
let instastory =[
    {
        ProfilePhoto:'Images/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg',
        story:'Images/corey-saldana-mD15zdyRPJ0-unsplash.jpg',
    },
    {
        ProfilePhoto:'Images/danijel-skabic-o3LD5ZDQvRk-unsplash.jpg',
        story:'Images/darko-mitev-c5t_j1zlk1Y-unsplash.jpg',
    },
    {
        ProfilePhoto:'Images/dom-hill-nimElTcTNyY-unsplash.jpg',
        story:'Images/mahdi-chaghari-HlNIC997xEk-unsplash.jpg',
    },
    {
        ProfilePhoto:'Images/mahdi-chaghari-Wxf5A5EeRZM-unsplash.jpg',
        story:'Images/napat-saeng-mVGW8j9rrC4-unsplash.jpg',
    },
    {
        ProfilePhoto:'Images/omid-armin-qFKIqEaaw5A-unsplash.jpg',
        story:'Images/sonnie-hiles-gG70fyu3qsg-unsplash.jpg',
    },
];

let addStoreis ='';

instastory.forEach((element,index)=>{
    addStoreis+=`
    <div class="story">
    <img id="${index}" src="${element.ProfilePhoto}" alt="" />
    </div>
    `
})

Stories.innerHTML =addStoreis;

Stories.addEventListener('click',(e)=>{
    bg_stories.style.display ='block'
    Stories.style.display ='none'
    like_photo.style.display ='none';
    bg_stories.style.backgroundImage=`url("${instastory[e.target.id].story}")`
    setTimeout(()=>{ 
        bg_stories.style.display ='none';
        Stories.style.display ='block'
        like_photo.style.display ='block';
     },2000)
});

const like_photo =document.querySelector('.like_photo')
const like_img =document.querySelector('#image');

like_img.addEventListener('dblclick',(e)=>{
    let like_btn =document.querySelector('#icon');
    let another_like_btn =document.querySelector('#secondicon');
    like_btn.style.transform ='scale(2)';
    another_like_btn.style.color ='rgb(248, 15, 15)'
    
    setTimeout((e)=>{
        like_btn.style.transform ='scale(0)';
    },2000)
})