import { Dispatch, SetStateAction, useState } from "react";

interface MegaState {
    counter:number;
    counter2:number;
}
function newMegaState ():MegaState{
    return{
        counter:1,
        counter2:1,
    }
}

export default class CounterController{
    state:MegaState=newMegaState();
    setState:Dispatch<SetStateAction<MegaState>> | undefined;
    

    useController= () => {
        [this.state,this.setState] = useState<MegaState>(newMegaState());
    }
     onClick=()=>{
        // setCounter(counter+1);
        if(this.setState) this.setState({...this.state, counter: this.state.counter+1});
    }
    onClickSecond=()=>{
        // setCounter2(counter2+1);
        if(this.setState) this.setState({...this.state, counter2: this.state.counter2+1});
    }
}
