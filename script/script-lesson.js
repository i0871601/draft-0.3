function addLesson(elements, subject, teacher, classInfo) {
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
    elements.contentLesson.innerHTML = '';
    //отримати з останього запису lessonNumber
    mapLesson.forEach(item => {
        let elHTML = "";
        if (item.lessonType === "звичайний") {
            elHTML = `
            <div class="lesson" data-home-work="${item.homeWork}">
                <span class="marks-border"></span>
                <p>${item.lessonNumber}</p>
                <p>${item.Topic}</p>

                <div class="arrow">
                    <span></span>
                    <span></span>
                </div>
            </div>
            `;
        }
        else {
            elHTML = `
            <div class="topic">
                <span></span>
                <p>${item.lessonType}</p>
            </div>
            `;
        }
        elements.contentLesson.insertAdjacentHTML('beforeend', elHTML);
    });

    if(mapLesson.length >= 0 && role === 'teacher') addLesson(elements, subject, teacher, classInfo);
}