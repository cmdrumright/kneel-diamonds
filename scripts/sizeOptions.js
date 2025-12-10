export const sizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const options = await response.json()

    let html = `
        <article id="size-options" class="items">
            <h2>Sizes</h2>
    `
    html += options.map((option) => {
        return `
            <label class="Radio" for="size-${option.id}">
                <input class="Radio-input" type="radio" name="size" value="${option.id}" > ${option.carets}
            </label>
        `
    }).join("")
    html += `
        </article>
    `
    return html
}
