export abstract class Component {
  render(selector: string, template: string) {
    const element = document.querySelector(selector);
    if (element === null) return false;
    element.innerHTML = template;
    return true;
  }

  renderAdd(selector: string, template: string) {
    const webElement = document.querySelector(selector);
    if (webElement === null) return false;
    webElement.innerHTML += template;
    return true;
  }

  renderOuter(selector: string, template: string) {
    const webElement = document.querySelector(selector);
    if (webElement === null) return false;
    webElement.outerHTML = template;
    return true;
  }
}
