//@ sourceURL=hello.js
var LRUCache = function(cap) {
    var data = {},
        // rate -> key
        rate = {},
        // key -> rate
        r_rate = {},
        curRate = 0,
        counter = 0,
        offset = 0;
    
    this.set = function(key, value) {
        data[key] = value;
        
        // if exist already
        // and not the latest one
        if (r_rate[key] !== undefined && rate[curRate - 1] != key) {
            delete rate[r_rate[key]];
            r_rate[key] = curRate;
            rate[curRate] = key;
            ++curRate;
            ++offset
        } else {
            ++counter;
            // starts from 1.
            rate[curRate] = key;
            r_rate[key] = curRate;
            if (counter > cap) {
                // remove the least recently used one
                while (!rate[curRate - cap - offset]) {
                    --offset;
                }
                delete data[rate[curRate - cap - offset]];
                delete r_rate[rate[curRate - cap - offset]];
                delete rate[curRate - cap - offset];
            }
            ++curRate;
        }
    };
    
    this.get = function(key) {
        
        if (!data[key]) return -1;
        
        // not the latest one
        if (rate[curRate - 1] != key) {
            delete rate[r_rate[key]];
            r_rate[key] = curRate;
            rate[curRate] = key;
            ++curRate;
            ++offset;
        }
        
        return data[key];
    };
}