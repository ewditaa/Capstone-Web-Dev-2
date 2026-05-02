import React, { useState } from 'react'
import students from '../data'

const Reportcard = () => {

  const[studentData, setStudentData] = useState(students)

  console.log(students)
  // let name = 'pratik'
  // let marks = 90

  let studentObj = {
    name:'',
    marks:''
  }

  function submitHandler(event){
    event.preventDefault()

    studentObj.name = event.target.name.value
    studentObj.marks = event.target.marks.value

    console.log(studentObj)


    // students.push(studentObj)
    
    // console.log(students)
    
    setStudentData((preData)=>{
      return [...preData, studentObj]
    })
     
  }


  return (
    <div>
      <h1>Report Card</h1>

      {/* <p>Name :   {data[0].name}  </p>
      <p>Marks :  {data[0].marks}</p>

      <p>Name :   {data[1].name}  </p>
      <p>Marks :  {data[1].marks}</p>

      <p>Name :   {data[2].name}  </p>
      <p>Marks :  {data[2].marks}</p>

      <p>Name :   {data[3].name}  </p>
      <p>Marks :  {data[3].marks}</p> */}

      <form onSubmit={submitHandler}>
          <input placeholder='name'  name='name'/>
          <input placeholder='marks' name='marks'/>
          <button type='submit'>Add</button>
      </form>

      {
        studentData.map((item,index) => {
          return <div key={index}>
            <p>Name : {item.name}</p>
            <p>Marks : {item.marks}</p>
            <hr/>

          </div>
        })

      }




    </div>
  )
}

export default Reportcard