function Models() {

    var returnMe = {},
        ds = DataService.getInstance();

    returnMe = {

        dataSourceSelector: {
            indexedDB: {
                available: ds.indexedBD ? true : false,
                keys: ds.indexedDB.getAllStores()
            },
            blob: {
                available: ds.blob ? true : false
            },
            webStorage: {
                available: ds.webStorage ? true : false
                keys: ds.indexedDB.getAllStores()
            },
            collection: {
                available: ds.collection ? true : false
                keys: ds.indexedDB.getAllStores()
            }
        },
        uiSelector:
        // This is a list of all the views that can be selected by the user to render their data.
        // I chose to use an array because giving each view a Selectable property was a bit more tedious
            [
            "dataBoundUIContainer",
            "uiSelector",
            "divList",
            "dataSourceSelector",
            "Help"
        ]
    };

    returnMe.dataSourceSelector.indexedDB.Keys = returnMe.dataSourceSelector.indexedDB.available ? indexedDB.getAllStores() : null
    returnMe.dataSourceSelector.collection.Keys = returnMe.dataSourceSelector.collection.available ? ds.collection.read(function(data) {
        returnMe.dataSourceSelector.collection.keys = data.keys;
    }) : null
    returnMe.dataSourceSelector.webStorage.Keys = returnMe.dataSourceSelector.webStorage.available ? webStorage.getAll() : null

    return returnMe;
};