- **f.encode(str)**

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

- **f.decode(str)**

    opposite of f.encode(str)
    
- **f.api(data, url, handle)**

    send data as a x-api header to the server url using cors. The handler returns the response
