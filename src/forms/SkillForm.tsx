import React, {Fragment, useState} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import {generateGuidG4} from '../functions/generateGuidS4'
import {deleteSkill, SetHobbyFormVisible, SetSkillFormVisilbe, submitSkill} from '../store/reducers/globalReducer'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'


const SkillForm = () => {
    const dispatch = useDispatch()
    const [skill, setSkill] = useState(useSelector((state:TRootReducer) => state.globalState.skill.skill))
    const [level, setLevel] = useState(useSelector((state:TRootReducer) => state.globalState.skill.level))
    const [id] = useState(useSelector((state:TRootReducer)=> state.globalState.skill.id) || (generateGuidG4() + generateGuidG4() + "-" + generateGuidG4() + "-4" + generateGuidG4().substr(0,3) + "-" + generateGuidG4() + "-" + generateGuidG4() + generateGuidG4() + generateGuidG4()).toLowerCase())
    const idState = useSelector((state:TRootReducer)=> state.globalState.skill.id)
    const [warning, showWarning] = useState(false)
    
    function handleSubmit(e:any){
        
        e.preventDefault();
        let skillTemp = {
            id: id,
            skill: skill,
            level: level
        }
        if (skill !== '' && level !== 'SelectLevel'){        
            dispatch(submitSkill(skillTemp))
            dispatch(SetSkillFormVisilbe(false))
        }
        else {
            showWarning(true)
        }
    }

    return (
        <Fragment>
            <form onSubmit={e => { e.preventDefault() }}>
                <label>Skill</label>
                <input type="text" className={`${warning && skill === '' ? 'warningInput' : '' }`} value={skill} onChange={(event) => setSkill(event.target.value)} /><br />  
                <label>Level</label>
                <select className={`${warning && level === 'SelectSkill' ? 'warningInput' : '' }`} value={level} onChange={(event:any) => setLevel(event.target.value)}>
                    <option value={'SelectLevel'}>Select level</option>
                    <option value={'Expert'}>Expert</option>
                    <option value={'Experienced'}>Experienced</option>
                    <option value={'Skillfull'}>Skillfull</option>
                    <option value={'Intermediate'}>Intermediate</option>
                    <option value={'Beginner'}>Begginer</option>
                </select>
                <button onClick={handleSubmit}>Save</button>
                {idState !== undefined && <button onClick={() => dispatch(deleteSkill(id))}>Delete</button>}
                <button onClick={() => dispatch(SetSkillFormVisilbe(false))}>Cancel</button>
                <br />
                <br />
            </form>
        </Fragment>
    )
}
export default SkillForm