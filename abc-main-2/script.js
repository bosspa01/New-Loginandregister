const container = document.getElementById('container');
const imgs = document.querySelectorAll('#container img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const hiddenBox = document.querySelector('.hidden1');
const hide = document.querySelector('.hide');
const hiddenBox1 = document.querySelector('.hidden2');
const hide2 = document.querySelector('.hide2');

let li = document.querySelector('.grid');
let spe =document.getElementById('spe1');
let bio = document.getElementById('bio1');
let age = document.getElementById('age1');
let address = document.getElementById('address1');

let pic = document.getElementById('pic');
let big =document.getElementById('big');
let d1 = document.querySelector('.div1');
let d2 = document.querySelector('.div2');
let d3 = document.querySelector('.div3');
let d4 = document.querySelector('.div4');

const cex = document.querySelector('.container')

let idx = 0;
let interval = setInterval(slide, 4000);

function slide() {
    idx++;
    changeImg();
}

function changeImg() {

    if (idx > imgs.length - 1) {
        idx = 0;
    }
     else if (idx < 0) {
        idx = imgs.length - 1;
    }
    const imageWidth = imgs[idx].offsetWidth;

    const translateXValue = -idx * (imageWidth + 0); 

    container.style.transform = `translateX(${translateXValue}px)`;
}

function showUpload() {

     hide.style.display = 'flex';
     hiddenBox.style.display = "flex";
     big.classList.add('active');

}

function choosePic() {
    const file = document.getElementById('pic').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
    const imageDataUrl = e.target.result;
    document.getElementById('pic').value = '';
    }

    reader.readAsDataURL(file);
}
function submit() {

    if(spe.value === '') {
    spe.style.border = '1px solid red'
    Swal.fire({
        icon: "error",
        title: "Some text is missing!",
        text: "Make sure that you fill all of the infomation",
        backdrop: `rgba(255, 0, 0, 0.3)`
      });
    }
    
    else {
        spe.style.border = 'none';
    }

    if(bio.value === '') {
        bio.style.border = '1px solid red'
    }

    else {
        bio.style.border = 'none'
    }

    if(age.value === '') {
         age.style.border = '1px solid red'
    }

    else {
        age.style.border = 'none'
    }

    if(address.value === '') {
          address.style.border = '1px solid red'
    }

    else {
        spe.style.border = 'none'
        bio.style.border = 'none'
        age.style.border = 'none'
        address.style.border = 'none'
        newBox();
        createBox();
        Swal.fire({
            title: "บันทึกข้อมูลเสร็จสิ้น",
            text: "You just helped one life!",
            icon: "success"
          }).then(()=>{
            hide.style.display = "none"
          });
          spe.value = "";
          bio.value = "";
        
          address.value = "";
          big.classList.remove('active')
    }
}

let countryInput = document.getElementById('country');
let cateInput = document.getElementById('cates');

function newBox(){
    // let dog = 'dog';
    // let cat = 'cat';
    // let sum = '';
 
    // if(age.value == 'สุนัข'){
    //    sum = dog ;
      
    // }
    // else {
    //     sum = cat;
      
    // }
    const file = document.getElementById('pic').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
    const imageDataUrl = e.target.result;
    // li.innerHTML +=  `<div id="${sum}" class="box- ${sum}">
    //     <div class="box-img">
    //         <img id="boxImg" src="${imageDataUrl}" width="100px">
    //     </div>
    //     <div class="text-box">
    //         <h2>ที่อยู่ : <span id="${address.value}">${address.value}</span></h2>
    //         <p class="spe">สายพันธ์ุ : <span id="${spe.value}">${spe.value}</span></p>
    //         <p class="age">ชนิด : <span>${age.value}</span></p>
    //         <p class="teeyoo">ช่องทางการติดต่อ : <span>${bio.value}</span></p>
    //         <button onclick="adoptMe()" class="btn">Adopt me!</button>
    //     </div>
    // </div>`;
    createBox(imageDataUrl);
    document.getElementById('pic').value = '';
};

    // li.innerHTML +=  `<div id="${sum}" class="box- ${sum}">
    //     <div class="box-img">
    //         <img id="boxImg" src="" width="100px">
    //     </div>
    //     <div class="text-box">
    //         <h2>ที่อยู่ : <span id="${address.value}">${address.value.trim()}</span></h2>
    //         <p class="spe">สายพันธ์ุ : <span id="${spe.value}">${spe.value}</span></p>
    //         <p class="age">ชนิด : <span>${age.value}</span></p>
    //         <p class="teeyoo">ช่องทางการติดต่อ : <span>${bio.value}</span></p>
    //         <button onclick="adoptMe()" class="btn">Adopt me!</button>
    //     </div>
    // </div>`;

    reader.readAsDataURL(file);
    categories(cateInput.value);
    byCountry(countryInput.value);
};

