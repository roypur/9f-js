var f = new Object();
    
f.encode = function (str)
{
    function rep(x,y) {
        return str.replace(x,y);   
    }
    
    str = rep('-', '-a');
    str = rep('[', '-b');
    str = rep(']', '-c');
    str = rep('{', '-d');
    str = rep('}', '-e');
    str = rep("'", '-f');
    str = rep('"', '-g');
    str = rep(' ', '-h');
    str = rep(',', '-i');
    str = rep(':', '-j');

    return str
}

f.decode = function (str)
{
    function rep(x,y) {
        return str.replace(x,y);   
    }
    
    str = rep('-a', '-');    
    str = rep('-b', '[');
    str = rep('-c', ']');
    str = rep('-d', '{');
    str = rep('-e', '}');
    str = rep('-f', "'");
    str = rep('-g', '"');
    str = rep('-h', ' ');
    str = rep('-i', ',');
    str = rep('-j', ':');

    return str
}

f.api = function (data, url, handle)
{
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.setRequestHeader('x-api', data);
    req.onreadystatechange = function(ret){handle(ret)};
    req.send();
}
