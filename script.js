const photos = [
    "https://res.cloudinary.com/derrickstahlman/image/upload/v1669750551/family_photo4_v9visz.jpg",
    "https://res.cloudinary.com/derrickstahlman/image/upload/v1669750544/family_photo3_mutscy.jpg",
    "https://res.cloudinary.com/derrickstahlman/image/upload/v1669750559/family_photo5_envxh0.jpg",
    "https://res.cloudinary.com/derrickstahlman/image/upload/v1669750525/family_photo1_a91p10.jpg",
    "https://res.cloudinary.com/derrickstahlman/image/upload/v1669750533/family_photo2_uhzquz.jpg",
    "https://res.cloudinary.com/derrickstahlman/image/upload/v1669750566/family_photo6_tqk8kb.jpg"
];




var imgTag = document.querySelector(".image");
var count = 0;

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}

function prev(){
    count--;
    if(count < 0){
        count = photos.length -1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}














function removeForm(){
    var form = document.querySelector("form");

    form.style.display = "none";
}


if(document.querySelector("#submitForm")){
document.querySelector("#submitForm").addEventListener("click", removeForm);
}


function addText(){
    var show = document.querySelector(".show");

    show.style.display = "block";
}

if(document.querySelector("#submitForm")){
document.querySelector("#submitForm").addEventListener("click", addText);
}
