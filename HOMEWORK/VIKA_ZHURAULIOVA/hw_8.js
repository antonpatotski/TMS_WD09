import styles from './VikaZhurauliova.scss'

export const home8 = () => {
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
    const InnerHtml = () => {
        const hw_6 = document.querySelector('#FOR_HOMEWORK');
        const div = createNode({ node: 'div', className: 'container', innerText: 'Hola amigo!' });
        hw_6.innerHTML = `
        <div class="container">
            <div class="${styles.containerWrap}">
                <div class="row first-line">
                    <div class="col-3 ">
                        <button class="w-100 first-line-btn">Delete All</button>
                    </div>
                    <div class="col">
                        <input class="w-100 first-line-input text-center" placeholder="Enter todo ..."> </input>
                    </div>
                    <div class="col-3">
                        <button class="w-100 first-line-btn">Add</button>
                    </div>
                </div>
                <div class="row flex-column second">
                    <div class="second-line">
                        <div class="row align-items-center">
                            <div class="col ">
                                <div class="form-check second-line-check">
                                  <input class="form-check-input second-line-check-mark" type="checkbox" value="" id="defaultCheck1">
                                </div>
                            </div>
                            <div class="col-9">
                                <input class="w-100 first-line-input text-center second-line-input" placeholder="Enter todo ..."> </input>
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <button class="cancel-cross"> x</button>
                                    <div class="cancel-date">
                                        <p class="cancel-text">Date</p>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                     <div class="second-line">
                        <div class="row align-items-center">
                            <div class="col ">
                                <div class="form-check second-line-check">
                                  <input class="form-check-input second-line-check-mark" type="checkbox" value="" id="defaultCheck1">
                                </div>
                            </div>
                            <div class="col-9">
                                <input class="w-100 first-line-input text-center second-line-input" placeholder="Todo text ... "> </input>
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <div class="cancel-cross">
                                        <p class="cancel-text">x</p>
                                    </div>
                                    <div class="cancel-date">
                                        <p class="cancel-text">Date</p>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
        `
    }
    InnerHtml()
}