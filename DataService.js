/*
* Determine which of the browser's persistent storage methods to use, 
* based on availability and preference
*/

var DataService = (function () {
    var instance;

    function init() {
        //todo not sure if I want to allow for different guids to be passed in,
        //because that would require instantiation.
        var indexedDB = IndexedDB.getInstance(),
        blob = BlobHandler.getInstance(),
        webStorage = WebStorage.getInstance(),
        collection = Collection.getInstance(
            Store.getInstance(Helper.generateGuid(), function () { console.log("store created"); }),
            Helper.generateGuid());

        //// Singleton
        //// Private methods and variables

        return {
            blob: blob ? blob : undefined,
            collection: collection ? collection : undefined,
            indexedDB: indexedDB ? indexedDB : undefined,
            webStorage: webStorage ? webStorage : undefined
        };
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();
