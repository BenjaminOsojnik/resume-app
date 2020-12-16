import React, {Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import { useHistory } from 'react-router-dom'
import {SubmitBasicInformation} from '../store/reducers/globalReducer'

const BasicResumeForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState(useSelector((state:TRootReducer) => state.globalState.firstName))
    const [lastName, setLastName] = useState(useSelector((state:TRootReducer) => state.globalState.lastName))
    const [email, setEmail] = useState(useSelector((state:TRootReducer) => state.globalState.email))
    const [phoneNumber, setPhoneNumber] = useState(useSelector((state:TRootReducer) => state.globalState.phoneNumber))
    const [address, setAddress] = useState(useSelector((state:TRootReducer) => state.globalState.address))
    const [zipCode, setZipCode] = useState(useSelector((state:TRootReducer) => state.globalState.zipCode))
    const [city, setCity] = useState(useSelector((state:TRootReducer) => state.globalState.city))
    const [warning, showWarning] = useState(false)
    
    const [profileImage, setProfileImage] = useState(useSelector((state:TRootReducer) => state.globalState.profileImage))
    function handleSubmit(e:any){
        e.preventDefault();
        if (firstName !== '' && lastName !== '' && email.includes('@' && '.')){
            dispatch(SubmitBasicInformation(firstName, lastName, email, phoneNumber,address,zipCode,city, profileImage ))
            history.push('/advanced')
        }
        else {
            showWarning(true)
        }
    }

    function handleFileSelect(e:any){
       setProfileImage(URL.createObjectURL(e.target.files[0]))
    }



    return (
        <Fragment>
            <div>
                <h2>Basic information</h2>
                <form onSubmit={handleSubmit}>
                    {profileImage !== '' && <img src={profileImage} style={{width: 50, height: 50}} />}
                    <label>Image</label><br />
                    <input type="file"  accept="image/x-png,image/gif,image/jpeg" onChange={handleFileSelect}/><br />
                    <label>First name*</label><br />
                    <input type="text" className={`${warning && firstName === '' ? 'warningInput' : '' }`} value={firstName} onChange={(event) => setFirstName(event.target.value)} /><br />
                    <label>Last name*</label><br />
                    <input type="text" className={`${warning && lastName === '' ? 'warningInput' : '' }`} value={lastName} onChange={(event) => setLastName(event.target.value)} /><br />
                    <label>Email address*</label><br />
                    <input type="text" className={`${warning && !email.includes('@' && '.') ? 'warningInput' : '' }`} value={email} onChange={(event) => setEmail(event.target.value)} /><br />
                    <label>Phone number</label><br />
                    <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} /><br />
                    <label>Address</label><br />
                    <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} /><br />
                    <label>Zip code</label><br />
                    <input type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)} /><br />
                    <label>City/Town</label><br />
                    <input type="text" value={city} onChange={(event) => setCity(event.target.value)} /><br />
                    <button>Next</button>
                </form>
            </div>
        </Fragment>
    )
}
export default BasicResumeForm