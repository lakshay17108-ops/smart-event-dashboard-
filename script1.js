let inputBox = document.querySelector('#inputBox');
let eventDate = document.querySelector('#eventDate');
let eventCategory = document.querySelector('#eventCategory');
let eventDesc = document.querySelector('#eventDesc');
let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
let emptyMsg = document.querySelector('#emptyMsg');

addBtn.addEventListener('click', function() {
    if(inputBox.value === "") return alert("Please enter a title");

    
    if(emptyMsg) emptyMsg.style.display = 'none';

    let eachList = document.createElement('div');
    eachList.classList.add('eachList');
    
    eachList.innerHTML = `
        <div style="display:flex; justify-content: space-between;">
            <strong>${inputBox.value}</strong>
            <small>${eventDate.value}</small>
        </div>
        <p style="font-size: 12px; color: #666;">Category: ${eventCategory.value}</p>
        <p style="font-size: 14px;">${eventDesc.value}</p>
        <div class="action-btns">
            <button class="del-btn" onclick='deleteHandler(this)'>Delete</button>
            <button class="upd-btn" onclick='updateHandler(this)'>Update</button>
        </div>
    `;

    list.append(eachList);

    
    inputBox.value = '';
    eventDesc.value = '';
});

function deleteHandler(btn) {
    btn.closest('.eachList').remove();
    if (list.children.length === 0) {
    
    }
}

function updateHandler(btn) {
    let parent = btn.closest('.eachList');
    let oldTitle = parent.querySelector('strong').textContent;
    let newTitle = prompt('Update Event Title:', oldTitle);
    if(newTitle) {
        parent.querySelector('strong').textContent = newTitle;
    }
}

document.querySelector('#clearAllBtn').addEventListener('click', () => {
    list.innerHTML = '';
});