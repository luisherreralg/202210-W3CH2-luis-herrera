export abstract class Component {
  render(selector: string, template: string) {
    const webElement = document.querySelector(selector);
    if (webElement === null) return false;
    webElement.innerHTML = template;
    return true;
  }

  renderAdd(selector: string, template: string) {
    const webElement = document.querySelector(selector);
    if (webElement === null) return false;
    webElement.innerHTML += template;
    return true;
  }
}