function createBox(img){
    
    console.log(img);
    let dog = 'dog';
    let cat = 'cat';
    let sum = '';
    if(age.value == 'สุนัข'){
       sum = dog ;
      
    }
    else {
        sum = cat;
      
    }
    li.innerHTML +=  `<div id="${sum}" class="box- ${sum}">
    <div class="box-img">
        <img id="boxImg" src="${img}" width="100px">
    </div>
    <div class="text-box">
        <h2>ที่อยู่ : <span id="${address.value}">${address.value.trim()}</span></h2>
        <p class="spe">สายพันธ์ุ : <span id="${spe.value}">${spe.value}</span></p>
        <p class="age">ชนิด : <span>${age.value}</span></p>
        <p class="teeyoo">ช่องทางการติดต่อ : <span>${bio.value}</span></p>
        <button onclick="adoptMe()" class="btn">Adopt me!</button>
    </div>
</div>`;
}

let dogCate = document.getElementById('Cate-Dog');
let catCate = document.getElementById('Cate-Cat');
let allCate = document.getElementById('Cate-All');

allCate.classList.add('second-active');

function show(param) {
        // console.log(styleBox);
        cex.style.transform = 'translateX(0px)';
        // console.log(param);
        if(param == 'box') {
            let a = document.querySelectorAll('.box-');

            a.forEach((allBox) => {
                allBox.style.display = 'block';
            });

            allCate.classList.add('second-active');
            catCate.classList.remove('second-active');
            dogCate.classList.remove('second-active');
        }
        else if (param == 'dog'){
            let d = document.querySelectorAll('.'+param);
            let c = document.querySelectorAll('.cat');

            d.forEach((DogBox) => {
                DogBox.style.display = 'block';
            });

            c.forEach((CatBox) => {
                CatBox.style.display = 'none';
            });

            dogCate.classList.add('second-active');
            allCate.classList.remove('second-active');
            catCate.classList.remove('second-active');
        }
            else if (param == 'cat') {
                let d = document.querySelectorAll('.'+param);
                let c = document.querySelectorAll('.dog');

                d.forEach((DogBox) => {
                    DogBox.style.display = 'block';
             });

                c.forEach((CatBox) => {
                    CatBox.style.display = 'none';
             });

             catCate.classList.add('second-active');
             dogCate.classList.remove('second-active');
             allCate.classList.remove('second-active');
        }
};

window.addEventListener('scroll',function() {

    let con = document.getElementById('con');
    let box = document.querySelectorAll('.box-');
    let top = document.querySelector('.to-top');

    // if(window.scrollY > 600){
    //     top.style.transform = 'translateX(0px)'
    //     con.style.transform = 'translateX(0px)';
    // }
    // else {
    //     top.style.transform = 'translateX(300px)';
    //     con.style.transform = 'translateX(13300px)';
    // }

    if(window.scrollY > 400) {
        con.style.transform = 'translateX(0px)';
        top.style.transform = 'translateX(0px)'
    }
    else {
        con.style.transform = 'translateX(3300px)';
        top.style.transform = 'translateX(300px)';
    }

});

function adoptMe() {
    hide2.style.display = 'flex';
    hiddenBox1.style.display = 'flex';
    big.classList.add('active')
}



function byCountry(address){
    let mainBox = document.querySelectorAll('.box-');
    console.log(address);
    mainBox.forEach((box)=>{
       console.log(box);
       let h2Element = box.querySelector('h2');
       let addressSpan = h2Element.querySelector('span');
       if(address == addressSpan.innerText){
        Swal.fire({
            icon: "success",
            title: 'ค้นพบที่อยู่',
          }).then(()=>{
            box.style.display = 'flex'
          })
       }
       else if(address == ''){
        Swal.fire({
            icon: "error",
            title: 'กรุณาระบุที่อยู่',
          }).then(()=>{
            box.style.display = 'flex'
          })
       }
       else {
        Swal.fire({
            icon: "error",
            title: "ไม่พบที่อยู่",
          }).then(()=>{
            box.style.display = 'none'
          })
       }
    })
};



function categories(cates){
    let mainBox = document.querySelectorAll('.box-');
    mainBox.forEach((box)=>{
        let spe = box.querySelector('.spe');
        let text =  spe.querySelector('span');
        if(text.innerText === cates && cates !== ''){
            Swal.fire({
                icon: "success",
                title: 'ค้นพบที่สายพันธ์ุที่คุณต้องการ',
              }).then(()=>{
                box.style.display = 'flex'
              })
        }
        else if(cates === ''){
            Swal.fire({
                icon: "error",
                title: 'กรุณาระบุสายพันธ์ุ',
              }).then(()=>{
                box.style.display = 'flex'
              })
           }
        else {
                Swal.fire({
                    icon: "error",
                    title: "ไม่พบที่สายพันธ์ุ",
                  }).then(()=>{
                    box.style.display = 'none'
                  })
        }
    })
};

byCountry(countryInput.value);
categories(cateInput.value);

const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

document.querySelector('.login button').addEventListener('click', () => {
  loginModal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'your_username' && password === 'your_password') {
    alert('เข้าสู่ระบบสำเร็จ!');
    loginModal.style.display = 'none';
  } else {
    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
  }
});