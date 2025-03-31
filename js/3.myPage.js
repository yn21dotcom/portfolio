// editing profile
let wrap2 = document.getElementsByClassName('wrap2')[0];
function edit(num) {
    if(num == 0) {
        // wrap2.innerHTML = ``;
        wrap2.innerHTML = `
            <input type="radio" name="" id="popRd">
            <div class="layerPopup">
            <!-- user info -->
                <div class="popups popUser">
                    <div class="topBar">
                        <div class="popTitle">Edit profile</div>
                        <label for="popRd" class="close">
                            <div class="closeLeft closeBar"></div>
                            <div class="closeRight closeBar"></div>
                        </label>
                    </div>

                    <!-- name -->
                    <div class="pop2ContentsWrap">
                        <div class="formField">
                            <input type="text" name="" id="popFirst" maxlength="50" value="John" placeholder=" ">
                            <label for="popFirst">First name</label>
                        </div>
                        <div class="formField">
                            <input type="text" name="" id="popLast" maxlength="50" value="Doe" placeholder=" ">
                            <label for="popLast">Last name</label>
                        </div>
                    </div>
                    <!-- mobile -->
                    <div class="formField">
                        <input type="tel" name="" id="popmobile" maxlength="50" value="+82 10 1234 5678" placeholder=" ">
                        <label for="lastName">Mobile number</label>
                    </div>
                    <!-- email -->
                    <div class="popCommentWrap">
                        <div class="formField cover">
                            <input type="email" name="" id="popEmail" maxlength="50" value="example@email.com" placeholder=" ">
                            <label for="popEmail">Email address</label>
                        </div>
                        <div class="comment">Email address used for login can't be changed</div>
                    </div>
                    <!-- password -->
                    <div class="formField">
                        <input type="password" name="" id="popPw" maxlength="50" value="000000000000000" placeholder=" ">
                        <label for="popPw">Password</label>
                    </div>
                    <!-- confirm password -->
                    <div class="formField">
                        <input type="password" name="" id="popConPw" maxlength="50" value="000000000000000" placeholder=" ">
                        <label for="popConPw">Confirm password</label>
                    </div>

                    <div class="popButtons">
                        <div class="cancel"><u>Cancel</u></div>
                        <div class="save">Save</div>
                    </div>
                </div>
            </div>
        `;
    }
    else if(num == 1) {
        // wrap2.innerHTML = ``;
        wrap2.innerHTML = `
        <input type="radio" name="" id="popRd">
        <div class="layerPopup">
            <!-- addresses -->
            <div class="popups popAddr">
                <div class="topBar">
                    <div class="popTitle">Edit address</div>
                    <label for="popRd" class="close">
                        <div class="closeLeft closeBar"></div>
                        <div class="closeRight closeBar"></div>
                    </label>
                </div>

                <!-- country/region -->
                <div class="formField">
                    <input type="text" name="" id="popCountry" minlength="1" maxlength="50" value="Somenation" placeholder=" ">
                    <label for="popCountry">Country/region</label>
                </div>
                <!-- company -->
                <div class="formField">
                    <input type="text" name="" id="popCompany" maxlength="50" value="" placeholder=" ">
                    <label for="popCompany">Company</label>
                </div>
                <!-- name -->
                <div class="pop2ContentsWrap">
                    <div class="formField">
                        <input type="text" name="" id="popFirst" minlength="1" maxlength="50" value="John" placeholder=" ">
                        <label for="popFirst">First name</label>
                    </div>
                    <div class="formField">
                        <input type="text" name="" id="popLast" minlength="1" maxlength="50" value="Doe" placeholder=" ">
                        <label for="popLast">Last name</label>
                    </div>
                </div>
                <!-- zipcode -->
                <div class="formField">
                    <input type="number" name="" id="popZip" minlength="5" maxlength="5" value="00000" placeholder=" ">
                    <label for="popZip">Postal code</label>
                </div>
                <!-- province/city -->
                <div class="pop2ContentsWrap">
                    <div class="formField">
                        <input type="text" name="" id="popProvince" minlength="1" maxlength="50" value="Whatprovince" placeholder=" ">
                        <label for="popProvince">Province</label>
                    </div>
                    <div class="formField">
                        <input type="text" name="" id="popCity" minlength="1" maxlength="50" value="Anycity" placeholder=" ">
                        <label for="popCity">City</label>
                    </div>
                </div>
                <!-- address -->
                <div class="formField">
                    <input type="text" name="" id="popAddr" minlength="1" maxlength="50" value="123 Street, Town, Whatprovince 00000, Somenation" placeholder=" ">
                    <label for="popAddr">Address</label>
                </div>
                <!-- apt/suite -->
                <div class="formField">
                    <input type="text" name="" id="popApt" minlength="1" maxlength="50" value="Suite 456" placeholder=" ">
                    <label for="popApt">Apartment, suite, etc (optional)</label>
                </div>
                <!-- mobile -->
                <div class="formField">
                    <input type="tel" name="" id="popMobile" maxlength="50" value="+82 10 1234 5678" placeholder=" ">
                    <label for="popMobile">Mobile number</label>
                </div>

                <div class="botBar">
                    <div class="delete">Delete</div>
                    <div class="popButtons">
                        <div class="cancel"><u>Cancel</u></div>
                        <div class="save">Save</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

// adding address
function addAddr() {
    wrap2.innerHTML = `
    <input type="radio" name="" id="popRd">
    <div class="layerPopup">
        <!-- addresses -->
        <div class="popups popAddr">
            <div class="topBar">
                <div class="popTitle">Edit address</div>
                <label for="popRd" class="close">
                    <div class="closeLeft closeBar"></div>
                    <div class="closeRight closeBar"></div>
                </label>
            </div>

            <!-- country/region -->
            <div class="formField">
                <input type="text" name="" id="popCountry" minlength="1" maxlength="50" value="" placeholder=" ">
                <label for="popCountry">Country/region</label>
            </div>
            <!-- company -->
            <div class="formField">
                <input type="text" name="" id="popCompany" maxlength="50" value="" placeholder=" ">
                <label for="popCompany">Company</label>
            </div>
            <!-- name -->
            <div class="pop2ContentsWrap">
                <div class="formField">
                    <input type="text" name="" id="popFirst" minlength="1" maxlength="50" value="" placeholder=" ">
                    <label for="popFirst">First name</label>
                </div>
                <div class="formField">
                    <input type="text" name="" id="popLast" minlength="1" maxlength="50" value="" placeholder=" ">
                    <label for="popLast">Last name</label>
                </div>
            </div>
            <!-- zipcode -->
            <div class="formField">
                <input type="number" name="" id="popZip" minlength="5" maxlength="5" value="" placeholder=" ">
                <label for="popZip">Postal code</label>
            </div>
            <!-- province/city -->
            <div class="pop2ContentsWrap">
                <div class="formField">
                    <input type="text" name="" id="popProvince" minlength="1" maxlength="50" value="" placeholder=" ">
                    <label for="popProvince">Province</label>
                </div>
                <div class="formField">
                    <input type="text" name="" id="popCity" minlength="1" maxlength="50" value="" placeholder=" ">
                    <label for="popCity">City</label>
                </div>
            </div>
            <!-- address -->
            <div class="formField">
                <input type="text" name="" id="popAddr" minlength="1" maxlength="50" value="" placeholder=" ">
                <label for="popAddr">Address</label>
            </div>
            <!-- apt/suite -->
            <div class="formField">
                <input type="text" name="" id="popApt" minlength="1" maxlength="50" value="" placeholder=" ">
                <label for="popApt">Apartment, suite, etc (optional)</label>
            </div>
            <!-- mobile -->
            <div class="formField">
                <input type="tel" name="" id="popMobile" maxlength="50" value="" placeholder=" ">
                <label for="popMobile">Mobile number</label>
            </div>

            <div class="botBar">
                <div class="delete">Delete</div>
                <div class="popButtons">
                    <div class="cancel"><u>Cancel</u></div>
                    <div class="save">Save</div>
                </div>
            </div>
        </div>
    </div>
    `;
}

// logging out
function logout() {
    wrap2.innerHTML = `
        <input type="radio" name="" id="popRd">
        <div class="layerPopup">
            <!-- addresses -->
            <div class="popups">
                <div class="topBar tbLogout">
                    <div class="popTitle popLogout">You have been logged out.</div>
                    <label for="popRd" class="close">
                        <div class="closeLeft closeBar"></div>
                        <div class="closeRight closeBar"></div>
                    </label>
                </div>
            </div>
        </div>
    `;
}

// image functions
let img = document.getElementsByTagName('img');
let popImg = document.getElementsByClassName('popImg')[0];

let idx = -1
for(let i=0; i<img.length; i++) {

    img[i].addEventListener('click', function(){
        // console.log(i);
        // image popup
        wrap2.innerHTML = `
        <input type="radio" name="" id="popRd">
        <div class="layerPopup">
            <div class="popups imgPopup">
                <div class="topBar">
                    <label for="popRd" class="close">
                        <div class="closeLeft closeBar"></div>
                        <div class="closeRight closeBar"></div>
                    </label>
                </div>
                <div class="leftArrow arrow" onclick="left()">⟨</div>
                <div class="popImgBox">
                    <img src="${this.src}" class="popImg" alt="">
                </div>
                <div class="rightArrow arrow" onclick="right()">⟩</div>
            </div>
        </div>
        `;
        idx = i
        
        // image arrows - color
        if(idx == 0 || idx == 8) {
            document.getElementsByClassName('leftArrow')[0].style.color = 'rgb(170, 170, 170)';
        }
        if(idx == 7 || idx == 11) {
            document.getElementsByClassName('rightArrow')[0].style.color = 'rgb(170, 170, 170)';
        }
    })

    // image, left arrow function
    let array = ['13', '16', '30', '45', '55', '20', '59', '17', '1', '61', '25', '8'];
    function left() {
        document.getElementsByClassName('rightArrow')[0].style.color = 'inherit';
        if(idx == 0) {
            document.getElementsByClassName('popImgBox')[0].innerHTML = `
            <img src="./img/koneil/${array[0]}.jpg" class="popImg" alt="">
            `;
            idx = 0;
        }
        else if(idx == 8) {
            document.getElementsByClassName('popImgBox')[0].innerHTML = `
            <img src="./img/koneil/${array[8]}.jpg" class="popImg" alt="">
            `;
            idx = 8;
        }
        else {
            console.log(array[idx]);
            document.getElementsByClassName('popImgBox')[0].innerHTML = `
            <img src="./img/koneil/${array[idx-1]}.jpg" class="popImg" alt="">
            `;
            idx = idx-1;
            if(idx == 0 || idx == 8) {
                document.getElementsByClassName('leftArrow')[0].style.color = 'rgb(170, 170, 170)';
            }

        }
    }

    // image, right arrow function
    function right() {
        document.getElementsByClassName('leftArrow')[0].style.color = 'inherit';
        if(idx == 7) {
            document.getElementsByClassName('popImgBox')[0].innerHTML = `
            <img src="./img/koneil/${array[7]}.jpg" class="popImg" alt="">
            `;
            idx = 7;
        }
        else if(idx == 11) {
            document.getElementsByClassName('popImgBox')[0].innerHTML = `
            <img src="./img/koneil/${array[11]}.jpg" class="popImg" alt="">
            `;
            idx = 11;
        }
        else {
            document.getElementsByClassName('popImgBox')[0].innerHTML = `
            <img src="./img/koneil/${array[idx+1]}.jpg" class="popImg" alt="">
            `;
            idx = idx+1;

            if(idx == 7 || idx == 11) {
                document.getElementsByClassName('rightArrow')[0].style.color = 'rgb(170, 170, 170)';
            }
        }
    }

}

// image hover
let imgBox = document.getElementsByClassName('imgBox');
for(let i=0; i<imgBox.length; i++) {
    imgBox[i].addEventListener('mouseenter', function(){
        imgBox[i].style.scale = '1.05';
        img[i].style.border = '2px solid black';
    })

    imgBox[i].addEventListener('mouseleave', function(){
        imgBox[i].style.scale = '1';
        img[i].style.border = '';
    })

}