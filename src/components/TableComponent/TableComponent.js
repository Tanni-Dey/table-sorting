import React from 'react';
import './TableComponent.css'

const TableComponent = ({ data, tableConfig }) => {
    // const { person, email, role, joiningDate, city } = data;
    return (
        <div>
            <table>
                <tr>
                    <th className='thead'><span>Name</span> <button className='name_btn' onClick={tableConfig}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.563 10.813-1.875 1.874-1.875-1.874m1.875-7.5v9.374m3.75-7.499 1.874-1.875 1.876 1.874m-1.875 7.501V3.312" />
                    </svg>
                    </button></th>
                    <th className='thead'><span>City</span> <button className='name_btn' onClick={() => tableConfig("city")}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.563 10.813-1.875 1.874-1.875-1.874m1.875-7.5v9.374m3.75-7.499 1.874-1.875 1.876 1.874m-1.875 7.501V3.312" />
                    </svg>
                    </button></th>
                    <th>Email Address</th>
                    <th className='thead'><span>Joining Date</span> <button className='name_btn' onClick={() => tableConfig("joiningDate")}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.563 10.813-1.875 1.874-1.875-1.874m1.875-7.5v9.374m3.75-7.499 1.874-1.875 1.876 1.874m-1.875 7.501V3.312" />
                    </svg>
                    </button></th>
                    <th className='thead'><span>Role</span> <button className='name_btn' onClick={() => tableConfig("role")}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.563 10.813-1.875 1.874-1.875-1.874m1.875-7.5v9.374m3.75-7.499 1.874-1.875 1.876 1.874m-1.875 7.501V3.312" />
                    </svg>
                    </button></th>
                </tr>
                {
                    data.map((singleData, index) =>
                        <tr key={index}>
                            <td className='name_data'><img src={singleData.person.avatar} alt="" /><span>{singleData.person.name}</span></td>
                            <td>{singleData.city}</td>
                            <td><a href="#0">{singleData.email}</a></td>
                            <td>{singleData.joiningDate}</td>
                            <td>{singleData.role}</td>
                        </tr>)
                }
            </table>
        </div>
    );
};

export default TableComponent;