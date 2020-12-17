import React, {Fragment, useState} from 'react'
import DatePicker from 'react-datepicker'
import TextareaAutosize from 'react-autosize-textarea'
import "react-datepicker/dist/react-datepicker.css"
import {generateGuidG4} from '../functions/generateGuidS4'
import {SubmitWorkExperience} from '../store/reducers/globalReducer'
import { TWorkExperience } from '../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import {SetWorkExperienceFormVisible, deleteWorkExperience} from '../store/reducers/globalReducer'


const WorkExperienceForm = () => {
    const dispatch = useDispatch()
    const [jobTitle, setJobTitle] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.jobTitle))
    const [city, setCity] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.city))
    const [employer, setEmployer] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.employer))
    const [startDate, setStartDate] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.startDate))
    const [endDate, setEndDate] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.endDate))
    const [description, setDescription] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.description))
    const [id] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.id) || (generateGuidG4() + generateGuidG4() + "-" + generateGuidG4() + "-4" + generateGuidG4().substr(0,3) + "-" + generateGuidG4() + "-" + generateGuidG4() + generateGuidG4() + generateGuidG4()).toLowerCase())
    const idState = useSelector((state:TRootReducer)=> state.globalState.workExperience.id)
    const [present, setPresent] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.present))
    const [warning, showWarning] = useState(false)
    
    function handleSubmit(e:any){
        
        e.preventDefault();
        let workExperience:TWorkExperience = {
            id: id,
            city: city,
            employer: employer,
            startDate: startDate,
            endDate: endDate,
            description: description,
            jobTitle: jobTitle,
            present: present
        }
        if (jobTitle !== '' && city !== '' && employer !== ''){        
            dispatch(SubmitWorkExperience(workExperience))
            dispatch(SetWorkExperienceFormVisible(false))
        }
        else {
            showWarning(true)
        }
    }

    return (
        <Fragment>
            <div className="subform" >
                <form onSubmit={e => { e.preventDefault() }}>
                    <input type="text" placeholder="*Job title" className={`${warning && jobTitle === '' ? 'warningInput' : '' }`} value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} /><br />
                    {jobTitle.length ?
                        <label className="text-input-label">*Job title</label> :
                        ""
                    }

                    <input type="text" placeholder="*City/Town" className={`${warning && city === '' ? 'warningInput' : '' }`} value={city} onChange={(event) => setCity(event.target.value)} /><br />
                    {city.length ?
                        <label className="text-input-label">City/Town*</label> :
                        ""
                    }


                    <input type="text" placeholder="*Employer" className={`${warning && employer === '' ? 'warningInput' : '' }`} value={employer} onChange={(event) => setEmployer(event.target.value)} /><br />
                    {employer.length ?
                        <label className="text-input-label">*Employer</label> :
                        ""
                    }

                    <div className="date-form-section">
                        <div>
                            <label className="date-picker">Start date*</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date) => setStartDate(date)}
                                dateFormat="MMMM yyyy"
                                showMonthDropdown
                                showYearDropdown
                                showMonthYearPicker
                                dropdownMode="select"
                            />
                        </div>

                        <div>
                            <label className="date-picker">End date*</label>
                            <DatePicker
                                disabled={present}
                                selected={endDate}
                                onChange={(date: Date) => setEndDate(date)}
                                dateFormat="MMMM yyyy"
                                showMonthDropdown
                                showYearDropdown
                                showMonthYearPicker
                                dropdownMode="select"
                            />
                        </div>

                        <div className="current-checkbox">
                            <input name="current" id="current" type="checkbox" checked={present} onChange={()=> setPresent(!present)}/>
                            <label htmlFor="current">Current</label>
                        </div>
                     </div>

                    <label className="description">Description</label>
                    <TextareaAutosize rows={2} style={{ boxSizing: 'border-box' }}  placeholder="Provide a description of this work position... " value={description} onChange={(event:any) => setDescription(event.target.value)} /><br />


                    <div className="btn-area">
                        <button className="save-btn" onClick={handleSubmit}>Add</button>
                        {idState !== undefined && <button onClick={() => dispatch(deleteWorkExperience(id))}>Delete</button>}
                        <button className="remove-btn" onClick={() => dispatch(SetWorkExperienceFormVisible(false))}>Cancel</button>
                    </div>

                </form>
            </div>
        </Fragment>
    )
}
export default WorkExperienceForm