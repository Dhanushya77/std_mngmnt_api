import { useState } from "react";
import axios from 'axios'

function Add() {

    const [roll_no, setRoll_no] = useState('')
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [course,setCourse] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/student/', {roll_no,name,email,course}).then((res) => {
            setRoll_no('')
            setName('')
            setEmail('')
            setCourse('')
        }).catch(error => console.log(error.message))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="roll_no" id="roll_no" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} placeholder="Roll no"/>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
            <input type="text" name="course" id="course" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="course"/>
            <input type="submit" value="Add" />
        </form>
    )

}
export default Add