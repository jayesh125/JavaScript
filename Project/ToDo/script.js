let write = document.getElementById("write");
let todolist = document.getElementById("todolist");

write.addEventListener("keyup", function (e){
    if (e.key == "Enter") {
        addToDo(this.value);
        this.value='' //for empty the input after enter
    }

    function addToDo(val){
        let list = document.createElement("li");
        list.innerHTML = `${val}`;
        todolist.appendChild(list);
        // console.log(val);
    }
});