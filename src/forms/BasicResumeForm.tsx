import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import { useHistory } from 'react-router-dom'
import {SubmitBasicInformation} from '../store/reducers/globalReducer'
import {BiImageAdd} from "react-icons/bi"
import Footer from '../controls/Footer'

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
        <div className="main-wrapper main-wrapper-basic">
            <div className="main">
                <h2>1. GENERAL</h2>
                <form onSubmit={handleSubmit}>
                    <input type="file"  name="file" id="file" className="inputfile" accept="image/x-png,image/gif,image/jpeg" onChange={handleFileSelect}/><br />
                    <label htmlFor="file">
                        <div className="profile-img-wrap">
                            {profileImage.length ?
                                <div className="uploaded-img-wrap">
                                    <img className="profile-img" src={profileImage} alt={'ProfileImage'} />
                                    <span>&#10005;</span>
                                </div>
                                :
                                <BiImageAdd/>
                            }
                        </div>
                        {profileImage.length ?
                            <p>Change image</p>
                            :
                            <p>Upload profile image</p>
                        }
                    </label>

                    <br />
                    <input type="text" placeholder="First name*" className={`${warning && firstName === '' ? 'warningInput' : '' }`} value={firstName} onChange={(event) => setFirstName(event.target.value)} /><br />
                    {firstName.length ?
                        <label className="text-input-label">First name</label> :
                        ""
                    }

                    <br />
                    <input type="text" placeholder="Last name*" className={`${warning && lastName === '' ? 'warningInput' : '' }`} value={lastName} onChange={(event) => setLastName(event.target.value)} /><br />
                    {lastName.length ?
                        <label className="text-input-label">Last name</label> :
                        ""
                    }

                    <br />

                    <input type="text" placeholder="Email address*" className={`${warning && !email.includes('@' && '.') ? 'warningInput' : '' }`} value={email} onChange={(event) => setEmail(event.target.value)} /><br />
                    {email.length ?
                        <label className="text-input-label">Email address</label> :
                        ""
                    }

                    <br />

                    <input type="text" placeholder="Phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} /><br />
                    {phoneNumber.length ?
                        <label className="text-input-label">Phone number</label> :
                        ""
                    }

                    <br />


                    <input type="text" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)} /><br />
                    {address.length ?
                        <label className="text-input-label">Address</label> :
                        ""
                    }

                    <br />

                    <input type="text" placeholder="Postal code" value={zipCode} onChange={(event) => setZipCode(event.target.value)} /><br />
                    {zipCode.length ?
                        <label className="text-input-label">Postal code</label> :
                        ""
                    }

                    <br />

                    <input type="text" placeholder="Town/City" value={city} onChange={(event) => setCity(event.target.value)} /><br />
                    {city.length ?
                        <label className="text-input-label">City/Town</label> :
                        ""
                    }

                    <br />

                    <button className="next-btn" onClick={handleSubmit}>Next</button>
                </form>
            </div>
            <Footer />
        </div>
        
    )
}
export default BasicResumeForm