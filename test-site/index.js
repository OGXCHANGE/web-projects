const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app")
//A function is created called createNoteEl and parameters of id and content is passed in //
function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "empty Note";
    element.value = content

    element.addEventListener("dblclick", ()=>{
      const warning = confirm("do you want to delete this note?")
      if(warning){
        deleteNote(id, element)
    }
    })

    element.addEventListener("input", ()=>{
        updateNote(id, element.value)
    })

    return element;
}

   function deleteNote(){

   }

   function updateNote(){
    
   }

function addNote(){
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
     const noteEl = createNoteEl(noteObj.id, noteObj.content);
     appEl.insertBefore(noteEl, btnEl);
     
     
}

btnEl.addEventListener("click", addNote);