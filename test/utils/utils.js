
//Scrolls to the bottom of the page
export function scrollToBottom(){
    const elm= $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    return elm;
}

//Scrolls to specific text in the page
export function scrollToElement(text){
        var text;
        const elm=  $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`); 
    
    return elm;
}

//Scroll Left 
export function scrollLeft(text){
    var text;
    const elm=  $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView("${text}")`);

return elm;
}
