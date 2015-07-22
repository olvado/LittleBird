export default class LittleBird {
  constructor(props) {
    this.props = props;
  }

  initialize(props) {
    const base = document.querySelector((props && props.base) ? props.base : 'body');
    const { controller, action } = base.dataset;

    this.execute('common', 'initialize');
    this.execute(controller, 'initialize');
    this.execute(controller, action);
  }

  execute(controllerName, actionName) {
    let action;
    const { props } = this;

    if (!controllerName || !actionName) {
      return;
    }

    if (props[controllerName]) {
      action = props[controllerName][actionName];
      if (typeof action === 'function') {
        console.log('render: ' + controllerName + '#' + actionName);
        action();
      }
    }
  }
}
