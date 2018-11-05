import $ from 'jquery';
import { setHeader,setLeftSection,setRightSection,setRightSectionHome,setRightSectionArchives,setRightSectionGames } from './options';

function header(){
    const random = Math.ceil(Math.random() * setHeader.background.length - 1);
    const a = `url('${setHeader.background[random]}')`;
    $('title').text(setHeader.title);
    document.getElementsByTagName('link')[0].href = setHeader.avatar;
    $('body').css("background-image",a);
}

function leftSection(){
    const avatar = `<div class="icon"><img src="${setLeftSection.icon}" alt="avatar"></div>`;
    const setNav = `<nav></nav>`;
    $('div.container').append(`<section class="left"></section>`);
    $('section.left').append(avatar,setNav);
    for(let i = 0;i < setLeftSection.links.length;i++){
        $('nav').append(`<li><a href="#" id="${setLeftSection.links[i]}">${setLeftSection.links[i]}</a></li>`);
    }
}

function rightSection(){
    $('div.container').append(`<section class="right"></section>`);
}

function rightSectionHome(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.homeTitle}</h2></header>`).append(`<div class="items"></div>`);
    for(let i = 0;i < setRightSectionHome.length;i++){       
        $('div.items').append(`<a href="${setRightSectionHome[i].link}"   target="_blank" id=""><i class="fa-3x ${setRightSectionHome[i].icon}"></i><p>${setRightSectionHome[i].value}</p></a>`);
    }
}

function rightSectionArchives(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.archivesTitle}</h2></header>`).append(`<ul class="items archives"></ul>`);
    for(let i = 0;i < setRightSectionArchives.length;i++){
        $('ul.items').append(`<li><a href="${setRightSectionArchives[i].link}"><span class="archives-text">${setRightSectionArchives[i].value}</span><span class="archives-date"> / ${setRightSectionArchives[i].date}</span></a></li>`);
    }
}

function rightSectionGames(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.gamesTitle}</h2></header>`).append(`<ul class="items archives"></ul>`);
    for(let i = 0;i < setRightSectionArchives.length;i++){
        $('ul.items').append(`<li><span class="games-text">${setRightSectionGames[i].name}</span><span class="games-date"> / ${setRightSectionGames[i].value}</span></li>`);
    }
}

function rightSectionAbout(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.aboutTitle}</h2></header>`).append(`<p class="about-text">${setRightSection.aboutText}</p>`);
}

export { header,leftSection,rightSection,rightSectionHome,rightSectionArchives,rightSectionGames,rightSectionAbout }