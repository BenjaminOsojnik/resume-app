import React, {Fragment, useState} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import {generateGuidG4} from '../functions/generateGuidS4'
import {deleteHobby, SetHobbyFormVisible, submitHobby} from '../store/reducers/globalReducer'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'


const HobbyForm = () => {
    const dispatch = useDispatch()
    const [hobby, setHobby] = useState(useSelector((state:TRootReducer) => state.globalState.hobby.hobby))
    const [id] = useState(useSelector((state:TRootReducer)=> state.globalState.hobby.id) || (generateGuidG4() + generateGuidG4() + "-" + generateGuidG4() + "-4" + generateGuidG4().substr(0,3) + "-" + generateGuidG4() + "-" + generateGuidG4() + generateGuidG4() + generateGuidG4()).toLowerCase())
    const idState = useSelector((state:TRootReducer)=> state.globalState.hobby.id)
    const [warning, showWarning] = useState(false)
    
    function handleSubmit(e:any){
        
        e.preventDefault();
        let hobbyTemp = {
            id: id,
            hobby: hobby
        }
        if (hobby !== ''){        
            dispatch(submitHobby(hobbyTemp))
            dispatch(SetHobbyFormVisible(false))
        }
        else {
            showWarning(true)
        }
    }

    return (
        <Fragment>
            <div className="subform" >
                <form onSubmit={e => { e.preventDefault() }}>
                    <input type="text" placeholder="*Hobby" className={`${warning && hobby === '' ? 'warningInput' : '' }`} value={hobby} onChange={(event) => setHobby(event.target.value)} /><br />
                    {hobby.length ?
                        <label className="text-input-label">Hobby</label> :
                        ""
                    }

                    <div className="btn-area">
                        {id === '' ? <button className="save-btn" onClick={handleSubmit}>Add</button> : <button className="save-btn" onClick={handleSubmit}>Update</button>}
                        {idState !== undefined && <button className="remove-btn" onClick={() => dispatch(deleteHobby(id))}>Delete</button>}
                        <button className="remove-btn" onClick={() => dispatch(SetHobbyFormVisible(false))}>Cancel</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default HobbyForm