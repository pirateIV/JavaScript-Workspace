// File API, Blobs and FileReaders

const fileReader = document.getElementById('upload')

// fileReader.addEventListener('change', readFileAsString)
fileReader.addEventListener('change', showImage)

// function readFileAsString() {
//   const files = this.files
//   if (files.length === 0) {
//     console.log('no files is selected');
//     return;
//   }

//   const reader = new FileReader()
//   reader.onload = (event) => {
//     console.log('File content', event.target.result)
//   };
//   reader.readAsText(files[0])
// }

// Read file as a dataURL
function showImage(evt) {
  const files = evt.target.files

  if (files.length === 0) {
    console.log('No files selected')
    return;
  }
  var reader = new FileReader()
  reader.onload = (event) => {
    var img = new Image(200)
    img.onload = function () {
      document.body.appendChild(img)
    };
    img.src = event.target.result;
  }
  reader.readAsDataURL(files[0])
}