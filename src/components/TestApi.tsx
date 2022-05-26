import { useEffect, useState } from "react"
import { RootObject } from "../interfaces/Movies"

export default () => {
    const [object, setObject] = useState<RootObject>()

    const getData = () => {
        fetch('https://kinepolisweb-programmation-int.kinepolis.com/api//Programmation/BE/NL/2022-05-25/KBRG/WWW')
          .then((res) => res.json())
          .then((data) => {setObject(data)})
      }

    const films = ()=>{
        console.log('fims')
        console.log(object?.sessions[8].film.id)
    }

    const getFilm = (id:string)=>{
        for (let index in object?.films){
            if (id == object?.films[parseInt(index)].id){
                console.log(object?.films[parseInt(index)].title)
            }
        }
    }
      
    films()
    
    getFilm(object?.sessions[2].film.id)
      useEffect(()=>{
          console.log("loading...")
          getData()
    },[])

    return (
        <div>
            <h1>Titel</h1>
            <h1>{"films"}</h1>
            <h1>Duration</h1>
            <h1>{"duration"}</h1>
        </div>
    )
  }