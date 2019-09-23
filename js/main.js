import Team from './modules/dataObject.js';

(() => {


    

    // console.log(Team);

    let memberBio =  document.querySelectorAll('.memberBio'),  
        teamImages = document.querySelectorAll('.teamImg'),
        sandraImg = document.querySelector('#sandraImg'),
        mariamImg = document.querySelector('#mariamImg'),
        kahaniImg = document.querySelector('#kahaniImg'),
        luisaImg = document.querySelector('#luisaImg'),
        sandraBio = document.querySelector('#sandraBio').children,
        mariamBio = document.querySelector('#mariamBio').children,
        kahaniBio = document.querySelector('#kahaniBio').children,
        luisaBio = document.querySelector('#luisaBio').children,
        sandraBi = document.querySelector('#sandraBio'),
        mariamBi = document.querySelector('#mariamBio'),
        kahaniBi = document.querySelector('#kahaniBio'),
        luisaBi = document.querySelector('#luisaBio');    // console.log(memberBio);
    // console.log(teamImages);

    // function parseMember() {
    //     // console.log('workin'); 

    //     let firstName = this.alt.split(' '),
    //          member = firstName[0];  
    //     // console.log(member);
    //     memberBio[0].src = `images/${Team[member].avatar}`;
    //     memberBio[1].textContent = Team[member].role;
    //     memberBio[2].textContent = Team[member].name;
    //     memberBio[3].textContent = Team[member].bio;

    // }

    function parseSandra() {
        
        let member = "sandra"; 
        sandraImg.src = "images/sandra_hover3.jpg";
        // console.log(this.nextElementSibling);
        sandraBi.style.display = 'block';
        // this.nextSibling.classList.style.display = "block";
        
        // sandraBio[0].src = `images/${Team[member].avatar}`;
        sandraBio[0].textContent = Team[member].role;
        sandraBio[1].textContent = Team[member].name;
        sandraBio[2].textContent = Team[member].bio;
    }

    function byeSandra() {
        
        // let firstName = this.alt.split(' '),
        //     member = firstName[0];  
        sandraImg.src = "images/sandra_pic3.jpg";
        sandraBi.style.display = 'none';
    }

    function parseMariam() {
        
        let member = "mariam"; 
        mariamImg.src = "images/mariam_hover3.jpg";
        mariamBi.style.display = 'block';
        // mariamBio[0].src = `images/${Team[member].avatar}`;
        mariamBio[0].textContent = Team[member].role;
        mariamBio[1].textContent = Team[member].name;
        mariamBio[2].textContent = Team[member].bio;
    }

    function byeMariam() {
        
        // let firstName = this.alt.split(' '),
        //     member = firstName[0];  
        mariamImg.src = "images/mariam_pic3.jpg";
        mariamBi.style.display = 'none';
    }

    function parseKahani() {
        
        let member = "kahani";
        kahaniImg.src = "images/kahani_hover3.jpg";
        kahaniBi.style.display = 'block';
        // kahaniBio[0].src = `images/${Team[member].avatar}`;
        kahaniBio[0].textContent = Team[member].role;
        kahaniBio[1].textContent = Team[member].name;
        kahaniBio[2].textContent = Team[member].bio;
    }

    function byeKahani() {
        
        // let firstName = this.alt.split(' '),
        //     member = firstName[0];  
        kahaniImg.src = "images/kahani_pic3.jpg";
        kahaniBi.style.display = 'none';
    }

    function parseLuisa() {
        
        let member = "luisa"; 
        luisaImg.src = "images/luisa_hover3.jpg";
        luisaBi.style.display = 'block';
        // luisaBio[0].src = `images/${Team[member].avatar}`;
        luisaBio[0].textContent = Team[member].role;
        luisaBio[1].textContent = Team[member].name;
        luisaBio[2].textContent = Team[member].bio;
    }

    function byeLuisa() {
        
        // let firstName = this.alt.split(' '),
        //     member = firstName[0];  
        luisaImg.src = "images/luisa_pic3.jpg";
        luisaBi.style.display = 'none';
    }

    

    // teamImages.forEach(img => {
    //     img.addEventListener('mouseover', parseMember);
    // });    

    sandraImg.addEventListener('mouseover', parseSandra);
    mariamImg.addEventListener('mouseover', parseMariam);
    kahaniImg.addEventListener('mouseover', parseKahani);
    luisaImg.addEventListener('mouseover', parseLuisa);

    sandraBi.addEventListener('mouseover', parseSandra);
    mariamBi.addEventListener('mouseover', parseMariam);
    kahaniBi.addEventListener('mouseover', parseKahani);
    luisaBi.addEventListener('mouseover', parseLuisa);

    sandraImg.addEventListener('mouseleave', byeSandra);
    mariamImg.addEventListener('mouseleave', byeMariam);
    kahaniImg.addEventListener('mouseleave', byeKahani);
    luisaImg.addEventListener('mouseleave', byeLuisa);

    sandraBi.addEventListener('mouseleave', byeSandra);
    mariamBi.addEventListener('mouseleave', byeMariam);
    kahaniBi.addEventListener('mouseleave', byeKahani);
    luisaBi.addEventListener('mouseleave', byeLuisa);

})();