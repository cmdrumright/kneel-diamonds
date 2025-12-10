export const orders = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()

    let ordersHTML = orders.map((order) => {
        return `
            Order #${order.id} 
        `
    }).join("</br>")

    return ordersHTML
}
