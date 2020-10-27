function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        const mouseX = e.offsetX
        let position = Math.floor(Number(mouseX) / gradient.clientWidth * 100)

        result.textContent = (`${parseInt(position)}%`)
        console.log(position);
    })
}
