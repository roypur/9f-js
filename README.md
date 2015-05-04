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
    
##f.api(data, url, handle)
send data as a x-api header to the server using http-post. The handler returns the response
    
##CDN
You can use rawgit as a cdn using this url:

    https://cdn.rawgit.com/roypur/9f-js/master/9f-002.js
