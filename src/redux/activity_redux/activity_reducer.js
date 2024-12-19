const initState={ count: 0 }

const createReducer = (state =initState , action) => {
    switch (action.type) {
        case 'Increament':
            return state.count + 1;
        case 'Decreament':
            return state.count - 1;
        default:
            return state.count

    }

}