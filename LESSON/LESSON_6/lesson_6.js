import styles from './AntonPatotski.scss'

export const lesson_6 = () => {
  function createNode({ node, attr, className, innerText }) {
    const currentNode = document.createElement(node);

    if (attr) {
      currentNode.setAttribute(attr.key, attr.value);
    }

    if (className) {
      currentNode.className = className;
    }

    if (innerText) {
      currentNode.innerText = innerText;
    }

    return currentNode;
  }
  function documentTest() {
    const hw_6 = document.querySelector('#FOR_HOMEWORK');
    const input = createNode({ node: 'input', attr: { key: 'type', value: 'password' }, className: 'form-control' });

    hw_6.append(input);
  }

  const InnerHtmlTest = () => {
    const hw_6 = document.querySelector('#FOR_HOMEWORK');
    const div = createNode({ node: 'div', className: 'antony-test'/*, innerText: 'Hola amigo!'*/ });
    const onInputClick = (elem) => {
      console.log(elem)
    }

    const doSmth = (e) => {
      console.log('click')
    }

    // div.onclick = onInputClick

    hw_6.innerHTML = `
      <div class="mb-3 ${styles.antonyTestTwo} ${styles.antonyTestBodyContainer}">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text"></div>
        <button class="btn btn-primary someTest">Primary button</button>
      </div>
    `

    const button = document.querySelector('.someTest');

    button.onclick = doSmth;

    // hw_6.append(div);
  }

  InnerHtmlTest();
}
