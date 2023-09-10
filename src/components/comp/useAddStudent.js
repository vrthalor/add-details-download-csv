import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddStudent = () => {
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [result, setResult] = useState("")
    const [allCourses, setAllCourses] = useState([])

    const [courseName, setCourseName] = useState(["WEB", "React", "Datastructure"])
    const [courseDetails, setCourseDetails] = useState({
        course_name: "",
        final_score: ""
    })

    const onChangeFun = (e) => {
        setCourseDetails({
            ...courseDetails,
            [e.target.name]: e.target.value
        })
    }
    const addCourseSave = () => {
        if (!courseDetails.course_name || !courseDetails.final_score) {
            toast.warning("Please fill course name and final score")
            return
        }
        setAllCourses([...allCourses, courseDetails])
        resetCourse()
        let filtercourseName = courseName.filter(val => val != courseDetails.course_name)
        setCourseName((previous => {
            return [...filtercourseName]
        }))
    }
    const resetCourse = () => {
        setCourseDetails({
            course_name: "",
            final_score: ""
        })
    }
    let render = (
        <div>
            <h2>add student</h2>
            <form>
                <div class="mb-2">
                    <label for="name" class="form-label">Name*</label>
                    <input type="name" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="name" />
                </div>
                <div class="mb-2">
                    <label for="batch" class="form-label">Batch*</label>
                    <input type="batch" name="batch" value={batch} onChange={(e) => setBatch(e.target.value)} class="form-control" id="batch" />
                </div>
                <div class="mb-2">
                    <label for="result" class="form-label">Result*</label>
                    <input type="result" class="form-control" name="result" value={result} onChange={(e) => setResult(e.target.value)} id="result" />
                </div>
                {allCourses.length > 0 &&
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Final Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCourses?.map((val, index) => (
                                <tr>
                                    <>
                                        <th scope="row">{index + 1}</th>
                                        <td>{val.course_name}</td>
                                        <td>{val.final_score}</td>
                                    </>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                {courseName.length > 0 &&
                    <div className="input-course-section">
                        <div class="mb-2">
                            <label for="result" class="form-label">Select Course</label>
                            <select type="select" class="form-select" value={courseDetails.course_name} name="course_name" onChange={onChangeFun}>
                                <option selected>Select Course</option>
                                {courseName.map(course => (
                                    <option value={course} name={course}>{course}</option>
                                ))}
                            </select>
                        </div>
                        <div class="mb-2">
                            <label for="result" class="form-label">Score</label>
                            <input type="text" name="final_score" value={courseDetails.final_score} onChange={onChangeFun} class="form-control" id="result" />
                        </div>
                        <button type="button" class="btn btn-primary" onClick={addCourseSave}>Add course</button>
                    </div>
                }
            </form>
            <ToastContainer />
        </div>
    )
    return {
        render,
        studentDetails: { name: name, batch: batch, result: result, course_scores: allCourses }

    }
}

export default AddStudent