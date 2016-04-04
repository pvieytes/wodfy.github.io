define( ["jquery"], function ($) {

    function check(){
        console.log('from function utils.check()');
    }

    function updateParamUrl(url, paramName, value){
        var urlSplited,
            index,
            paramsDict = {},
            paramsList = [],
            valueList;


        urlSplited = url.split('?');

        if (urlSplited.length > 1) {
            // there is at least a param.
            //fill paramsDict
            splitedParams = urlSplited[1].split('&');
            for (i=0;i<splitedParams.length; i++){
                nameValueSplited = splitedParams[i].split('=');
                if (!(nameValueSplited[0] in paramsDict)){
                    paramsDict[nameValueSplited[0]] = [];
                }
                paramsDict[nameValueSplited[0]].push(nameValueSplited[1])
            }
        }

        if ( typeof value === 'string' ){
            valueList = [value];
        } else {
            //if not a list it should be an array
            valueList = value;
        }
        //update paramsDict
        paramsDict[paramName] = valueList;

        //create params list
        for (param in paramsDict){
            for (i=0; i<paramsDict[param].length; i++){
                paramsList.push(param + '=' + paramsDict[param][i]);
            }
        }
        return urlSplited[0] + '?' + paramsList.join('&');


    }

    function updateParamGlobalUrl(paramName, value){
        var paramsSplited = window.location.search.substring(1).split('&');
        var nameValue = paramName + '=' + value;
        var found = false;
        for (var i=0; i<paramsSplited.length; i++){
            var aux = paramsSplited[i].split('=');
            if (aux[0] == paramName)
            {
                newParams.push(nameValue);
                found = true;
            } else {
                newParams.push(paramsSplited[i]);
            };
        };
        if (found == false){
            newParams.push(nameValue);
        };
        return location.protocol + '//' + location.host + location.pathname + "?" + newParams.join('&');
    };


    function getjQueryObjFromStr(htmlString, className){
        var $obj;

        htmlParsed = $.parseHTML(htmlString);
        for(i=0; i<htmlParsed.length; i++){
            if($(htmlParsed[i]).hasClass(className)){
                $obj = $(htmlParsed[i]);
                break;
            }
        }
        return $obj;
    }

    function getjQueryObjFromStr(htmlString, className){
        var $obj;

        htmlParsed = $.parseHTML(htmlString);
        for(i=0; i<htmlParsed.length; i++){
            if($(htmlParsed[i]).hasClass(className)){
                $obj = $(htmlParsed[i]);
                break;
            }
        }
        return $obj;
    }

    function showWaitingMessage(){

        $('.js-filter-waiting').show();
    }

    return {
        getjQueryObjFromStr: getjQueryObjFromStr,
        updateParamUrl: updateParamUrl,
        check: check,
        getjQueryObjFromStr: getjQueryObjFromStr,
        showWaitingMessage: showWaitingMessage,
    };

});
