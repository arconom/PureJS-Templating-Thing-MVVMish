/**
 * Creates a new Collection instance and hooks up the storage.
 *
 * @Constructor
 * @param {object} storage A reference to the client side storage class
 * @param {object} guid Identifies the collection
 */
var Collection = (function () {

    function Constructor(storage, guid) {
        this.storage = storage;
        this.guid = guid;
        this.prefix = Helper.GetModelPrefix(guid);
    }

    //add the common bits to the prototype.  Only do this once.
    /**
     * Creates a new item model
     *
     * @param {string} [title] The title of the task
     * @param {function} [callback] The callback to fire after the model is created
     */
    Constructor.prototype.create = function (item, callback) {
        console.log("Collection.create");

        item = item || {};
        callback = callback || function () { };

        //doing this to allow importing of items that already have ids
        if (this.storage.exists(item.id)) {
            console.log("found a duplicate record when trying to insert.  Ignoring the given id");
            this.storage.save(item, callback);
        } else {
            this.storage.save(item, callback, item.id);
        }

        //PubSub.PublishAsync(this.prefix + "Insert", model);
    };
    /**
 * WARNING: Will remove ALL data from storage.
 *
 * @param {function} callback The callback to fire when the storage is wiped.
 */
    Constructor.prototype.drop = function (callback) {
        console.log("Collection.removeAll");
        this.storage.drop(callback);
        //PubSub.PublishAsync(this.prefix + "Drop", null);
    };
    /**
     * Returns a count of all items
     */
    Constructor.prototype.getCount = function (callback) {
        console.log("Collection.getCount");
        var items = {
            checked: 0,
            total: 0
        };

        this.storage.findAll(function (data) {
            data.forEach(function (item) {
                if (item.checked) {
                    items.checked += 1;
                }
                items.total += 1;
            });
            callback(items);
        });
    };
    /*
    I return the serialised version of the current object store
    */
    Constructor.prototype.getSerialisedData = function (callback) {
        console.log("Collection.getSerialisedData");
        callback = callback || function () { };
        return this.storage.findAllSerialised(callback);
        ////PubSub.PublishAsync(this.prefix + "ReadSerialised", pubData);
    };
    /**
     * Finds and returns a model in storage. If no query is given it'll simply
     * return everything. If you pass in a string or number it'll look that up as
     * the ID of the model to find. Lastly, you can pass it an object to match
     * against.
     *
     * @param {string|number|object} [query] A query to match models against
     * @param {function} [callback] The callback to fire after the model is found
     *
     * @example
     * model.read(1, func); // Will find the model with an ID of 1
     * model.read('1'); // Same as above
     * //Below will find a model with foo equalling bar and hello equalling world.
     * model.read({ foo: 'bar', hello: 'world' });
     */
    Constructor.prototype.read = function (query, callback) {
        console.log("Collection.read");
        var queryType = typeof query;
        callback = callback || function () { };
        var pubData;

        if (queryType === 'function') {
            callback = query;
            return this.storage.findAll(callback);
        } else if (queryType === 'string' || queryType === 'number') {
            this.storage.find({
                id: query
            },
            callback);
            //function (data) {
            //    if (data) {
            //        data.forEach(function (item) {
            //            pubData.push(item);
            //        });
            //    }
            //});
        } else {
            this.storage.find(query, callback);
        }

        ////PubSub.PublishAsync(this.prefix + "Read", pubData);
    };
    /**
     * Removes a model from storage
     *
     * @param {number} id The ID of the model to remove
     * @param {function} callback The callback to fire when the removal is complete.
     */
    Constructor.prototype.remove = function (id, callback) {
        console.log("Collection.remove");
        this.storage.remove(id, callback || null);
        //PubSub.PublishAsync(this.prefix + "Delete", id);
    };
    /**
    *
    */
    Constructor.prototype.sort = function (arg, callback) {
        console.log("Collection.sort");
        callback(this.storage.sort(arg));
        //PubSub.PublishAsync(this.prefix + "Read", this.storage.sort(arg));
    };
    /**
     * Updates a model by giving it an ID, data to update, and a callback to fire when
     * the update is complete.
     *
     * @param {number} id The id of the model to update
     * @param {object} data The properties to update and their new value
     * @param {function} callback The callback to fire when the update is complete.
     */
    Constructor.prototype.update = function (id, data, callback) {
        console.log("Collection.update");
        this.storage.save(data, callback, id);
        //PubSub.PublishAsync(this.prefix + "Update", data);
    };



    return {
        /**
        * Returns an instance of a Collection, 
        * with the given underlying storage object and identifier
        */
        getInstance: function (storage, guid) {
            return new Constructor(storage, guid);
        }
    };
})();