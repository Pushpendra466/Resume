var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
for(var i = 1;i<navMenuAnchorTags.length;i++)
{ navMenuAnchorTags[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    // console.log(targetSection);
    var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect()
        if(targetSectionCoordinates.top <=130){
            clearInterval(interval);
            // console.log(targetSectionCoordinates,'top');
            window.scrollBy(0,120);
            return;
        }
        window.scrollBy(0,50);
    },40)
});
    
}
                                    // For Small Devices 
var navMenuAnchorTags = document.querySelectorAll('#nav-sm-list a');
// console.log(navMenuAnchorTags);
for(var i = 2;i<navMenuAnchorTags.length;i++)
{ navMenuAnchorTags[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    // console.log(targetSection);
    var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect()
        if(targetSectionCoordinates.top <=130){
            clearInterval(interval);
            // console.log(targetSectionCoordinates,'top');
            window.scrollBy(0,120);
            return;
        }
        window.scrollBy(0,50);
    },40)
});
    
}

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);

function initialiseBars(){
    for(var bar of progressBars){
        bar.style.width=0+'%';
    }
}
// initialiseBars();

// function fillBars(){

//     for(let bar of progressBars){
//         let targetwidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth > targetwidth){
//                 clearInterval(interval);
//             }
//             currentWidth++;
//             bar.style.width=currentWidth+'%';
//         },10)
//     }
// }

// function checkScroll(){
//     var coordinates = skillContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top < window.innerHeight){
//         fillBars()
//         animationDone = true;
//     }else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }
// }

for(a of progressBars)
{
    a.animationDone = false;
}

function initialiseBar(bar){
        bar.style.width=0+'%';
}

initialiseBars();

function fillBar(bar){
    let targetwidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetwidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },10)
}

function checkScroll(){
    for(let bar of progressBars)
    { let coordinates = bar.getBoundingClientRect();
        console.log(bar.animationDone)
        if(!bar.animationDone && coordinates.top < window.innerHeight){
        fillBar(bar);
        bar.animationDone = true;
    }else if(coordinates.top > window.innerHeight){
        bar.animationDone = false;
        initialiseBar(bar);
    }
}

}