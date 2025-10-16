function selectElement(selector) {
    return document.querySelector(selector);
}

function selectAllElements(selector) {
    return document.querySelectorAll(selector);
}

function createElement(tag, className = '', attributes = {}) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

function appendChild(parent, child) {
    parent.appendChild(child);
}

function removeElement(element) {
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function addEventListenerToElement(element, event, handler) {
    if (element) {
        element.addEventListener(event, handler);
    }
}

function setElementText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

function setElementHTML(element, html) {
    if (element) {
        element.innerHTML = html;
    }
}

export {
    selectElement,
    selectAllElements,
    createElement,
    appendChild,
    removeElement,
    addEventListenerToElement,
    setElementText,
    setElementHTML
};