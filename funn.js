console.log("Lets do some funn")
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
function filterfruit() {
    let apple = []
    let orenge  = []
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
          apple.push("🍎")

        } else if (fruit[i] ==="🍊"){
            orenge.push("🍊")
        }
    }
    console.log(apple)
    console.log(orenge)
}
filterfruit()
