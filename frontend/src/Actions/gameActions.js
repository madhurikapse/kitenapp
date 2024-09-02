import Api from '../axiosConfig';

export const START_GAME = 'START_GAME';
export const DRAW_CARD = 'DRAW_CARD';
export const GAME_OVER = 'GAME_OVER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD';



export const startGame = () => async (dispatch) => {
    try {
        const response = await Api.post('/game/start');
        dispatch({ type: START_GAME, payload: response.data });
    } catch (error) {
        console.error('Error starting game:', error);
    }
};

export const drawCard = () => async (dispatch) => {
    try {
        const response = await Api.post('/game/draw');
        dispatch({ type: DRAW_CARD, payload: response.data });
    } catch (error) {
        console.error('Error drawing card:', error);
    }
};

export const addUser = (username) => async (dispatch) => {
    try {
        const response = await Api.post('/user/add', { username });
        dispatch({ type: ADD_USER, payload: response.data });
    } catch (error) {
        console.error('Error adding user:', error);
    }
};

export const updateLeaderboard = () => async (dispatch) => {
    try {
        const response = await Api.get('/user/leaderboard');
        dispatch({ type: UPDATE_LEADERBOARD, payload: response.data });
    } catch (error) {
        console.error('Error updating leaderboard:', error);
    }
};



