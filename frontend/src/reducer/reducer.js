import { ADD_USER, DRAW_CARD, GAME_OVER, START_GAME, UPDATE_LEADERBOARD } from "../Actions/gameActions.js";


const initialState = {
    deck: [],
    gameStatus: 'not_started',
    user: null,
    leaderboard: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return { ...state, deck: action.payload.deck, gameStatus: 'playing' };
        case DRAW_CARD:
            return { ...state, deck: action.payload.deck, gameStatus: action.payload.gameStatus };
        case GAME_OVER:
            return { ...state, gameStatus: 'lost' };
        case ADD_USER:
            return { ...state, user: action.payload };
        case UPDATE_LEADERBOARD:
            return { ...state, leaderboard: action.payload };
        default:
            return state;
    }
};

export default reducer;
