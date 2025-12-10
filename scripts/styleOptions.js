import { setStyleChoice } from "./transientState.js"

const handleStyleChange = (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

export const styleOptions = async () => {
    document.addEventListener("change", handleStyleChange)

    const response = await fetch("http://localhost:8088/styles")
    const options = await response.json()

    let html = `
        <article id="style-options" class="items">
            <h2>Styles</h2>
    `
    html += options.map((option) => {
        return `
            <label class="Radio" for="style-${option.id}">
                <input class="Radio-input" type="radio" name="style" value="${option.id}" > ${option.style}
            </label>
        `
    }).join("")
    html += `
        </article>
    `
    return html
}
