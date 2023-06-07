import './SemenykRoman.scss'

export const home7 = () => {
    const InnerHtml = () => {
        const hw_6 = document.querySelector('#FOR_HOMEWORK');
        hw_6.innerHTML = `
<body>
    <div class="container">
        <h1 class="text-center title"> Extreme level</h1>
        <div class="container">
            <div class="container-wrap text-center">
                <div class="row m-30">
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg w-100 first-line-btn delete">Delete All</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg  w-100">Delete Last</button>
                    </div>
                    <div class="col-6">
                        <input class="form-control form-control-lg  w-100" type="text" placeholder="Enter todo ...">
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg w-100 buttonAdd">Add</button>
                    </div>
                </div>
                <div class="row  m-30">
                    <div class="col">
                        <p class="cancel-text all">All: 2</p>
                    </div>
                    <div class="col">
                        <p class="cancel-text completed">Completed: 1</p>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg w-100">Show All</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg w-100">Show Completed</button>
                    </div>
                    <div class="col">
                        <input class="form-control form-control-lg  w-100" type="text" placeholder="Search ...">
                    </div>
                </div>
                <div class="row flex-column second align-items-center">
                    <div class="second-line w-80 content delbtn" style="margin: 10px auto;">
                        <div class="row align-items-center">
                            <div class="col ">
                                <div class="form-check second-line-check">
                                    <input class="form-check-input second-line-check-mark checkBox" type="checkbox"
                                        value="" id="defaultCheck1">
                                </div>
                            </div>
                            <div class="col-9">
                                <input class="inputF w-100 first-line-input text-center second-line-input"
                                    placeholder="Enter todo ...">
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <button class="btn btn-success w-80 delbtn"> x</button>
                                    <div class="cancel-date">
                                        <p class="cancel-text date"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-line  w-80 content " style="margin: 10px auto;">
                        <div class="row align-items-center">
                            <div class="col ">
                                <div class="form-check second-line-check">
                                    <input class="form-check-input second-line-check-mark checkBox" type="checkbox"
                                        value="" id="defaultCheck1">
                                </div>
                            </div>
<div class="col-9">
                                <input class="w-100 first-line-input text-center second-line-input"
                                    placeholder="Enter todo ...">
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <button class="btn btn-success w-80 delbtn"> x</button>
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

        <script src="./index.js">

        </script>

</body>
    `
    }

    InnerHtml()
    const parentElement = document.querySelector(".buttonAdd");
    const container = document.querySelector(".container-wrap");
    const content = document.querySelector(".content");
    const all = document.querySelector(".all");
    let number = 2;
    const deleteBtn = document.querySelector(".delete");

    parentElement.addEventListener("click", function () {
        const card = content.cloneNode(true);
        const date2 = document.querySelector(".date");
        const date = new Date();
        container.appendChild(card);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        date2.textContent = day + "." + month;

        number++;
        const deleteButtons = document.querySelectorAll(".delbtn");
        deleteButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const item=this.closest(".content");
                item.remove();
            });
        });

        all.textContent = `All: ${number}`;
    });

    const deleteButtons = document.querySelectorAll(".delbtn");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const item = event.target.closest(".content");
            item.remove();
        });
    });

    deleteBtn.addEventListener('click',function ()
    {
        const elements = document.querySelectorAll(".content");
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
        number = 0;
        all.textContent = `All: ${number}`;
    });


}