//Web Components Playground

var WebComponentsHelper = {
    setupCustomControl: function (id)
    {
        //Create an id for the data table instance
        //so we don't get our wires crossed
        //when there is more than one data table in the DOM
        document.body.insertAdjacentHTML("beforeend", this.getJQueryDataTableTemplate());

        // See https://html.spec.whatwg.org/multipage/indices.html#element-interfaces
        // for the list of other DOM interfaces.
        class jQueryDataTable extends HTMLElement
        {
            constructor()
            {
                console.log("jQueryDataTable constructor");
                // always call super() first in the ctor.
                super();

                //todo probably need to move this into a library and pass in the context to make it reusable
                //setup shadow DOM
                let shadowRoot = this.attachShadow({ mode: "open" });
                this.id = id;
                const t = document.querySelector("#jQuery-DataTable-Template");
                const instance = t.content.cloneNode(true);
                shadowRoot.appendChild(instance);
            }

            static get observedAttributes()
            {
                return ["width", "height"];
            }

            connectedCallback()
            {
                console.log("connectedCallback");
                console.log("this", this);
            }
            disconnectedCallback()
            {
                console.log("disconnectedCallback");
            }
            attributeChangedCallback(attrName, oldVal, newVal)
            {
                console.log("attributeChangedCallback");

                //height changed
                if (attrName == "height")
                {
                    //adjust the height of the scrollable area
                    $('div.dataTables_scrollBody').height(newVal);
                }
            }
            adoptedCallback()
            {
                console.log("adoptedCallback");
            }
        }

        customElements.define(DataTablesHelper.getCustomControlName(), jQueryDataTable);
    },

    /*
     * This returns the HTML template for the data table
     */
    getJQueryDataTableTemplate: function ()
    {
        console.log("getJQueryDataTableTemplate");

        return "<template id=\"jQuery-DataTable-Template\">"
        + "<style>"
        + "p { color: orange; }"
        + "</style>"
        + "<p>I'm in Shadow DOM. My markup was stamped from a &lt;template&gt;.</p>"
        + "<table></table>"
        + "</template>";
    },

    getCustomControlName: function ()
    {
        return "jquery-datatable";
    },

    /*
     * Configure a custom control and append an instance of it to the target scope
     *
     * @param {guid} id - will be used as the id attr for the custom element created in the template
     * @param {string} scopeSelector - defines the element that will receive a new child
     * @returns {promise} resolves when the custom control is finished being defined
     */
    getCustomControl: function (id, scopeSelector)
    {
        var ctor, instance;

        //we only need to do the setup once per page
        if (!this.webComponentSetup)
        {
            DataTablesHelper.setupCustomControl(id);
        }

        ctor = customElements.get(DataTablesHelper.getCustomControlName());
        instance = new ctor();

        document.querySelector(scopeSelector).appendChild(instance);
        console.log("instance added to DOM");

        return customElements.whenDefined(DataTablesHelper.getCustomControlName());
    }
};
