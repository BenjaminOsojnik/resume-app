import React, {Fragment, useState} from 'react'
import DatePicker from 'react-datepicker'
import TextareaAutosize from 'react-autosize-textarea'
import "react-datepicker/dist/react-datepicker.css"
import {generateGuidG4} from '../functions/generateGuidS4'
import {submitEducation} from '../store/reducers/globalReducer'
import { TEducation } from '../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import {SetEducationFormVisible, deleteEducation} from '../store/reducers/globalReducer'


const EducationForm = () => {
    const dispatch = useDispatch()
    const [degree, setDegree] = useState(useSelector((state:TRootReducer)=> state.globalState.education.degree))
    const [city, setCity] = useState(useSelector((state:TRootReducer)=> state.globalState.education.city))
    const [school, setSchool] = useState(useSelector((state:TRootReducer)=> state.globalState.education.school))
    const [startDate, setStartDate] = useState(useSelector((state:TRootReducer)=> state.globalState.education.startDate))
    const [endDate, setEndDate] = useState(useSelector((state:TRootReducer)=> state.globalState.education.endDate))
    const [description, setDescription] = useState(useSelector((state:TRootReducer)=> state.globalState.education.description))
    const [id] = useState(useSelector((state:TRootReducer)=> state.globalState.education.id) || (generateGuidG4() + generateGuidG4() + "-" + generateGuidG4() + "-4" + generateGuidG4().substr(0,3) + "-" + generateGuidG4() + "-" + generateGuidG4() + generateGuidG4() + generateGuidG4()).toLowerCase())
    const idState = useSelector((state:TRootReducer)=> state.globalState.education.id)
    const [warning, showWarning] = useState(false)
    const [present, setPresent] = useState(useSelector((state:TRootReducer)=> state.globalState.education.present))
    function handleSubmit(e:any){
        
        e.preventDefault();
        let education:TEducation = {
            id: id,
            city: city,
            school: school,
            startDate: startDate,
            endDate: endDate,
            description: description,
            degree: degree,
            present: present
        }
        if (school !== '' && city !== '' && degree !== ''){        
            dispatch(submitEducation(education))
            dispatch(SetEducationFormVisible(false))
        }
        else {
            showWarning(true)
        }
    }

    return (
        <Fragment>
            <form onSubmit={e => { e.preventDefault() }}>
                <label>Degree*</label><br />
                <input type="text" className={`${warning && degree === '' ? 'warningInput' : '' }`} value={degree} onChange={(event) => setDegree(event.target.value)} /><br />
                <label>City/Town*</label><br />
                <input type="text" className={`${warning && city === '' ? 'warningInput' : '' }`} value={city} onChange={(event) => setCity(event.target.value)} /><br />  
                <label>School*</label><br />
                <input type="text" className={`${warning && school === '' ? 'warningInput' : '' }`} value={school} onChange={(event) => setSchool(event.target.value)} /><br />  
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
                    disabled={present}
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    dateFormat="MMMM yyyy"
                    showMonthDropdown
                    showYearDropdown
                    showMonthYearPicker
                    dropdownMode="select"
                />
                <label>Present</label>
                <input type="checkbox" checked={present} onChange={()=> setPresent(!present)}/> 
                <br/>
                <label>Description</label><br />
                <TextareaAutosize rows={2} style={{ boxSizing: 'border-box' }}  value={description} onChange={(event:any) => setDescription(event.target.value)} /><br />
                <br />
                <button onClick={handleSubmit}>Save</button>
                {idState !== undefined && <button onClick={() => dispatch(deleteEducation(id))}>Delete</button>}
                <button onClick={() => dispatch(SetEducationFormVisible(false))}>Cancel</button>
                <br />
                <br />
            </form>
        </Fragment>
    )
}
export default EducationForm