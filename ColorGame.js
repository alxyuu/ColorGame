const generateColors = (arrLength) => {
	const colors = []
	for(let i = 0; i<arrLength; i++){
		const red = Math.floor(Math.random()*256)
		const green = Math.floor(Math.random()*256)
		const blue = Math.floor(Math.random()*256)
		colors.push('rgb(' + red + ', ' + green + ', ' + blue + ')')
	}
	return colors
}

const pickColor = colors => {
	const random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

const changeColors = (color, squares) => {
	for(let i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color
	}
}

const reset = (squares, messageDisplay, colorDisplay, newbutton, tiles) => {
	document.getElementsByTagName('h1')[0].style.backgroundColor = 'steelblue'
	messageDisplay.textContent = ''
	newbutton.textContent = 'New Colors'
	colors = generateColors(tiles)
	console.log(colors)
	pickedColor = pickColor(colors)
	colorDisplay.textContent = pickedColor;
	colorDisplay.style.color = 'white'

	for(let i=0; i<squares.length; i++){
		const square = squares[i]
		square.style.backgroundColor = '#232323'
		square.style.backgroundColor = colors[i]
	}
	return pickedColor
}

const newGame = () => {
	const squares = document.querySelectorAll('.square')
	const messageDisplay = document.querySelector('#message')
	const colorDisplay = document.getElementById('ColorDisplay')
	let pickedColor
	let tiles = 6
	const easybtn = document.querySelector('#easybtn')
	const hardbtn = document.querySelector('#hardbtn')

	easybtn.addEventListener('click', () => {
		tiles = 3
		hardbtn.classList.remove('selected')
		easybtn.classList.add('selected')
		pickedColor = reset(squares, messageDisplay, colorDisplay, newbutton, tiles)
	})
	hardbtn.addEventListener('click', () => {
		tiles = 6
		hardbtn.classList.add('selected')
		easybtn.classList.remove('selected')
		pickedColor = reset(squares, messageDisplay, colorDisplay, newbutton, tiles)
	})
	
	const newbutton = document.getElementById('newbtn')
	newbutton.addEventListener('click', () => {
		pickedColor = reset(squares, messageDisplay, colorDisplay, newbutton, tiles)
	})

	pickedColor = reset(squares, messageDisplay, colorDisplay, newbutton, tiles)

	for(let i=0; i<squares.length; i++){
		const square = squares[i]
		square.style.backgroundColor = colors[i]
		square.addEventListener('click', () => {
			const clickedColor = square.style.backgroundColor
			console.log(clickedColor)
			console.log(pickedColor)

			if(clickedColor === pickedColor){
				changeColors(clickedColor, squares)
				messageDisplay.textContent = 'Correct!'
				document.getElementsByTagName('h1')[0].style.backgroundColor = clickedColor
				newbutton.textContent = 'Play Again?'
			}
			else {
				square.style.backgroundColor = "#232323"
				messageDisplay.textContent = 'Try Again'
			}
		})
	}
}

newGame()


