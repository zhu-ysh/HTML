/**
 * Created by Administrator on 2017/12/19.
 */

Array.prototype.css=function(styleName,styleValue){
        for(var i=0;i<this.length;i++){
            this[i].style[styleName] = styleValue;
        }
        return this;
};

function $(selector) {
    var elements = new Array();
    if (typeof selector == "string") {
        var firstChar = selector.charAt(0);
        if(firstChar == "#"){
            var sel =  document.getElementById(selector);
            elements.push(sel);
        }else if(firstChar == "."){
            var sels = document.getElementsByClassName(selector);
            for(var sel of sels) {
                elements.push(sel);
            }
        }else{
            var sels =document.getElementsByTagName(selector);
            for(var sel of sels){
                elements.push(sel);
            }
        }
        return elements;
    }
}

