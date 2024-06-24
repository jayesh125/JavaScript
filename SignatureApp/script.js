document.addEventListener('DOMContentLoaded', (event) => {
    const colorPicker = document.getElementById('colorPicker');
    const bgColorPicker = document.getElementById('bgColorPicker');
    const canvas = document.getElementById('myCanvas');

    const clearButton = document.getElementById('clear');
    const downloadButton = document.getElementById('download');
    const fontSizePicker = document.getElementById('fontSize');
    const retrieveButton = document.getElementById('reset');
    const ctx = canvas.getContext('2d');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let canvasData = '';

    function resizeCanvas() {
        canvasData = canvas.toDataURL();

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        if (canvasData) {
            let img = new Image();
            img.src = canvasData;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        }
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    colorPicker.addEventListener('change', (e) => {
        ctx.strokeStyle = e.target.value;
        ctx.fillStyle = e.target.value;
    });

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();

            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseout', () => {
        isDrawing = false;
    });

    bgColorPicker.addEventListener('change', (e) => {
        ctx.fillStyle = e.target.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        canvasData = canvas.toDataURL();
    });

    fontSizePicker.addEventListener('change', (e) => {
        ctx.lineWidth = e.target.value;
    });

    clearButton.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasData = canvas.toDataURL();
    });

    downloadButton.addEventListener('click', () => {
        let link = document.createElement('a');
        link.download = 'sign.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    retrieveButton.addEventListener('click', () => {
        let savedCanvas = localStorage.getItem('canvasContents');

        if (savedCanvas) {
            let img = new Image();
            img.src = savedCanvas;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        }
    });

    downloadButton.addEventListener('click', () => {
        localStorage.setItem('canvasContents', canvas.toDataURL());
    });
});
