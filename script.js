function volume_sphere(event) {
  event.preventDefault(); // prevent form reload

  const radius = document.getElementById("radius").value;
  const volume = document.getElementById("volume");

  if (radius && radius > 0) {
    const result = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume.value = result.toFixed(4); // 523.5988 for 5
  } else {
    volume.value = "NAN";
  }
}

window.onload = function() {
  document.getElementById("MyForm").addEventListener("submit", volume_sphere);
};