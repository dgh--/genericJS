var decodeEntities = (function() {
    /*
     * Helper function: convert HTML entities, e.g. &#39;
     * to plain text. Solution borrowed from
     * http://stackoverflow.com/a/9609450
     */
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');
    function decodeHTMLEntities (str) {
        if(str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }
            return str;
        }
    return decodeHTMLEntities;
})();

var transferBetweenArrays = function(key, targetValue, sourceArray, destArray) {
        /*
         * Helper function: for matching targetValue
         * if sourceArray[i][key] === targetValue,
         * remove from sourceArray and push
         * to destArray
         */
        var arr, element;
        arr = sourceArray();
        for (var i=0; i < arr.length; i++) {
            if (arr[i][key] === targetValue) {
                element = sourceArray.splice(i, 1);
                destArray.push(element[0]);
            }
        }
        return sourceArray;
};

var functions = {
    decodeEntities: decodeEntities,
    transferBetweenArrays: transferBetweenArrays
};

return functions;