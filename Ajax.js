function Ajax()
{
    var instance;

    function init()
    {
        function getXHR()
        {
            if (typeof XMLHttpRequest !== 'undefined')
            {
                return new XMLHttpRequest();
            }
            var versions = [
                "MSXML2.XmlHttp.6.0",
                "MSXML2.XmlHttp.5.0",
                "MSXML2.XmlHttp.4.0",
                "MSXML2.XmlHttp.3.0",
                "MSXML2.XmlHttp.2.0",
                "Microsoft.XmlHttp"
            ];

            var xhr;
            for (var i = 0; i < versions.length; i++)
            {
                try
                {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                } catch (e)
                {
                }
            }
            return xhr;
        }

        return {
            send: function (url, callback, method, data, async)
            {
                var request = getXHR();

                if (async === undefined)
                {
                    async = true;
                }

                request.open(method, url, async);
                request.onreadystatechange = function ()
                {
                    if (request.readyState == XMLHttpRequest.DONE)
                    {
                        callback(request.responseText)
                    }
                };

                if (method == 'POST')
                {
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                }

                request.send(data)
            }

            , get: function (url, data, callback, async)
            {
                var query = [];

                for (var key in data)
                {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }

                this.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
            }

            , post: function (url, data, callback, async)
            {
                var query = [];

                for (var key in data)
                {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }

                this.send(url, callback, 'POST', query.join('&'), async)
            }
        };

    }

    return {
        getInstance: function ()
        {
            if (!instance)
            {
                instance = init();
            }
            return instance
        }
    };
};
