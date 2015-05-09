##f.encode(str)
encodes str and returns the encoded value

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

##f.decode(str)
opposite of f.encode(str)
    
##f.api(data, url, success, error)
send data as a x-api header to the server using http-post. the response is sendt to the success callback. if the request fails, the error callback is called.

##f.loop(object,function)
modify every key and value of a object. a string is sendt to the function and the function should return a string.
example:

    f.loop({'a n g':"wor-ld"},f.encode)
    
would return
    
    {a-hn-hg:"wor-ald"}


##f.stringify(object)
convert object to json.
encodes characters using f.encode first.

##f.parse(string)
opposite of f.stringify

##CDN
You can use rawgit as a cdn using this url:

    https://cdn.rawgit.com/roypur/9f-js/master/min/9f-007.js
