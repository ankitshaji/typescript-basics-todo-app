//declaring the TodoObjectInterface
interface TodoObjectInterface {
  text: string;
  completed: boolean;
}

//declaring a variable that stores reference to arrayObject instance returned from a namedFunctionObject() execution
const myVarTodoObjectArrayObject: TodoObjectInterface[] = retriveTodos();

//buttonElementObject:HTMLElement = documentObject.syncWebApiMethod("css id selector")non-null assertion operator
const btn = document.getElementById("btn")!;
//inputElementObject:HTMLInputElement = documentObject.syncWebApiMethod("css id selector")explicit type assertion
const input = document.getElementById("todoinput") as HTMLInputElement;
//formElementObject:HTMLFormElement = documentObject.syncWebApiMethod("css element selector")non-null assertion operator
const form = document.querySelector("form")!;
//ulElementObject:HTMLElement = documentObject.syncWebApiMethod("css element selector")
const ul = document.getElementById("todolist");

//arrayInstanceObject.syncMethod(non-inline namedFunctionObjectCallback)
myVarTodoObjectArrayObject.forEach(createElements);

//(hoisted up to top of scope)
//namedFunctionExpressionDefenition(no parameter)
function retriveTodos(): TodoObjectInterface[] {
  //arrayObjectJsonStringObject = localStorageObject.syncMethod("key")
  const myVarTodosObjectArrayObjectJsonStringObject =
    window.localStorage.getItem("todos");
  //type narrowing process check
  if (myVarTodosObjectArrayObjectJsonStringObject === null) return [];
  //implcit type annotation solidified
  //jsonObject.syncMethod(arrayObjectJsonStringObject/jsonStringObject))
  return window.JSON.parse(myVarTodosObjectArrayObjectJsonStringObject);
}

//(hoisted up to top of scope)
//namedFunctionExpressionDefenition(no parameter)
function storeTodos(): void {
  //localStorageObject.syncMethod("key","value"-jsonObject.syncMethod(jsObject/arrayInstanceObject))
  window.localStorage.setItem(
    "todos",
    JSON.stringify(myVarTodoObjectArrayObject)
  );
}

//(hoisted up to top of scope)
//namedFunctionExpressionDefenition(parameter that accepts argument todoObject)
function createElements(myParTodoObject: TodoObjectInterface): void {
  //liElementObject:HTMLLIElement = documentObject.syncWebApiMethod("elementName")
  const newLi = document.createElement("li");
  //inputElementObject:HTMLInputElement = documentObject.syncWebApiMethod("elementName")
  const newCheckbox = document.createElement("input");
  //inputElementObject.property
  newCheckbox.type = "checkbox";
  //inputElementObject.property = todoObject.property
  newCheckbox.checked = myParTodoObject.completed;
  //inputElementObject.asyncWebApiMethod("changeEventString",inline normalAnonymousFunctionExpressionDefinitionCallback(parameter-changeEventObject))
  newCheckbox.addEventListener("change", function (e): void {
    //todoObject.property= inputElementObject.property
    myParTodoObject.completed = newCheckbox.checked;
    //namedFunctionObject() execution
    storeTodos();
  });
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
  //namedFunctionObject(todoObject) execution
  createElements(newTodoObject);
  //arrayInstanceObject.syncMethod(todoObject)
  myVarTodoObjectArrayObject.push(newTodoObject);
  //namedFunctionObject() execution
  storeTodos();
}

//formElementObject.asyncWebApiMethod("submitEventString",non-inline namedFunctionObjectCallback(parameter that accepts argument submitEventObject))
form.addEventListener("submit", handleSubmitCallback);
