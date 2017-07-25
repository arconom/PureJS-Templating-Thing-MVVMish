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
        //$(selector).DataTable({
        //    data: datasource,
        //    "columns": columns,
        //});
    },

    /*
    @param {string} selector - targets the table
    @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
    @param {array<string>} columns - determines which properties from the dataSource to load into columns

    The following function is an example of the columns for a table.

    the value of "data" corresponds to an object key
    the value of "title" determines the column header
    the render function should return some markup to render the value of "data"
    filter is a string which indicates what kind of control to render in the column header for filtering

    function getColumns()
    {
        return [{
            "data": "id",
            "title": "RFQ ID",
            render: function (data, type, row)
            {
                return "<a href=\"" + "viewrfq.aspx?rfqid=" + row.id + "\" class=\"link\">" + row.id + "</a>";
            },
            "filter": "text"
        }, {
            "data": "name",
            "title": "Name",
            "filter": "text"
        }, {
            "data": "status.name",
            //render: function (data, type, row) {
            //    return "<td><span data-id=\"" + row.status.id + "\">" + row.status.name + "</span></td>";
            //},
            "title": "Status",
            "filter": "dropdown"
        }, {
            "data": "customer",
            "title": "Customer",
            render: $.fn.dataTable.render.text(),
            "filter": "text"
        }, {
            "data": "dateCreated",
            "title": "Date Created",
            "filter": "dateRange"
        }];
    }

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
    loadFromObjectArray: function (selector, dataSource, columns, dataSrcCallback, renderCallback)
    {
        console.log("loadFromObjectArray", selector, dataSource, columns, dataSrcCallback, renderCallback);
        return $(selector).DataTable({
            "data": dataSource,
            //"" makes this point to the root of the object rather than the data property
            "dataSrc": "",//dataSrcCallback === undefined ? "" : dataSrcCallback,
            "columns": columns,
            //"render": renderCallback === undefined ? null : renderCallback
            //for some reason this causes column alignment issues
            scrollCollapse: true,
            paging: false,

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
                        var minValue = $(column.nTh).parent().find('[data-key="minValue"]').val() || "";
                        var maxValue = $(column.nTh).parent().find('[data-key="maxValue"]').val() || "";
                        var currentValue = aData[column.idx].toString()

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
                        var beginDateValue = $(column.nTh).parent().find('[data-key="beginDate"]').val() || "";
                        var endDateValue = $(column.nTh).parent().find('[data-key="endDate"]').val() || "";

                        beginDateValue = beginDateValue.substring(6, 10) + beginDateValue.substring(0, 2) + beginDateValue.substring(3, 5);
                        endDateValue = endDateValue.substring(6, 10) + endDateValue.substring(0, 2) + endDateValue.substring(3, 5);

                        //formatter yyyymmdd
                        var temp = aData[column.idx].toString()
                            //just for testing
                            //.trim()
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
    }
};
