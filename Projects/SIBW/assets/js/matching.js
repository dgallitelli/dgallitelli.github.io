function matchHeight() {
    var i = 0,
        k = 0,
        maxHeight = 0, 
        element = 0;
    
    var myContainer = document.getElementsByClassName('3col-container');
    
    for (k = 0; k < myContainer.length; k++){
        var j = 1;
        childCount = myContainer[k].childElementCount, 
        children = myContainer[k].childNodes;
    
        //if (k==1) alert('Children number: '+childCount);
        
        for (i = 0; i < childCount; i++) {
            if (children[j].clientHeight > maxHeight) {
                maxHeight = children[j].clientHeight;
            }
            //if (k==1) alert('Current height: '+children[j].clientHeight+'; current maxHeight: '+maxHeight);
            j += 2;
        }
        
        //if (k==1) alert('Setting heights');
        j = 1;
        for (i = 0; i < childCount; i++) {
            children[j].style.height = maxHeight + 'px';
            j += 2;
        }
    }
}