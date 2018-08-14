var canvas = document.getElementById("canvas")
canvas.width = canvas.parentNode.clientWidth
canvas.height = canvas.parentNode.clientHeight
console.log(canvas)
var ctx = canvas.getContext('2d')
const pie = 3.14159263
const w = canvas.width
const h = canvas.height

var phase1 = 1
var phase1Dir = false
var phase2 = 1
var phase2Dir = false
var phase3 = 1
var phase3Dir = false

function start() {
	requestAnimationFrame(draw)
}

function draw() {

	phase1 += phase1Dir ? 0.02 : -0.02
	phase2 += phase2Dir ? 0.05 : -0.05
	phase3 += phase3Dir ? 0.1 : -0.1

	if (phase1 > 1) {
		phase1Dir = false
	} else if (phase1 <= 0.01) {
		phase1Dir = true
	}
	if (phase2 > 0.5) {
		phase2Dir = false
	} else if (phase2 < 0) {
		phase2Dir = true
	}
	if (phase3 > 1.0) {
		phase3Dir = false
	} else if (phase3 < 0) {
		phase3Dir = true
	}

	var mx = w / 2
	var my= h / 2 


	ctx.lineWidth=1

	ctx.beginPath()

	

	const component1 = Math.floor(Math.abs(phase1 * 255))
	const component2 = Math.floor(Math.abs(phase2 * 255))
	const component3 = Math.floor(Math.abs(phase2 * 255))
	const alpha = phase2 + 0.5

	ctx.clearRect(0,0,w,h)

	const style = "rgba("+component1+","+component2+","+component3+","+alpha+")"
	ctx.strokeStyle=style

	for (var i = pie; i >  - pie; i -= 0.01) {

		console.log(phase1)
		
		const cos = Math.cos(i + phase1)
		const sin = Math.sin(i + phase2)													

		const fromX = mx + (phase3 * 120)
		const fromY = my + (phase3 * phase2 * 200)

		ctx.moveTo(fromX, fromY)

		const deltaX = sin * w / (phase1 * phase2)
		const deltaY = cos * h / (phase2)

		const toX = fromX + deltaX
		const toY = fromY + deltaY

		ctx.lineTo(toX + phase1 * 2, toY + phase1)
		
		
	}

	ctx.stroke()


	requestAnimationFrame(draw)
}


start()