/*
Attempting to make the list of views show up in intelisense while maintaining prorotypal inheritance.
Make an object that instantiates an empty function.
Apply logic to the prototypes of the functions that were defined in the Views object
*/

// Make sure any views that are present here and are also intended to be selected by the user
// are also in the Models.uiSelector object.

var Views =
{
    // I think I want this to contain the functionality that allows the user to
    // manipulate the way the data is rendered via clicking and dragging or something like that
    // The idea is to allow a user to choose to render two DataBoundUIContainers side by side or top and bottom.
    // looks like JQuery has this done.
    dataBoundUIContainer: (function (target) {

        function Constructor(target) {
            _init.apply(this, [target, templates.dataBoundUIContainer]);
        }

        // I think I want this to contain the functionality that allows the user to
        // manipulate the way the data is rendered via clicking and dragging or something like that
        // The idea is to allow a user to choose to render two DataBoundUIContainers side by side or top and bottom.
        // looks like JQuery has this done.
        // todo need to add handles on the top, bottom, left, and right
        // that allow the user to resize, move and reposition the container
        Constructor.dataBoundUIContainer.prototype.render = function () {
            console.log("Views.dataBoundUIContainer.prototype.render");
            var that = this;
            that.target.insertAdjacentHTML(constants.InsertHTML.AfterBegin, that.template.render());

            return that.target;
        }

        return {
            getInstance: function (target) {
                return new Constructor(target);
            }
        };

    })(),

    //this will allow the user to select a view and a template for rendering the data,
    uiSelector: (function (target) {

        function Constructor(target) {
            _init.apply(this, [target, templates.uiSelector]);
        }

        var events = {
            //this will allow the user to select a view and a template for rendering the data
            bindDdlSelectUI_SelectedIndexChanged: function (handler) {
                console.log("Views.uiSelector.prototype.bindDdlSelectUI_SelectedIndexChanged");
                var that = this;
                var selector = Helper.GetAttributeSelector("data-id", "ddlSelectUI");

                Helper.$on(that.target.querySelector(selector), 'click', function () {
                    that.renderView(handler(this.value));
                });
            },
            render: function (model) {
                var that = this;
                console.log("uiSelector.prototype.render");
                that.target.insertAdjacentHTML(constants.InsertHTML.AfterBegin, that.template.render(model));

                return that.target;
            },
            renderView: function (html) {
                console.log("Views.uiSelector.prototype.renderView");
                var that = this;
                var selector = Helper.GetAttributeSelector("data-id", "view");

                document.querySelector(selector).innerHTML = html;
            }
        };

        Helper.mix(events, Constructor);

        return {
            getInstance: function (target) {
                return new Constructor(target);
            }
        };
    })(),

    // This will render the data in a format that looks similar to a table,
    // however it uses divs and styles to accomplish this.
    divList: (function (target) {

        function Constructor(target) {
            var that = this;
            //todo maybe implement a selectable attribute 
            //that.Selectable = true;
            _init.apply(that, [target, templates.divList]);

            //that.target = document.querySelector(target);
            // todo
            // should be setting the guid of the model before this point
            // that.target.dataset.id = Helper.GenerateGUID();
            //that.render(model);
            // that.renderList({});
            //that._storeReferences(that.target);

        }

        var events = {
            /*
    I insert a new row at the beginning of the list
    @param {object} item I am a list item to insert
    */
            addRow: function (item) {
                console.log("divList.prototype.addRow");
                var that = this;
                var row = that.template.item(item, item.checked);
                var body = that.target.querySelector(constants.divList.ids.body);
                body.insertBefore(row, body[0]);
            },
            bind: function () {
                if (that.deleteButton) {
                    that.deleteButton.style.display = "none";
                }

                that.bindTextBoxDoubleClick();
                that.bindTextAreaDoubleClick();
            },
            /*
            I count the boxes in the list that are checked
            @return {number} I am the number of checked boxes
            */
            countCheckedRows: function () {
                console.log("divList.prototype.countCheckedRows");
                var boxes = this.list.querySelectorAll(constants.divList.ids.rowCheckboxes);
                var count = 0;

                boxes.forEach(function (box) {
                    if (box.checked) {
                        count += 1;
                    }
                });

                return count;
            },
            /*
            I count the number of rows in the list
            @return {number} I am the return value comment template
            */
            countRows: function () {
                console.log("divList.prototype.countRows");
                return this.list.querySelectorAll(constants.divList.selectors.Rows).length;
            },
            /*
            I set the visibility of the Delete button
            @param {boolean} visible
            */
            showDeleteButton: function (visible) {
                console.log("divList.prototype.showDeleteButton");
                var that = this;
                that.target.querySelector(constants.divList.ids.removeSelectedRowsButton).style.display = visible ? 'inline' : 'none';
            },
            /*
            I remove an item from the list
            @param {string} id I am the value of the data-id attribute of the target
            */
            removeRow: function (id) {
                console.log("divList.prototype.removeRow");
                var that = this;
                var target = that.getItemById(id);

                if (target) {
                    that.target.querySelector(constants.divList.ids.body).removeChild(target);
                }
            },
            render: function (model) {
                console.log("divList.prototype.render");
                var that = this;
                that.target.insertAdjacentHTML(constants.InsertHTML.AfterBegin, that.template.render(model));
            },
            /*
            I render the list without refresing the headers.  That way the header events remain intact.
            @param {array} list I am the array of data to be rendered
            @return {number} I am the return value comment template
            */
            renderList: function (model) {
                // todo maybe revisit this and see why i needed that conditional stuff
                console.log("divList.prototype.renderList");
                var that = this;

                var target = that.target.querySelector(constants.divList.ids.body);

                if (target) {
                    target.innerHTML = that.template.body(model).innerHTML;
                }
                else {
                    that.self.appendChild(that.template.body(model));
                }
            },
            /*
            I render the target list item
            @param {string} id I am the value of the data-id attribute of the target
            @param {object} value I am the object to render
            @param {boolean} editable I determine which controls are rendered (textboxes or divs)
            */
            renderRow: function (id, value, editable) {
                console.log("divList.prototype.renderRow");
                var that = this;
                var target = that.getItemById(id);

                if (target) {
                    target.innerHTML = that.template.item(value, editable).innerHTML;
                }
            },
            /*
            I toggle the checkbox for the given id
            @param {string} id I am the value of the data-id attribute of the target
            @param {boolean} checked I indicate the presence of absence of a checked attribute
            */
            toggle: function (id, checked) {
                console.log("divList.prototype.toggle");
                var that = this;
                var listItem = that.getItemById(id);

                if (!listItem) {
                    return;
                }

                // In case it was toggled from an event and not by clicking the checkbox
                listItem.querySelector(constants.divList.ids.ToggleRow).checked = checked;
            },
            /*
            I toggle all of the checkboxes in the list
            @param {boolean} checked I indicate the presence of absence of a checked attribute
            */
            toggleAll: function (checked) {
                console.log("divList.prototype.toggleAll");

                var that = this;

                that.target.querySelector(constants.divList.ids.body)
                    .querySelectorAll(constants.divList.ids.ToggleRow)
                        .forEach(function (item) {
                            that.toggle(that.itemId(item), checked);
                        });
            },
            /*
            I toggle the select all checkbox
            @param {boolean} checked I indicate the presence of absence of a checked attribute
            */
            toggleAllSelector: function (checked) {
                console.log("divList.prototype.toggleAllSelector");
                var that = this;
                that.target.querySelector(constants.divList.ids.selectAll).checked = checked;
            },
            /*
            I toggle the visibility of the help div
            */
            toggleHelp: function () {
                var that = this;
                var visible = that.help.style.display === "inline";
                that.help.style.display = !visible ? 'inline' : 'none';
            },
            /*
            I set the value of the selected item counter
            @param {string} value I am the new count
            */
            updateCount: function (value) {
                console.log("divList.prototype.updateCount");
                var that = this;
                that.target.querySelector(constants.divList.selectors.SelectedItems).textContent = value;
            },
            /*
            I update the UI to show the number of selected items,
            display the delete button when appropriate,
            and update the status of the select all checkbox
            */
            updateUI: function (totals) {
                console.log("divList.prototype.updateUI");
                var that = this;
                var checked = that.countCheckedRows();
                var rows = that.countRows();
                that.updateCount(checked + "/" + rows);
                that.toggleAllSelector(checked === rows);
                that.showDeleteButton(checked > 0);
                that.updateTotals(totals);
            },
            /*
            I update the headers with the sum of the values contained in their columns
            @param {object} totals I am a collection of key value pairs that correspond to the keys in the headers
            */
            updateTotals: function (totals) {
                console.log("divList.prototype.updateTotals");
                var that = this;

                that.target.querySelectorAll(constants.divList.selectors.headers)
                    .forEach(function (header) {
                        // just in case the browser is old, let's offer the getAttribute method
                        var key = header.dataset.id || header.getAttribute("data-id");
                        var val = totals[key] || "";
                        header.textContent = key + " " + val;
                    });
            }
        },
        bindings = {
            /*
            I bind an event to the add button's click event
            @param {function} handler I will run when the button is clicked
            */
            bindAddButtonClick: function (handler) {
                console.log("divList.prototype.bindAddButtonClick");
                var that = this;
                Helper.$on(that.target.querySelector(constants.divList.ids.add), 'click', function () {
                    var addMe = Helper.getKeyValuePairs(that.filter, true);
                    handler(addMe);
                });
            },
            /*
            I bind the click event for checkboxes
            @param {function} handler I will run when the box is clicked,
            using the row's values
            */
            bindRowCheckboxClick: function (handler) {
                console.log("divList.prototype.bindRowCheckboxClick");
                var that = this;

                Helper.$delegate(that.target.querySelector(constants.divList.ids.body), constants.divList.selectors.rowCheckboxes, 'click', function () {
                    var id = that._itemId(this);
                    handler(that._getRowValues(id), this.checked);
                });
            },
            /*
            I bind an event to the edited divs' keyup
            @param {function} handler I will run when the escape key is pressed
            */
            bindRowKeyUp: function (handler) {
                console.log("divList.prototype.bindRowKeyUp");
                var that = this;
                Helper.$delegate(that.target.querySelector(constants.divList.ids.body), constants.divList.selectors.EditedRows, 'keyup', function (event) {
                    if (event.keyCode === KeyCodes.ESCAPE_Store) {
                        console.log("edit escape");
                        this.blur();

                        handler({ id: that._itemId(this) });
                    }
                });
            },
            /*
            I bind an event to the delete button's click event
            @param {function} handler I will run when the button is clicked
            */
            bindRowRemoveButtonClick: function (handler) {
                console.log("divList.prototype.bindRowRemoveButtonClick");
                var that = this;

                Helper.$delegate
                (
                    that.target.querySelector(constants.divList.ids.body),
                    constants.divList.ids.RemoveRow, 'click', function () {
                        handler(that._itemId(this));
                    }
                );
            },
            /*
            I bind an event to each item's delete button's click event
            @param {function} handler I will run when the button is clicked
            */
            bindRemoveSelectedRowsButtonClick: function (handler) {
                console.log("divList.prototype.bindRemoveSelectedRowsButtonClick");
                var that = this;

                Helper.$on
                (
                    that.target.querySelector(constants.divList.ids.RemoveSelectedRow),
                    'click',
                    function () {
                        console.log("deletebutton click");
                        var ids = [];
                        var controls = that.target.querySelector(constants.divList.ids.body)
                            .querySelectorAll(constants.divList.selectors.CheckedRows);

                        controls.forEach(function (thing) {
                            ids.push(
                            {
                                id: that._itemId(thing)
                            });
                        });

                        handler(ids);
                    }
                );
            },
            /*
            I bind a search function to each filter textbox's keyup and change events
            @param {function} handler I will run when the key is released,
            using the values from all of the filter fields
            */
            bindFilterKeyUp: function (handler) {
                console.log("divList.prototype.bindFilterKeyUp");
                var that = this;

                function doSearch() {
                    var query = Helper.getKeyValuePairs(that.filter);
                    handler(query);
                }

                that.filter.forEach(function (item) {
                    Helper.$on(item, 'keyup', doSearch);
                    Helper.$on(item, 'change', doSearch);
                });
            },
            /*
            I bind the click events for the headers
            @param {function} handler I will run when the header is clicked
            */
            bindHeaderClick: function (handler) {
                console.log("divList.prototype.bindHeaderClick");
                var that = this;
                var sorters = that.target.querySelectorAll(constants.divList.ids.headersort);

                sorters.forEach(function (header) {
                    Helper.$on(header, 'click', function () {
                        var self = this;

                        // flip between "asc" and "desc"
                        self.dataset.sort = (self.dataset.sort === constants.divList.SortNone) ? constants.divList.SortAscending
                            : (self.dataset.sort === constants.divList.SortAscending) ? constants.divList.SortDescending
                                : constants.divList.SortAscending;

                        sorters.forEach(function (header) {
                            header.dataset.sort = "none";
                        });

                        // sort should not be "none" by this point
                        var sortDirection = (self.dataset.sort === constants.divList.SortAscending) ? 1 : -1;
                        handler(self.getAttribute("key"), sortDirection);
                    });
                });
            },
            /*
            I bind doubleclick for textareas to redraw them as textboxes
            // todo maybe abstract the templateHelper from this
            */
            bindTextAreaDoubleClick: function () {
                var that = this;

                Helper.$delegate(that.target.querySelector(constants.divList.ids.body), constants.divList.selectors.Textareas, 'dblclick', function () {
                    // todo make a function for this in templates
                    var self = this;
                    var attr =
                    [
                        { "class": self.className },
                        { "type": "text" },
                        { "key": self.getAttribute("key") },
                        { "value": self.value }
                    ];

                    var control = templateHelper.getInput(attr, "text", "");
                    self.outerHTML = control;
                });
            },
            // Bind doubleclick to all input=text to add textmode=multiline and change the dimensions
            /*
            I bind doubleclick for input type = text to redraw them as textareas
            // todo maybe abstract the templateHelper from this
            */
            bindTextBoxDoubleClick: function () {
                var that = this;

                Helper.$delegate(that.target.querySelector(constants.divList.ids.body), constants.divList.selectors.textboxes, 'dblclick', function () {
                    var self = this;
                    var attr =
                    [
                        { "class": self.className },
                        { "type": "text" },
                        { "key": self.getAttribute("key") },
                        { "value": self.value },
                        { "onmouseup": "Helper.TextareaMouseUp(this)" },
                        { "onkeyup": "Helper.TextareaResize(this)" }
                    ];

                    var control = templateHelper.getTextArea(attr);
                    this.outerHTML = control;
                });
            },
            /*
            I bind the click event for the select all checkboxe
            @param {function} handler I will run when the box is clicked,
            using all list items
            */
            bindRowCheckboxClickAll: function (handler) {
                console.log("divList.prototype.bindRowCheckboxClickAll");
                var that = this;
                Helper.$on(that.target.querySelector(constants.divList.ids.selectAll), 'click', function () {
                    console.log("toggleAll click");

                    try {
                        handler(this.checked, that._getAllItems());
                    }
                    catch (e) {
                        console.log(e);
                    }
                });
            },
            /*
            I bind the textboxes' change events
            @param {function} handler I will run when the value is changed, using the row's values
            */
            bindCellChange: function (handler) {
                console.log("divList.prototype.bindCellChange");
                var that = this;

                Helper.$delegate(that.target.querySelector(constants.divList.ids.body), constants.divList.selectors.textboxes, 'change', function () {
                    try {
                        var id = that._itemId(this);
                        console.log("cell " + id + " value changed");
                        handler(that._getRowValues(id));
                    }
                    catch (e) {
                        console.log(e);
                    }
                });
            },
        };

        Helper.mix(events, Constructor);
        Helper.mix(bindings, Constructor);

        /*
        I return every list item
        @return {array} I am an array of objects containing all of the items in the list
        */
        function _getAllItems() {
            console.log("divList.prototype._getAllItems");
            var that = this;
            var rows = that.target.querySelector(constants.divList.ids.body)
                .querySelectorAll("div [data-id]");
            var items = [];

            rows.forEach(function (row) {
                items.push(that._getRowValues(row.dataset.id));
            });

            return items;
        };
        /*
        I get the values for an item
        @param {string} id I am the value that matches the data-id attribute of the target
        @return {object} I am the item's values
        */
        function _getRowValues(id) {
            console.log("divList.prototype._getRowValues");

            var row = this._getItemById(id);
            var elements = row.querySelectorAll(constants.divList.selectors.RowValues);
            var returnMe = {};
            returnMe.id = id;

            elements.forEach(function (element) {
                var text = this._getDisplayedValue(element)
                var key = element.dataset.key;
                returnMe[key] = text;
            });

            return returnMe;
        };
        /**
        * I get the displayed value from an element based on the nodeName
        because for some reason HTML likes to store the displayed value in different places for different types of elements.
        @return {string} I am the value that is displayed to the user via the given element
        */
        function _getDisplayedValue(element) {
            if (element.nodeName === "TEXTAREA") {
                return element.value;
            }
            if (element.nodeName === "INPUT") {
                if (element.type === "text") {
                    return element.value;
                }
                if (element.type === "checkbox") {
                    return element.checked;
                }
            }
            else if ((element.nodeName === "LABEL")
            || (element.nodeName === "DIV")) {
                return element.textContent;
            }
        };
        /*
        I get an element from the list
        @param {string} id I am the value that matches the data-id attribute of the target
        @return {element} I am the list item
        */
        function _getItemById(id) {
            console.log("divList.prototype._getItemById");
            console.log(id);
            return this.list.querySelector("[data-id=\"" + id + "\"]");
        };
        /*
        I recursively search up the heirarchy for a data-id attribute in a div tag
        @param {object} element I am the starting point of the search
        @return {number} I am the data-id attribute of the div containing element
        */
        function _itemId(element) {
            console.log("divList.prototype._itemId");

            var that = this;
            var parent;
            var returnMe;

            if (element) {
                parent = Helper.$parent(element, 'div');
                returnMe = Helper.getId(element);

                if (!returnMe) {
                    if (!!parent) {
                        var parentId = that._itemId(parent);

                        if (!!parentId) {
                            returnMe = parentId;
                        }
                    }
                }
            }
            else {
                console.log("recursive node search reached root");
            }

            console.log("divList.prototype._itemId returning");
            console.log(returnMe);

            return returnMe;
        };
        /*
        I store a reference to all controls in the view that will be referenced
        @param {object} target I am the control that will contain the view
        */
        function _storeReferences(target) {
            this.addButton = target.querySelector(constants.divList.selectors.addRowButton);
            this.count = target.querySelector(constants.divList.selectors.selectedItemCounter);
            this.deleteButton = target.querySelector(constants.divList.ids.RemoveSelectedRow);
            this.filters = target.querySelectorAll(constants.divList.selectors.filters);
            this.headers = target.querySelectorAll(constants.divList.selectors.headers);
            this.list = target.querySelector(constants.divList.ids.body);
            this.sort = target.querySelectorAll(constants.divList.selectors.headersort);
            this.toggleAllCheckbox = target.querySelector(constants.divList.ids.selectAll);
        };

        return {
            getInstance: function (target) {
                return new Constructor(target);
            }
        };
    })(),

    /*
        dataSourceSelector allows the user to select a data source to populate a given UI template,
        shows the IndexedIndexedDB Save and Load buttons,
        the Blob Api Import and Export buttons,
        and the GenerateJSON and ParseJSON buttons
    */
    dataSourceSelector: function (target) {

        /**/
        _init = function (target) {
            console.log("Views.dataSourceSelector.prototype._init");
            this.Selectable = true;
            _init.apply(this, [target, templates.dataSourceSelector]);
        }
        /*
        I store a reference to all controls in the view that will be referenced
        */
        _storeReferences = function () {
            console.log("Views.dataSourceSelector.prototype._storeReferences");
            console.log("target", this.target);
            var that = this;
            var dataId = "data-id";

            that.exportButton = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.Export));
            that.fileSelector = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.File));
            that.importButton = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.Import));
            that.loadButton = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.Load));
            that.saveButton = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.Save));
            that.storeName = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.StoreName));
            that.parseJSONButton = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.ParseJson));
            that.generateJSONButton = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.GenerateJson));
            that.txtJSON = that.target.querySelector(Helper.GetAttributeSelector(dataId, constants.dataSourceSelector.ids.Json));

            console.log("exportButton", that.exportButton);
        }

        var events = {
            render: function (model) {
                console.log("Views.dataSourceSelector.prototype.render");
                var that = this;
                var html = this.template.render(model);

                that.target.insertAdjacentHTML(constants.InsertHTML.AfterBegin, html);

                //return that.target;
            },
            /*
            I check for blob support and update the UI accordingly
            */
            checkFileSupport: function (isSupported) {
                console.log("Views.dataSourceSelector.prototype.checkFileSupport");
                var that = this;

                if (!isSupported) {
                    console.log("no blob support");

                    that.exportButton.setAttribute("style", "display: none");
                    that.fileSelector.setAttribute("style", "display: none");
                    that.importButton.setAttribute("style", "display: none");
                }
            },
            /*
            I check for indexedDB support and update the UI accordingly
            */
            checkDbSupport: function (isSupported) {
                console.log("Views.dataSourceSelector.prototype.checkDbSupport");
                var that = this;
                if (!isSupported) {
                    console.log("no indexed db support");

                    that.loadButton.setAttribute("style", "display: none");
                    that.saveButton.setAttribute("style", "display: none");
                    that.storeName.setAttribute("style", "display: none");
                }
            },
            /*
            I display the given value in the json textbox
            @param {string} value I am a string value that goes into the textbox
            */
            showJSON: function (value) {
                console.log("dataSourceSelector.prototype.showJSON");
                var that = this;
                that.target.querySelector(constants.dataSourceSelector.ids.Json).value = value;
            }
        },
        bindings = {
            /*
            I bind an event to the Import button click
            @param {function} handler I am the logic that will go in the click event
            */
            bindImport: function (handler) {
                console.log("dataSourceSelector.prototype.bindImport");
                var that = this;
                Helper.$on(that.target.querySelector(constants.dataSourceSelector.ids.Import), 'click', function () {
                    var name = that.target.querySelector(constants.dataSourceSelector.ids.File).files;
                    handler(name);
                });
            },
            /*
            I bind an event to the Export button click
            @param {function} handler I am the logic that will go in the click event
            */
            bindExport: function (handler) {
                console.log("dataSourceSelector.prototype.bindExport");
                var that = this;
                Helper.$on(that.target.querySelector(constants.dataSourceSelector.ids.Export), 'click', function () {
                    var name = that.target.querySelector(constants.dataSourceSelector.ids.File).textContent
                    || that.target.querySelector(constants.dataSourceSelector.ids.File).value;
                    handler(name);
                });
            },
            /*
            I bind an event to the Load button click
            @param {function} handler I am the logic that will go in the click event
            */
            bindLoad: function (handler) {
                console.log("dataSourceSelector.prototype.bindLoad");
                var that = this;

                Helper.$on
                (
                that.target.querySelector(constants.dataSourceSelector.ids.Load),
                'click',
                function () {
                    var name = that.target.querySelector(constants.dataSourceSelector.ids.Name).textContent
                    || that.target.querySelector(constants.dataSourceSelector.ids.Name).value;
                    handler(name);
                }
                );
            },
            /*
            I bind an event to the Save button click
            @param {function} handler I am the logic that will go in the click event
            */
            bindSave: function (handler) {
                console.log("dataSourceSelector.prototype.bindLoad");
                var that = this;

                Helper.$on
                (
                that.target.querySelector(constants.dataSourceSelector.ids.Save),
                'click',
                function () {
                    var name = that.target.querySelector(constants.dataSourceSelector.ids.Name).textContent
                    || that.target.querySelector(constants.dataSourceSelector.ids.Name).value;
                    handler(name);
                }
                );
            },
            /*
            I bind an event to the File Select control
            @param {function} handler I am the logic that will go in the change event
            */
            bindSelectFile: function (handler) {
                console.log("dataSourceSelector.prototype.bindSelectFile");
                var that = this;

                Helper.$on
                (
                that.target.querySelector(constants.dataSourceSelector.ids.File),
                'change',
                function () {
                    handler();
                }
                );
            },
            /*
            I bind an event to the GenerateJson button
            @param {function} handler I am the logic that will go in the click event
            */
            bindGenerateJSON: function (handler) {
                console.log("dataSourceSelector.prototype.bindGenerateJSON");
                var that = this;
                Helper.$on
                (
                that.target.querySelector(constants.dataSourceSelector.ids.GenerateJson),
                'click',
                function () {
                    console.log("Generate JSON click");
                    handler();
                }
                );
            },
            /*
            I bind an event to the ParseJson button
            @param {function} handler I am the logic that will go in the click event
            */
            bindParseJSON: function (handler) {
                console.log("dataSourceSelector.prototype.bindParseJSON");
                var that = this;
                Helper.$on
                (
                    that.target.querySelector(constants.dataSourceSelector.ids.ParseJson),
                    'click',
                    function () {
                        console.log("Parse JSON click");
                        handler(that.target.querySelector(constants.dataSourceSelector.ids.Json).value);
                    }
                );
            }
        };

        Helper.mix(events, Constructor);
        Helper.mix(bindings, Constructor);

        return {
            getInstance: function (target) {
                return new Constructor(target);
            }
        };
    },
    /**/

    Help: function (target) {


        /*
        I am a constructor
        target points to the HTMLElement that will contain the Help View
        */
        //function Help(target)
        //{
        //    this.init(target);
        //}
        /*
        I set the view up before use
        @param {object} target I point to the control that will contain the view
        */
        Views.Help.prototype._init = function (target) {
            console.log("Views.Help.prototype._init");
            var that = this;

            //that.Selectable = true;
            _init.apply(this, [target, templates.Help]);
        };

        /**/
        Views.Help.prototype.render = function () {
            console.log("Views.Help.prototype.render");
            var that = this;

            that.target.insertAdjacentHTML(constants.InsertHTML.AfterBegin, that.template.render);
            //that._storeReferences(target);
            this.help.style.display = "none";
        };


        this._init(target);
        return this;
    }
};





