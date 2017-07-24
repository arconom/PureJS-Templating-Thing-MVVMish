/*
todo perhaps make the functions take a transaction object

transaction =
{
    targetDatabase: "",
data: {},
op: "insert/update/delete/load/query",
callbacks: []
}
*/

var IndexedDB = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {

        // Singleton
        // Private methods and variables
        // item isn't needed it's just there to make the signature match the parameters sent to _execNextCallback
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _clear(db, item, name, callbacks) {
            console.log("IndexedDB._clear");
            var that = this;
            var transaction = that._getTransaction(db, name, "readwrite");
            var request = transaction.objectStore(name).clear();

            db.onerror = function () {
                // an object store probably didn't exist
                // create the object store
                that.transaction(name, undefined, undefined);
                db.transaction([name], undefined);
            };

            transaction.onerror = function () {
                console.log("error clearing object store");
                console.log(name);
            };
            transaction.oncomplete = function () { };

            request.onsuccess = function (event) {
                console.log("Object store: " + name + " cleared.");
                var db2 = event.target.result || db;

                _execNextCallback(db2, item, name, callbacks);

                db2.onerror = function (event) {
                    console.log("Database error: " + event.target.errorCode);
                };
            };

            request.onerror = function () {
                console.log("error clearing object store");
                console.log(name);
            };
        };
        // todo somehow make a way to determine which columns to use as indices
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _createStore(db, name) {
            console.log("IndexedDB._createStore");
            db.createObjectStore(name, { "keyPath": "id" });
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _delete(db, id, name, callbacks) {
            console.log("IndexedDB._delete");
            var that = this;
            var transaction = that._getTransaction(db, name, "readwrite");
            var request = transaction.objectStore(name).delete(id);

            transaction.oncomplete = function () { },

            request.onsuccess = function (event) {
                console.log("item deleted from object store:  " + name + " id:  " + id);
                var db2 = event.target.result;

                _execNextCallback(db2, { id: id }, name, callbacks);

                db2.onerror = function (event) {
                    console.log("Database error: " + event.target.errorCode);
                };
            };
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _insert(db, item, name, callbacks) {
            console.log("IndexedDB._insert");
            var that = this;
            var transaction = that._getTransaction(db, name, "readwrite");
            var request = transaction.objectStore(name).add(item);

            db.onerror = function (event) {
                console.log("Database error: " + event.target.errorCode);
            };

            transaction.oncomplete = function () {
                console.log("insert transaction.oncomplete");
            };

            transaction.onerror = function () {
                console.log("insert transaction.onerror");
                _insert(event.target.result, item, name);
            };

            transaction.onupgradeneeded = function () {
                console.log("insert transaction.onupgradeneeded");
                that._createStore(event.target.result, name);
                _insert(event.target.result, item, name);
            };

            request.onsuccess = function (event) {
                console.log("insert request.onsuccess");
                var db2 = event.target.result;

                _execNextCallback(db2, item, name, callbacks);

                db2.onerror = function (event) {
                    console.log("insert db.onerror: " + event.target.errorCode);
                };
            };
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _update(db, item, name, callbacks) {
            console.log("IndexedDB._update");
            var that = this;
            var transaction = that._getTransaction(db, name, "readwrite");
            var request = transaction.objectStore(name).put(item);

            db.onerror = function (event) {
                console.log("update db.onerror: " + event.target.errorCode);
            };

            transaction.oncomplete = function () {
                console.log("update transaction.oncomplete");
            };

            transaction.onerror = function () {
                console.log("update transaction.onerror");
                _update(event.target.result, item, name);
            };

            transaction.onupgradeneeded = function () {
                console.log("update transaction.onupgradeneeded");
                _createStore(event.target.result, name);
                _update(event.target.result, item, name);
            };

            request.onsuccess = function (event) {
                console.log("item updated in object store");
                var db2 = event.target.result;

                _execNextCallback(db2, item, name, callbacks);

                db2.onerror = function (event) {
                    console.log("Database error: " + event.target.errorCode);
                };
            };
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _read(db, item, name, callbacks) {
            var transaction = that._getTransaction(db, name, "readwrite");
            var request = transaction.objectStore(name).add(item);

            db.onerror = function (event) {
                console.log("Database error: " + event.target.errorCode);
            };

            transaction.oncomplete = function () {
                console.log("insert transaction.oncomplete");
            };

            transaction.onerror = function () {
                console.log("read transaction.onerror");
                _read(event.target.result, item, name);
            };

            transaction.onupgradeneeded = function () {
                console.log("read transaction.onupgradeneeded");
                _createStore(event.target.result, name);
                _read(event.target.result, item, name);
            };

            request.onsuccess = function (event) {
                console.log("insert request.onsuccess");
                var db2 = event.target.result;

                _execNextCallback(db2, item, name, callbacks);

                db2.onerror = function (event) {
                    console.log("insert db.onerror: " + event.target.errorCode);
                };
            };
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _getTransaction(db, targetStores, mode) {
            console.log("IndexedDB._getTransaction");
            var that = this;

            try {
                var returnMe = db.transaction(targetStores, mode);

                db.onerror = function () {
                    // an object store probably didn't exist
                    // create the object store
                    transaction(targetStores, undefined, undefined);
                    returnMe = db.transaction(targetStores, mode);
                };

                return returnMe;
            }
            catch (e) {
                console.log("can't open object store ", e);
            }
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _openDatabase(targetDatabase, targetStores, item, callbacks) {
            console.log("IndexedDB.Transaction");

            var that = this;
            var request = window.indexedDB.open(targetDatabase, 1);

            // Gecko-only IndexedDB temp storage option:
            // var request = window.indexedDB.open("toDoList", {version: 4, storage: "temporary"});

            // these two event callbacks act on the database being opened successfully, or not
            request.onerror = function () {
                console.log("Error opening IndexedDB");
            };

            request.onsuccess = function (event) {
                var db = event.target.result;

                execNextCallback(db, item, targetStores, callbacks);

                db.onerror = function (event) {
                    console.log("Database error: " + event.target.errorCode);
                };
            };

            // This event creates a new object store
            // Either one has not been created before, or a new version number has been submitted via the
            // window.indexedDB.open line above  it is only implemented in recent browsers
            request.onupgradeneeded = function (event) {
                console.log("request.onupgradeneeded");
                _createStore(event.target.result, targetStores);
            };
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _execNextCallback(db, item, name, callbacks) {
            console.log("IndexedDB._execNextCallback");

            if (callbacks.length > 0) {
                // don't remember why I created another list of callbacks here.
                var newCallbacks = callbacks;
                var execMe = newCallbacks.shift();
                execMe(db, item, name, newCallbacks);
            }
        }
        /**
         * 
         * @param {} 
         * @returns {} 
        */
        function _available() {
            console.log("IndexedDB.Available");
            // In the following line, you should include the prefixes of implementations you want to test.
            window.indexedDB = window.indexedDB || window.mozIndexedIndexedDB || window.webkitIndexedIndexedDB || window.msIndexedIndexedDB;
            // DON'T use "var indexedDB = ..." if you're not in a function.
            // Moreover, you may need references to some window.IIndexedDB* objects:
            window.IIndexedDBTransaction = window.IIndexedDBTransaction || window.webkitIIndexedDBTransaction || window.msIIndexedDBTransaction;
            window.IIndexedDBKeyRange = window.IIndexedDBKeyRange || window.webkitIIndexedDBKeyRange || window.msIIndexedDBKeyRange;
            // (Mozilla has never prefixed these objects, so we don't need window.mozIIndexedDB*)

            if (!window.indexedDB) {
                console.log("Indexed IndexedDB not supported");
                return false;
            }
            else {
                return true;
            }
        }

        return _available() ? {
            // Public methods and variables
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            clear: function (name, callbacks) {
                console.log("IndexedDB.Clear");

                var that = this;
                callbacks.unshift(that._clear);
                that.transaction(name, undefined, callbacks);
            },
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            getAllFromStore: function (name, callback) {
                console.log("IndexedDB.GetAll");
                var request = window.indexedDB.open(name, 1);

                request.onsuccess = function (event) {
                    var db = event.target.result;

                    try {
                        var objectStore = db.transaction(name).objectStore(name);

                        objectStore.openCursor().onsuccess = function (event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                callback(cursor.value);
                                cursor.continue();
                            }
                            else {
                                console.log("Finished loading");
                            }
                        };
                    }
                    catch (e) {
                        alert("Invalid store selection");
                        console.log(e);
                    }
                };
            },
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            getAllStores: function () {
                console.log("IndexedDB.GetAllStores");

                var that = this;
                return that.objectStoreNames;
            },
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            getItemById: function (id, name, callback) {
                console.log("IndexedDB.GetItemById");
                var request = window.indexedDB.open(name, 1);

                request.onsuccess = function (event) {
                    var db = event.target.result;

                    db.transaction(name).objectStore(name).get(id).onsuccess = function (event) {
                        //returnMe = event.target.result;
                        callback(event.target.result);
                    };
                };
            },
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            insert: function (name, item, callbacks) {
                console.log("IndexedDB.Insert");
                var that = this;

                // Add the insert logic to the front of the array
                callbacks.unshift(_insert);
                _getTransaction(name, item, callbacks);
            },
            // todo might need to read id as a parameter and reintegrate the _delete function with this one
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            remove: function (name, callbacks) {
                console.log("IndexedDB.Delete");
                var that = this;

                callbacks.unshift(that._delete);
                that._transaction(name, undefined, callbacks);
            },
            // callbacks is an array of callbacks that should be executed in order
            /**
             * 
             * @param {} 
             * @returns {} 
            */
            update: function (name, item, callbacks) {
                console.log("IndexedDB.Update");
                var that = this;

                // Add the insert logic to the front of the array to send to
                callbacks.unshift(that._update);
                that.transaction(name, item, callbacks);
            }
        } : null;
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };

    //return {
    //
    //    // Get the Singleton instance if one exists
    //    // or create one if it doesn't
    //    getInstance: function () {
    //        if (!instance) {
    //            instance = init();
    //        }
    //        return instance;
    //    }
    //};
})();


//old version

//var IndexedDB =
//{
//    GetAllStores: function ()
//    {
//        console.log("IndexedDB.GetAllStores");
//
//        var that = this;
//        return that.objectStoreNames;
//    },
//
//    // public
//
//    Available: function ()
//    {
//        console.log("IndexedDB.Available");
//        // In the following line, you should include the prefixes of implementations you want to test.
//        window.indexedDB = window.indexedDB || window.mozIndexedIndexedDB || window.webkitIndexedIndexedDB || window.msIndexedIndexedDB;
//        // DON'T use "var indexedDB = ..." if you're not in a function.
//        // Moreover, you may need references to some window.IIndexedDB* objects:
//        window.IIndexedDBTransaction = window.IIndexedDBTransaction || window.webkitIIndexedDBTransaction || window.msIIndexedDBTransaction;
//        window.IIndexedDBKeyRange = window.IIndexedDBKeyRange || window.webkitIIndexedDBKeyRange || window.msIIndexedDBKeyRange;
//        // (Mozilla has never prefixed these objects, so we don't need window.mozIIndexedDB*)
//
//        if (!window.indexedDB)
//        {
//            console.log("Indexed IndexedDB not supported");
//            return false;
//        }
//        else
//        {
//            return true;
//        }
//    },
//    Clear: function (name, callbacks)
//    {
//        console.log("IndexedDB.Clear");
//
//        var that = this;
//        callbacks.unshift(that._clear);
//        that.transaction(name, undefined, callbacks);
//    },
//    // todo might need to read id as a parameter and reintegrate the _delete function with this one
//    Delete: function (name, callbacks)
//    {
//        console.log("IndexedDB.Delete");
//        var that = this;
//
//        callbacks.unshift(that._delete);
//        that._transaction(name, undefined, callbacks);
//    },
//    GetAllFromStore: function (name, callback)
//    {
//        console.log("IndexedDB.GetAll");
//        var request = window.indexedDB.open(name, 1);
//
//        request.onsuccess = function (event)
//        {
//            var db = event.target.result;
//
//            try
//            {
//                var objectStore = db.transaction(name).objectStore(name);
//
//                objectStore.openCursor().onsuccess = function (event)
//                {
//                    var cursor = event.target.result;
//                    if (cursor)
//                    {
//                        callback(cursor.value);
//                        cursor.continue();
//                    }
//                    else
//                    {
//                        console.log("Finished loading");
//                    }
//                };
//            }
//            catch (e)
//            {
//                alert("Invalid store selection");
//                console.log(e);
//            }
//        };
//    },
//    GetItemById: function (id, name)
//    {
//        console.log("IndexedDB.Get");
//        var request = window.indexedDB.open(name, 1);
//        var returnMe = {};
//
//        request.onsuccess = function (event)
//        {
//            var db = event.target.result;
//
//            db.transaction(name).objectStore(name).get(id).onsuccess = function (event)
//            {
//                returnMe = event.target.result;
//            };
//        };
//        return returnMe;
//    },
//    Insert: function (name, item, callbacks)
//    {
//        console.log("IndexedDB.Insert");
//        var that = this;
//
//        // Add the insert logic to the front of the array to send to
//        callbacks.unshift(_insert);
//        that._transaction(name, item, callbacks);
//    },
//    // callbacks is an array of callbacks that should be executed in order
//    Update: function (name, item, callbacks)
//    {
//        console.log("IndexedDB.Update");
//        var that = this;
//
//        // Add the insert logic to the front of the array to send to
//        callbacks.unshift(that._update);
//        that.transaction(name, item, callbacks);
//    },
//
//    // end public
//
//    // private
//
//    // item isn't needed it's just there to make the signature match the parameters sent to _execNextCallback
//    _clear: function (db, item, name, callbacks)
//    {
//        console.log("IndexedDB._clear");
//        var that = this;
//        var transaction = that._getTransaction(db, name, "readwrite");
//        var request = transaction.objectStore(name).clear();
//
//        db.onerror = function ()
//        {
//            // an object store probably didn't exist
//            // create the object store
//            that.transaction(name, undefined, undefined);
//            db.transaction([name], undefined);
//        };
//
//        transaction.onerror = function ()
//        {
//            console.log("error clearing object store");
//            console.log(name);
//        };
//        transaction.oncomplete = function () { };
//
//        request.onsuccess = function (event)
//        {
//            console.log("Object store: " + name + " cleared.");
//            var db2 = event.target.result || db;
//
//            _execNextCallback(db2, item, name, callbacks);
//
//            db2.onerror = function (event)
//            {
//                console.log("Database error: " + event.target.errorCode);
//            };
//        };
//
//        request.onerror = function ()
//        {
//            console.log("error clearing object store");
//            console.log(name);
//        };
//    },
//
//    // todo somehow make a way to determine which columns to use as indices
//    _createStore: function (db, name)
//    {
//        console.log("IndexedDB._createStore");
//        db.createObjectStore(name, { "keyPath": "id" });
//    },
//    _delete: function (db, id, name, callbacks)
//    {
//        console.log("IndexedDB._delete");
//        var that = this;
//        var transaction = that._getTransaction(db, name, "readwrite");
//        var request = transaction.objectStore(name).delete(id);
//
//        transaction.oncomplete = function () { },
//
//        request.onsuccess = function (event)
//        {
//            console.log("item deleted from object store:  " + name + " id:  " + id);
//            var db2 = event.target.result;
//
//            _execNextCallback(db2, { id: id }, name, callbacks);
//
//            db2.onerror = function (event)
//            {
//                console.log("Database error: " + event.target.errorCode);
//            };
//        };
//    },
//    _execNextCallback: function (db, item, name, callbacks)
//    {
//        console.log("IndexedDB._execNextCallback");
//
//        if (callbacks.length > 0)
//        {
//            // don't remember why I created another list of callbacks here.
//            var newCallbacks = callbacks;
//            var execMe = newCallbacks.shift();
//            execMe(db, item, name, newCallbacks);
//        }
//    },
//    _getTransaction: function (db, name, type)
//    {
//        console.log("IndexedDB._getTransaction");
//        var that = this;
//
//        try
//        {
//            var returnMe = db.transaction([name], type);
//
//            db.onerror = function ()
//            {
//                // an object store probably didn't exist
//                // create the object store
//                that.transaction(name, undefined, undefined);
//                returnMe = db.transaction([name], type);
//            };
//
//            return returnMe;
//        }
//        catch (e)
//        {
//            console.log("can't open object store ", e);
//        }
//    },
//    _insert: function (db, item, name, callbacks)
//    {
//        console.log("IndexedDB._insert");
//        var that = this;
//        var transaction = that._getTransaction(db, name, "readwrite");
//        var request = transaction.objectStore(name).add(item);
//
//        db.onerror = function (event)
//        {
//            console.log("Database error: " + event.target.errorCode);
//        };
//
//        transaction.oncomplete = function ()
//        {
//            console.log("insert transaction.oncomplete");
//        };
//
//        transaction.onerror = function ()
//        {
//            console.log("insert transaction.onerror");
//            _insert(event.target.result, item, name);
//        };
//
//        transaction.onupgradeneeded = function ()
//        {
//            console.log("insert transaction.onupgradeneeded");
//            that._createStore(event.target.result, name);
//            _insert(event.target.result, item, name);
//        };
//
//        request.onsuccess = function (event)
//        {
//            console.log("insert request.onsuccess");
//            var db2 = event.target.result;
//
//            _execNextCallback(db2, item, name, callbacks);
//
//            db2.onerror = function (event)
//            {
//                console.log("insert db.onerror: " + event.target.errorCode);
//            };
//        };
//    },
//    _Transaction: function (name, item, callbacks)
//    {
//        console.log("IndexedDB.Transaction");
//
//        var that = this;
//        var request = window.indexedDB.open(name, 1);
//
//        // Gecko-only IndexedDB temp storage option:
//        // var request = window.indexedDB.open("toDoList", {version: 4, storage: "temporary"});
//
//        // these two event callbacks act on the database being opened successfully, or not
//        request.onerror = function ()
//        {
//            console.log("Error opening IndexedDB");
//        };
//
//        request.onsuccess = function (event)
//        {
//            var db = event.target.result;
//
//            that._execNextCallback(db, item, name, callbacks);
//
//            db.onerror = function (event)
//            {
//                console.log("Database error: " + event.target.errorCode);
//            };
//        };
//
//        // This event creates a new object store
//        // Either one has not been created before, or a new version number has been submitted via the
//        // window.indexedDB.open line above  it is only implemented in recent browsers
//        request.onupgradeneeded = function (event)
//        {
//            console.log("request.onupgradeneeded");
//            that._createStore(event.target.result, name);
//        };
//    },
//
//    // todo maybe make the eventhandlers parameters
//    _update: function (db, item, name, callbacks)
//    {
//        console.log("IndexedDB._update");
//        var that = this;
//        var transaction = that._getTransaction(db, name, "readwrite");
//        var request = transaction.objectStore(name).put(item);
//
//        db.onerror = function (event)
//        {
//            console.log("update db.onerror: " + event.target.errorCode);
//        };
//
//        transaction.oncomplete = function ()
//        {
//            console.log("update transaction.oncomplete");
//        };
//
//        transaction.onerror = function ()
//        {
//            console.log("update transaction.onerror");
//            that._update(event.target.result, item, name);
//        };
//
//        transaction.onupgradeneeded = function ()
//        {
//            console.log("update transaction.onupgradeneeded");
//            that._createStore(event.target.result, name);
//            that._update(event.target.result, item, name);
//        };
//
//        request.onsuccess = function (event)
//        {
//            console.log("item updated in object store");
//            var db2 = event.target.result;
//
//            _execNextCallback(db2, item, name, callbacks);
//
//            db2.onerror = function (event)
//            {
//                console.log("Database error: " + event.target.errorCode);
//            };
//        };
//    }
//
//    // end private
//}
//