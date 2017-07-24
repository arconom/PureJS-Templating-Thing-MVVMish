/*property
    Button, Cell, Checkbox, ContainerFluid, Css, dataSourceSelector, divList,
    DivListBody, DivListContainer, Filter, FilterPlaceholder, FloatRight,
    Header, HeaderContainer, HeaderSort, Height, Id, Ids, Json, NoPadding,
    RemoveRow, RemoveSelectedRows, Right, SUM, SaveLoad, SelectAll,
    SelectedItems, SelectedItemsDiv, Span, Square, StorePlaceholder, ToggleRow,
    _addButton, _buttonDiv, _getButton, _getCheckbox, _getColumnHeader,
    _getColumnHeaders, _getComposite, _getControl, _getControlAttributes,
    _getControlData, _getControls, _getCountDiv, _getCountLabel,
    _getDeleteButton, _getDeleteRecordButton, _getDeleteRecordDiv, _getDiv,
    _getExportButton, _getFileSelect, _getFilterDiv, _getFilterTextbox,
    _getFilters, _getFiltersDiv, _getGenerateJsonButton, _getHeader,
    _getHeaderLabelsDiv, _getIdDiv, _getImportButton, _getJsonField,
    _getJsonDiv, _getLoadButton, _getParseJSONButton, _getRecordCheckbox,
    _getRecordCheckboxDiv, _getSaveButton, _getSaveLoadDiv,
    _getSelectAllCheckbox, _getSelectAllDiv, _getStoreNameField, _getTextInput,
    _getWidthCss, body, checked, class, countDiv, css, forEach, getButton,
    getCheckbox, getConcatenatedAttributeString, templateHelper.getControlString, getDiv,
    getInput, getLabel, getWidthCss, header, id, item, key, keys, length, log,
    placeholder, push, render, selfClosing, tag, text, textContent, type
*/
/*jslint node: true */
/*jshint strict:false */
/*

A limitation of this templating system is the inability of the developer 
to simply write a template in html with value placeholders and use it.  
This system requires the developer to make a js class to add a template.
This requirement exists mainly because the script is intended to handle
and data structure, meaning that it will, in the case of a divList, generate
columns according to the data that is given.

So, if I were to copy handlebars' syntax, I could parse a string of HTML
that includes references to a ViewModel delimited by {{}}, and inject the 
values from the ViewModel into the template.

*/
var templates = {
    divList: (function () {
        // #region components,
        function _addButton() {
            var attr = [{
                "class": [constants.divList.css.square,
                    "largePad"
                ]
            }, {
                "type": "submit"
            }];

            return templateHelper.getControlString("input", attr, "+", false);
        }
        function _buttonDiv() {
            var attr = [{
                "class": [
                    constants.divList.css.floatRight,
                    constants.divList.css.noPadding,
                    constants.divList.ids.filter,
                    constants.divList.css.span
                ]
            },
                {
                    "type": "submit"
                }
            ];

            return templateHelper.getDiv(attr, _addButton(), _getDeleteButton());
        }
        function _getButton(id) {
            var returnMe = {
                tag: "input",
                type: "submit",
                css: [constants.divList.css.divList.css.cell],
                id: id,
                textContent: "",
                selfClosing: true
            };

            return returnMe;
        }
        function _getCheckbox(id) {
            var returnMe = {
                tag: "input",
                type: "checkbox",
                css: [constants.divList.css.divList.css.Checkbox],
                id: id,
                textContent: "",
                selfClosing: true
            };

            return returnMe;
        }
        function _getColumnHeader(calculatedWidth, dataId, key) {
            var attr = [

                {
                    "class": [
                        constants.divList.css.Cell,
                        calculatedWidth,
                        constants.divList.ids.Header,
                        constants.Height
                    ]
                },

                {
                    "data-id": [
                        constants.divList.css.divList.ids.headersort,
                        dataId
                    ]
                }
            ];

            return templateHelper.getDiv(attr, key);
        }
        function _getColumnHeaders(model) {
            var returnMe = "";
            var calculatedWidth = _getWidthCss(model);

            if ((model.keys) && (model.keys.forEach)) {
                model.keys.forEach(function (key) {
                    if (key !== "checked") {
                        var isNumeric = typeof model[key] === "number";
                        var dataId = isNumeric ? constants.divList.css.SUM : "";
                        returnMe += _getColumnHeader(calculatedWidth, dataId, key);
                    }
                });
            }
            return returnMe;
        }
        function _getComposite(id, editable) {
            var that = this;
            var returnMe = {
                tag: "div",
                type: "",
                css: [constants.divList.css.divList.css.Cell],
                id: id,
                textContent: that._getControls(id, editable),
                selfClosing: false
            };

            return returnMe;
        }
        function _getControl(key, model, editable, calculatedWidth) {
            var that = this;
            var control = {};
            var attributes = [];
            var selfClosing = false;
            var returnMe = {};

            control = that._getControlData(typeof model[key], model, key, editable);
            control.css.push(constants.divList.css.Height);
            control.css.push(calculatedWidth);

            // construct the attribute array from the data generated above
            attributes = that._getControlAttributes(control, model.checked, key);

            // use the data generated above to concatenate a control string
            returnMe = templateHelper.getControlString(control.tag, templateHelper.getConcatenatedAttributeString(attributes), control.textContent, control.selfClosing);

            // dont wrap Divs in divs because we don't need the extra level
            if (control.tag === "div") {
                return returnMe;
            } else {
                return templateHelper.getDiv([], returnMe);
            }
        }
        function _getControls(item, editable) {
            console.log("templateHelper._getControls");
            if (!item) {
                return templateHelper.getDiv("", [], constants.divList.css.divList.css.Cell);
            }

            var returnMe = [];
            var calculatedWidth = _getWidthCss(item);

            returnMe.push(_getRecordCheckboxDiv(item.checked));
            returnMe.push(_getIdDiv(item.id, calculatedWidth));

            if ((item.keys) && (item.keys.forEach)) {
                item.keys.forEach(function (key) {
                    if (key === "checked" ||
                        key === "id") {
                        // don't do anything because we already did.
                    } else {
                        var appendMe = _getControl(key, item, editable, calculatedWidth);
                        returnMe.push(appendMe);
                    }
                });
            }
            returnMe.push(_getDeleteRecordDiv());
            return returnMe;
        }
        function _getControlAttributes(control, checked, key) {
            var returnMe = [{
                "type": control.type
            }, {
                "class": control.css
            }, {
                "id": control.id
            }, {
                "key": key
            }];

            if (checked) {
                returnMe.push({
                    "checked": ""
                });
            }
        }
        function _getControlData(type, model, key, editable) {
            var that = this;
            // set local storage values based on the type of data given
            if (type === "number" || type === "string") {
                return that._getTextInput(model[key]);
            } else if (type === "boolean") {
                return that._getCheckbox(model[key]);
            } else if (type === "function") {
                return that._getButton(key);
            } else if (type === "object") {
                return that._getComposite(model[key], editable);
            } else {
                console.log("type " + type + " not implemented");
                return {};
            }
        }
        function _getCountDiv(value) {
            var attr = [{
                "class": [
                    constants.divList.css.selectedItems,
                    constants.divList.css.selectedItemsDiv,
                    constants.divList.css.Span
                ]
            }];

            return templateHelper.getDiv(attr, _getCountLabel(value));
        }
        function _getCountLabel(value) {
            var attr = [{
                "class": constants.divList.ids.selectedItems
            }];

            return templateHelper.getLabel(attr, value || "0");
        }
        function _getDeleteButton() {
            var attr = [{
                "class": [
                    constants.divList.css.square,
                    "largePad",
                    constants.divList.css.removeSelectedRows
                ]
            }, {
                "type": "submit"
            }, {
                "text": "-"
            }];

            return templateHelper.getButton(attr);
        }
        function _getDeleteRecordButton() {
            var attr = [{
                "class": [
                    constants.divList.css.RemoveRow,
                    constants.divList.css.Button,
                    constants.divList.css.square,
                    constants.divList.css.FloatRight,
                    "largePad",
                    constants.divList.css.Height
                ]
            }, {
                "type": "submit"
            }, {
                "text": "-"
            }];

            return templateHelper.getButton(attr, "input");
        }
        function _getDeleteRecordDiv() {
            return templateHelper.getDiv([], _getDeleteRecordButton());
        }
        function _getFilterDiv(key, calculatedWidth) {
            var textbox = _getFilterTextbox(key);
            var attr = [{
                "class": [
                    constants.divList.css.Cell,
                    constants.divList.css.NoPadding,
                    calculatedWidth
                ]
            }, {
                "data-id": constants.divList.ids.Filter
            }];

            return templateHelper.getDiv(attr, textbox);
        }
        function _getFilters(model) {
            var returnMe = "";
            var calculatedWidth = _getWidthCss(model);

            if ((model.keys) && (model.keys.forEach)) {
                model.keys.forEach(function (key) {
                    if (key !== "checked") {
                        returnMe += _getFilterDiv(key, calculatedWidth);
                    }
                });
            } else {
                returnMe += _getFilterDiv("", calculatedWidth);
            }
            return returnMe;
        }
        function _getFiltersDiv(model) {
            var filterAttributes = [{
                "class": constants.divList.ids.Header
            }];

            return templateHelper.getControlString("div", filterAttributes, _getSelectAllDiv() + _getFilters(model) + _buttonDiv(), false);
        }
        function _getFilterTextbox(key) {
            var attr = [{
                "class": constants.divList.ids.Filter
            }, {
                "type": "text"
            }, {
                "key": key
            }, {
                "placeholder": constants.divList.FilterPlaceholder
            }];

            return templateHelper.getInput(attr, "text", key);
        }
        function _getHeader(model) {
            var containerAttributes = [{
                "class": constants.divList.css.HeaderContainer
            }];

            return templateHelper.getControlString("div", containerAttributes, _getFiltersDiv(model) + _getHeaderLabelsDiv(model), false);
        }
        function _getHeaderLabelsDiv(model) {
            var attr = [{
                "class": constants.divList.css.Header
            }];

            return templateHelper.getDiv(attr, _getCountDiv(model.count) + _getColumnHeaders(model));
        }
        function _getHelpDiv() {

            var outerDivAttr = [{
                "class": "btn-link"
            }, {
                "data-id": "toggleHelp"
            }, {
                "onclick": "toggleHelp"
            }];

            var helpDivAttr = [{
                "data-id": "help"
            }, ];

            return templateHelper.getDiv(outerDivAttr, "Show Help") +
                templateHelper.getDiv(helpDivAttr,
                    templateHelper.getControlString("p", [], "Click the column headers to sort.", false) +
                    templateHelper.getControlString("p", [], "The checkbox in the header selects all checkboxes. (Un)Checking an item will update the UI for editing/viewing.", false) +
                    templateHelper.getControlString("p", [], "When entering data into the DescriptionFormula, ValueFormula, or CostFormula fields, <br /> you may reference an item by using a JSON query <code> {\"name\": \"fart\"} </code> or <code> {\"name\":\"steve\", \"category\": \"steve again\"} </code> <br /> and then using Dot Notation to specify the field to reference <code>.name </code> or <code> .valueformula </code><br />This is case sensitive.<br />If the query returns multiple rows, the specified property will be the sum of all rows returned.", false) +
                    templateHelper.getControlString("p", [], "When editing DescriptionFormula, you may reference another item as described before, <br /> however, all references must be contained within a calculation tag <code> &lt;calculation&gt; {\"name\":\"a\"}.valueFormula + {\"name\":\"b\"}.costFormula&lt;/calculation&gt; </code>. ", false)
                );
        }
        function _getIdDiv(id, calculatedWidth) {
            var attr = [{
                "class": [
                    constants.divList.ids.Id,
                    constants.divList.css.Cell,
                    calculatedWidth,
                    constants.divList.css.Height
                ]
            }, {
                "key": "id"
            }];

            return templateHelper.getDiv(attr, id);
        }
        function _getRecordCheckbox(checked) {
            var attr = [{
                "class": [
                    constants.divList.ids.ToggleRow,
                    constants.divList.css.Checkbox,
                    constants.divList.css.Height
                ]
            }, {
                "type": "checkbox"
            }, {
                "key": "checked"
            }];

            return templateHelper.GetCheckbox(attr, checked);
        }
        function _getRecordCheckboxDiv(checked) {
            var attr = [{
                "class": [
                    constants.divList.css.Span,
                    constants.divList.ids.ToggleRow
                ]
            }];

            return templateHelper.getDiv(attr, _getRecordCheckbox(checked));
        }
        function _getSelectAllCheckbox() {
            var attr = [{
                "class": [
                    constants.divList.ids.ToggleRow,
                    constants.divList.ids.selectAll,
                    constants.divList.css.Checkbox
                ]
            }, {
                "type": "checkbox"
            }];

            return templateHelper.GetCheckbox(attr, false);
        }
        function _getSelectAllDiv() {
            var attr = [{
                "class": [
                    constants.divList.css.ToggleRow,
                    constants.divList.css.Span,
                    constants.divList.css.NoPadding
                ]
            }];

            return templateHelper.getDiv(attr, _getSelectAllCheckbox());
        }
        function _getTextInput(id) {
            var returnMe = {
                tag: "input",
                type: "text",
                css: [constants.divList.css.divList.css.Cell],
                id: id,
                textContent: "",
                selfClosing: true
            };

            return returnMe;
        }
        function _getWidthCss(model) {
            console.log("divList.getWidthCss");

            model = model || {};
            var columns = Object.keys(model).length;

            if (columns <
                1) {
                columns = 1;
            }

            return "col" + columns;
        }

        // #endregion components

        return {
            body: function (model) {
                console.log("divList.body");
                var rows = "";
                var that = this;

                model.forEach(function (item) {
                    rows += that.item(item, item.checked);
                });

                var attr = [{
                    "class": [constants.divList.css.divListBody, constants.divList.css.containerFluid]
                }];

                return templateHelper.getDiv(attr, rows);
            },

            /*
            i build a header row using the given item as a template
            */
            header: function (model) {
                console.log("divList.header");
                var that = this;
                return that._getHeader(model);
            },
            // implement item for drawing a single item,
            item: function (model, edit) {
                console.log("divList.item");
                var that = this;

                if (model) {
                    var controls = that._getControls(model, edit);
                    var returnMe = templateHelper.getDiv(model.id, controls, "row");
                    return returnMe;
                } else {
                    console.log("cant build an item from nothing");
                    return;
                }
            },
            // implement render for a complete redraw
            render: function (model) {
                console.log("divList.render");
                var that = this;

                if (!model) {
                    model = [];
                }

                if (model) {
                    var rows = _getHelpDiv() + that.header(model) + that.body(model);

                    var attr = [{
                        "class": constants.divList.css.divListContainer
                    }];

                    return templateHelper.getDiv(attr, rows);
                } else {
                    console.log("cant build a template from nothing");
                }
            },
        };

    })(),
    dataSourceSelector: (function () {
        
        /*
        * Generate the components of the template and put them into a div
        * @param {model} contains the appropriate data for rendering.  It looks like this:
        * {
        *     indexedDB: {
        *         available: ds.indexedBD ? true : false
        *     },
        *     blob: {
        *         available: ds.blob ? true : false
        *     },
        *     webStorage: {
        *         available: ds.webStorage ? true : false
        *     },
        *     collection: {
        *         available: ds.collection ? true : false
        *     }
        * }
        */
        function getDiv(model) {
            console.log("dataSourceSelector.getDiv");
            var that = this;
            var attr = [{
                "class": "dataSourceDiv borderThin"
            }, {
                "data-id": "dataSourceSelector"
            }];

            var blob = model.blob.available ? getBlobDiv(model) : "";
            var db = model.indexedDB.available ? getIndexedDBDiv(model.indexedDB.keys) : "";
            var web = model.blob.available ? getWebStorageDiv(model.webStorage.keys) : "";
            var collection = model.blob.available ? getCollectionDiv(model.collection.keys) : "";

            return templateHelper.getDiv(attr,
                blob +
                templateHelper.getBreak() +
                GetJsonDiv() +
                templateHelper.getBreak() +
                collection +
                templateHelper.getBreak() +
                web +
                templateHelper.getBreak() +
                db
            );
        }

        /*Blob*/
        function getBlobDiv() {
            var that = this;
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.SaveLoad
            }, {
                "class": constants.dataSourceSelector.css.SaveLoad
            }];
            var help = "<p>The Import and Export buttons use the msBlobFileSystem API. This works on IE, but not much else.</p>";

            return templateHelper.getDiv("",
                templateHelper.getControlString("H4", "", "Blob", false) +
                help +
                templateHelper.getDiv(attr,
                    getFileSelect() +
                    templateHelper.getBreak() +
                    getImportButton() +
                    getExportButton()));
        }
        function getExportButton() {
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.export
            }, {
                "class": "largePad"
            }, {
                "value": "Export"
            }];

            return templateHelper.getButton(attr, "This should say Export");
        }
        function getFileSelect() {
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.fileName
            }, {
                "class": constants.dataSourceSelector.css.right
            }, ];

            return templateHelper.getInput(attr, "file", "");
        }
        function getImportButton() {
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.import
            }, {
                "class": "largePad"
            }, {
                "value": "Import"
            }];

            return templateHelper.getButton(attr, "This should say Import");
        }
        /*end Blob*/

        function getCollectionDiv(stores) {
            var that = this;
            var attr = [{
                "data-id": "Collection"
            }, {
                "class": "Collection"
            }];
            var name = "Collection";


            return templateHelper.getDiv("",
                templateHelper.getHeading("4", "", name) +
                templateHelper.getDiv(attr,
                    getStoreSelect(name, getOptions(stores || [])) +
                    getSaveButton(name) +
                    getLoadButton(name)));
        }
        function getIndexedDBDiv(stores) {
            var that = this;
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.storeName
            }, {
                "class": constants.dataSourceSelector.ids.storeName
            }];
            var name = "IndexedDB";

            var help = "<p>The Save and Load buttons use the Indexed database resident in the browser.<br />Use the Name field next to them to select an object store.<br />You have to remember the names for now, until I write some code to give you a list.<br />This is not compatible with Internet Explorer</p>";

            return templateHelper.getDiv("",
                templateHelper.getHeading("4", "", name) +
                help +
                templateHelper.getDiv(attr,
                    getStoreSelect(name, getOptions(stores || [])) +
                    getSaveButton(name) +
                    getLoadButton(name)));
        }
        function getWebStorageDiv(stores) {
            var that = this;
            var attr = [{
                "data-id": "WebStorage"
            }, {
                "class": "WebStorage"
            }];
            var name = "Web Storage";

            return templateHelper.getDiv("",
                templateHelper.getHeading("4", "", name) +
                templateHelper.getDiv(attr,
                    getStoreSelect(name, getOptions(stores || [])) +
                    getSaveButton(name) +
                    getLoadButton(name)));
        }

        /*JSON*/
        function getGenerateJsonButton() {
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.generateJson
            }, {
                "class": "largePad"
            }, {
                "value": "Generate JSON"
            }];

            return templateHelper.getButton(attr, "Generate JSON");
        }
        function getJsonDiv() {
            var that = this;
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.json
            }, {
                "class": constants.dataSourceSelector.css.json
            }];

            return templateHelper.getDiv("",
                templateHelper.getHeading("4", "", "JSON") +
                templateHelper.getDiv(attr,
                    getJsonField()) +
                templateHelper.getBreak() +
                getGenerateJsonButton() +
                getParseJSONButton()
            );
        }
        function getJsonField() {
            var attr = [{
                "data-id": "json"
            }, {
                "placeholder": "JSON goes here"
            }, {
                "onmouseup": "Helper.TextareaMouseUp(this)"
            }, {
                "onkeyup": "Helper.TextareaResize(this)"
            }, {
                "class": "relative"
            }
                //{ "rows": "5" }
            ];

            return templateHelper.getTextArea(attr);
        }
        function getParseJSONButton() {
            var attr = [{
                "data-id": constants.dataSourceSelector.ids.parseJson
            }, {
                "class": "largePad"
            }, {
                "value": "Parse JSON"
            }];

            return templateHelper.getButton(attr, "Parse JSON");
        }
        /*end JSOn*/

        function getLoadButton(id) {
            var attr = [{
                "data-id": "Load" + id
            }, {
                "class": "largePad"
            }, {
                "value": "Load"
            }];

            return templateHelper.getButton(attr, "This should say Load");
        }
        function getOption(textContent, value) {
            var attr = [{
                "value": value
            }];

            return templateHelper.getOption(attr, textContent);
        }
        function getOptions(stores) {
            var returnMe = "";

            if (stores) {
                for (i = 0; i < stores.length; i += 1) {
                    returnMe += getOption(stores[i], i);
                }
            }

            return returnMe;
        }
        function getSaveButton(id) {
            var attr = [{
                "data-id": "Save" + id
            }, {
                "class": "largePad"
            }, {
                "value": "Save"
            }];

            return templateHelper.getButton(attr, "Save");
        }
        function getStoreSelect(id, textContent) {
            var attr = [{
                "data-id": id
            }];

            return templateHelper.getDiv([],
                templateHelper.getLabel([], "Select Store") + "&nbsp;" + "&nbsp;" +
                templateHelper.getComboBox(attr, textContent));
        }

        return {
            // implement render for a complete redraw
            render: function (model) {
                console.log("dataSourceSelector.render");

                var that = this;

                if (!!model) {
                    return getDiv(model);
                } else {
                    console.log("dataSourceSelector.render no data in the model");
                    return "";
                }
            }
        }
    })(),
    uiSelector: (function () {

        function _getViewDiv() {
            var that = this;
            var attr = [{
                "data-id": "view"
            }, ];

            return templateHelper.getDiv(attr, "");
        }
        function _getSelect(textContent) {
            console.log("templates.uiSelector._getSelect", textContent);
            var attr = [{
                "class": constants.uiSelector.css.select
            }, {
                "data-id": "ddlSelectUI"
            }
                //{ "onclick": "ddlSelectUI_SelectedIndexChanged" }
            ];

            var returnMe = templateHelper.getSelect(attr, textContent);
            console.log("templates.uiSelector._getSelect returning", returnMe);

            return returnMe;
            //return templateHelper.getSelect(attr, textContent);
        }
        function _getOption(textContent) {
            var attr = [{
                "class": ""
            }, {
                "value": textContent
            }];

            return templateHelper.getOption(attr, textContent);
        }
        function _getLabel(target, textContent) {
            var attr = [{
                "class": constants.uiSelector.css.label
            }, {
                "for": target
            }];

            return templateHelper.getLabel(attr, textContent);
        }

        return {
            render: function (viewList) {
                console.log("templates.uiSelector.render", viewList);
                var that = this;
                var options = "";

                viewList.forEach(function (view) {
                    if (view !== "uiSelector" && view !== "templateHelper") {
                        options += that._getOption(view);
                    }
                });

                var select = _getSelect(options);
                var label = _getLabel(constants.uiSelector.ids.select, "Select UI:  " + select);
                console.log("templates.uiSelector.render returning", label);
                return templateHelper.getDiv("", templateHelper.getDiv("", label) + _getViewDiv());
            },
        }
    })(),
    dataBoundUIContainer: (function () {
        function _getDeleteButton() {
            console.log("templates.DataBoundUISelector._getDeleteButton");
            var attr = [{
                "class": [
                    constants.dataBoundUIContainer.css.square,
                    "largePad",
                    constants.dataBoundUIContainer.css.right
                ]
            }, {
                "value": "-"
            }];
            return templateHelper.getButton(attr, "");
        }
        function _getDiv(textContent) {
            console.log("templates.DataBoundUISelector._getDiv");
            var attr = [{
                "class": "borderThin"
            }, {
                "data-id": "dataBoundUIContainer"
            }];
            return templateHelper.getDiv(attr, textContent);
        }

        return {
            render: function () {
                console.log("templates.DataBoundUISelector.render");
                return _getDiv(_getDeleteButton());
            }
        };
    })()
};

