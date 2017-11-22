//if (window.addEventListener("load", fn, false))
//{
//    console.log("domEventLoaded");
//}
//if (document.addEventListener("DOMContentLoaded", fn, false))
//{
//    console.log("domEventLoaded");
//}

window.onload = fn;

//if (window.addEventListener)
//{
//    window.addEventListener('load', fn)
//} else
//{
//    window.attachEvent('onload', fn)
//}

/* 
I set up the entire js app.
I handle dependency injection for the controllers
I will instantiate the appropriate template when it is requested by the user.
So I will need to accept user input to select a template, some business logic, and data
then I can put that all together and build a UI

Something I just though of...what if the user could select a position in the DOM and add a template there?
Might be too difficult.
*/
function fn() {
    console.log("App.fn");
    //var container = document.createElement("div");

    // this allows the user to select where the data is stored/retrieved
    var dbuic;
    var dss;
    var target = "#container";
    var container;
    var dataSourceSelector;
    var uiSelector;

    container = GetDataBoundUIContainer(target);
    dataSourceSelector = GetDataSourceSelector(container.Selector);
    uiSelector = GetUISelector(container.Selector);
}

//print the data selector dialogue and the UI selector dialogue side by side

function GetDataSourceSelector(target) {
    console.log("App.GetDataSourceSelector");
    var dataSourceSelector = {};

    dataSourceSelector.model = Models().dataSourceSelector;
    dataSourceSelector.view = new Views.dataSourceSelector(target);
    dataSourceSelector.controller = Controllers.dataSourceSelector;
    dataSourceSelector.markup = dataSourceSelector.view.render(dataSourceSelector.model);
    dataSourceSelector.Selector = Helper.GetAttributeSelector
    (
        constants.selectors.Attributes.DataId,
        constants.dataSourceSelector.ids.Self
    );

    dataSourceSelector.Draw = Draw;

    return dataSourceSelector;
}

function GetDataBoundUIContainer(target) {
    console.log("App.GetDataBoundUIContainer");
    var dataBoundUIContainer = {};

    dataBoundUIContainer.view = new Views.dataBoundUIContainer(target);
    dataBoundUIContainer.model = Models().dataBoundUIContainer;
    dataBoundUIContainer.controller = Controllers.dataBoundUIContainer;
    dataBoundUIContainer.markup = dataBoundUIContainer.view.render();
    dataBoundUIContainer.Selector = Helper.GetAttributeSelector
    (
        constants.selectors.Attributes.DataId,
        constants.dataBoundUIContainer.ids.Self
    );
    dataBoundUIContainer.Draw = Draw;

    /*
        Wireup events via pubsub.

        use pubsub between the model and controller, 
        and events between the view and the controller.
        this is because events can't be associated with view components until they are rendered.

        The pubsub wireup process needs to have some error checking 
        that will look at the controller being sent in and
        return a failure message if the controller doesn't have an appropriate set of logical functions
        that are correctly named.  
        
        I could allow the user to associate multiple controllers with a view and model
        and delay the error checking until a function is called.  This would allow the user to 
        select one controller that implements some of the functionality they want, 
        and another to do the rest.  This could be a nightmare.  
        I don't have the foresight to know for sure.
    */

    // subscribe to events that are raised by the model when it changes
    // these changes will typically trigger functions in a related controller to fire
    // the controller will then update the view.
    // need a way to uniquely identify the data sources.  just using the string that names the 
    // store isn't enough because there are multiple sources that contain stores.  
    //PubSub.Subscribe(model + ".Add", function () { dataBoundUIContainer.controller.Add() }, null);
    //PubSub.Subscribe(model + ".Update", function () { dataBoundUIContainer.controller.Update() }, null);
    //PubSub.Subscribe(model + ".Remove", function () { dataBoundUIContainer.controller.Remove() }, null);
    //console.log("Views.dataBoundUIContainer", Views.dataBoundUIContainer);
    //console.log("App.dataBoundUIContainer", dataBoundUIContainer);
    //console.log("App.dataBoundUIContainer.view", dataBoundUIContainer.view);
    //console.log("App.dataBoundUIContainer.view.render", dataBoundUIContainer.view.render);

    return dataBoundUIContainer;
}

