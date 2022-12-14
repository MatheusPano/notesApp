let addBtn = document.getElementById('addBtn');

onload = showNotes();

addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `
            <div  class="noteCard my-2 mx-2 card" style="width:18 rem;">
                <div id="nota" class="card-body">
                    <p class="card-text"> ${element}</p>
                    <h5 class="card-title"> Nota ${index + 1}</h5>
                    
                    <button id="btn btn-danger" onClick="deleteNote()">X</button>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.lenght != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Sem notas!`;
    }
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj=[];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()
}