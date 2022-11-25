//buttonElementObject = documentObject.syncWebApiMethod("css id selector")non-null assertion operator
const btn = document.getElementById("btn")!;
//inputElementObject = documentObject.syncWebApiMethod("css id selector")explicit type assertion
const input = document.getElementById("todoinput") as HTMLInputElement;
//formElementObject = documentObject.syncWebApiMethod("css element selector")non null assertion
const form = document.querySelector("form")!;

//formElementObject.asyncWebApiMethod("submitEventString",inline normalAnonymousFunctionExpressionDefinitionCallback(parameter that accepts argument submitEventObject))
form.addEventListener("submit", function (e) {
  //submitEventObject.syncWebApimethod()
  e.preventDefault();
  console.log("Submitted");
});
