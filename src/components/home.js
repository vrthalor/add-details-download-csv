import { useEffect, useState, createContext } from 'react';
import CustomeDataTable from './common/dataTable';
import ModalCustom from './common/modal';
import AddStudent from './comp/useAddStudent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext()
function Home() {
  const [globalCount, setGlobalCount] = useState(0)
  const { render, studentDetails } = AddStudent()
  const [data, setData] = useState([
    { name: 'Joe James', batch: 'Test Corp', course_scores: [{ course_name: "WEB", final_score: "7.0" }, { course_name: "React", final_score: "7.0" }], interviews: { company: 'xyz', interviews_date: "20-029-2023" }, result: "pass" },
    { name: 'John Walsh', batch: 'Test Corp', course_scores: [{ course_name: "WEB", final_score: "7.0" }, { course_name: "React", final_score: "7.0" }], interviews: { company: 'xyz', interviews_date: "20-029-2023" }, result: "pass" },
    { name: 'Bob Herm', batch: 'Test Corp', course_scores: [{ course_name: "WEB", final_score: "7.0" }, { course_name: "React", final_score: "7.0" }], interviews: { company: 'xyz', interviews_date: "20-029-2023" }, result: "pass" },
    { name: 'James Houston', batch: 'Test Corp', course_scores: [{ course_name: "WEB", final_score: "7.0" }, { course_name: "React", final_score: "7.0" }], interviews: { company: 'xyz', interviews_date: "20-029-2023" }, result: "pass" }
  ])
  useEffect(() => {
    console.log(studentDetails)
  }, [studentDetails])
  const incFun = () => {
    setGlobalCount(globalCount + 1)
  }
  const reset = (val) => {
    setGlobalCount(globalCount - val)
  }

  const saveStudentDetails = (toggle) => {
    if(!studentDetails.name || !studentDetails.batch || !studentDetails.result){
      toast.warning("Enter all required details")
      return
    }
    setData([...data, studentDetails])
    toast.success("Successfully added")
    toggle()
  }

  const viewStudentDetails = (data)=>{
    console.log(data)
  }

  return (
    <div className="">
      <div className="home-section mt-5">
        <div className='header-section'>
          <h2 align="center" className=''>CoddingNinja Assignment</h2>
          <ModalCustom buttonLabel={"Add Student"} Comp={render}
            onSubmitFun={saveStudentDetails} />
        </div>
        <CustomeDataTable data={data} viewStudentDetails={viewStudentDetails}/>
      </div>
    </div>
  );
}

export default Home;
