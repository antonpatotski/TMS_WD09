import './AntonPatotski.scss'

export const lesson_7 = () => {
  const node = `
      <div class="mb-3 antony-test">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
         type="email"
         name="email"
         class="form-control registration-form-email"
         id="exampleInputEmail1"
         aria-describedby="emailHelp"
         />
        <button class="btn btn-primary someTest">Primary button</button>
        <a href="#" target="_blank">Link</a>
      </div>
    `;
  const delegationNode = `
      <ul class="mb-3 antony-test">
        <li class="hidden">1 <span>span  <i>italic</i></span></li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>
            5
            <button>button</button>
        </li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
    `;

  const insertNode = (nodeElem) => {
    const rootNode = document.querySelector('#FOR_HOMEWORK');

    rootNode.innerHTML = nodeElem;
  }


  const InnerHtmlTest = () => {
    insertNode(node)

    const btn = document.querySelector('#FOR_HOMEWORK .btn');
    const input = document.querySelector('.registration-form-email');

    input.oninput = (event) => {
      const currentValue = event.target.value;
      const forbiddenChar = ['!', '_', '&'];

      if (forbiddenChar.some((char) => currentValue.includes(char))) {
        console.warn('Email is not valid')
      } else {
        console.log('Ok!')
      }
    }

    btn.onfocus = () => {
      console.log('focus')
    }

    btn.onclick = () => {
      console.log('click')
    }
    //
    // input.onblur = () => {
    //   console.log('on blur event')
    // }

    // window.onkeydown = (e) => { console.log('Down') }
    //
    // window.onkeyup = (e) => { console.log('Up') }



    const callback = (event) => {
      event.preventDefault();
    };
    // const link = document.querySelector('#FOR_HOMEWORK a');
    //
    //
    // link.onclick = callback;

    // const callback = () => { console.log('Callback is called') };
    //
    // btn.addEventListener('click', callback);
    //
    //
    // setTimeout(() => {
    //   btn.removeEventListener('click', () => { console.log('Callback is called') });
    // }, 5000)
  }

  const delegationExample = () => {
    insertNode(delegationNode);
    const ul = document.querySelector('.antony-test');
    const liFirst = document.querySelector('.antony-test > li:first-child');
    const span = document.querySelector('.antony-test > li:first-child span');
    const button = document.querySelector('.antony-test button');

    const onCLick = (e) => {
      console.log(e.target.tagName);
    }

    ul.onclick = (event) => { console.log('ul') }
    liFirst.onclick = () => { console.log('li') }
    span.onclick = (e) => {
      e.stopPropagation();
      console.log('span')
    };
    button.onclick = (e) => {
      console.log('Button click')
    }
    ul.addEventListener('click', onCLick, true)
  }

  const exerciseExample = () => {
    const goods = [];
    // Date.now();

    const form = `
      <div class="form-container">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">To-do task</label>
          <input name="value" type="text" class="form-control input-value" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <button type="text" class="btn btn-primary btn-add">Submit</button>
      </div>
      <ul class="items"></ul>
    `;

    insertNode(form);
    const input = document.querySelector('.input-value');
    const btn = document.querySelector('.btn-add');
    const container = document.querySelector('.items');
    container.onclick = (event) => {
      console.log('container event', event);
      if (event.target.tagName === 'BUTTON') {
        const index = event.target.dataset.index;

        removeItem(index);
        // TODO - delete wrong item. NEED FIX
        updateList()
      }
    }

    const updateList = () => {
      container.innerHTML = goods.reduce((acc, { name, id, completed }) => {
        return acc + `
          <li>
            <input type="checkbox" checked="${completed ? 'checked' : 'unchecked'}" class="form-check-input" />
            ${name}
            <button data-index="${id}" class="delete-button btn btn-danger">
              Delete
            </button>
          </li>
        `
      }, '')
    }

    const addItem = (name) => {
      goods.push({ name, id: Date.now(), completed: false });
      updateList();
    };
    const removeItem = (idForDelete) => {
      const elemToDelete = goods.findIndex(item => item.id === idForDelete);
      goods.splice(elemToDelete, 1);
    }

    btn.onclick = (event) => {
      console.log(event)
      addItem(input.value);
    }
  }

  // exerciseExample();
}
