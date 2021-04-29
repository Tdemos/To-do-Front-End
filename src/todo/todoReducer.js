const INITIAL_STATE = {
    description: 'Ler livro...',
    list: [{
        _id: 1,
        description: 'Pagar fatura de cartao',
        done: true
    }, {
        _id: 2,
        description: 'Reuniao com a equipe a 10:00',
        done: true
    },
    {
        _id: 3,
        description: 'Consulta medica na terca depois do almoco',
        done: true
    }]
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        default:
            return state;
    }
}