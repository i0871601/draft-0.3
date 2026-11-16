function listLesson(role, elements, subject, teacher, classInfo) {
    if(role === 'teacher') {
        elements.contentLesson.innerHTML = '';

        const buttonHTML = `
            <div id="button-add-lesson">
                <p id="tetx-button-add-lesson">Додати урок</p>
            </div>
        `;

        elements.contentLesson.insertAdjacentHTML('beforeend', buttonHTML);
    }
}

function lesson(role, elements, mapLesson, subject, teacher, classInfo) {
    console.log(mapLesson, subject, teacher, classInfo);

    if(mapLesson.length >= 0) listLesson(role, elements, subject, teacher, classInfo);
}