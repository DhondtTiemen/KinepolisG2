import { useEffect, useState } from "react"

export default ({page}:{page:number}) => {
    const [timer, setTimer] = useState(0)
    const [width, setWidth] = useState<number>(0)
    const [timeOver, setTimeOver] = useState<boolean>(false)
    const checkWidth =(w:number,page:number)=>{
        if (page == 1)
        {
            if (w>80){
                return 80
            }
            return w
        }
        if (page == 2){
            if (w>80){
                if (w>160){
                    return 80
                }
                return w -80

            }else{
                return 0
            }
        }
    }
    const checkTimeOver = ()=>{
        if (timeOver==false){
            return 'opacity-1'
        }else{
            return 'opacity-0'
        }
    }
    useEffect(()=>{
        timer >= 0 && setTimeout(()=> setTimer(timer+ 1),1000);
        setWidth(width+8)
        if (timer > 20)
        {
            setTimeOver(true)
            setTimer(0)
            setWidth(0)
        }
        if (timer==1){
            setTimeOver(false)
        }
    },[timer])
    if (page==1){
        return (
            <div className="bg-alpha-xxx-light rounded-full w-20 h-3">
                <div className={`${checkTimeOver()}`}>
                    <div style={{width:checkWidth(width,page)}} className={`bg-warning rounded-full h-3 ease-linear duration-1000`}></div>

                </div>
                <div>Countdown: {timer}---{width}---{width-80}-----{checkTimeOver()}</div>
            </div>
        )

    }else{
        return (
            
            <div className="bg-alpha-xxx-light rounded-full w-20 h-3">
                <div className={`${checkTimeOver()}`}>
                    <div style={{width:checkWidth(width,page)}} className="bg-warning rounded-full h-3 ease-linear duration-1000"></div>
                </div>
            </div>
        )
    }
  }