function listLesson(elements, subject, teacher, classInfo) {
    elements.contentLesson.innerHTML = '';

    const buttonHTML = `
        <input type="checkbox" id="button-add" class="input">
        <form id="add-lesson-form">
            <label for="button-add" id="button-add-form-closed">
                <span></span>
                <span></span>
            </label>
            
        </form>
        <label for="button-add" id="button-add-lesson">Додати урок</label>
    `;

    elements.contentLesson.insertAdjacentHTML('beforeend', buttonHTML);
}

function lesson(role, elements, mapLesson, subject, teacher, classInfo) {
    console.log(mapLesson, subject, teacher, classInfo);

    if(mapLesson.length >= 0 && role === 'teacher') listLesson(elements, subject, teacher, classInfo);
}