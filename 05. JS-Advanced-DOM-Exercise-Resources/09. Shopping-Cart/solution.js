function solve() {
    let button = document.getElementsByTagName("button")
    let textArea = document.getElementsByTagName("textarea")[0]
 
    // let list = {}
    let list = new Map()
 
    Array.from(button).forEach(b => {
        b.addEventListener("click", (e) => {
            if (e.target.className === "add-product") {
                let currentElement = e.target.parentElement
 
                let priceElement = currentElement.nextElementSibling.innerHTML
                let brandElement = currentElement.previousElementSibling.children[0].innerHTML
 
                // if (!list[brandElement]) {
                if (!list.has(brandElement)) {
                    // list[brandElement] = 0
                    list.set(brandElement, 0)
                }
                // list[brandElement] += priceElement
                list.set(brandElement, list.get(brandElement) + Number(priceElement))
 
                textArea.value += `Added ${brandElement} for ${priceElement} to the cart.\n`
            } else {
 
                // let totalPrice = Number(Object.values(list).reduce((a,b)=>a+b))
                let totalPrice = Number(Array.from(list.values()).reduce((a,b)=>+a+ +b, 0))
                // textArea.innerHTML+=`You bought ${Object.keys(list).join(', ')} for ${totalPrice.toFixed(2)}.`
                textArea.value+=`You bought ${Array.from(list.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`
 
                // Array.from(button).forEach(b => b.disabled = true)
                let buttons = Array.from(document.querySelectorAll('button'));
                buttons.forEach(button => button.disabled = true);
 
            }
        })
    })
}
