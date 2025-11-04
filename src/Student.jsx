import PropTypes from "prop-types"

function Student(props) {
    return(
        <div className="student-cd">
            <p>Name : {props.name}</p>
            <p>Time earth: {props.age}</p>
            <p>Student:  {props.isStudent ? "yes" : "No"}</p>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Student