var f = new Object();
    
f.encode = function (str)
{
    if(typeof(str)=="string")
    {
        function rep(x,y) {
            return str.replace(x,y);   
        }

        str = rep(/-/g, '-a');
        str = rep(/\[/g, '-b');
        str = rep(/\]/g, '-c');
        str = rep(/{/g, '-d');
        str = rep(/}/g, '-e');
        str = rep(/'/g, '-f');
        str = rep(/"/g, '-g');
        str = rep(/ /g, '-h');
        str = rep(/,/g, '-i');
        str = rep(/:/g, '-j');
    }    
    return str;
}

f.decode = function (str)
{
    if(typeof(str)=="string")
    {
        function rep(x,y) {
            return str.replace(x,y);   
        }
        str = rep(/-b/g, '[');
        str = rep(/-c/g, ']');
        str = rep(/-d/g, '{');
        str = rep(/-e/g, '}');
        str = rep(/-f/g, "'");
        str = rep(/-g/g, '"');
        str = rep(/-h/g, ' ');
        str = rep(/-i/g, ',');
        str = rep(/-j/g, ':');
        str = rep(/-a/g, '-');
    }
    return str;
}

f.api = function (data, url, success, error)
{
    
    var i = 0;
    request();
    function request()
    {
        if(typeof(url)=="object")
        {
            if(i >= url.length)
            {
                error();
                requestUrl = undefined;
            }
            else
            {
                requestUrl = url[i];
            }
        }
        else
        {
            requestUrl = url;
        }
        if(typeof(requestUrl)=="string")
        {
            var req = new XMLHttpRequest();
            req.open('POST', requestUrl, true);
            req.setRequestHeader('x-api', data);
            req.addEventListener("load", function(){success(req.responseText,req.responseUrl)}, false);
            req.addEventListener("error", request, false);
            req.addEventListener("timeout", request, false);
            req.timeout = 500;
            req.send();
            i++;
        }
    }
}

f.loop = function(obj,func)
{
    if(Array.isArray(obj))
    {
        for(var i=0;i<obj.length;i++)
        {
            if(typeof(obj[i])=="object")
            {
                obj[i]=f.loop(obj[i],func);
            }
            else
            {
                obj[i]=func(obj[i]);
            }
        }
    }
    else if(typeof(obj)=="object")
    {
        for (var key in obj)
        {
            if(obj.hasOwnProperty(key))
            {
                if(typeof(obj[key])=="object")
                {
                    nkey=func(key);
                    obj[nkey]=f.loop(obj[key],func);
                    if(key!=nkey)
                    {
                        delete obj[key];
                    }
                }
                else
                {
                    nkey=func(key);
                    obj[nkey] = func(obj[key]);
                    if(key!=nkey)
                    {
                        delete obj[key];
                    }
                }
            }
        }
    }
    return obj;
}

f.stringify = function(data)
{
    var str = JSON.stringify(f.loop(data,f.encode));
    return str;
}
f.parse = function(text)
{
    var data = f.loop(JSON.parse(text),f.decode);
    return data;
}
