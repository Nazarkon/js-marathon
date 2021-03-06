const objId = {
    lowDamage: 0,
    heightDamage: 0,
    maxClickCountLowDamage:2,
    maxClickCountHeightDamage:2
}

function clickCount(){
    let count = 0;
    function showCount(id = '') {
        if(id === 'btn-kick-height'){
            objId.heightDamage ++
            return count++
        }else if(id === 'btn-kick-low'){
            objId.lowDamage++
            return count++
        }else {
            return count++
        }
    }
    return showCount
}
const showClickCount = clickCount()

// Listen for all click events on the page using event delegation
document.addEventListener('click', function (e) {
    const currentId = e.target.id;
    if(currentId !== ''  && currentId !== undefined){
       showClickCount(currentId)
    }
}, false);


export {objId , showClickCount}