var templateHelper = {
    getAttributeString: function (key, value) {
        //console.log("templateHelper.GetAttributeString");
        if (!!key && !!value && value !== "") {
            return key + "=\"" + value + "\"";
        } else {
            return "";
        }
    },
    getBreak: function () {
        //console.log("templateHelper.getBreak");
        //return document.createElement("br");
        return "<br />";
    },
    getButton: function (attributes, textContent) {
        if (attributes.push) {
            attributes.push({
                "type": "submit"
            });
        }
        return this.getControlString("input", this.getConcatenatedAttributeString(attributes), textContent, true);
    },
    getCheckbox: function (attributes, checked) {
        attributes.push({
            "type": "checkbox"
        });

        if (checked) {
            attributes.push({
                "checked": checked
            });
        }

        return this.getControlString("input", this.getConcatenatedAttributeString(attributes), "", false);
    },
    getComboBox: function (attributes, textContent) {

        var textId = Helper.GenerateGUID();

        var outerDivAttr = [{
            "class": "comboBoxDiv relative"
        }, ];

        var inputAttr = [{
            "class": "comboBoxInput"
        }, {
            "data-id": textId
        }, ];

        var innerDivAttr = [];

        var selectAttr = [{
            "class": "comboBoxSelect"
        }, {
            "onchange": "Helper.SetTargetValue('" + textId + "', this.value);"
        }, ];

        return this.getDiv(outerDivAttr,
            this.getInput(inputAttr, "text", "") +
            this.getDiv(innerDivAttr,
                this.getSelect(selectAttr, textContent)
            )
        );


        //this markup creates a combobox
        /*
            <div style="position: absolute;top: 32px; left: 430px;" id="outerFilterDiv">
                <input name="filterTextField" type="text" id="filterTextField" tabindex="2"  style="width: 140px; position: absolute; top: 1px; left: 1px; z-index: 2;border:none;" />
                <div style="position: absolute;" id="filterDropdownDiv">
                    <select name="filterDropDown" id="filterDropDown" tabindex="1000" onchange="DropDownTextToBox(this,'filterTextField');" style="position: absolute; top: 0px; left: 0px; z-index: 1; width: 165px;">
                        <option value="-1" selected="selected" disabled="disabled">-- Select Column Name --</option>
                    </select>
                </div>
            </div>
        */
    },
    getConcatenatedAttributeString: function (attributes) {
        var that = this;
        var attributeStrings = [];
        var returnMe = "";

        if ((attributes) // && (attributes.keys) && (attributes.keys.forEach)
        ) {
            attributes.forEach(function (attr) {
                var key = Object.keys(attr)[0];
                var value = attr[key];

                // join the array values with a space
                // this is intended to be useful for the class attribute
                // because it will send in an array of classes to use
                if (Array.isArray(value)) {
                    value = value.join(" ");
                }

                attributeStrings.push(that.GetAttributeString(key, value));
            });
        }
        returnMe = attributeStrings.join(" ");

        return returnMe;
    },
    getControlString: function (tag, attributes, textContent, selfClosing) {
        var that = this;
        var end = selfClosing ? "/>" : ">" + textContent + "</" + tag + ">";
        var spaceIfAttributes = attributes.length > 0 ? " " : "";
        //console.log("templateHelper.getControlString");
        return "<" + tag + spaceIfAttributes + attributes + end;
    },
    getDiv: function (attributes, textContent) {
        return this.getControlString("div", this.getConcatenatedAttributeString(attributes), textContent, false);
    },
    getEvenOrOdd: function (i) {
        //console.log("templateHelper.GetEvenOrOdd");
        if (i % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    },
    getInput: function (attributes, type, placeholder) {
        attributes.push({
            "type": type
        });
        attributes.push({
            "placeholder": placeholder
        });
        return this.getControlString("input", this.getConcatenatedAttributeString(attributes), "", true);
    },
    getHeading: function (size, attributes, textContent) {
        return this.getControlString("H" + size, this.getConcatenatedAttributeString(attributes), textContent, false);
    },
    getLabel: function (attributes, textContent) {
        return this.getControlString("label", this.getConcatenatedAttributeString(attributes), textContent, false);
    },
    getOption: function (attributes, textContent) {
        return this.getControlString("option", this.getConcatenatedAttributeString(attributes), textContent, false);
    },
    getSelect: function (attributes, textContent) {
        return this.getControlString("select", this.getConcatenatedAttributeString(attributes), textContent, false);
    },
    getSpan: function (attributes, textContent) {
        return this.getControlString("span", this.getConcatenatedAttributeString(attributes), textContent, false);
    },
    getTextArea: function (attributes) {
        return this.getControlString("textarea", this.getConcatenatedAttributeString(attributes), "", false);
    }
};