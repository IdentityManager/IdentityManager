if (window.top && window !== window.top) {
    var hash = window.location.hash;
    if (hash) {
        var idx = hash.indexOf("#");
        if (idx >= 0) {
            hash = hash.substr(idx + 1);
        }
        window.top.postMessage(hash, location.protocol + "//" + location.host);
    }
};
