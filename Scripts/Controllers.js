/*
todo move the value calculations to their own library to mix into controllers
todo move the save and load functions to their own library to mix into controllers
todo build a pub sub pattern.  this controller knows too much about the view
todo because I re added the calculated values to the model, the edit UI is busted
 */
var Controllers = (function () {
    var instance;

    function init() {
        return {
            divList: function () {
                function divList(model, view, controller) {
                    console.log("divList.prototype.init");
                    var that = this;
                    that.model = model;
                    that.view = view;
                    that.controller = controller;
                    that.query = {};
                    that.fileName = Date.now + Helper.GenerateGUID();
                };
                /*
                I add an item to the viewModel
                the logic in the anonymous function is performed async at the end of the insert
                todo: give this a callback parameter to run in the anonymous function for some flexibility in data storage
                 */
                divList.prototype.insert = function (item) {
                    console.log("divList.prototype.addItem");
                    var that = this;
                    if (item === undefined) {
                        return;
                    }
                    that.model.create(that._formatViewData(item), function (newItem, data) {
                        that.view.addRow(newItem);
                        that.view.updateUI();
                    });
                };
                /*
                I read the viewModel for the given id and then tell the view to render the edit controls for that item.
                id should come from the UI, probably from the [data-id] attribute of an item
                 */
                divList.prototype.editItem = function (id) {
                    console.log("divList.prototype.editItem");
                    var that = this;
                    // may not need this read if save is done on change
                    that.model.read(id, function (data) {
                        if (data) {
                            that.view.edit(id, data[0]);
                        }
                        else {
                            console.log("read failed");
                        }
                    });
                };
                /*
                I update the viewModel with the new item and then tell the view to render the display controls.
                id should come from the UI, probably from the [data-id] attribute of an item
                item should come from the UI, scraped from the edit controls
                 */
                divList.prototype.update = function (item) {
                    console.log("divList.prototype.update");
                    var that = this;
                    if (item) {
                        that.model.update(item.id, that._formatViewData(item), function () { });
                    }
                    else {
                        console.log("can't update with null");
                    }
                };
                /*
                I get the data from the viewModel and send it to the view to render the display controls, undoing any changes the user has made to the item.
                id should come from the UI, probably from the [data-id] attribute of an item
                 */
                divList.prototype.editItemCancel = function (id) {
                    console.log("divList.prototype.editItemCancel");
                    var that = this;
                    that.model.read(id, function (data) {
                        that.view.view(id, data);
                    });
                };
                /*
                I remove the item with the matching id from the viewModel and then tell the view to remove that item as well.
                id should come from the UI, probably from the [data-id] attribute of an item
                 */
                divList.prototype._remove = function (id) {
                    console.log("divList.prototype._remove");
                    var that = this;
                    that.model.remove(id, function () {
                        that.view._remove(id);
                        that.view.updateUI();
                    });
                };
                /*
                I remove multiple items from the viewModel and the view
                ids can be a single id or an array of ids
                 */
                divList.prototype.delete = function (ids) {
                    console.log("divList.prototype.Delete");
                    var that = this;
                    if (ids.length) {
                        ids.forEach(function (id) {
                            that._remove(id);
                        });
                    }
                    else {
                        that._remove(ids);
                    }
                };
                /*
                I update the query variable and then run the UI update
                query should be an object containing keys and values to locate
                 */
                divList.prototype.search = function (query) {
                    console.log("divList.prototype.search");
                    console.log("query");
                    console.log(query);
                    var that = this;
                    // save the query to run again after sorting or whatever
                    that.query = query;
                    that.showAll();
                    that.view.updateUI();
                };
                /*
                I redraw the whole viewModel using the sort and query values
                 */
                divList.prototype.showAll = function () {
                    console.log("divList.prototype.showAll");
                    var that = this;
                    that.model.sort(that.model.sortBy, function (data) {
                        var cost = that._getTotalCost(data);
                        var showMe = data.filter(Helper.filterByQuery, { query: that.query });
                        var renderMe = [];
                        showMe.forEach(function (item) {
                            renderMe.push(that._formatViewData(item));
                        });
                        that.view.showList(renderMe);
                        that.view.updateTotals(cost);
                    });
                };
                /*
                I set the sort argument and then redraw
                arg is the column on which to sort
                todo: maybe make arg an object which has the column to sort and the direction
                 */
                divList.prototype.sort = function (arg) {
                    console.log("divList.prototype.sort");
                    var that = this;
                    that.model.sortBy = arg;
                    // todo shouldn't need to do this here
                    that.view.updateUI();
                    that.showAll();
                };
                /*
                I determine whether or not to save changes to an item based upon the status of the item's checked value
                item is an object sent back from the UI.  It should at least have the properties {id:, checked:}
                 */
                divList.prototype.toggle = function (item, silent) {
                    console.log("divList.prototype.toggle");
                    var that = this;
                    // todo could remove this update if we don't want to persist the checked property, 
                    // which would only be useful if the user wants to load a dataset with checked items
                    that.model.update(item.id, { checked: item.checked }, function () {
                        if (item.checked) {
                            //that.view.edit(item.id, that._formatSaveData(item));
                            that.view.edit(item.id, item);
                        }
                        else {
                            //that.view.view(item.id, that._formatViewData(item));
                            that.view.view(item.id, item);
                        }
                        that.view.toggle(item.id, item.checked);
                    });
                    // todo: maybe move this into a generic control function that accepts a callback so any action can be configured to cause a redraw
                    if (!silent) {
                        that.showAll();
                    }
                    that.view.updateUI();
                };
                /*
                I toggle all the checkboxes for the given array of items
                value is boolean for checked or not
                items is an array of items sent from the UI
                 */
                divList.prototype.toggleAll = function (value, items) {
                    console.log("divList.prototype.toggleAll");
                    var that = this;
                    items.forEach(function (item) {
                        item.checked = value;
                        that.toggle(item, true);
                    });
                    that.view.toggleAll(value);
                    that.view.updateUI();
                };
            },

            //todo this object might need to go away or move.  I'm not sure why it exists.
            //it seems to have the functionality of the recursive value references and 
            //some specific data formatting, which probably don't belong in the same object
            JSONQuery: (function () {
                var instance;

                function init() {

                    /*
                    I contain the logic for querying an object store.  
                    I should have functionality to do the following:
                    query/update a data store of objects,
            support calculations that reference values stored in the object,
            support recursive references
                    */
                    function JSONQuery() { }
                    /**
                     * I format the data so it can be saved without extraneous stuff from the viewmodel
                     * Send me a data item and i will strip out the data that will not persist past a save
                     * I return an object that has the necessary data
                     * 
                     * todo I think this does not belong here
                     */
                    JSONQuery.prototype._formatSaveData = function (data) {
                        console.log("JSONQuery.prototype._formatSaveData");
                        var returnMe =
                        {
                            //id: data.id || Date.now(),
                            category: data.category || "",
                            name: data.name || "",
                            descriptionFormula: data.descriptionFormula || "",
                            valueFormula: data.valueFormula || 0,
                            costFormula: data.costFormula || 0
                        };
                        return returnMe;
                    };
                    /*
                    I add the necessary data to an item so it can be shown in the view
                    data is an object that probably comes from a file or IndexedIndexedDB read
                     */
                    JSONQuery.prototype._formatViewData = function (data) {
                        console.log("JSONQuery.prototype._formatViewData");
                        console.log("data");
                        console.log(data);
                        if (!data) {
                            data = {};
                        }
                        var returnMe =
                        {
                            id: data.id,
                            checked: false,
                            category: data.category || "",
                            name: data.name || "",
                            descriptionFormula: data.descriptionFormula || "",
                            description: data.description || "",
                            valueFormula: data.valueFormula || 0,
                            costFormula: data.costFormula || 0,
                            value: 0,
                            cost: 0
                        };
                        returnMe = this._getCalculatedFormulaValues(returnMe);
                        console.log("JSONQuery.prototype._formatViewData returning");
                        console.log(returnMe);
                        return returnMe;
                    };
                    /*
                    I return the sum of all object.valueFormula in the viewModel whose object.name === the given name
                    name is a string that hopefully matches the name property of an object in the viewModel
                     */
                    JSONQuery.prototype._getItemRef = function (name) {
                        console.log("JSONQuery.prototype._getItemRef");
                        var values = [];
                        var returnMe = "";
                        if (name) {
                            this.model.read(
                            {
                                name: name
                            }, function (data) {
                                if (data) {
                                    data.forEach(function (item) {
                                        // we use valueFormula instead of value because we want to recur through the chain of value references.
                                        // valueformula could be a string to parse or it could be a number to return. 
                                        values.push(item.valueFormula);
                                    });
                                }
                                else {
                                    return;
                                }
                            });
                            // sum multiple results (until a better behaviour comes along)
                            returnMe = values.join(" + ");
                            // add parentheses to preserve order of ops
                            return "(" + returnMe + ")";
                        }
                        else {
                            return;
                        }
                    };
                    JSONQuery.prototype._query = function (query, property) {
                        console.log("JSONQuery.prototype._query");
                        var values = [];
                        try {
                            query = JSON.parse(query);
                        }
                        catch (e) {
                            console.log("invalid json query");
                            return;
                        }
                        if (query) {
                            this.model.read(query, function (data) {
                                if (data) {
                                    console.log("yay we got data");
                                    console.log(data);
                                    data.forEach(function (item) {
                                        if (!!property) {
                                            // we use valueFormula instead of value because we want to recur through the chain of value references.
                                            // valueformula could be a string to parse or it could be a number to return. 
                                            values.push(item[property]);
                                        }
                                        else {
                                            values.push(item);
                                        }
                                    });
                                }
                                else {
                                    console.log("JSONQuery.prototype._query returning undefined");
                                    return;
                                }
                            });
                            console.log("JSONQuery.prototype._query returning");
                            console.log(values);
                            return values;
                        }
                        else {
                            console.log("JSONQuery.prototype._query returning undefined");
                            return;
                        }
                    };
                    /**
                     * Calculates the sum of numeric properties of objects within an array
                     * @param {array} data is an array of objects
                     * @param {array} an array of sums
                     */
                    JSONQuery.prototype._getTotalCost = function (data) {
                        console.log("JSONQuery.prototype._getTotalCost");
                        var returnMe = {};
                        data.forEach(function (item) {
                            console.log("this is item", item);
                            Object.keys(item).forEach(function (key) {
                                if (typeof key === "number") {
                                    if (returnMe[key] === undefined) {
                                        returnMe[key] = key;
                                    }
                                    else {
                                        returnMe[key] += key;
                                    }
                                }
                            });
                        });
                        return returnMe;
                    };
                    /*
                    I calculate the values for object.value, object.cost, and object.description from object.costFormula, object.valueFormula, and object.descriptionFormula
                    item is an object that should have the aforementioned properties
                    returns an object with the calculated values added
                     */
                    JSONQuery.prototype._getCalculatedFormulaValues = function (item) {
                        console.log("JSONQuery.prototype._getCalculatedFormulaValues");
                        var that = this;
                        var value = Helper.transformAllMatches(item.valueFormula, Helper.JSONREGEX, function (o, m, r) {
                            return that._getCalculatedFormulaValue(o, m, r);
                        });
                        var cost = Helper.transformAllMatches(item.costFormula, Helper.JSONREGEX, function (o, m, r) {
                            return that._getCalculatedFormulaValue(o, m, r);
                        });
                        value = Helper.doMath(value);
                        cost = Helper.doMath(cost);
                        item.value = value;
                        item.cost = cost;
                        // this is a nested replacer for calculations because we want to be able to embed the calculations in the description
                        // like this: fart plus 1 is: <( {name: "fart"}.attribute + 1 )>
                        item.description = Helper.transformAllMatches(item.descriptionFormula, Helper.CALCULATIONDELIMITER, function (o, m, r) {
                            var t = Helper.transformAllMatches(m[1], Helper.JSONREGEX, function (o, m, r) {
                                return that._getCalculatedFormulaValue(o, m, r);
                            });
                            t = Helper.doMath(t);
                            return o.replace(m[0], t);
                        });
                        console.log("JSONQuery.prototype._getCalculatedFormulaValues returning");
                        console.log(item);
                        return item;
                    };
                    /*
                    I replace a value reference with a value, recursively, so there can be reference chains.
                    originalValue is the original string that contains the references
                    match is the result of a regex.exec, which is an array that contains the original string, and then the matched value
                    since we're matching json text, this should be something like {prop: ".val"}.prop
                    will need to pull out the . before use
                    regex is the regex to use for matching a reference
                    returns a string with values substituted for references
                     */
                    JSONQuery.prototype._getCalculatedFormulaValue = function (originalValue, match, regex) {
                        console.log("JSONQuery.prototype._getCalculatedFormulaValue");
                        var that = this;
                        var queryResult = that._query(match[1]);
                        var items;
                        var itemValue;
                        // there's a dot we don't want
                        var property = match[2].slice(1);
                        if (!!queryResult) {
                            items = Helper.getProperty(queryResult, property);
                            if (items.length > 0) {
                                console.log("items");
                                console.log(items);
                                //what do we want to do with the query results?  sum seems like an ok option
                                itemValue = items.reduce(function (a, b) {
                                    var c = parseInt(a) + parseInt(b);
                                    if (c === "NaN") {
                                        return a + b;
                                    }
                                    else {
                                        return c;
                                    }
                                });
                                console.log("value");
                                console.log(itemValue);
                                if (itemValue === "NaN" || !itemValue) {
                                    console.log("JSONQuery.prototype._getCalculatedFormulaValue returning 0");
                                    return 0;
                                }
                                else {
                                    var newValue = Helper.transformAllMatches(itemValue, regex, function (o, m, r) {
                                        return that._getCalculatedFormulaValue(o, m, r);
                                    });
                                    var returnMe = originalValue.replace(match[0], newValue);
                                    console.log("JSONQuery.prototype._getCalculatedFormulaValue returning ");
                                    console.log(returnMe);
                                    return returnMe;
                                }
                            }
                            else {
                                console.log("JSONQuery.prototype._getCalculatedFormulaValue returning 0");
                                return 0;
                            }
                        }
                        else {
                            console.log("JSONQuery.prototype._getCalculatedFormulaValue returning 0");
                            return 0;
                        }
                    };
                    /*
                    I iterate through the viewModel and update each item's calculated values
                     */
                    JSONQuery.prototype._updateFormulaValues = function () {
                        console.log("JSONQuery.prototype._updateFormulaValues");
                        var that = this;
                        that.model.read(function (data) {
                            data.forEach(function (item) {
                                item = that._getCalculatedFormulaValues(item);
                                that.model.update(item.id,
                                {
                                    value: item.value,
                                    cost: item.cost,
                                    description: item.description
                                }, function () { });
                            });
                        });
                    };
                    //JSONQuery.prototype._init = function ()
                    //{
                    //    console.log("JSONQuery.prototype._init");
                    //    var that = this;
                    //    that.view.bindExport(function (name)
                    //    {
                    //        that.save(name);
                    //    });
                    //    that.view.bindImport(function (name)
                    //    {
                    //        that.load(name);
                    //    });
                    //    that.view.bindLoad(function (name)
                    //    {
                    //        that.loadIndexedDB(name);
                    //    });
                    //    that.view.bindSave(function (name)
                    //    {
                    //        that.saveIndexedDB(name);
                    //    });
                    //    that.view.bindSelectFile(function () { });
                    //    that.view.bindGenerateJSON(function ()
                    //    {
                    //        that.generateJSON();
                    //    });
                    //    that.view.bindParseJSON(function (json)
                    //    {
                    //        that.parseJSON(json);
                    //    });
                    //    // todo finish subscribing
                    //    // I think the subscription process should probably be like this
                    //    PubSub.subscribe(eventname, callback, context);
                    //};


                    return {
                        // Public methods and variables
                    }
                }

                return instance ? instance : init();
            })(),
            uiSelector: (function () {
                // Instance stores a reference to the Singleton
                var instance;

                function init() {

                    // Singleton
                    // Private methods and variables

                    return {
                        // Public methods and variables
                        Select: function (value, target) {
                            // take the value from the select and find the template it references.
                            // associate that template to the data
                            // return a View?
                            return new Views[value](target);
                        }
                    };
                };

                return instance ? instance : init();
            })()
        };
    }
    return instance ? instance : init();
})();