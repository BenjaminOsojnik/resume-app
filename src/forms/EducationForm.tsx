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
                <div className="subform" >
                <form onSubmit={e => { e.preventDefault() }} >

                    <input type="text" placeholder="*Degree" className={`${warning && degree === '' ? 'warningInput' : '' }`} value={degree} onChange={(event) => setDegree(event.target.value)} /><br />
                    {degree.length ?
                        <label className="text-input-label">Degree</label> :
                        ""
                    }

                    <input type="text" placeholder="City/Town" className={`${warning && city === '' ? 'warningInput' : '' }`} value={city} onChange={(event) => setCity(event.target.value)} /><br />
                    {city.length ?
                        <label className="text-input-label">City/Town</label> :
                        ""
                    }

                    <input type="text" placeholder="School" className={`${warning && school === '' ? 'warningInput' : '' }`} value={school} onChange={(event) => setSchool(event.target.value)} /><br />
                    {school.length ?
                        <label className="text-input-label">*School</label> :
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
                            <label htmlFor="current">Present</label>
                        </div>
                    </div>

                    <label className="description">Description</label>
                    <TextareaAutosize rows={2} style={{ boxSizing: 'border-box' }}  value={description} onChange={(event:any) => setDescription(event.target.value)} />

                    <div className="btn-area">
                        {id === '' ? <button className="save-btn" onClick={handleSubmit}>Save</button> : <button className="save-btn" onClick={handleSubmit}>Update</button>}
                        {idState !== undefined && <button className="remove-btn" onClick={() => dispatch(deleteEducation(id))}>Delete</button>}
                        <button className="remove-btn" onClick={() => dispatch(SetEducationFormVisible(false))}>Cancel</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default EducationForm