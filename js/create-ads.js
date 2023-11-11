// Function to handle image preview
    function previewImages() {
    var previewContainer = document.getElementById('imagePreviewContainer');
    var files = document.getElementById('imageUpload').files;

    // Clear previous previews
    previewContainer.innerHTML = '';

    for (var i = 0; i < Math.min(files.length, 5); i++) {
    var file = files[i];
    var reader = new FileReader();

    reader.onload = function (e) {
    var imageDiv = document.createElement('div');
    imageDiv.classList.add('col-sm-1');

    var img = document.createElement('img');
    img.src = e.target.result;
    img.alt = 'Image ' + (i + 1);
    img.classList.add('img-fluid');

    imageDiv.appendChild(img);
    previewContainer.appendChild(imageDiv);
};

    reader.readAsDataURL(file);
}
}

    // Attach the preview function to the change event of the file input
    document.getElementById('imageUpload').addEventListener('change', previewImages);
