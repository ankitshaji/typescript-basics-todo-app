"use strict";
//declaring a variable that stores reference to arrayObject instance
const myVarTodoObjectArrayObject = [];
//buttonElementObject:HTMLElement = documentObject.syncWebApiMethod("css id selector")non-null assertion operator
const btn = document.getElementById("btn");
//inputElementObject:HTMLInputElement = documentObject.syncWebApiMethod("css id selector")explicit type assertion
const input = document.getElementById("todoinput");
//formElementObject:HTMLFormElement = documentObject.syncWebApiMethod("css element selector")non null assertion
const form = document.querySelector("form");
//ulElementObject:HTMLElement = documentObject.syncWebApiMethod("css element selector")
const ul = document.getElementById("todolist");
//namedFunctionExpressionDefenition(parameter that accepts argument todoObject)
function createElements(myParTodoObject) {
    //liElementObject:HTMLLIElement = documentObject.syncWebApiMethod("elementName")
    const newLi = document.createElement("li");
    //inputElementObject:HTMLInputElement = documentObject.syncWebApiMethod("elementName")
    const newCheckbox = document.createElement("input");
    //inputElementObject.property
    newCheckbox.type = "checkbox";
    //liElementObject.syncMethod(myParTodoObject.property = "stringObject")
    newLi.append(myParTodoObject.text);
    //liElementObject.syncMethod(elementObject)
    newLi.append(newCheckbox);
    //ulElementObject explicit optional operator.syncMethod(elementObject)
    ul === null || ul === void 0 ? void 0 : ul.append(newLi);
    //inputElementObject.property
    input.value = "";
}
//non-inline namedFunctionExpressionDefenitionCallback(parameter that accepts argument submitEventObject)
function handleSubmitCallback(e) {
    //submitEventObject.syncWebApimethod()
    e.preventDefault();
    //declaring a variable that stores reference to objectLiteral(todoObject)
    const newTodoObject = {
        //inputElementObject.property
        text: input.value,
        completed: false,
    };
    //namedFunctionExpressionDefenition(todoObject)
    createElements(newTodoObject);
    myVarTodoObjectArrayObject.push(newTodoObject);
}
//formElementObject.asyncWebApiMethod("submitEventString",non-inline namedFunctionExpressionDefenitionCallback(parameter that accepts argument submitEventObject))
form.addEventListener("submit", handleSubmitCallback);
