var selectedRow = null;

//Show Alert
function showAlert(message,className){
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    
    container.insertBefore(div,main);

    setTimeout(()=> document.querySelector('.alert').remove(),3000);   
}

//clearfields
function clearfields(){
    document.querySelector('#firstname').value ='';
    document.querySelector('#lastname').value ='';
    document.querySelector('#rollNumber').value ='';
}

//Add data 
document.querySelector('#student-form').addEventListener("click",(e)=>{
let tar= e.target;
//getting the values
const firstName = document.querySelector('#firstname').value;
const lastName = document.querySelector('#lastname').value;
const rollno = document.querySelector('#rollNumber').value;

if(tar.classList.contains("submit")){
    //validate the name input
if(firstName=='' || lastName=='' || rollno==''){
    showAlert("Please fill in allfields","danger");
}
else{
    if(selectedRow==null){
        const list = document.querySelector("#student-list");
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollno}</td>
        <td>
        <a href="#" class="btn btn-success edit">Edit</a>
        <a href="#" class="btn btn-success delete">Delete</a>
        </td>
        `;

        list.appendChild(row);
        selectedRow=null;
        showAlert("Student has been Added","dark");
        
    }else{
        console.log('hehehe');
        selectedRow.children[0].textContent = firstName;
        selectedRow.children[1].textContent = lastName;
        selectedRow.children[2].textContent = rollno;
        selectedRow = null;
        showAlert("Student info edited","danger");
    }
    clearfields();
}
}



})

//Edit data
document.querySelector('#student-list').addEventListener('click',(e)=>{
    let res = e.target;
    if(res.classList.contains('edit')){
      console.log('hi zaid');
      selectedRow =res.parentElement.parentElement;
      document.querySelector('#firstname').value = selectedRow.children[0].textContent; 
      document.querySelector('#lastname').value = selectedRow.children[1].textContent; 
      document.querySelector('#rollNumber').value = selectedRow.children[2].textContent; 

    }
})

//Delete Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    let ans = e.target;
    if (ans.classList.contains("delete")){
    ans.parentElement.parentElement.remove() ;
    showAlert("Student Data Deleted","dark");
    }
    });
