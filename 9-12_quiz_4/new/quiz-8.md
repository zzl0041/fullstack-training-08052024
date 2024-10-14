8. Write a component that render a list of students infomation.




const studentInfo = [
  {id: xx, name: xx, age: xx}
  {id: xx, name: xx, age: xx}
]

return (
  <div>
    <ul>
      {studentInfo.map((ele) => {
        return <li key={ele.id}>{ele.name}</li>
      }})
    </ul>
  </div>
)


<li>name</li>
<li>name</li>














<!-- const student = [xxx]


return student.map((ele, index) => {
  return (<li key={index}>{ele.name}</li>);
}) -->
