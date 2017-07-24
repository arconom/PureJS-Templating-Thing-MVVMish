/*jQuery DataTables helpers*/
//I will probably end up using this when I start making a version that uses plugins
var DataTables = {
        //this is a template for markup.  it has the attributes that DataTables supports
        //<td data-sort="" data-filter="" data-search="21st November 2016 21/11/2016" data-order="1479686400">21st November 2016</td>

        /*
        this is not ready for use yet.  It probably needs to take a function for the ajax parameter
        selector gets the table
        dataSource is the result of an ajax request
        
        @param {string} selector - targets the table
        @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
        @param {array<string>} columns - determines which properties from the dataSource to load into columns
        */
        LoadFromAjax: function (selector, dataSource, columns) {
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
        LoadFromArray: function (selector, dataSource, columns) {
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
                    //{ "data": "salary" }
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
        LoadFromObjectArray: function (selector, dataSource, columns, dataSrcCallback, renderCallback) {
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

                //scrollY: 'calc(50vh - 3em)',
                "sScrollY": "calc(50vh - 3em)",
                //"fnDrawCallback": adjust(selector)
                initComplete: function () {

                    //I use the columns data to determine what kind of controls to use for filtering
                    var textIndexes = Helper.DataTables.GetColumnIndex("text", columns);
                    var dropdownIndexes = Helper.DataTables.GetColumnIndex("dropdown", columns);
                    var datePickerIndexes = Helper.DataTables.GetColumnIndex("datePicker", columns);
                    var dateRangeIndexes = Helper.DataTables.GetColumnIndex("dateRange", columns);

                    this.api().columns().every(function () {
                        var column = this;
                        var title = $(this).text();

                        if (textIndexes.indexOf(column[0][0]) !== -1) {
                            Helper.DataTables.AddTextFilter(title, column);
                        }

                        if (dropdownIndexes.indexOf(column[0][0]) !== -1) {
                            var select = Helper.DataTables.AddSelectFilter(column);

                            column.data().unique().sort().each(function (d, j) {
                                select.append('<option data-id="' + j + '" value="' + d + '">' + d + '</option>')
                            });
                        }

                        if (datePickerIndexes.indexOf(column[0][0]) !== -1) {
                            Helper.DataTables.AddDatePickerFilter(column);
                        }

                        if (dateRangeIndexes.indexOf(column[0][0]) !== -1) {
                            Helper.DataTables.AddDateRangeFilter(column);
                        }

                    });
                }
            });
        },

        AddDatePickerFilter: function (column) {
            console.log("AddDatePickerFilter", title, column);
            var markup = '<input type="text" class="datepicker"/>';
            var changeEvent = function () {
                var val = $.fn.dataTable.util.escapeRegex(
                    $(this).val()
                );

                column
                    .search(val ? '^' + val + '$' : '', true, false)
                    .draw();
            }
            var clickEvent = function (e) {
                e.stopPropagation();
            };

            return Helper.DataTables.AddFilter(column, markup, changeEvent, function () { }, clickEvent);
        },
        AddDateRangeFilter: function (column) {
            console.log('AddDateRangeFilter', column);
            var beginDate = '<input type="text" class="datepicker" data-key="beginDate" placeholder="Start Date"/>';
            var endDate = '<input type="text" class="datepicker" data-key="endDate" placeholder="End Date"/>';
            markup = beginDate + endDate;

            //don't want to push a bunch of the same function into the datatables prototype, 
            //so we gate it with a switch
            if (!Helper.DateRangeFiltering) {
                Helper.DataTables.SetupDateRangeFiltering();
            }

            var changeEvent = function () {

                //var beginDateValue = $(this).parent().children('[data-key="beginDate"]').val();
                //var endDateValue = $(this).parent().children('[data-key="endDate"]').val();
                //var val = $.fn.dataTable.util.escapeRegex(
                //    $(this).val()
                //);

                column
                //    .search($.fn.dataTable.util.escapeRegex(Helper.GetDateRangeRegex(beginDateValue, endDateValue)), true, false)
                    .draw();
            }
            var clickEvent = function (e) {
                e.stopPropagation();
            };

            return Helper.DataTables.AddFilter(column, markup, changeEvent, function () { }, clickEvent);
        },
        AddSelectFilter: function (column) {
            console.log("AddSelectFilter", column);
            var markup = '<select><option value=""></option></select>';
            var keyupEvent = function () { };
            var changeEvent = function () {
                var val = $.fn.dataTable.util.escapeRegex(
                    $(this).val()
                );

                column
                    .search(val ? '^' + val + '$' : '', true, false)
                    .draw();
            }
            var clickEvent = function (e) {
                e.stopPropagation();
            };

            return Helper.DataTables.AddFilter(column, markup, changeEvent, keyupEvent, clickEvent);
        },
        AddTextFilter: function (title, column) {
            console.log("AddTextFilter", title, column);
            var markup = '<input type="text" placeholder="Type to filter.  Press enter to query. ' + title + '" />';
            var keyupEvent = function () {
                if (column.search() !== this.value) {
                    column
                        .search(this.value)
                        .draw();
                }
            };
            var clickEvent = function (e) {
                e.stopPropagation();
            };

            return Helper.DataTables.AddFilter(column, markup, function () { }, keyupEvent, clickEvent);
        },
        AddFilter: function (column, markup, changeEvent, keyupEvent, clickEvent) {
            console.log("AddFilter");//, column, markup, changeEvent, keyupEvent, clickEvent);
            var control = $(markup)
                .appendTo($(column.header()))
                .on('change', changeEvent)
                .on('keyup', keyupEvent)
                .on('click', clickEvent);

            return control;
        },

        /*
        jQuery Data Tables doesn't support footers, so this will add them directly into the DOM
        
        @param {DataTable} context - the JQuery DataTable that needs a footer added
        @param {int} numColumns - the number of columns in the table
        */
        AddFooter: function (selector, numColumns) {
            console.log("addFooter", selector, numColumns);
            var footStr = "<tfoot>" +
                "<tr>";

            for (i = 0; i < numColumns; i++) {
                footStr += "<th></th>";
            }

            footStr += "</tr>" +
            "</tfoot>";

            $(selector).html($(selector).html() + footStr);
        },

        GetColumnIndex: function (query, columns) {
            console.log("GetColumnIndex(query, columns)", query, columns);
            var dropdowns = columns.filter(function (x) { return x.filter === query });
            var returnMe = [];

            dropdowns.forEach(function (x) {
                returnMe.push(columns.indexOf(x));
            });

            return returnMe;
        },

        SetupDateRangeFiltering: function () {
            console.log('SetupDateRangeFiltering');
            //this function will run every time the table is rendered, once per row I believe,
            //sending table info into oSettings and row data into aData
            $.fn.dataTableExt.afnFiltering.push(
                function (oSettings, aData, iDataIndex) {
                    var returnMe = true;

                    oSettings.aoColumns.forEach(function (column) {
                        if (column.filter == 'dateRange') {

                            //need to find the input fields for the dates.  
                            //they are in the header, so nTh should point there
                            var beginDateValue = $(column.nTh).parent().find('[data-key="beginDate"]').val() || '';
                            var endDateValue = $(column.nTh).parent().find('[data-key="endDate"]').val() || '';

                            beginDateValue = beginDateValue.substring(6, 10) + beginDateValue.substring(0, 2) + beginDateValue.substring(3, 5);
                            endDateValue = endDateValue.substring(6, 10) + endDateValue.substring(0, 2) + endDateValue.substring(3, 5);

                            //formatter yyyymmdd
                            var temp = aData[column.idx].toString()
                                //truncate the time
                                .split(' ')[0]
                                .split('T')[0]
                                .split('/')
                                .reverse();
                            var a = temp[2];
                            temp[2] = temp[1];
                            temp[1] = a;

                            var date = [];

                            temp.forEach(function (datePart) {

                                if ((datePart) && (datePart.length === 1)) {
                                    date.push('0' + datePart);
                                }
                                else {
                                    date.push(datePart);
                                }
                            });

                            date = date.join('');

                            if (!Helper.IsBetween(beginDateValue, endDateValue, date)) {
                                returnMe = false;
                            }
                        }
                    });

                    return returnMe;
                }
            );
            Helper.DateRangeFiltering = true;
        }
    }
