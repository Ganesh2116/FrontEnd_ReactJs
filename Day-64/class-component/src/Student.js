export default function Student(props)
{
    return(
        <div>
            <h1>this student data </h1>
            <h2>Name of student : {props.name}</h2>
            <h2>Age of student : {props.age}</h2>
            <h2>Roll no of student : {props.rno}</h2>
            <h2>city of the student :{props.address.city}</h2>
            <h2>country of the student :{props.address.country}</h2>
        </div>
    )
}