/*
I store a reference to all controls in the view that will be referenced
@param {object} target I am the control that will contain the view
*/
//HelpView.prototype._storeReferences = function (target)
//{
//    this.self = target;
//    this.helpToggle = self.querySelector(constants.Help.selectors.Toggle);
//    this.help = self.querySelector(constants.Help.selectors.Narrative);
//}
/*
I bind an event to the show help link
@param {function} handler I am the logic that will go in the click event
*/
//HelpView.prototype.bindToggleHelp = function (handler)
//{
//    console.log("HelpView.prototype.bindToggleHelp");
//    var that = this;
//    Helper.$on
//    (
//        target.querySelector(constants.Help.selectors.Toggle)
//        , 'click'
//        , function ()
//        {
//            console.log("toggleHelp click");
//            handler();
//        }
//    );
//};

/*
    Assigns a template for rendering and a target in which to render
    @param {object} target can be a string selector or a HTMLElement object
    @param {object} template should contain render()
*/
function _init(target, template) {
    console.log("_init");
    var that = this;

    _setTemplate.apply(that, [template]);
    _setTarget.apply(that, [target]);

    return that.target;
}

/**/
function _setTemplate(template) {
    console.log("_setTemplate");
    var that = this;

    that.template = template;
}

/**/
function _setTarget(target) {
    console.log("_setTarget");
    var that = this;

    if (typeof target === 'string') {
        that.target = document.querySelector(target);
    }
    else if (typeof target === 'object') {
        that.target = target;
    }

    if (!that.target) {
        var insertMe = document.createElement("div");
        document.body.insertAdjacentHTML(constants.InsertHTML.BeforeEnd, insertMe);
        that.target = insertMe;
    }
}