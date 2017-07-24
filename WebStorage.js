/*property
    Available, Get, GetAll, forEach, getItem, keys, log, prototype, removeItem,
    setItem
*/

var WebStorage = (function () {
    var instance;

    function init() {

        //added this variable to store which type of storage we are currently using
        //it persists until WebStorage.local or WebStorage.session is called
        //this is done to support chaining
        var _store = null;

        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _getPrefix(name) {
            return "WebStorage[" + _store + "]." + name;
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _checkResult(key, result, callback) {
            if (!!result) {
                return callback(result) || result;
            }
            else {
                console.log("WebStorage query returned 0 results", key);
                return {};
            }
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _setupEventListener() {
            window.addEventListener('storage', function (e) {
                /*
                    e.key             
                    Represents the key changed. 
                    The key attribute is null when the change is caused by the storage clear() method. 
                    Read only.
    
                    e.oldValue        
                    The original value of the key. 
                    The oldValue is null when the change has been invoked by storage clear() method 
                    or the key has been newly added and therefor doesn't have any previous value. 
                    Read only.
    
                    e.newValue        
                    The new value of the key. 
                    The newValue is null when the change has been invoked by storage clear() method 
                    or the key has been removed from the storage. 
                    Read only.
    
                    e.url     	    
                    The URL of the document whose key changed. 
                    Read only.
    
                    e.storageArea     
                    Represents the Storage object that was affected. 
                    Read only.
                */

                if (e.key == null) {
                    // clear
                    PubSub.PublishAsync(_getPrefix("Drop"), null);
                }
                else {
                    if (e.newValue == null) {
                        // delete 
                        PubSub.PublishAsync(_getPrefix("Remove"), null);
                    }
                    else if (e.oldValue == null) {
                        // add
                        PubSub.PublishAsync(_getPrefix("Add"), null);
                    }
                    else {
                        // update
                        PubSub.PublishAsync(_getPrefix("Update"), null);
                    }
                }
            });
        }
        /**
         * Determine if local or session storage is usable in the current environment
         * @param {string} type is either "localStorage" or "sessionStorage"
         * @returns {bool} true if the storage type is supported by the browser, false otherwise
        */
        function _available(type) {
            try {
                var storage = window[type],
                    x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
            }
            catch (e) {
                return false;
            }
        }

        return _available("localstorage") ? {

            //storage types
            /**
             * return a reference to local storage if it is available
             * 
             * @returns {object} localStorage
            */
            local: function () {
                _store = "localStorage";
                return _available.apply(this, _store) ? this : null;
            },
            /**
             * return a reference to session storage if it is available
             * 
             * @param {} 
             * @returns {object} sessionStorage
            */
            session: function () {
                this._store = "sessionStorage";
                return _available.apply(this, this._store) ? this : null;
            },

            //ops
            /**
             * Clears the current store
             * @param {function} callback runs after completion or failure, must take one boolean parameter
             * @returns {object} self reference
            */
            clear: function (callback) {
                try {
                    window[_store].clear();
                    callback(true);
                }
                catch (e) {
                    console.log("Failed to clear data from WebStorage", _store);
                    console.log("Error", e);
                    callback(false);
                }
                finally {
                    return this;
                }
            },
            /**
             * Gets the specified object from the current store
             * @param {string} key identifies the object to retrieve 
             * @returns {} 
            */
            get: function (key, callback) {
                return _checkResult(key, window[_store].getItem(key), callback);
            },
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            getAll: function (callback) {
                try {
                    var returnMe = Object.keys(window[this._store]).forEach(function (v) { return v; });
                }
                catch (e) {
                    console.log("Error during data retrieval", e);
                    return {};
                }

                return _checkResult(key, returnMe, callback);
            },
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            remove: function (key, callback) {
                try {
                    window[this._store].removeItem(key);
                    callback(true, key);
                }
                catch (e) {
                    console.log("Failed to remove data from WebStorage", key);
                    console.log("Error", e);
                    callback(false, key);
                }
            },
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            set: function (key, data, callback) {
                try {
                    window[this._store].setItem(key, data);
                    callback(true, key, data);
                }
                catch (e) {
                    console.log("Failed to store data in WebStorage", key, data);
                    console.log("Error", e);
                    callback(false, key, data);
                }
            },
        } : null;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();


/*

function WebStorage(type)
{
    var that = this;
    var storage = that.Available(type) ? window[type] : false;
    if (!storage)
    {
        console.log("Web Storage not available.");
    }
}
// type is either "localStorage" or "sessionStorage"
Available = function (type)
{
    var that = this;
    if (!type)
    {
        return that.Available("localStorage");
    }
    try
    {
        var storage = window[type],
			x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e)
    {
        return false;
    }
};
Get = function (item)
{
    var returnMe = storage.getItem(item);
    if (!!returnMe)
    {
        return returnMe;
    }
    else
    {
        console.log("WebStorage query returned 0 results", item);
        return {};
    }
};
GetAll = function ()
{
    try
    {
        var returnMe = Object.keys(storage).forEach(function(v) { return v; });
    }
    catch (e)
    {
        console.log("WebStorage query returned 0 results", e);
        return {};
    }
};
Set = function (key, data)
{
    try
    {
        storage.setItem(key, data);
    }
    catch (e)
    {
        console.log("Failed to store data in WebStorage", item);
        console.log("Error", e);
    }
};
Remove = function (key)
{
    try
    {
        storage.removeItem(key);
    }
    catch (e)
    {
        console.log("Failed to remove data from WebStorage", key);
        console.log("Error", e);
    }
};
Clear = function ()
{
    try
    {
        storage.clear();
    }
    catch (e)
    {
        console.log("Failed to clear data from WebStorage", key);
        console.log("Error", e);
    }
};
// demo
// this demos the StorageEvent functionality
//window.addEventListener('storage', function (e)
//{
//    document.querySelector('.my-key').textContent = e.key;
//    document.querySelector('.my-old').textContent = e.oldValue;
//    document.querySelector('.my-new').textContent = e.newValue;
//    document.querySelector('.my-url').textContent = e.url;
//    document.querySelector('.my-storage').textContent = e.storageArea;
//});

*/