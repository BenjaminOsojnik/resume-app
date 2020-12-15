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
            <form onSubmit={e => { e.preventDefault() }}>
                <label>Hobby</label>
                <input type="text" className={`${warning && hobby === '' ? 'warningInput' : '' }`} value={hobby} onChange={(event) => setHobby(event.target.value)} /><br />  
                <button onClick={handleSubmit}>Save</button>
                {idState !== undefined && <button onClick={() => dispatch(deleteHobby(id))}>Delete</button>}
                <button onClick={() => dispatch(SetHobbyFormVisible(false))}>Cancel</button>
                <br />
                <br />
            </form>
        </Fragment>
    )
}
export default HobbyForm