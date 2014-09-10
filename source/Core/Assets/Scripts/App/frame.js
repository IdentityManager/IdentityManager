if (window.top && window !== window.top) {
    var hash = window.location.hash;
    if (hash) {
        window.top.postMessage(hash, location.protocol + "//" + location.host);
    }
};
