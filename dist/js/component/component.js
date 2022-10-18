export class Component {
    render(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML = template;
        return true;
    }
    renderAdd(selector, template) {
        const webElement = document.querySelector(selector);
        if (webElement === null)
            return false;
        webElement.innerHTML += template;
        return true;
    }
    renderOuter(selector, template) {
        const webElement = document.querySelector(selector);
        if (webElement === null)
            return false;
        webElement.outerHTML = template;
        return true;
    }
}
