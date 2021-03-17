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
