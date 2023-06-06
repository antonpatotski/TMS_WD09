import './VikaZhurauliova.scss'


export const home8 = () => {
        const InnerHtml = () => {
        const hw_6 = document.querySelector('#FOR_HOMEWORK');
        hw_6.innerHTML = `
        <div class="container">
            <div class="container-wrap">
                <div class="row first-line">
                    <div class="col-3 ">
                        <button class="w-100 first-line-btn">Delete All</button>
                    </div>
                    <div class="col">
                        <input class="w-100 first-line-input text-center" placeholder="Enter todo ...">
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
                                <input class="w-100 first-line-input text-center second-line-input" placeholder="Enter todo ..."> 
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <button class="btn btn-success w-80"> x</button>
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
                                <input class="w-100 first-line-input text-center second-line-input" placeholder="Enter todo ..."> 
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <button class="btn btn-success w-80"> x</button>
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
        <h1 class="text-center title"> Extreme level</h1>
        <div class="container">
            <div class="container-wrap">
                <div class="row m-30">
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg w-100 first-line-btn">Delete All</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg  w-100">Delete Last</button>
                    </div>
                    <div class="col-6">
                        <input class="form-control form-control-lg  w-100" type="text" placeholder="Enter todo ...">
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary btn-lg  w-100">Add</button>
                    </div>
                </div>
                <div class="row  m-30">
                    <div class="col">
                        <p class="cancel-text">All: 2</p>
                    </div>
                    <div class="col">
                         <p class="cancel-text">Completed: 1</p>
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
                   <div class="second-line w-80">
                        <div class="row align-items-center">
                            <div class="col ">
                                <div class="form-check second-line-check">
                                  <input class="form-check-input second-line-check-mark" type="checkbox" value="" id="defaultCheck1">
                                </div>
                            </div>
                            <div class="col-9">
                                <input class="w-100 first-line-input text-center second-line-input" placeholder="Enter todo ..."> 
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <button class="btn btn-success w-80"> x</button>
                                    <div class="cancel-date">
                                        <p class="cancel-text">Date</p>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                   <div class="second-line  w-80">
                        <div class="row align-items-center">
                            <div class="col ">
                                <div class="form-check second-line-check">
                                  <input class="form-check-input second-line-check-mark" type="checkbox" value="" id="defaultCheck1">
                                </div>
                            </div>
                            <div class="col-9">
                                <input class="w-100 first-line-input text-center second-line-input" placeholder="Enter todo ..."> 
                            </div>
                            <div class="col">
                                <div class="cancel d-flex flex-column align-items-center">
                                    <button class="btn btn-success w-80"> x</button>
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