function GetUISelector(target, guid) {
    console.log("App.GetUISelector");
    var uiSelector = {};
    // the store should already exist when the user is prompted for UI selection, so this can be passed in
    uiSelector.Guid = guid;
    uiSelector.Model = Models().uiSelector;
    uiSelector.View = new Views.uiSelector(target);
    uiSelector.Controller = Controllers.uiSelector();
    uiSelector.Markup = uiSelector.View.render(uiSelector.Model);
    uiSelector.Selector = Helper.GetAttributeSelector
    (
        constants.selectors.Attributes.DataId,
        constants.uiSelector.ids.Self
    );

    uiSelector.Draw = Draw;

    //need to wire up this event to the draw function of the selected template
    uiSelector.View.bindDdlSelectUI_SelectedIndexChanged(function (value) {

        //get the model from the store by referencing the guid
        var selector = Helper.GetAttributeSelector("data-id","view");
        var view = uiSelector.Controller.Select(value, selector);
        return view.render(DataService.Load(uiSelector.Guid));
    });


    // // wireup events via pubsub
    // // I think the answer is to use pubsub between the model and controller, and events between the view and the controller.
    // // If I remember correctly, this is because events can't be associated with view components until they are rendered.
    // //returnMe.view.bindAdd(view.guid);
    // //controller.bindAdd(view.guid);
    // //model.bindAdd("DivListAddRow");
    //
    //var viewPrefix = GetViewPrefix(guid);
    //var modelPrefix = GetModelPrefix(guid);
    //var controllerPrefix = GetControllerPrefix(guid);
    //
    // // model events
    //PubSub.Subscribe(controllerPrefix + "Update", function () { model.Update(); }, model);
    //
    // // controller events
    //PubSub.Subscribe(modelPrefix + "Update", function () { controller.Update(); }, controller);

    return uiSelector;
}
/* 
I handle dependency injection for the controllers
At this point, I only instantiate one divList, but in the future,
I will instantiate the appropriate template when it is requested by the user.
So I will need to accept user input to select a template, some business logic, and data
then I can put that all together and build a UI
*/
function divList(name) {
    console.log("App.divList");
    var returnMe = {};
    // the store should already exist when the user is prompted for UI selection, so this can be passed in
    returnMe.model = new DataBaseModel(new Store(name));
    returnMe.template = DivListTemplate;
    returnMe.view = DivListView(returnMe.template);
    returnMe.controller = new DivListController(returnMe.model, returnMe.view, ".sheet");
    return returnMe;
}

function SetupDivListSubscriptions(view, model, controller) {
    console.log("App.SetupDivListSubscriptions");
    // wireup events via pubsub
    // I think the answer is to use pubsub between the model and controller, 
    // and events between the view and the controller

    view.bindAdd(view.guid);
    controller.bindAdd(view.guid);
    model.bindAdd("DivListAddRow");

    var viewPrefix = that.getViewPrefix(guid);
    var modelPrefix = that.getModelPrefix(guid);
    var controllerPrefix = that.getControllerPrefix(guid);

    // model events
    PubSub.Subscribe(controllerPrefix + "Insert", function () {
        model.Insert();
    }, model);
    PubSub.Subscribe(controllerPrefix + "Update", function () {
        model.Update();
    }, model);
    PubSub.Subscribe(controllerPrefix + "Delete", function () {
        model.Delete();
    }, model);
    PubSub.Subscribe(controllerPrefix + "Read", function () {
        model.Get();
    }, model);

    // controller events
    PubSub.Subscribe(modelPrefix + "Insert", function () {
        controller.Insert();
    }, controller);
    PubSub.Subscribe(modelPrefix + "Update", function () {
        controller.Update();
    }, controller);
    PubSub.Subscribe(modelPrefix + "Delete", function () {
        controller.Delete();
    }, controller);
    PubSub.Subscribe(modelPrefix + "Read", function () {
        controller.Get();
    }, controller);
}
function GetViewPrefix(key) {
    console.log("App.GetViewPrefix");
    return GetPrefix("View", key);
}
function GetModelPrefix(key) {
    console.log("App.GetModelPrefix");
    return GetPrefix("Model", key);
}
function GetControllerPrefix(key) {
    console.log("App.GetControllerPrefix");
    return GetPrefix("Controller", key);
}
/*
  I provide a unique id for an instance of the view
  @param {string} key I am a unique identifier for an instance of this view
*/
function GetPrefix(component, key) {
    console.log("App.GetPrefix");
    return component + "." + key + ".";
}

/*
  I map the UI logic to published events
  @param {string} key I am a unique identifier for an instance of this view
*/
function fdsa(key) {
    console.log("App.fdsa");
    var that = this;
    var prefix = GetPrefix(key);

    PubSub.Subscribe(prefix + "Insert", function () {
        that.addRow();
    }, that);
    PubSub.Subscribe(prefix + "Update", function () {
        that.updateUI();
    }, that);
    PubSub.Subscribe(prefix + "Select", function () {
        that.renderList();
    }, that);
    PubSub.Subscribe(prefix + "Delete", function () {
        that.removeRow();
    }, that);
}

//generic drawing function to be added to template objects
function Draw(target, position) {
    this.markup = this.view.render(this.model);
    //target.insertAdjacentHTML(position, this.markup.innerHTML);
    this.Reference = document.querySelector(this.Selector);
}
