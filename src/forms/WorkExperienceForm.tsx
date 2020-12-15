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
    const [description, setDescription] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.city))
    const [id] = useState(useSelector((state:TRootReducer)=> state.globalState.workExperience.id) || (generateGuidG4() + generateGuidG4() + "-" + generateGuidG4() + "-4" + generateGuidG4().substr(0,3) + "-" + generateGuidG4() + "-" + generateGuidG4() + generateGuidG4() + generateGuidG4()).toLowerCase())
    const idState = useSelector((state:TRootReducer)=> state.globalState.workExperience.id)
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
            jobTitle: jobTitle
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
            <form onSubmit={e => { e.preventDefault() }}>
                <label>Job title*</label><br />
                <input type="text" className={`${warning && jobTitle === '' ? 'warningInput' : '' }`} value={jobTitle} onChange={(event) => setJobTitle(event.target.value)} /><br />
                <label>City/Town*</label><br />
                <input type="text" className={`${warning && city === '' ? 'warningInput' : '' }`} value={city} onChange={(event) => setCity(event.target.value)} /><br />  
                <label>Employer*</label><br />
                <input type="text" className={`${warning && employer === '' ? 'warningInput' : '' }`} value={employer} onChange={(event) => setEmployer(event.target.value)} /><br />  
                <label>Start date*</label><br />
                <label>End date*</label><br />
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    dateFormat="MMMM yyyy"
                    showMonthDropdown
                    showYearDropdown
                    showMonthYearPicker
                    dropdownMode="select"
                />
                
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="MMMM yyyy"
                />
                <br/>
                <label>Description</label><br />
                <TextareaAutosize rows={2} style={{ boxSizing: 'border-box' }}  value={description} onChange={(event:any) => setDescription(event.target.value)} /><br />
                <br />
                <button onClick={handleSubmit}>Save</button>
                {idState !== undefined && <button onClick={() => dispatch(deleteWorkExperience(id))}>Delete</button>}
                <button onClick={() => dispatch(SetWorkExperienceFormVisible(false))}>Cancel</button>
                <br />
                <br />
            </form>
        </Fragment>
    )
}
export default WorkExperienceForm