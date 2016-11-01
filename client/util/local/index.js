/**
 * Created by dima on 24.08.16.
 */
export const loadState =()=>{
    try{

        const gameState=localStorage.getItem('state');
        if(gameState === null){
            return undefined;
        }
        return JSON.parse(gameState);
    }catch(e){
        console.log(e);
        return undefined;
    }
};

export const saveState = (state) =>{
    try{
        const gameState = JSON.stringify(state);
        localStorage.setItem('state', gameState);
    }catch(e){
        console.log(e);
    }
};