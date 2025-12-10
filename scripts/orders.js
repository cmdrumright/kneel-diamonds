export const orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()

    let ordersHTML = orders.map((order) => {
        const orderPrice = order.metal.price + order.style.price + order.size.price
        return `
            Order #${order.id} cost $${orderPrice}
        `
    }).join("</br>")

    return ordersHTML
}
