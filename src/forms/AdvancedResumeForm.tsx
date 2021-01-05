import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import { useHistory } from 'react-router-dom'
import {SetWorkExperienceFormVisible,SetEducationFormVisible, SetHobbyFormVisible, SetSkillFormVisilbe, SetResumeObjective} from '../store/reducers/globalReducer'
import TextareaAutosize from 'react-autosize-textarea'
import WorkExperienceForm from './WorkExperienceForm'
import EducationForm from './EducationForm'
import HobbyForm from './HobbyForm'
import SkillForm from './SkillForm'
import Moment from 'react-moment'
import {FiChevronLeft} from 'react-icons/fi'
import { editEducationAction, editHobbyAction, editSkillAction, editWorkExperienceAction } from '../store/actions/globalActionCreators'
import Footer from '../controls/Footer'

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
        <div className="main-wrapper">
            <div className="main main-experience">
                <form onSubmit={e => { e.preventDefault() }}>
                    <div className="item-wrapper">
                        <h2>RESUME OBJECTIVE</h2>
                        <TextareaAutosize rows={2} value={resumeObjective} placeholder="Write a few words about yourself..." onChange={(event:any) => dispatch(SetResumeObjective(event.target.value))} />
                    </div>

                    <div className="item-wrapper">
                        <h2>WORK EXPERIENCE</h2>
                        {workExperiences !== [] &&
                            workExperiences.map((we) => (
                                <div className="submitted-wrap" key={we.id} onClick={() => dispatch(editWorkExperienceAction(we.id ||''))}>
                                    <p className="submitted-main">{we.jobTitle}</p>
                                    <p className="submitted-secondary"><Moment format="MM.YYYY">{we.startDate}</Moment> - <Moment format="MM.YYYY">{we.endDate}</Moment></p>
                                </div>
                                ))
                        }
                        {isWorkExperienceFormVisible && <WorkExperienceForm />}
                        {!isWorkExperienceFormVisible && <button onClick={() => dispatch(SetWorkExperienceFormVisible(true))} className="add-btn">&#10010; Add work experience</button>}
                    </div>

                    <div className="item-wrapper">
                        <h2>EDUCATION & QUALIFICATIONS</h2>
                        {educations !== [] &&
                            educations.map((ed) => (
                                <div className="submitted-wrap" key={ed.id} onClick={() => dispatch(editEducationAction(ed.id || ''))}>
                                    <p className="submitted-main" >{ed.degree}</p>
                                    <p className="submitted-secondary"><Moment format="MM:YYYY">{ed.startDate}</Moment> - <Moment format="MM:YYYY">{ed.endDate}</Moment></p>
                                </div>
                                ))
                        }
                        {isEducationFormVisible && <EducationForm />}
                        {!isEducationFormVisible && <button onClick={() => dispatch(SetEducationFormVisible(true))} className="add-btn"> &#10010; Add education/qualification</button>}
                    </div>

                    <div className="item-wrapper">
                        <h2>INTERESTS</h2>
                        {hobbies !== [] &&
                            hobbies.map((h) => (
                                <div className="submitted-wrap" key={h.id} onClick={() => dispatch(editHobbyAction(h.id ||''))}>
                                    <p className="submitted-main">{h.hobby}</p>
                                </div>
                                ))
                        }
                        {isHobbyFormVisible && <HobbyForm />}
                        {!isHobbyFormVisible && <button onClick={() => dispatch(SetHobbyFormVisible(true))} className="add-btn">&#10010; Add interest or hobby</button>}
                    </div>

                    <div className="item-wrapper">
                        <h2>SKIILS</h2>
                        {skills !== [] &&
                            skills.map((s) => (
                                <div className="submitted-wrap submitted-skill" key={s.id} onClick={() => dispatch(editSkillAction(s.id || ''))}>
                                    <p className="submitted-main">{s.skill}</p>
                                    <p className="submitted-secondary-skill">{s.level}</p>
                                </div>
                                ))
                        }
                        {isSkillFormVisible && <SkillForm />}
                        {!isSkillFormVisible && <button onClick={() => dispatch(SetSkillFormVisilbe(true))} className="add-btn">&#10010; Add skill</button>}
                    </div>
                    <button onClick={() => history.push('../')} className="back-btn"> <FiChevronLeft /> </button>
                    <button onClick={() => history.push('../export2pdf')} className="next-btn">Next</button>
                </form>
            </div>
            <Footer />
        </div>

    )
}
export default AdvancedResumeForm