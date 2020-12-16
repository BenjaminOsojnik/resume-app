import { SUBMIT_BASIC_INFORMATION,
    SUBMIT_WORK_EXPERIENCE,
    IS_WORK_EXPERIENCE_FORM_VISIBLE,
    IS_EDUCATION_FORM_VISIBLE,
    SUBMIT_EDUCATION,
    RESET_GLOBAL_STATE,
    EDIT_WORK_EXPERIENCE_ACTION,
    DELETE_WORK_EXPERIENCE_ACTION,
    EDIT_EDUCATION_ACTION,
    DELETE_EDUCATION_ACTION,
    IS_HOBBY_FORM_VISIBLE,
    EDIT_HOBBY_ACTION,
    DELETE_HOBBY_ACTION,
    SUBMIT_HOBBY,
    EDIT_SKILL_ACTION,
    DELETE_SKILL_ACTION,
    SUBMIT_SKILL,
    IS_SKILL_FORM_VISIBLE,
    RESUME_OBJECTIVE_ACTION,
    globalActionTypes} from '../actions/globalActionTypes'
import {TEducation, TGlobalState, THobby, TSkill, TWorkExperience} from '../../types/types'

const initialState: TGlobalState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    city: '',
    profileImage: '',
    workExperiences: [],
    workExperience: {
        jobTitle: '',
        city: '',
        description: '',
        employer: '',
        endDate: new Date(),
        startDate: new Date(),
        id: undefined,
        present: false
    },
    educations: [],
    education: {
        id: undefined,
        degree: '',
        city: '',
        school: '',
        startDate: new Date(),
        endDate: new Date(),
        description: '',
        present: false
    },
    hobbies: [],
    hobby: {
        id: undefined,
        hobby: ''
    },
    skills: [],
    skill: {
        id: undefined,
        skill: '',
        level: 'SelectLevel'
    },
    resumeObjective: '',
    isWorkExperienceFormVisible: false,
    isEducationFormVisible: false,
    isHobbyFormVisible: false,
    isSkillFormVisible: false
}

const emptyWorkExperience:TWorkExperience = {
        jobTitle: '',
        city: '',
        description: '',
        employer: '',
        endDate: new Date(),
        startDate: new Date(),
        id: undefined,
        present: false
}

const emptyEducation: TEducation = {
        id: undefined,
        degree: '',
        city: '',
        school: '',
        startDate: new Date(),
        endDate: new Date(),
        description: '',
        present: false
}

const emptyHobby: THobby = {
    id: undefined,
    hobby: ''
}

const emptySkill: TSkill = {
    id: undefined,
    skill: '',
    level: 'SelectLevel'
}

