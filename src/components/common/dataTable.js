import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import ModalCustom from './modal';
import Viewtudent from '../comp/viewStudentDetails';

const CustomeDataTable = ({ data, dummyStudentList, viewStudentDetails }) => {
 
    const columns = [
        {
            name: 'name',
            label: 'Name',
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: 'batch',
            label: 'batch',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'result',
            label: 'result',
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: 'course_scores',
            label: 'action',
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        // <button className='btn btn-info' onClick={() => viewStudentDetails(tableMeta)}>
                              <ModalCustom title={"view student Details"} buttonLabel={"View Full Details"} Comp={<Viewtudent data={tableMeta} value={value}/>} />
                            
                        // </button>
                    )
                }
            }
        },
        // {
        //     name: 'name',
        //     label: 'action',
        //     options: {
        //         customBodyRender: (value, tableMeta, updateValue) => {
        //             return (
        //                 <button className='btn btn-primary' onClick={() => console.log(tableMeta)}>
        //                     Add Interview
        //                 </button>
        //             )
        //         }
        //     }
        // },

    ];



    const options = {
        filterType: 'checkbox'
    };

    return <MUIDataTable title={'Student List'} data={data} columns={columns} options={options} />;
};
export default CustomeDataTable;
