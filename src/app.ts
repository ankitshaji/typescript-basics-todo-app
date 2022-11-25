//declaring the TodoObjectInterface
interface TodoObjectInterface {
  text: string;
  completed: boolean;
}
//declaring a variable that stores reference to arrayObject instance
const myVarTodoObjectArrayObject: TodoObjectInterface[] = [];

//buttonElementObject:HTMLElement = documentObject.syncWebApiMethod("css id selector")non-null assertion operator
const btn = document.getElementById("btn")!;
//inputElementObject:HTMLInputElement = documentObject.syncWebApiMethod("css id selector")explicit type assertion
const input = document.getElementById("todoinput") as HTMLInputElement;
//formElementObject:HTMLFormElement = documentObject.syncWebApiMethod("css element selector")non null assertion
const form = document.querySelector("form")!;
//ulElementObject:HTMLElement = documentObject.syncWebApiMethod("css element selector")
const ul = document.getElementById("todolist");

//non-inline namedFunctionExpressionDefenitionCallback(parameter that accepts argument submitEventObject)
function handleSubmitCallback(e: SubmitEvent): void {
  //submitEventObject.syncWebApimethod()
  e.preventDefault();
  //inputElementObject.property
  const newTodoText = input.value;
  //liElementObject:HTMLLIElement = documentObject.syncWebApiMethod("elementName")
  const newLi = document.createElement("li");
  //inputElementObject:HTMLInputElement = documentObject.syncWebApiMethod("elementName")
  const newCheckbox = document.createElement("input");
  //inputElementObject.property
  newCheckbox.type = "checkbox";
  //liElementObject.syncMethod("stringObject")
  newLi.append(newTodoText);
  //liElementObject.syncMethod(elementObject)
  newLi.append(newCheckbox);
  //ulElementObject explicit optional operator.syncMethod(elementObject)
  ul?.append(newLi);
  //inputElementObject.property
  input.value = "";
}

//formElementObject.asyncWebApiMethod("submitEventString",non-inline namedFunctionExpressionDefenitionCallback(parameter that accepts argument submitEventObject))
form.addEventListener("submit", handleSubmitCallback);