export default function globalReducer(state: TGlobalState = initialState, action: globalActionTypes): TGlobalState {

    switch (action.type) {
        case SUBMIT_BASIC_INFORMATION: {
            return {
                ...state, 
                firstName: action.firstName, 
                lastName: action.lastName, 
                email: action.email, 
                phoneNumber: action.phoneNumber, 
                address: action.address, 
                zipCode: action.zipCode,
                city: action.city,
                profileImage: action.profileImage
            }
        }

        case RESUME_OBJECTIVE_ACTION: {
            return {...state, resumeObjective: action.resumeObjective}
        }
        case EDIT_WORK_EXPERIENCE_ACTION: {
            let index = state.workExperiences.map(function(x) {return x.id}).indexOf(action.id)
            let workExperienceTemp = state.workExperiences[index]
            return {...state, workExperience: workExperienceTemp, isWorkExperienceFormVisible: true}
        }

        case DELETE_WORK_EXPERIENCE_ACTION: {
            let workExperiencesTemp = state.workExperiences.filter(we => we.id !== action.id)
            return {...state, workExperience: emptyWorkExperience, isWorkExperienceFormVisible: false, workExperiences: workExperiencesTemp}
        }

        case SUBMIT_WORK_EXPERIENCE: {
            let workExperiencesTemp = state.workExperiences
            let index = state.workExperiences.map(function(x) {return x.id}).indexOf(action.workExperience.id)
            if (index === -1){
                workExperiencesTemp.push(action.workExperience)
            }
            else {
                workExperiencesTemp[index].city = action.workExperience.city
                workExperiencesTemp[index].description = action.workExperience.description
                workExperiencesTemp[index].employer = action.workExperience.employer
                workExperiencesTemp[index].endDate = action.workExperience.endDate
                workExperiencesTemp[index].id = action.workExperience.id
                workExperiencesTemp[index].jobTitle = action.workExperience.jobTitle
                workExperiencesTemp[index].startDate = action.workExperience.startDate
            }

            return {...state, workExperiences: workExperiencesTemp, workExperience: emptyWorkExperience}
        }

        case EDIT_EDUCATION_ACTION: {
            let index = state.educations.map(function(x) {return x.id}).indexOf(action.id)
            let educationTemp = state.educations[index]
            return {...state, education: educationTemp, isEducationFormVisible: true}
        }

        case DELETE_EDUCATION_ACTION: {
            let educationsTemp = state.educations.filter(ed => ed.id !== action.id)
            return {...state, education: emptyEducation, isEducationFormVisible: false, educations: educationsTemp}
        }

        case SUBMIT_EDUCATION: {
            let educationsTemp = state.educations
            let index = state.educations.map(function(x) {return x.id}).indexOf(action.education.id)
            if (index === -1){
                educationsTemp.push(action.education)
            }
            else {
                educationsTemp[index].city = action.education.city
                educationsTemp[index].description = action.education.description
                educationsTemp[index].degree = action.education.degree
                educationsTemp[index].endDate = action.education.endDate
                educationsTemp[index].id = action.education.id
                educationsTemp[index].school = action.education.school
                educationsTemp[index].startDate = action.education.startDate
            }

            return {...state, educations: educationsTemp, education: emptyEducation}
        }

        case EDIT_EDUCATION_ACTION: {
            let index = state.educations.map(function(x) {return x.id}).indexOf(action.id)
            let educationTemp = state.educations[index]
            return {...state, education: educationTemp, isEducationFormVisible: true}
        }

        case DELETE_EDUCATION_ACTION: {
            let educationsTemp = state.educations.filter(ed => ed.id !== action.id)
            return {...state, education: emptyEducation, isEducationFormVisible: false, educations: educationsTemp}
        }

        case SUBMIT_EDUCATION: {
            let educationsTemp = state.educations
            let index = state.educations.map(function(x) {return x.id}).indexOf(action.education.id)
            if (index === -1){
                educationsTemp.push(action.education)
            }
            else {
                educationsTemp[index].city = action.education.city
                educationsTemp[index].description = action.education.description
                educationsTemp[index].degree = action.education.degree
                educationsTemp[index].endDate = action.education.endDate
                educationsTemp[index].id = action.education.id
                educationsTemp[index].school = action.education.school
                educationsTemp[index].startDate = action.education.startDate
            }

            return {...state, educations: educationsTemp, education: emptyEducation}
        }

        case EDIT_HOBBY_ACTION: {
            let index = state.hobbies.map(function(x) {return x.id}).indexOf(action.id)
            let hobbyTemp = state.hobbies[index]
            return {...state, hobby: hobbyTemp, isHobbyFormVisible: true}
        }

        case DELETE_HOBBY_ACTION: {
            let hobbiesTemp = state.hobbies.filter(ed => ed.id !== action.id)
            return {...state, hobby: emptyHobby, isHobbyFormVisible: false, hobbies: hobbiesTemp}
        }

        case SUBMIT_HOBBY: {
            let hobbiesTemp = state.hobbies
            let index = state.hobbies.map(function(x) {return x.id}).indexOf(action.hobby.id)
            if (index === -1){
                hobbiesTemp.push(action.hobby)
            }
            else {
                hobbiesTemp[index].hobby = action.hobby.hobby
                hobbiesTemp[index].id = action.hobby.id
            }

            return {...state, hobbies: hobbiesTemp, hobby: emptyHobby}
        }

        case EDIT_SKILL_ACTION: {
            let index = state.skills.map(function(x) {return x.id}).indexOf(action.id)
            let skillTemp = state.skills[index]
            return {...state, skill: skillTemp, isSkillFormVisible: true}
        }

        case DELETE_SKILL_ACTION: {
            let skillsTemp = state.skills.filter(ed => ed.id !== action.id)
            return {...state, skill: emptySkill, isSkillFormVisible: false, skills: skillsTemp}
        }

        case SUBMIT_SKILL: {
            let skillsTemp = state.skills
            let index = state.skills.map(function(x) {return x.id}).indexOf(action.skill.id)
            if (index === -1){
                skillsTemp.push(action.skill)
            }
            else {
                skillsTemp[index].skill = action.skill.skill
                skillsTemp[index].id = action.skill.id
                skillsTemp[index].level = action.skill.level
            }

            return {...state, skills: skillsTemp, skill: emptySkill}
        }


        case IS_WORK_EXPERIENCE_FORM_VISIBLE: {
            if (action.visibility)
                return {...state, isWorkExperienceFormVisible: action.visibility}
            else
                return {...state, isWorkExperienceFormVisible: action.visibility, workExperience: emptyWorkExperience}
        }

        case IS_EDUCATION_FORM_VISIBLE: {
            if (action.visibility)
                return {...state, isEducationFormVisible: action.visibility}
            else
                return {...state, isEducationFormVisible: action.visibility, education: emptyEducation}
        }

        case IS_HOBBY_FORM_VISIBLE: {
            if (action.visibility)
                return {...state, isHobbyFormVisible: action.visibility}
            else
                return {...state, isHobbyFormVisible: action.visibility, hobby: emptyHobby}
        }

        
        case IS_SKILL_FORM_VISIBLE: {
            if (action.visibility)
                return {...state, isSkillFormVisible: action.visibility}
            else
                return {...state, isSkillFormVisible: action.visibility, skill: emptySkill}
        }

        case RESET_GLOBAL_STATE:{
            return {
                ...state, ...initialState
            }
        }
        default:
            return state
    }
}

