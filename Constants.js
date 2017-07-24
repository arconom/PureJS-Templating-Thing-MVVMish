var constants =
{
    divList:
    {
        //do I want to move the CSS out of here into its own constant
        Css:
        {
            Button: "button",
            Cell: "col-xs-1",
            Checkbox: "checkbox",
            ContainerFluid: "container-fluid",
            DivListContainer: "divList",
            DivListBody: "divlistbody",
            AddRemoveButtonDiv: "addremovediv",
            FloatRight: "right",
            FloatLeft: "left",
            HeaderContainer: "divlistheader",
            //, headerrowcss: constants.cssconstants.rowcss + constants.cssconstants.rowpadcss + constants.cssconstants.heightcss,
            Height: "height5",
            NoPadding: "nopad",
            RowPadding: "tbpadsmall",
            Row: "row",
            SelectedItemsDiv: "countdiv",
            Square: "square",
            Span: "span",
            ToggleDiv: "togglediv"
        },
        // these values are to be used for the data-id attributes of elements,
        Ids:
        {
            Add: "addrow",
            Body: "body",
            Filter: "filter",
            Header: "header",
            HeaderSum: "sum",
            HeaderSort: "sort",
            Id: "id",
            RemoveSelectedRows: "removeselectedrows",
            RemoveRow: "removerow",
            ToggleRow: "togglerow",
            SelectAll: "selectallrows",
            SelectedItems: "countselectedrows"
        },
        Selectors:
        {
            //AddRowButton: this._getElementById(constants.divList.ids.AddButton)
            //, Filters: this._getElementById(constants.divList.ids.Filter)
            //, Headers: this._getElementById(constants.divList.ids.Header)
            //, HeaderSort: this._getElementById(constants.divList.ids.headersort)
            //, SelectAll: this._getElementById(constants.divList.ids.selectAll)
            //, RemoveSelectedRowsButton: this._getElementById(constants.divList.ids.removeSelectedRowsButton)
            //, CheckedRows: this.rowCheckboxes + "input:checked"
            //, EditedRows: "div[data-id].edit"
            //, RemoveRowButtons: this._getElementById(constants.divList.ids.RemoveRowButton)
            //, SelectedItemCounter: this._getElementById(constants.divList.ids.selectedItemCounter)
            //, RowCheckboxes: this._getElementById(constants.divList.ids.RowCheckbox)
            CheckedRows: "div[data-id] input:checked",
            Rows: "div[data-id]",
            RowValues: "[data-key]",
            Textboxes: "input[type=\"text\"]",
            Textareas: "textarea"
        },

        // other attributes,
        FilterPlaceholder: "filter by ",
        SortAscending: "asc",
        SortDescending: "desc",
        SortNone: "none"
    },


    dataSourceSelector:
        //dataSourceSelector:
    {
        Css:
        {
            Json: "json",
            Right: "right",
            Left: "left",
            Button: "button",
            NoPadding: "nopad",
            SaveLoad: "SaveLoad"
        },
        Ids:
        {
            Export: "export",
            Import: "import",
            FileName: "filename",
            Load: "load",
            Save: "save",
            StoreName: "storename",
            ParseJson: "parsejson",
            GenerateJson: "generatejson",
            Json: "json",
            Container: "dataSourceSelector",
            SaveLoad: "SaveLoad",
            Self: "dataSourceSelector"
        },
        //, Selectors:
        //{
        //    Export: this._getElementById(constants.dataSourceSelector.ids.Export)
        //    , Import: this._getElementById(constants.dataSourceSelector.ids.Import)
        //    , File: this._getElementById(constants.dataSourceSelector.ids.File)
        //    , Load: this._getElementById(constants.dataSourceSelector.ids.Load)
        //    , Save: this._getElementById(constants.dataSourceSelector.ids.Save)
        //    , Name: this._getElementById(constants.dataSourceSelector.ids.Name)
        //    , ParseJson: this._getElementById(constants.dataSourceSelector.ids.ParseJson)
        //    , GenerateJson: this._getElementById(constants.dataSourceSelector.ids.GenerateJson)
        //    , Json: this._getElementById(constants.dataSourceSelector.ids.Json)
        //}
        JsonPlaceholder: "JSON goes here",
        StorePlaceholder: "Store name goes here"
    },
    Help:
    {
        Css:
        {

        },
        Ids:
        {
            Toggle: "toggle",
            Narrative: "narrative"
        }
        //, Selectors:
        //{
        //    Toggle: this._getElementById(constants.Help.ids.Toggle)
        //    , Narrative: this._getElementById(constants.Help.ids.Narrative)
        //}
    },
    uiSelector:
    {
        Css:
        {
            Select: ""
        },
        Ids:
        {
            Self: "uiSelector",
            Select: "ddlSelectUI"
        }
        //, Selectors:
        //{
        //    Select: this._getElementById(constants.uiSelector.ids.Select)
        //}
    },
    dataBoundUIContainer:
    {
        Css:
        {
            Square: "square",
            NoPadding: "nopad",
            Right: "right",
            Select: ""
        },
        Ids:
        {
            Self: "dataBoundUIContainer"
        }
    },
    AddSection:
    {
        Css:
        {
            FloatLeft: "left"
        },
        Ids:
        {
            Button: "btnAddSection"
        }
        //, Selectors:
        //{
        //    Button: this._getElementById(constants.AddSection.ids.Button)
        //}
    },

    InsertHTML:
    {
        BeforeBegin: "beforebegin", //Before the element itself.
        AfterBegin: "afterbegin", //Just inside the element, before its first child.
        BeforeEnd: "beforeend", //Just inside the element, after its last child.
        AfterEnd: "afterend" //After the element itself.
    },
    //, NodeNames:
    //{
    //    Div: "DIV"
    //    , Input: "INPUT"
    //    , Label: "LABEL"
    //    , Textarea: "TEXTAREA"
    //}

    // regex
    // looks for {chars}.lettersandnumbers,
    jsonregex: /({.+?})(\.[a-za-z0-9]+)*/i,
    // things between <calculation> and </calculation>,
    calculationdelimiter: /<calculation>(.+?)<\/calculation>>/i,
    objectStoreListName: "stores",

    Selectors:
    {
        Elements:
        {
            Label: "label",

        },
        Attributes:
        {
            DataId: "data-id"
        }
    }

    //, _getElementByDataId: function (id)
    //{
    //    return this._getAttributeSelector("data-id", id);
    //},
    //_getElementById: function (id)
    //{
    //    return "#" + id;
    //},
    //_getAttributeSelector: function (attribute, value)
    //{
    //    var returnMe = "[" + attribute + "=\"" + value + "\"]";
    //    return returnMe;
    //}
};