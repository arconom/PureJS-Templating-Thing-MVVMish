/**
 * Creates a new client side storage object and will create an empty
 * collection if no collection already exists.
 *
 * @param {string} name The name of our IndexedDB we want to use
 * @param {function} callback Our fake IndexedDB uses callbacks because in
 * real life you probably would be making AJAX calls
 */
var Store = (function Store() {
    console.log("Store");

    function Constructor(name, callback) {
        callback = callback || function () { };
        this._dbName = name;
        this.localStorage = [];

        if (!this.localStorage[name]) {
            var data = { items: [], nextKey: 0 };
            this.localStorage[name] = JSON.stringify(data);
        }

        callback.call(this, JSON.parse(this.localStorage[name]));
    }

    /**
     * Add a new record to the store
     * @param {object} record is added to the store
     * @param {function} callback is executed once the record is added
     */
    function _insert(record, callback) {
        console.log("Store._insert");

        try {
            var data = JSON.parse(this.localStorage[this._dbName]);
            var items = data.items;

            items.push(record);

            this.localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, record);
            return true;
        } catch (e) {
            console.log("insert failed");
            console.log(e);
            return false;
        }
    };

    /**
     * Update the data identified by the given id.
     * @param {object} record is the updated data
     * @param {string} id identifies the data to update
     * @param {function} callback is executed once the update is complete
     */
    function _update(record, id, callback) {
        console.log("Store._update");

        try {
            var data = JSON.parse(this.localStorage[this._dbName]);
            var items = data.items;
            var i;

            // using for iterator because the collection is modified inside the loop
            for (i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    //not sure why I didn't do a simple assignment of the object rather than the properties
                    Object.keys(record).forEach(function (key) {
                        items[i][key] = record[key];
                    });
                    console.log("record updated");
                    break;
                }
            }

            this.localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, JSON.parse(this.localStorage[this._dbName]).items);
        } catch (e) {
            console.log("update failed");
            console.log(e);
        }
    };

    //add the common bits to the prototype.  Only do this once.
    Constructor.prototype.drop = function (callback) {
        console.log("Store.drop");
        this.localStorage[this._dbName] = JSON.stringify({
            items: []
        });
        callback.call(this, JSON.parse(this.localStorage[this._dbName]).items);
    };
    // I check the object store for a record with the given id
    // I return a boolean value indicating the result
    Constructor.prototype.exists = function (id) {
        console.log("Store.exists");
        console.log("id");
        console.log(id);

        var returnMe = false;

        this.find({
            id: id
        }, function (temp) {
            if (temp.length > 0) {
                returnMe = true;
            }
        });

        console.log("Store.exists returning");
        console.log(returnMe);
        return returnMe;
    };
    /**
     * Finds items based on a query given as a JS object
     *
     * @param {object} query The query to match against (i.e. {foo: 'bar'})
     * @param {function} callback	 The callback to fire when the query has
     * completed running
     *
     * @example
     * db.find({foo: 'bar', hello: 'world'}, function (data) {
     *	 // data will return any items that have foo: bar and
     *	 // hello: world in their properties
     * });
     */
    Constructor.prototype.find = function (query, callback) {
        console.log("Store.find");

        if (!callback) {
            return;
        }

        var items = JSON.parse(this.localStorage[this._dbName]).items;

        callback.call(this, items.filter(function (item) {
            Object.keys(query).forEach(function (key) {
                if (query[key] !== item[key]) {
                    console.log("Store.find returned false for query = ", query);
                    return false;
                }
            });
            console.log("Store.find returned true for query = ", query);
            return true;
        }));
    };
    /**
     * Will retrieve all data from the collection
     *
     * @param {function} callback The callback to fire upon retrieving data
     */
    Constructor.prototype.findAll = function (callback) {
        console.log("Store.findAll");
        callback = callback || function () { };
        callback.call(this, JSON.parse(this.localStorage[this._dbName]).items);
    };
    /**
     * Will retrieve all data from the collection
     *
     * @param {function} callback The callback to fire upon retrieving data
     */
    Constructor.prototype.findAllSerialised = function (callback) {
        console.log("Store.findAllSerialised");
        callback = callback || function () { };
        callback.call(this, this.localStorage[this._dbName]);
    };
    /**
     * Will remove an item from the Store based on its ID
     *
     * @param {number} id The ID of the item you want to remove
     * @param {function} callback The callback to fire after saving
     */
    Constructor.prototype.remove = function (id, callback) {
        console.log("Store.remove");
        var data = JSON.parse(this.localStorage[this._dbName]);
        var items = data.items;
        var i;

        for (i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items.splice(i, 1);
                break;
            }
        }

        this.localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, JSON.parse(this.localStorage[this._dbName]).items);
    };
    /**
     * Will save the given data to the IndexedDB. If no item exists it will create a new
     * item, otherwise it'll simply update an existing item's properties
     *
     * @param {object} updateData The data to save back into the IndexedDB
     * @param {function} callback The callback to fire after saving
     * @param {number} id An optional param to enter an ID of an item to update
     */
    Constructor.prototype.save = function (updateData, callback, id) {
        console.log("Store.save");
        var data = JSON.parse(this.localStorage[this._dbName]);

        callback = callback || function () { };

        // If an ID was actually given, find the item and update each property
        if (id) {
            // if the id already exists, update
            if (this.exists(id)) {
                this._update(updateData, id, callback);
            } else {
                updateData.id = id;
                this._insert(updateData, callback);
            }
        } else {
            // Generate an ID
            // todo make this not sometimes generate two of the same id when objects are saved quickly
            updateData.id = data.nextKey;
            data.nextKey += 1;
            this._insert(updateData, callback);
        }
    };
    /**
     * Will drop all storage and start fresh
     *
     * @param {function} callback The callback to fire after dropping the data
     */
    Constructor.prototype.sort = function (arg) {
        console.log("Store.sort");
        var items = JSON.parse(this.localStorage[this._dbName]).items;
        return items.sort(Helper.dynamicSort(arg));
    };

    return {
        getInstance: function (name, callback) {
            return new Constructor(name, callback);
        }
    }
})();