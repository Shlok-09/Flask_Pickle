import Axios from 'axios';
import { useEffect, useState } from "react";

function PostAxios(){
    const [yoe,setYoe] = useState("");
    const [result,setResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://127.0.0.1:5000/api/salary",{
            'Years Of Experience': parseInt(yoe,10)
        })
        .then((response) => {
            var salary = response.data.Prediction;
            setResult(salary);
            var a = yoe;
            console.log(salary);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <>
            <div className='form'>
            <form onSubmit={handleSubmit}>
            <label>Years Of Experience: </label>
                <input type="text" name="title" value={yoe} onChange={(e)=> setYoe(e.target.value)}/>
                {/* <input type="submit" value="Post" /> */}
                <button>Submit</button>
                <p>The Output Is: {result}</p>
            </form>
            </div>
        </>
    )
}


export default PostAxios