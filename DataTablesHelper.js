/*jQuery dataTables helpers*/
var DataTablesHelper = {
    //this is a template for markup.  it has the attributes that dataTables supports
    //<td data-sort="" data-filter="" data-search="21st November 2016 21/11/2016" data-order="1479686400">21st November 2016</td>

    /**
    * adds a date picker to a column header in a DataTable and then returns a reference to it
    * @param {string} column identifies the column in which to create the date picker
    * @returns {object} a date picker control
    */
    addDatePickerFilter: function (column)
    {
        console.log("AddDatePickerFilter", title, column);
        var markup = '<input type="text" class="datepicker"/>';
        var changeEvent = function ()
        {
            var val = $.fn.dataTable.util.escapeRegex(
                $(this).val()
            );

            column
                .search(val ? "^" + val + "$" : "", true, false)
                .draw();
        }
        var clickEvent = function (e)
        {
            e.stopPropagation();
        };

        return DataTablesHelper.addFilter(column, markup, changeEvent, function () { }, clickEvent);
    },

    /**
    * adds two date pickers to a column header in a DataTable and then returns a reference to them
    * @param {string} column identifies the column in which to create the date pickers
    * @returns {object} a date picker control
    */
    addDateRangeFilter: function (column)
    {
        console.log("AddDateRangeFilter", column);
        var beginDate = '<input type="text" class="datepicker" data-key="beginDate" placeholder="Start Date mm/dd/yyyy"/>';
        var endDate = '<input type="text" class="datepicker" data-key="endDate" placeholder="End Date mm/dd/yyyy"/>';
        var markup = beginDate + endDate;

        //don't want to push a bunch of the same function into the dataTables prototype,
        //so we gate it with a switch
        if (!DataTablesHelper.dateRangeFiltering)
        {
            DataTablesHelper.setupDateRangeFiltering();
        }

        var changeEvent = function ()
        {
            //var beginDateValue = $(this).parent().children('[data-key="beginDate"]').val();
            //var endDateValue = $(this).parent().children('[data-key="endDate"]').val();
            //var val = $.fn.dataTable.util.escapeRegex(
            //    $(this).val()
            //);

            column
            //    .search($.fn.dataTable.util.escapeRegex(Helper.GetDateRangeRegex(beginDateValue, endDateValue)), true, false)
                .draw();
        }
        var clickEvent = function (e)
        {
            e.stopPropagation();
        };

        return DataTablesHelper.addFilter(column, markup, changeEvent, function () { }, clickEvent);
    },

    /**
    * adds two text fields to a column header in a DataTable and then returns a reference to them
    * @param {string} column identifies the column in which to create the text fields
    * @returns {object} a text field
    */
    addNumberRangeFilter: function (column)
    {
        console.log("addNumberRangeFilter", column);
        var minValue = '<input type="text" class="minRange" data-key="minValue" placeholder="Type to filter.  Press enter to query."/>';
        var maxValue = '<input type="text" class="maxRange" data-key="maxValue" placeholder="Type to filter.  Press enter to query."/>';
        var markup = minValue + maxValue;

        //don't want to push a bunch of the same function into the dataTables prototype,
        //so we gate it with a switch
        if (!DataTablesHelper.numberRangeFiltering)
        {
            DataTablesHelper.setupNumberRangeFiltering();
        }

        var changeEvent = function ()
        {
            column.draw();
        }
        var clickEvent = function (e)
        {
            e.stopPropagation();
        };

        return DataTablesHelper.addFilter(column, markup, changeEvent, function () { }, clickEvent);
    },

    /**
    * adds a select control to a column header in a DataTable and then returns a reference to it
    * @param {string} column identifies the column in which to create the date pickers
    * @returns {object} a select control
    */
    addSelectFilter: function (column)
    {
        console.log("addSelectFilter", column);
        var markup = '<select><option value=""></option></select>';
        var keyupEvent = function () { };
        var changeEvent = function ()
        {
            var val = $.fn.dataTable.util.escapeRegex(
                $(this).val()
            );

            column
                .search(val ? "^" + val + "$" : "", true, false)
                .draw();
        }
        var clickEvent = function (e)
        {
            e.stopPropagation();
        };

        return DataTablesHelper.addFilter(column, markup, changeEvent, keyupEvent, clickEvent);
    },

    /**
    * adds an input type control text to a column header in a DataTable and then returns a reference to it
    * @param {string} title is used in the placeholder to alert the user what the field is used for
    * @param {string} column identifies the column in which to create the date pickers
    * @returns {object} an input type text control
    */
    addTextFilter: function (title, column)
    {
        console.log("addTextFilter", title, column);
        var markup = '<input type="text" placeholder="Type to filter.  Press enter to query. ' + title + '" />';
        var keyupEvent = function ()
        {
            if (column.search() !== this.value)
            {
                column
                    .search(this.value)
                    .draw();
            }
        };
        var clickEvent = function (e)
        {
            e.stopPropagation();
        };

        return DataTablesHelper.addFilter(column, markup, function () { }, keyupEvent, clickEvent);
    },

    /**
    * adds a control to a column header in a DataTable and then returns a reference to it
    * @param {string} column identifies the column in which to create the date pickers
    * @param {string} markup will be inserted into the header
    * @param {function} changeEvent will be setup on the added control
    * @param {function} keyupEvent will be setup on the added control
    * @param {function} clickEvent will be setup on the added control
    * @returns {object} a control
    */
    addFilter: function (column, markup, changeEvent, keyupEvent, clickEvent)
    {
        console.log("addFilter");//, column, markup, changeEvent, keyupEvent, clickEvent);
        var control = $(markup)
            .appendTo($(column.header()))
            .on("change", changeEvent)
            .on("keyup", keyupEvent)
            .on("click", clickEvent);

        return control;
    },

    /*
    jQuery Data Tables doesn't support footers, so this will add them directly into the DOM

    @param {DataTable} context - the JQuery DataTable that needs a footer added
    @param {int} numColumns - the number of columns in the table
    */
    addFooter: function (selector, numColumns)
    {
        console.log("addFooter", selector, numColumns);
        var footStr = "<tfoot>" +
            "<tr>";

        for (i = 0; i < numColumns; i++)
        {
            footStr += "<th></th>";
        }

        footStr += "</tr>" +
        "</tfoot>";

        $(selector).html($(selector).html() + footStr);
    },

    dateRangeFiltering: false,
    numberRangeFiltering: false,

    /**
    * Queries a given object array for objects with [filter] matching query
    * @param {string} query is compared against all items in columns
    * @param {array} columns is the list of objects used to initialise the DataTable
    * @returns {array} indexes of all matching columns
    */
    getColumnIndex: function (query, columns)
    {
        console.log("GetColumnIndex(query, columns)", query, columns);
        var matches = columns.filter(function (x) { return x.filter === query });
        var returnMe = [];

        matches.forEach(function (x)
        {
            returnMe.push(columns.indexOf(x));
        });

        return returnMe;
    },

    /*
    this is not ready for use yet.  It probably needs to take a function for the ajax parameter
    selector gets the table
    dataSource is the result of an ajax request

    @param {string} selector - targets the table
    @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
    @param {array<string>} columns - determines which properties from the dataSource to load into columns
    */
    loadFromAjax: function (selector, dataSource, columns)
    {
        console.log("loadFromAjax", selector, dataSource, columns);
        throw "loadFromAjax is not implemented";

        //$(selector).DataTable({
        //
        //    "ajax": function (data, callback, settings) {
        //        saveToDataStore(WebStorage.GetAll(), 'data');
        //    },
        //
        //    //add a link for each item
        //    "dataSrc": function (json) {
        //        for (var i = 0, ien = json.length ; i < ien ; i++) {
        //            json[i][0] = '<a href="/message/' + json[i][0] + '>View message</a>';
        //        }
        //        return json;
        //    },
        //
        //    "columns": columns,
        //
        //    //to render links
        //    "render": function (data, type, full, meta) {
        //        return '<a href="' + data + '">Download</a>';
        //    }
        //});
    },

    /*
    this is not ready for use
    @param {string} selector - targets the table
    @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
    @param {array<string>} columns - determines which properties from the dataSource to load into columns
            //{ title: "Name" },
    */
    loadFromArray: function (selector, dataSource, columns)
    {
        console.log("loadFromArray", selector, dataSource, columns);
        throw "loadFromArray is not implemented";

        //$(selector).DataTable({
        //    data: datasource,
        //    "columns": columns,
        //});
    },

    /*
    @param {string} selector - targets the table
    @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
    @param {array<string>} columns - determines which properties from the dataSource to load into columns

    @param {function} dataSrcCallback - runs for every row
    example
        //add a link for each item
        function (json) {
            for (var i = 0, ien = json.length ; i < ien ; i++) {
                json[i][0] = '<a href="/message/' + json[i][0] + '>View message</a>';
            }
            return json;
        },

    @param {function} renderCallback - runs at render time
    example
        //add a link for each item
        function (data, type, full, meta) {
            return '<a href="' + data + '">Download</a>';
        }
    */
    loadFromObjectArray: function (selector, dataSource, columns, dataSrcCallback, renderCallback, columnReorderEnabled, pagingEnabled)
    {
        console.log("loadFromObjectArray", selector, dataSource, columns, dataSrcCallback, renderCallback);
        return $(selector).DataTable({
            "data": dataSource,
            //"" makes this point to the root of the object rather than the data property
            "dataSrc": "",//dataSrcCallback === undefined ? "" : dataSrcCallback,
            "columns": columns,
            "colReorder": columnReorderEnabled,
            //"render": renderCallback === undefined ? null : renderCallback
            //for some reason this causes column alignment issues
            scrollCollapse: true,
            paging: pagingEnabled,

            //im not sure why the extra s needs to be there.  the documentation wasn't clear
            //scrollY: 'calc(50vh - 3em)',
            "sScrollY": "calc(50vh - 3em)",
            //"fnDrawCallback": adjust(selector)
            initComplete: function ()
            {
                //I use the columns data to determine what kind of controls to use for filtering
                var textIndexes = DataTablesHelper.getColumnIndex("text", columns);
                var dropdownIndexes = DataTablesHelper.getColumnIndex("dropdown", columns);
                var datePickerIndexes = DataTablesHelper.getColumnIndex("datePicker", columns);
                var dateRangeIndexes = DataTablesHelper.getColumnIndex("dateRange", columns);
                var numberRangeIndexes = DataTablesHelper.getColumnIndex("numberRange", columns);

                this.api().columns().every(function ()
                {
                    var column = this;
                    var title = $(this).text();

                    if (textIndexes.indexOf(column[0][0]) !== -1)
                    {
                        DataTablesHelper.addTextFilter(title, column);
                    }

                    if (dropdownIndexes.indexOf(column[0][0]) !== -1)
                    {
                        var select = DataTablesHelper.addSelectFilter(column);

                        column.data().unique().sort().each(function (d, j)
                        {
                            select.append('<option data-id="' + j + '" value="' + d + '">' + d + '</option>');
                        });
                    }

                    if (datePickerIndexes.indexOf(column[0][0]) !== -1)
                    {
                        DataTablesHelper.addDatePickerFilter(column);
                    }

                    if (dateRangeIndexes.indexOf(column[0][0]) !== -1)
                    {
                        DataTablesHelper.addDateRangeFilter(column);
                    }

                    if (numberRangeIndexes.indexOf(column[0][0]) !== -1)
                    {
                        DataTablesHelper.addNumberRangeFilter(column);
                    }
                });
            }
        });
    },

    /*
    * Sets up a filtering event that occurs each time the DataTable is drawn
    */
    setupNumberRangeFiltering: function ()
    {
        $.fn.dataTableExt.afnFiltering.push(
            function (oSettings, aData, iDataIndex)
            {
                var returnMe = true;

                oSettings.aoColumns.forEach(function (column)
                {
                    if (column.filter === "numberRange")
                    {
                        var minValue = parseFloat($(column.nTh).find('[data-key="minValue"]').val()) || "";
                        var maxValue = parseFloat($(column.nTh).find('[data-key="maxValue"]').val()) || "";
                        var currentValue = parseFloat(aData[column.idx]);
                        debugger;

                        //returnMe = Helper.sorting.between(minValue, maxValue, currentValue);

                        if (!Helper.sorting.between(minValue, maxValue, currentValue))
                        {
                            returnMe = false;
                        }
                    }
                });

                return returnMe;
            });

        DataTablesHelper.numberRangeFiltering = true;
    },

    /**
    * Sets up a filtering event that occurs each time the DataTable is drawn
    * must be done this way because using the column.search() function requires regex
    * and date range regex is a pain
    * @returns {bool}
    */
    setupDateRangeFiltering: function ()
    {
        console.log("setupDateRangeFiltering");
        //this function will run every time the table is rendered, once per row I believe,
        //sending table info into oSettings and row data into aData
        $.fn.dataTableExt.afnFiltering.push(
            function (oSettings, aData, iDataIndex)
            {
                var returnMe = true;

                oSettings.aoColumns.forEach(function (column)
                {
                    if (column.filter === "dateRange")
                    {
                        //need to find the input fields for the dates.
                        //they are in the header, so nTh should point there
                        var beginDateValue = $(column.nTh).find('[data-key="beginDate"]').val() || "";
                        var endDateValue = $(column.nTh).find('[data-key="endDate"]').val() || "";

                        beginDateValue = beginDateValue.substring(6, 10) + beginDateValue.substring(0, 2) + beginDateValue.substring(3, 5);
                        endDateValue = endDateValue.substring(6, 10) + endDateValue.substring(0, 2) + endDateValue.substring(3, 5);

                        //formatter yyyymmdd
                        var temp = aData[column.idx].toString()
                            //truncate the time
                            .split(" ")[0]
                            .split("T")[0]
                            .split("/")
                            .reverse();
                        var a = temp[2];
                        temp[2] = temp[1];
                        temp[1] = a;

                        var date = [];

                        temp.forEach(function (datePart)
                        {
                            if ((datePart) && (datePart.length === 1))
                            {
                                date.push("0" + datePart);
                            }
                            else
                            {
                                date.push(datePart);
                            }
                        });

                        date = date.join("");

                        if (!Helper.sorting.between(beginDateValue, endDateValue, date))
                        {
                            returnMe = false;
                        }
                    }
                });

                return returnMe;
            }
        );
        DataTablesHelper.dateRangeFiltering = true;
    },

    /*
    This sets up the rendering and the subscriptions for a basic data table.

    @param {function} renderCallback - runs at render time

    @param {string} targetSelector - references the html element to contain the data table
    @param {string} queryUrl - contains a reference to a controller that will return data
    @param {function} queryCallback - will execute on a successful query
    @param {array(object)} columns - is used to configure the data table

        [
            {
                // the value of "data" corresponds to an object key
                "data": "cell0",

                // the value of "title" determines the column header
                "title": "Pri",

                // the render function should return some markup to render the value of "data"
                render: $.fn.dataTable.render.text() ||
                render: function (data, type, row)
                {
                    return "<a href=\"" + encodeURI("ipeWorkloadStatusDisplay.asp?wonum=" + data) + "\" class=\"link\">" + data + "</a>";
                },

                // filter is a string which indicates what kind of control to render in the column header for filtering
                "filter": "datePicker" || "dateRange" || "dropdown" || "numberRange" || "text"
            }
        ];

    */
    setupViewModel: function (targetSelector, queryUrl, queryCallback, columns, columnReorderEnabled, pagingEnabled)
    {
        var viewModel = {
            // initial data is set in here. makes viewing in the browser easier.
            data: (function ()
            {
                var _all = [];

                return {
                    get: function ()
                    {
                        return _all;
                    },
                    set: function (value)
                    {
                        console.log("data.set", value);
                        _all = value;
                        PubSub.publish("data.change", this);
                    },
                    add: function (value)
                    {
                        _all.push(value);
                        PubSub.publish("data.change", this);
                    },
                    /**
                     * accessor
                     * @returns {array}
                     */
                    get subset()
                    {
                        return _all.filter(function (x)
                        {
                            // a predicate goes here
                            return false;
                        })
                    },
                    /**
                     * make an ajax request for the data at the given url
                     *
                     * @param {} url
                     * @param {} successCallback
                     * @param {} data
                     *
                     * @returns {array}
                     */
                    search: function (url, data, successCallback)
                    {
                        console.log("search", callback, data);
                        queryCallback(url, data, successCallback);
                    },
                    /**
                     * Generate test data
                     * @returns {object} with all keys containing randomly generated values
                     */
                    generateRow: function ()
                    {
                        console.log("generateRow");

                        var returnMe = {};

                        columns.forEach(function (columns)
                        {
                            returnMe[column.data] = Helper.generateGuid();
                        });

                        return returnMe;
                    },
                };
            })(),
            // ui level data goes here. and functions too.
            ui:
            {
                //selectors: { tableSelector: "#jqdt" },
                //references to DataTables, needed for redrawing
                table: null,

                /**
                 * Sets up subscriptions
                 */
                bind: function ()
                {
                    PubSub.subscribe("data.change", this.redraw, this);
                },
                events: {},
                /**
                 * Hides the tabs that contain the tables
                 */
                hide: function ()
                {
                    $(targetSelector).hide();
                },
                /**
                * redraws a dataTable, saving the current scroll position and maintaining focus
                */
                redraw: function ()
                {
                    console.log("ui.redraw");
                    redrawTable(viewModel.data.get(), this.table, targetSelector);

                    /*
                    * @param {array} data is an array with each index representing a row of data
                    * @param {object} table is a jQuery DataTable to be redrawn
                    * @param {string} selector identifies the html table that corresponds to the jQuery DataTable
                    */
                    function redrawTable(data, table, selector)
                    {
                        if (table)
                        {
                            var scroll = $(selector).parent().scrollTop();
                            table.clear().rows.add(data).draw(false);
                            $(selector).focus();
                            $(selector).parent().scrollTop(scroll).focus();
                        }
                    }
                },
                /**
                 * Sets up the DataTable and populates it with data
                 * @param {object} viewModel.data.rfqs
                 */
                render: function (data)
                {
                    console.log("ui.render");
                    var that = this;

                    this.show();
                    load(viewModel.data.get());

                    function load(data)
                    {
                        console.log("ui.load", data);

                        if (data.length > 0)
                        {
                            that.table = DataTablesHelper.loadFromObjectArray(targetSelector, data, columns, function () { }, function () { }, columnReorderEnabled, pagingEnabled);
                        }

                        Helper.setupInfiniteScroll(targetSelector, 200, -400, function ()
                        {
                            //query for more data
                            //data.add(data.generate());
                        });
                    }
                },
                /**
                 * Displays the tab and the tables it contains
                 */
                show: function ()
                {
                    console.log("ui.show");
                    $(targetSelector).show().height("auto").addClass("display");
                }
            },
            /**
            * Sets up bindings,
            * Gets data,
            * Renders table
            */
            init: function ()
            {
                console.log("vm.init");
                var promises = [];
                var printMe = "";
                var self = this;

                self.ui.bind();

                //put all the promises from the ajax into an array for processing
                promises.push(getList(function (w)
                {
                    self.data.set(Helper.json.tryParse(w));
                }));

                //process the promises
                $.when.apply($, promises).then(function ()
                {
                    // returned data is in arguments[0][0], arguments[1][0], ... arguments[9][0]
                    // setup the tables
                    self.ui.render(self.data);
                }, function ()
                {
                    console.log("Error during rendering");
                });
            }
        };
        viewModel.init();
        return viewModel;
    }
};
