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

//(hoisted up to top of scope)
//namedFunctionExpressionDefenition(parameter that accepts argument todoObject)
function createElements(myParTodoObject: TodoObjectInterface): void {
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
  ul?.append(newLi);
  //inputElementObject.property
  input.value = "";
}

//(hoisted up to top of scope)
//non-inline namedFunctionExpressionDefenitionCallback(parameter that accepts argument submitEventObject)
function handleSubmitCallback(e: SubmitEvent): void {
  //submitEventObject.syncWebApimethod()
  e.preventDefault();
  //declaring a variable that stores reference to objectLiteral(todoObject)
  const newTodoObject: TodoObjectInterface = {
    //inputElementObject.property
    text: input.value,
    completed: false,
  };
  //namedFunctionExpressionDefenition(todoObject)
  createElements(newTodoObject);
  //arrayInstanceObject.syncMethod(todoObject)
  myVarTodoObjectArrayObject.push(newTodoObject);
  //localStorageObject.syncMethod("key","value"-jsonObject.syncMethod(jsObject/arrayInstanceObject))
  window.localStorage.setItem(
    "todos",
    JSON.stringify(myVarTodoObjectArrayObject)
  );
}

//formElementObject.asyncWebApiMethod("submitEventString",non-inline namedFunctionExpressionDefenitionCallback(parameter that accepts argument submitEventObject))
form.addEventListener("submit", handleSubmitCallback);
