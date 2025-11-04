function Student(props) {
    return(
        <div className="student-cd">
            <p>Name : {props.name}</p>
            <p>Time earth: {props.age}</p>
            <p>Student:  {props.isStudent ? "yes" : "No"}</p>
        </div>
    );

}

export default Student