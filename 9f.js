var f = new Object();

f.encode = function (str)
{
    str = str.replace('-', '-a');    
    str = str.replace('[', '-b');
    str = str.replace(']', '-c');
    str = str.replace('{', '-d');
    str = str.replace('}', '-e');
    str = str.replace("'", '-f');
    str = str.replace('"', '-g');
    str = str.replace(' ', '-h');
    str = str.replace(',', '-i');
    str = str.replace(':', '-j');

    return str
}

f.decode = function (str)
{
    str = str.replace('-a', '-');    
    str = str.replace('-b', '[');
    str = str.replace('-c', ']');
    str = str.replace('-d', '{');
    str = str.replace('-e', '}');
    str = str.replace('-f', "'");
    str = str.replace('-g', '"');
    str = str.replace('-h', ' ');
    str = str.replace('-i', ',');
    str = str.replace('-j', ':');

    return str
}

f.api = function (data, url, handle)
{
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.setRequestHeader('x-api', data);
    req.onreadystatechange = handle;
    req.send();
}
