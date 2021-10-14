const container = document.querySelector(".rating");
const items = container.querySelectorAll(".rating-item");

document.addEventListener('click', function (e) {

    let targetElement = e.target;
    do {
        if (targetElement == container) {
            const elClass = e.target.classList;
            if (!elClass.contains('active')) {
                items.forEach(
                    item => item.classList.remove('active'));
                elClass.add('active');
            }
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    const elClass = e.target.classList;
    if (!elClass.contains('active')) {
        items.forEach(
            item => item.classList.remove('active'));

    }
})







