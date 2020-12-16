import React, {Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import { useHistory } from 'react-router-dom'
import {editHobby, SetWorkExperienceFormVisible, editWorkExperience, editEducation, SetEducationFormVisible, SetHobbyFormVisible, editSkill, SetSkillFormVisilbe, SetResumeObjective} from '../store/reducers/globalReducer'
import TextareaAutosize from 'react-autosize-textarea'
import WorkExperienceForm from './WorkExperienceForm'
import EducationForm from './EducationForm'
import HobbyForm from './HobbyForm'
import SkillForm from './SkillForm'

const AdvancedResumeForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const resumeObjective = useSelector((state:TRootReducer) => state.globalState.resumeObjective)
    const workExperiences = useSelector((state:TRootReducer) => state.globalState.workExperiences)
    const educations = useSelector((state:TRootReducer) => state.globalState.educations)
    const hobbies = useSelector((state:TRootReducer) => state.globalState.hobbies)
    const skills = useSelector((state:TRootReducer) => state.globalState.skills)
    const isWorkExperienceFormVisible = useSelector((state:TRootReducer) => state.globalState.isWorkExperienceFormVisible)
    const isEducationFormVisible = useSelector((state:TRootReducer) => state.globalState.isEducationFormVisible)
    const isHobbyFormVisible = useSelector((state:TRootReducer) => state.globalState.isHobbyFormVisible)
    const isSkillFormVisible = useSelector((state:TRootReducer) => state.globalState.isSkillFormVisible)

    return (
        <Fragment>
            <div>
                <h2>My Experience</h2>
                <form onSubmit={e => { e.preventDefault() }}>
                    <div>
                        <h3>Resume objective</h3><br />
                        <TextareaAutosize rows={2} style={{ boxSizing: 'border-box' }}  value={resumeObjective} onChange={(event:any) => dispatch(SetResumeObjective(event.target.value))} /><br />
                    </div>
                    <br />
                    <br />
                    <div>
                        <h3>Work expierience</h3><br />
                        {workExperiences !== [] &&
                            workExperiences.map((we) => (
                                <div key={we.id} onClick={() => dispatch(editWorkExperience(we.id))}>
                                    <p>{we.jobTitle}</p>
                                    <p>{we.startDate.toISOString()} - {we.endDate.toISOString()}</p>
                                </div>
                                ))
                        }
                        {isWorkExperienceFormVisible && <WorkExperienceForm />}
                        {!isWorkExperienceFormVisible && <button onClick={() => dispatch(SetWorkExperienceFormVisible(true))}>Add a work experience</button>}
                    </div>
                    <br />
                    <br />
                    <div>
                        <h3>Education and qualifications</h3>
                        {educations !== [] &&
                            educations.map((ed) => (
                                <div key={ed.id} onClick={() => dispatch(editEducation(ed.id))}>
                                    <p>{ed.degree}</p>
                                    <p>{ed.startDate.toISOString()} - {ed.endDate.toISOString()}</p>
                                </div>
                                ))
                        }
                        {isEducationFormVisible && <EducationForm />}
                        {!isEducationFormVisible && <button onClick={() => dispatch(SetEducationFormVisible(true))}>Add an education or qualification</button>}
                    </div>
                    <br />
                    <br />
                    <div>
                        <h3>Interests</h3>
                        {hobbies !== [] &&
                            hobbies.map((h) => (
                                <div key={h.id} onClick={() => dispatch(editHobby(h.id))}>
                                    <p>{h.hobby}</p>
                                </div>
                                ))
                        }
                        {isHobbyFormVisible && <HobbyForm />}
                        {!isHobbyFormVisible && <button onClick={() => dispatch(SetHobbyFormVisible(true))}>Add an interest or hobby</button>}
                    </div>
                    <br />
                    <br />
                    <div>
                        <h3>Skills</h3>
                        {skills !== [] &&
                            skills.map((s) => (
                                <div key={s.id} onClick={() => dispatch(editSkill(s.id))}>
                                    <p>{s.skill}</p>
                                    <p>{s.level}</p>
                                </div>
                                ))
                        }
                        {isSkillFormVisible && <SkillForm />}
                        {!isSkillFormVisible && <button onClick={() => dispatch(SetSkillFormVisilbe(true))}>Add a skill</button>}
                    </div>
                    <button onClick={() => history.push('../')}>Back</button>
                    <button onClick={() => history.push('../export2pdf')}>Next</button>
                </form>
            </div>
        </Fragment>
    )
}
export default AdvancedResumeForm