function volume_sphere(radius) {
    //Write your code here
    let result=(4/3)*Math.PI*radius*radius*radius;
	return result;
} 

let radius=document.getElementById("radius");
let volume=document.getElementById("volume");
let btn=document.getElementById("submit");

btn.addEventListener("click",()=>
	{
		if(radius<0){
			volume.textContent="NAN";
		}else{
			volume_sphere(radius);
		}
	})

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
