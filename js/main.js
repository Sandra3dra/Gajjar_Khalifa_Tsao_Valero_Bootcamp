import Team from './modules/dataObject.js';

(() => {

    // console.log(Team);

    let memberBio =  document.querySelector('.memberBio').children,  
        teamImages = document.querySelectorAll('.teamImg');
        sandraImg = document.querySelector('#sandraImg'),
        mariamImg = document.querySelector('#mariamImg'),
        kahaniImg = document.querySelector('#kahaniImg'),
        luisaImg = document.querySelector('#luisaImg'),
        sandraBio = document.querySelector('#sandraBio').children,
        mariamBio = document.querySelector('#mariamBio').children,
        kahaniBio = document.querySelector('#kahaniBio').children,
        luisaBio = document.querySelector('#luisaBio').children;    // console.log(memberBio);
    // console.log(teamImages);

    function parseMember() {
        // console.log('workin'); 

        let firstName = this.alt.split(' '),
             member = firstName[0];  
        // console.log(member);
        memberBio[0].src = `images/${Team[member].avatar}`;
        memberBio[1].textContent = Team[member].role;
        memberBio[2].textContent = Team[member].name;
        memberBio[3].textContent = Team[member].bio;

    }

    function parseSandra() {
        
        let firstName = this.alt.split(' '),
             member = firstName[0];  
        
        sandraBio[0].src = `images/${Team[member].avatar}`;
        sandraBio[1].textContent = Team[member].role;
        sandraBio[2].textContent = Team[member].name;
        sandraBio[3].textContent = Team[member].bio;
    }

    function parseMariam() {
        
        let firstName = this.alt.split(' '),
             member = firstName[0];  
        
        mariamBio[0].src = `images/${Team[member].avatar}`;
        mariamBio[1].textContent = Team[member].role;
        mariamBio[2].textContent = Team[member].name;
        mariamBio[3].textContent = Team[member].bio;
    }

    function parseKahani() {
        
        let firstName = this.alt.split(' '),
             member = firstName[0];  
        
        kahaniBio[0].src = `images/${Team[member].avatar}`;
        kahaniBio[1].textContent = Team[member].role;
        kahaniBio[2].textContent = Team[member].name;
        kahaniBio[3].textContent = Team[member].bio;
    }

    function parseLuisa() {
        
        let firstName = this.alt.split(' '),
             member = firstName[0];  
        
        luisaBio[0].src = `images/${Team[member].avatar}`;
        luisaBio[1].textContent = Team[member].role;
        luisaBio[2].textContent = Team[member].name;
        luisaBio[3].textContent = Team[member].bio;
    }

    

    // teamImages.forEach(img => {
    //     img.addEventListener('mouseover', parseMember);
    // });    

    sandraImg.addEventListener('mouseover', parseSandra);
    mariamImg.addEventListener('mouseover', parseMariam);
    kahaniImg.addEventListener('mouseover', parseKahani);
    luisaImg.addEventListener('mouseover', parseLuisa);

})();