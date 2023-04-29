import Axios from 'axios';
import { useEffect,useState } from "react";

 
function PostAxios(){
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [education,setEducation] = useState("");
    const [profession,setProfession] = useState("");
    const [maritial,setMaritial] = useState("");
    const [children,setChildren] = useState("");
    const [noc,setNoc] = useState("");
    const [income,setIncome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://127.0.0.1:5000/api/predictloan",{
            'Age':parseInt(age,10),
            'Gender':gender,
            'Education':education,
            'Profession':profession,
            'Maritial Status':maritial,
            'Children':children,
            'Number Of Children':parseInt(noc,10),
            'Income':parseInt(income,10)
        })
        .then((response) => {
            var loan = response.data.Prediction;
            setLoan(loan);
            var a = age;
            setA(a);
            console.log(loan);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Age: </label>
                <input type="text" name="title" value={age} onChange={(e)=> setAge(e.target.value)}/>
                <br/><br/>
                <label>Gender: </label>
                <input type="text" name="title" value={gender} onChange={(e)=> setGender(e.target.value)}/>
                <br/><br/>
                <label>Education: </label>
                <input type="text" name="title" value={education} onChange={(e)=> setEducation(e.target.value)}/>
                <br/><br/>
                <label>Profession: </label>
                <input type="text" name="title" value={profession} onChange={(e)=> setProfession(e.target.value)}/>
                <br/><br/>
                <label>Maritial: </label>
                <input type="text" name="title" value={maritial} onChange={(e)=> setMaritial(e.target.value)}/>
                <br/><br/>
                <label>Children: </label>
                <input type="text" name="title" value={children} onChange={(e)=> setChildren(e.target.value)}/>
                <br/><br/>
                <label>No. Of Children: </label>
                <input type="text" name="title" value={noc} onChange={(e)=> setNoc(e.target.value)}/>
                <br/><br/>
                <label>Income: </label>
                <input type="text" name="title" value={income} onChange={(e)=> setIncome(e.target.value)}/>
                <br/><br/>
                <input type="submit" value="Post" />
            </form>
            <p>The Output Is: {result}</p>
        </>
    )
}


export default PostAxios