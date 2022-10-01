
// Add Count Zekr In Locale Storge
addZekrOnLocaleStorge() ;


let taps = document.querySelectorAll('#taps .tap') ;
let sections = document.querySelectorAll('section') ;



taps.forEach((el) => {
    el.addEventListener('click', () => {
        let targetTap = el.getAttribute('data-tap') ; 
        
        tapActive(targetTap) ;
        removeAllSections() ;
        showTargetSection(targetTap) ;
    }) ;
}) ;

function removeAllSections () {
    sections.forEach((section) => {
        section.classList.remove('active')
    }) ;
} ;


function showTargetSection (sectionId) {
    let section = document.getElementById(sectionId)
    section.classList.add('active') ;
} ;

function tapActive (tap) {
    taps.forEach((el) => {
        el.classList.remove('active') ;

        if (el.getAttribute('data-tap') == tap) {
            el.classList.add('active') ;
        }
    }) ;
}

let selectZekr = document.getElementById('choose-zekr') ;
let optionsZekr = document.querySelectorAll(`#choose-zekr option`) ;
let buttonCount = document.getElementById('button-count') ;
let htmlCount = document.querySelector('.count') ;
let buttonResateZekr = document.getElementById('resate') ;

selectZekr.addEventListener('change', (el) => {
    getSelectedOption() ;
    showZekrCount() ;
})


function getSelectedOption () {
    
    optionsZekr.forEach((el) => {
        
        if (el.selected == true) {
           buttonCount.innerHTML = el.value ;
        } ;

    }) ;
} ;

function addZekrOnLocaleStorge (obj) {
    if (obj != undefined ) {
        window.localStorage.setItem('zekr', JSON.stringify(obj)) ;
    } else if (window.localStorage.getItem('zekr')) {
        return JSON.parse(window.localStorage.getItem('zekr')) ;
    } else {
        let zekr = {
            'zekr-1': {
                zekr: 'zekr-1' ,
                count: 0,
            } ,
            'zekr-2': {
                zekr: 'zekr-2' ,
                count: 0,
            } ,
            'zekr-3': {
                zekr: 'zekr-3' ,
                count: 0,
            } ,
            'zekr-4': {
                zekr: 'zekr-4' ,
                count: 0,
            } ,
            'zekr-5': {
                zekr: 'zekr-5' ,
                count: 0,
            }
        } ;

        window.localStorage.setItem('zekr', JSON.stringify(zekr)) ;
        return JSON.parse(window.localStorage.getItem('zekr')) ;
    }
} ;

buttonCount.addEventListener('click', () => {
    optionsZekr.forEach(el => {
        if (el.selected == true) {
            let targetZekr = el.id ;
            let objZekr = addZekrOnLocaleStorge() ;
            htmlCount.innerHTML++ ;
            objZekr[targetZekr].count = htmlCount.innerHTML ;
            
            addZekrOnLocaleStorge(objZekr) ;
            console.log(objZekr[targetZekr]) ;
        } 
    });
}) ;


function getZekrFromLocaleStorge () {
    let zekr = JSON.parse(window.localStorage.getItem('zekr')) ;
    return zekr ;
} ;


function showZekrCount() {
    optionsZekr.forEach((el) => {
        if (el.selected == true) {
            let zekr = addZekrOnLocaleStorge() ;
            let targetZekr = el.id ;
            htmlCount.innerHTML = zekr[targetZekr].count ;
        } ;
    })  ; 
} ;

// Print Zekr Count On Page
showZekrCount() ;

function resateZekr () {
    buttonResateZekr.addEventListener('click', () => {
        let objZekr = addZekrOnLocaleStorge() ;
        for (i in objZekr ) {
            objZekr[i].count = 0 ;
            addZekrOnLocaleStorge(objZekr) ;
            htmlCount.innerHTML = 0 ;
        }
    }) ;
    
} ;

// Resete Zekr
resateZekr() ;