function matchHeight() {
    var myContainer = document.getElementById('3col-container'), i = 0, j = 1, maxHeight = 0, element = 0, childCount = myContainer.childElementCount, children = myContainer.childNodes;
    
    //alert('Children number: '+childCount);
    
    for (i = 0; i < childCount; i++) {
        if (children[j].clientHeight > maxHeight) {
            maxHeight = children[j].clientHeight;
        }
        //alert('Current height: '+children[j].clientHeight+'; current maxHeight: '+maxHeight);
        j += 2;
    }
    //alert('Setting heights');
    j = 1;
    for (i = 0; i < childCount; i++) {
        children[j].style.height = maxHeight + 'px';
        j += 2;
    }
}