const transientState = {
    metalId: 0,
    styleId: 0,
    sizeId: 0
}

export const setMetalChoice = (choice) => {
    transientState.metalId = choice
}

export const setStyleChoice = (choice) => {
    transientState.styleId = choice
}

export const setSizeChoice = (choice) => {
    transientState.sizeId = choice
}

export const placeOrder = async () => {
    if (transientState.metalId > 0 && transientState.styleId > 0 && transientState.sizeId > 0) {
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }

        const response = await fetch("http://localhost:8088/orders", postOptions)

        const saveEvent = new CustomEvent("orderSaved")
        document.dispatchEvent(saveEvent)

    } else {
        window.alert("Please fill out each option")
    }
}
