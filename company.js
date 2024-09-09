// ==========================why us ============================================
const dropHeader = document.querySelectorAll('.drop-header');
const dropDetails = document.querySelectorAll('.drop-details');   
const dropIcon = document.querySelectorAll('.drop');



dropHeader.forEach((item, index) => {
    item.addEventListener("click", () => {
        dropIcon[index].classList.toggle('fa-angle-down');
        dropIcon[index].classList.toggle('fa-angle-up');
        dropDetails[index].classList.toggle("drop");
        for(let i=0; i<=2; i++){
            if(i!= index){
                dropDetails[i].classList.remove('drop')
                dropIcon[i].classList.add('fa-angle-down')
                dropIcon[i].classList.remove('fa-angle-up')
            }
        }
    })
})

// ============================================portfoilo========================================
// const imgurl=[
//     "img/portfoilo/portfoilo-1.jpg",
//     "img/portfoilo/portfoilo-2.jpg",
//     "img/portfoilo/portfoilo-3.jpg",
//     "img/portfoilo/portfoilo-4.jpg",
//     "img/portfoilo/portfoilo-5.jpg",
//     "img/portfoilo/portfoilo-6.jpg",
//     "img/portfoilo/portfoilo-7.jpg",
//     "img/portfoilo/portfoilo-8.jpg",
//     "img/portfoilo/portfoilo-9.jpg",
//     "img/portfoilo/portfoilo-1.jpg",    
// ]

// let txt='';
// for(i=1; i<=9;i++){
//     txt+=`
//     <div>
//         <div class="pic">
//             <h2>
//                 portfoilo-${i}<br>
//                 <i class="fas fa-plus"></i>
//             </h2>

//         </div>
//     </div>

//     ` 
// }
// const showpicture= (galery)=>{
//     document.querySelector(".picture").innerHTML=galerey;
// }

// showpicture(txt);


