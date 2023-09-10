import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Viewtudent = (props) => {
    console.log("?????????????", props.value)
    let [name, batch, result] = props.data.rowData

    return (
        <div>
            <form>
                <div class="mb-2">
                    <label for="name" class="form-label">Name*</label>
                    <input type="name" name="name" value={name} class="form-control" id="name" />
                </div>
                <div class="mb-2">
                    <label for="batch" class="form-label">Batch*</label>
                    <input type="batch" name="batch" value={batch} class="form-control" id="batch" />
                </div>
                <div class="mb-2">
                    <label for="result" class="form-label">Result*</label>
                    <input type="result" class="form-control" name="result" value={result} id="result" />
                </div>
                {props.value?.length > 0 &&
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Final Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.value?.map((val, index) => (
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

            </form>
            <ToastContainer />
        </div>
    )
}

export default Viewtudent