export const editWorkExperience = (id?: string): globalActionTypes => {
    return {
        type: EDIT_WORK_EXPERIENCE_ACTION,
        id
    }
}


export const deleteWorkExperience = (id: string): globalActionTypes => {
    return {
        type: DELETE_WORK_EXPERIENCE_ACTION,
        id
    }
}

export const SubmitWorkExperience = (workExperience: TWorkExperience): globalActionTypes => {
    return {
        type: SUBMIT_WORK_EXPERIENCE,
        workExperience
    }
}

export const editEducation = (id?: string): globalActionTypes => {
    return {
        type: EDIT_EDUCATION_ACTION,
        id
    }
}

export const deleteEducation = (id: string): globalActionTypes => {
    return {
        type: DELETE_EDUCATION_ACTION,
        id
    }
}
export const submitEducation = (education: TEducation): globalActionTypes => {
    return {
        type: SUBMIT_EDUCATION,
        education
    }
}

export const editHobby = (id?: string): globalActionTypes => {
    return {
        type: EDIT_HOBBY_ACTION,
        id
    }
}

export const deleteHobby = (id: string): globalActionTypes => {
    return {
        type: DELETE_HOBBY_ACTION,
        id
    }
}
export const submitHobby = (hobby: THobby): globalActionTypes => {
    return {
        type: SUBMIT_HOBBY,
        hobby
    }
}


export const editSkill = (id?: string): globalActionTypes => {
    return {
        type: EDIT_SKILL_ACTION,
        id
    }
}

export const deleteSkill = (id: string): globalActionTypes => {
    return {
        type: DELETE_SKILL_ACTION,
        id
    }
}
export const submitSkill = (skill: TSkill): globalActionTypes => {
    return {
        type: SUBMIT_SKILL,
        skill
    }
}




export const SetWorkExperienceFormVisible = (visibility: boolean): globalActionTypes => {
    return {
        type: IS_WORK_EXPERIENCE_FORM_VISIBLE,
        visibility
    }
}

export const SetEducationFormVisible = (visibility: boolean): globalActionTypes => {
    return {
        type: IS_EDUCATION_FORM_VISIBLE,
        visibility
    }
}

export const SetHobbyFormVisible = (visibility: boolean): globalActionTypes => {
    return {
        type: IS_HOBBY_FORM_VISIBLE,
        visibility
    }
}

export const SetSkillFormVisilbe = (visibility: boolean): globalActionTypes => {
    return {
        type: IS_SKILL_FORM_VISIBLE,
        visibility
    }
}

export const SetResumeObjective = (resumeObjective: string): globalActionTypes => {
    return {
        type: RESUME_OBJECTIVE_ACTION,
        resumeObjective
    }
}


export const SubmitBasicInformation = (firstName: string, lastName: string, email: string, phoneNumber: string, address: string, zipCode: string, city: string, profileImage:string): globalActionTypes => {
    return {
       type: SUBMIT_BASIC_INFORMATION,
       firstName,
       lastName,
       email,
       phoneNumber,
       address,
       zipCode,
       city,
       profileImage
    }
}

export const ResetGlobalState = ():globalActionTypes => {
    return {
        type: RESET_GLOBAL_STATE
    }
}