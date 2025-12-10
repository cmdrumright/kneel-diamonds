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
