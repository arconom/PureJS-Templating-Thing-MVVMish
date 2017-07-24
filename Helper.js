var Helper =
{
    // Get element(s) by CSS selector:
    qs: function (selector, scope)
    {
        console.log("Helper.qs");
        var temp = scope || document;
        return temp.querySelector(selector);
    },
    qsa: function (selector, scope)
    {
        console.log("Helper.qsa");
        var temp = scope || document;
        return temp.querySelectorAll(selector);
    },

    // addEventListener wrapper:,
    $on: function (target, type, callback, useCapture)
    {
        console.log("Helper.&on");
        if (target !== null)
        {
            // if the browser is old
            if (!target.addEventListener)
            {
                target.attachEvent(type, callback);
            }
            else
            {
                target.addEventListener(type, callback, !!useCapture);
            }
        }
    },

    // Attach a handler to event for all elements that match the selector,
    // now or in the future, based on a root element
    $delegate: function (target, selector, type, handler)
    {
        console.log("Helper.&delegate");
        var that = this;

        function dispatchEvent(event)
        {
            var targetElement = event.target;
            var potentialElements = that.qsa(selector, target);
            var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

            if (hasMatch)
            {
                handler.call(targetElement, event);
            }
        }

        // https://developer.mozilla.org/en-US/docs/Web/Events/blur
        var useCapture = type === 'blur' || type === 'focus';

        this.$on(target, type, dispatchEvent, useCapture);
        //window.$on(target, type, dispatchEvent, useCapture);
    },

    // Find the element's parent with the given tag name:
    // $parent(qs('a'), 'div');
    $parent: function (element, tagName)
    {
        console.log("Helper.$parent");
        if (!!element)
        {
            if (!element.parentNode.tagName)
            {
                return;
            }
            else if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase())
            {
                return element.parentNode;
            }
            else
            {
                return this.$parent(element.parentNode, tagName);
            }
        }
        else
        {
            return;
        }
    },
    dynamicSort: function (property)
    {
        console.log("Helper.dynamicSort");
        var sortOrder = 1;

        if (!property)
        {
            return;
        }

        if (property[0] === "-")
        {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a, b)
        {
            var first = a[property];
            var second = b[property];

            if (first.toLowerCase)
            {
                first = first.toLowerCase();
            }

            if (second.toLowerCase)
            {
                second = second.toLowerCase();
            }

            var result = (first < second) ?
                -1 : (first > second) ?
                    1 : 0;

            return result * sortOrder;
        };
    },
    dynamicSortMultiple: function ()
    {
        /*
         * save the arguments object as it will be overwritten
         * note that arguments object is an array-like object
         * consisting of the names of the properties to sort by
         */
        var props = arguments;

        return function (obj1, obj2)
        {
            var i = 0, result = 0, numberOfProperties = props.length;

            /* try getting a different result from 0 (equal)
             * as long as we have extra properties to compare
             */
            while (result === 0 && i 
< numberOfProperties)
            {
                result = dynamicSort(props[i])(obj1, obj2);
                i += 1;
            }

            return result;
        };
    },
    SortNumber: function (a, b)
    {
        return a - b;
    },

    // I get the key/value pairs from HTML controls and put them into a returned object
    getKeyValuePairs: function (list, replaceEmpty)
    {
        var returnMe = {};

        list.forEach(function (item)
        {
            var key = item.getAttribute("key");
            var value = item.value;

            if ((value !== "") && (value !== undefined))
            {
                returnMe[key] = value.trim();
            }
            else if (replaceEmpty)
            {
                returnMe[key] = key;
            }
        });

        return returnMe;
    },

    /*
    I return the id for the given element, supporting older versions of IE
    */
    getId: function (element)
    {
        console.log("Helper.getKey");
        var returnMe = undefined;

        if (element.dataset)
        {
            returnMe = element.dataset.id;
        }
        else
        {
            returnMe = element.getAttribute("data-id");
        }

        console.log("Helper.getKey returning");
        console.log(returnMe);
        return returnMe;
    },
    generateGuid: function ()
    {
        var returnMe = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
        {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

        return returnMe;
    },

    /*
    I make textareas resize to fit the text they contain
    */
    TextareaResize: function resize(el)
    {
        //changes here
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
    },

    /*
    I prevent textareas from being bigger than their container
    */
    TextareaMouseUp: function (sender)
    {
        var parent = sender.parentElement;
        var width = parent.offsetWidth + "px";
        var height = parent.offsetHeight + "px";

        sender.style.height = sender.style.height > height ?
            height : sender.style.height;

        sender.style.width = sender.style.width > width ?
            width : sender.style.width;
    },

    /* 
    I copy source's prototype to destination's prototype!
    source is an object
    destination is an object
    */
    mix: function (source, destination)
    {
        console.log("Helper.mix");
        if ((source.prototype !== undefined) & (source.prototype.length > 0))
        {
            source.prototype.forEach(function (prop)
            {
                if (destination.prototype[prop] === undefined)
                {
                    destination.prototype[prop] = prop;
                }
            });
        }
        else
        {
            return;
        }
    },
    filterByQuery: function (item)
    {
        console.log("Helper.filterByQuery");
        var query = this.query;

        Object.keys(query).forEach(function (key)
        {
            if (item[key] !== undefined)
            {
                if (String(item[key]).toLowerCase().indexOf(query[key].toLowerCase()) === -1)
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        });
        return true;
    },
    debounce: function (func, threshold, execAsap)
    {
        var timeout;

        return function debounced()
        {
            var obj = this, args = arguments;

            function delayed()
            {
                if (!execAsap)
                {
                    func.apply(obj, args);
                }

                timeout = null;
            }

            if (timeout)
            {
                clearTimeout(timeout);
            }
            else if (execAsap)
            {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    },

    /*
    I take a string and a regex and execute the regex on the string
    I return an array containing the original string and the first match
    */
    findRegex: function (value, regex)
    {
        console.log("Helper.findRegex");

        if (!value || value === "")
        {
            return;
        }

        if (!value.indexOf)
        {
            return;
        }
        else
        {
            if (value.search(regex) !== -1)
            {
                var returnMe = regex.exec(value);
                console.log("Helper.findRegex returning");
                console.log(returnMe);
                return returnMe;
            }
        }
    },
    getProperty: function (items, property)
    {
        console.log("Helper.getProperty");
        var returnMe = [];

        items.forEach(function (item)
        {
            returnMe.push(item[property]);
        });

        console.log("Helper.getProperty returning");
        console.log(returnMe);
        return returnMe;
    },

    /*
    I iterate through all matches of regex in value and run callback on each match
    value is a string
    regex is what you're looking for
    callback is a thing you want to do.  it should return a string
    I return a string
    */
    transformAllMatches: function (value, regex, callback)
    {
        console.log("Helper.transformAllMatches");
        var that = this;
        var match = "";
        var returnMe = value;

        if (value)
        {
            match = that.findRegex(value, regex);

            while (match)
            {
                returnMe = callback(returnMe, match, regex);
                match = that.findRegex(returnMe, regex);
            }

            console.log("Helper.transformAllMatches returning");
            console.log(returnMe);

            return returnMe;
        }
        else
        {
            console.log("Helper.transformAllMatches returning");
            console.log(returnMe);

            return value;
        }
    },

    /*
    I try to parse an argument through math.js
    I return a parsed string
    */
    // todo this should probably move into a controller
    doMath: function (thing)
    {
        try
        {
            return math.eval(thing);
        }
        catch (e)
        {
            return thing;
        }
    },
    GetModelPrefix: function (guid)
    {
        return "Model." + guid + ".";
    },
    GetControllerPrefix: function (guid)
    {
        return "Controller." + guid + ".";
    },
    GetViewPrefix: function (guid)
    {
        return "View." + guid + ".";
    },

    Chainify: function(obj) 
    {
        Object.keys(obj).forEach(function(key)
        {
            var member = obj[key];
            if(typeof member === "function" && !/\breturn\b/.test(member))
            {
                obj[key] = function() 
                {
                    member.apply(this, arguments);
                    return this;
                }
            }
        });
    },

    GetAttributeSelector: function(attr, value)
    {
        return "[{{0}}=\"{{1}}\"]"
            .replace("{{0}}", attr)
            .replace("{{1}}", value);
    },

    SetTargetValue: function(target, value){
        var control = document.querySelector(target);
        if(control){
            control.value = value;
        }
    },


    // get viewport dimensions,
    _getViewportDimensions: function ()
    {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return { width: w, height: h };
    }
};
NodeList.prototype.forEach = Array.prototype.forEach;