"use strict";
//buttonElementObject:HTMLElement = documentObject.syncWebApiMethod("css id selector")non-null assertion operator
const btn = document.getElementById("btn");
//inputElementObject:HTMLInputElement = documentObject.syncWebApiMethod("css id selector")explicit type assertion
const input = document.getElementById("todoinput");
//formElementObject:HTMLFormElement = documentObject.syncWebApiMethod("css element selector")non null assertion
const form = document.querySelector("form");
//ulElementObject:HTMLElement = documentObject.syncWebApiMethod("css element selector")
const ul = document.getElementById("todolist");
//formElementObject.asyncWebApiMethod("submitEventString",inline normalAnonymousFunctionExpressionDefinitionCallback(parameter that accepts argument submitEventObject))
form.addEventListener("submit", function (e) {
    //submitEventObject.syncWebApimethod()
    e.preventDefault();
});
