export class Component {
    render(selector, template) {
        const webElement = document.querySelector(selector);
        if (webElement === null)
            return false;
        webElement.innerHTML = template;
        return true;
    }
    renderAdd(selector, template) {
        const webElement = document.querySelector(selector);
        if (webElement === null)
            return false;
        webElement.innerHTML += template;
        return true;
    }
}
