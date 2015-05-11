##f.encode(str)
Encodes str and returns the encoded value

        - => -a
        [ => -b
        ] => -c
        { => -d
        } => -e
        ' => -f
        " => -g
    space => -h
        , => -i
        : => -j
       \n => -k
       \r => -l
       \t => -m

##f.decode(str)
Opposite of f.encode(str)
    
##f.api(data, Array[url1,url2..], success, error)
Send data as a x-api header to the server using http-post. The (responseText,responseUrl) is sendt to the success callback. If all of request fails, the error callback is called.

If you provide multiple urls, it will stop after the first successful request.


##f.loop(object,function)
Modify every key and value of a object. The value is sendt to the function and should return the modified variable.
Example:

    f.loop({'h e l l o':["w","o","r","l","d"]},f.encode)
    
would return
    
    {h-he-hl-hl-ho:["w","o","r","l","d"]}


##f.stringify(object)
Convert object to json.
Encodes characters using f.encode first.

##f.parse(string)
Opposite of f.stringify

##CDN
You can use rawgit as a cdn using this url:

    https://cdn.rawgit.com/roypur/9f-js/master/min/9f-010.js
