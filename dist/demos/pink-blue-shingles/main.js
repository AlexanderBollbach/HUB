const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.parentNode.clientWidth;
canvas.height = canvas.parentNode.clientHeight;
const w = canvas.width;
const h = canvas.height;

phase = 0;


function draw() {
	ctx.clearRect(0, 0, w, h);

	// ctx.fillStyle = "white";
	// ctx.fillRect(0, 0, w, h);

	const MAX_Iters = 50;

	const fullColor = 255;
	// phase = 100

	for (let i = 15; i < MAX_Iters; i++) {



		if (phase > 250) {
			phase = 0;
		}

		phase += 24

		ctx.fillStyle = "rgba(255, 255," + Math.floor(phase) + ",1)";;

		const wSlice = w / MAX_Iters;
		ctx.fillRect(i * wSlice, 0, wSlice, h);
	}
}

(function loop() {
	draw();
	requestAnimationFrame(loop);
})();
