var BlobHandler = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {

        // Singleton
        // Private methods and variables
        function _blobConstructor() {
            if (!window.Blob) {
                return false;
            }

            return true;
        }
        function _chromeFileRead() {
            var chosenFileEntry = null;

            chooseFileButton.addEventListener('click', function (e) {
                chrome.fileSystem.chooseEntry({ type: 'openFile' }, function (readOnlyEntry) {
                    readOnlyEntry.file(function (file) {
                        var reader = new FileReader();

                        reader.onerror = errorHandler;
                        reader.onloadend = function (e) {
                            console.log(e.target.result);
                        };

                        reader.readAsText(file);
                    });
                });
            });
        }
        function _chromeStorageSave(data) {
            chrome.fileSystem.getWritableEntry(chosenFileEntry, function (writableFileEntry) {
                writableFileEntry.createWriter(function (writer) {
                    writer.onerror = errorHandler;
                    writer.onwriteend = callback;

                    chosenFileEntry.file(function (file) {
                        writer.write(file);
                    });
                }, errorHandler);
            });
        }
        function _chromeSupport() {
            if (chrome) {
                if (!chrome.fileSystem) {
                    console.log("The Chrome File System API is not supported");
                    return false;
                }

                return true;
            }
        }
        function _getBlob() {
            try {
                return new Blob([data], { type: 'application/json' });
            }
            catch (e) {
                // Old browser, need to use blob builder
                window.BlobBuilder = window.BlobBuilder
                    || window.WebKitBlobBuilder
                    || window.MozBlobBuilder
                    || window.MSBlobBuilder;

                if (window.BlobBuilder) {
                    var bb = new BlobBuilder();
                    bb.append(data);
                    return bb.getBlob("application/json");
                }
            }
        }
        function _handleFileReadAbort(evt) {
            alert("File read aborted.");
        }
        function _handleFileReadError(evt) {
            switch (evt.target.error.name) {
                case "NotFoundError":
                    alert("The file could not be found at the time the read was processed.");
                    break;
                case "SecurityError":
                    alert("A file security error occured.");
                    break;
                case "NotReadableError":
                    alert("The file cannot be read. This can occur if the file is open in another application.");
                    break;
                case "EncodingError":
                    alert("The length of the data URL for the file is too long.");
                    break;
                default:
                    alert("File error code " + evt.target.error.name);
            } // switch
        }
        function _html5WebStorageSave(data, name) {
            var that = this;
            var blob = that._getBlob();

            if (blob) {
                name = name || Math.round((new Date()).getTime() / 1000) + ".txt"; // Produces a unique file name every second.
                return window.navigator.msSaveOrOpenBlob(blob, name);
            }
            else {
                console.log("Save not supported");
                return false;
            }
        }
        function _msSaveOrOpenBlobSupported() {
            if (!window.navigator.msSaveOrOpenBlob) {
                // If msSaveOrOpenBlob() is supported, then so is msSaveBlob().
                //document.getElementsByTagName('body')[0].innerHTML = "<h1>The msSaveOrOpenBlob API is not supported</h1>";
                return false;
            }

            return true;
        }
        function _startFileRead(fileObject, handler) {
            var reader = new FileReader();

            // Set up asynchronous handlers for file-read-success, file-read-abort, and file-read-errors:
            reader.onloadend = handler; // "onloadend" fires when the file contents have been successfully loaded into memory.
            reader.abort = this._handleFileReadAbort; // "abort" files on abort.
            reader.onerror = this._handleFileReadError; // "onerror" fires if something goes awry.

            if (fileObject) {
                reader.readAsText(fileObject);
            }
            else {
                console.log("fileObject is null in _startFileRead().");
                return false;
            }
        }
        function _available() {
            return _blobConstructor() && _msSaveOrOpenBlobSupported();
        }

        return _available() ? {
            // Public methods and variables
            //public
            saveFile: function (data) {
                console.log("Helper.saveFile");

                if (!!data) {

                    if (this.htmlBlobSupport()) {
                        this._html5WebStorageSave(data);
                    }
                    else if (this._chromeSupport()) {
                        // todo add Chrome stuff here
                    }
                }
                else {
                    alert("no data");
                }
            },
            handleFileSelection: function (files, handler) {
                if (!files) {
                    alert("The selected file is invalid - do not select a folder. Please reselect and try again.");
                    return;
                }

                // "files" is a FileList of file objects. Try to display the contents of the selected file:
                var file = files[0];
                // The way the <input> element is set up, the user cannot select multiple files.

                if (!file) {
                    alert("Unable to access " + file.name.toUpperCase() + "Please reselect and try again.");
                    return;
                }
                if (file.size === 0) {
                    alert("Unable to access " + file.name.toUpperCase() + " because it is empty. Please reselect and try again.");
                    return;
                }
                if (!file.type.match('text/.*')) {
                    alert("Unable to access " + file.name.toUpperCase() + " because it is not a known text file type. Please reselect and try again.");
                    return;
                }

                // Assert: we have a valid file.

                this._startFileRead(file, handler);
                //document.getElementById('hideWrapper').style.display = 'none'; // Remove the file picker dialog from the screen since we have a valid file.      
            },
            loadFile: function (name, callback) {
                var blob = new Blob();
                // Now the user will have the option of clicking the Save button and the Open button.
                window.navigator.msSaveOrOpenBlob(blob, name);
                return callback(blob) || blob;
            },
        } : null;
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };

})();