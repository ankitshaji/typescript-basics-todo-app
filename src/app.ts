//buttonElementObject = documentObject.syncWebApiMethod("css id selector")non-null assertion operator
const btn = document.getElementById("btn")!;
//inputElementObject = documentObject.syncWebApiMethod("css id selector")explicit type assertion
const input = document.getElementById("todoinput") as HTMLInputElement;
//buttonElementObject.asyncWebApiMethod("clickEventString",normalAnonymousFunctionExpressionDefinitionCallback(parameter-clickEventObject))
btn.addEventListener("click", function (e) {
  window.alert(input.value);
  input.value = "";
});
