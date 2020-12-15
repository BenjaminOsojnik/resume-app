import { TEducation, THobby, TSkill, TWorkExperience } from "../../types/types"
export const SUBMIT_BASIC_INFORMATION = 'SUBMIT_BASIC_INFORMATION'
export const RESET_GLOBAL_STATE = 'RESET_GLOBAL_STATE'
export const SUBMIT_WORK_EXPERIENCE = 'SUBMIT_WORK_EXPERIENCE'
export const IS_WORK_EXPERIENCE_FORM_VISIBLE = 'IS_WORK_EXPERIENCE_FORM_VISIBLE'
export const IS_EDUCATION_FORM_VISIBLE = 'IS_EDUCATION_FORM_VISIBLE'
export const IS_HOBBY_FORM_VISIBLE = 'IS_HOBBY_FORM_VISIBLE'
export const EDIT_WORK_EXPERIENCE_ACTION = 'EDIT_WORK_EXPERIENCE_ACTION'
export const DELETE_WORK_EXPERIENCE_ACTION = 'DELETE_WORK_EXPERIENCE_ACTION'
export const DELETE_EDUCATION_ACTION = 'DELETE_EDUCATION_ACTION'
export const EDIT_EDUCATION_ACTION = 'EDIT_EDUCATION_ACTION'
export const SUBMIT_EDUCATION = 'SUBMIT_EDUCATION'
export const EDIT_HOBBY_ACTION = 'EDIT_HOBBY_ACTION'
export const DELETE_HOBBY_ACTION = 'DELETE_HOBBY_ACTION'
export const SUBMIT_HOBBY = 'SUBMIT_HOBBY'
export const DELETE_SKILL_ACTION = 'DELETE_SKILL_ACTION'
export const SUBMIT_SKILL = 'SUBMIT_SKILL'
export const EDIT_SKILL_ACTION = 'EDIT_SKILL_ACTION'
export const IS_SKILL_FORM_VISIBLE = 'IS_SKILL_FORM_VISIBLE'

interface editWorkExperienceAction {
    type: typeof EDIT_WORK_EXPERIENCE_ACTION,
    id?: string
}

interface deleteWorkExperienceAction {
    type: typeof DELETE_WORK_EXPERIENCE_ACTION,
    id: string
}

interface editEducation {
    type: typeof EDIT_EDUCATION_ACTION,
    id?: string
}


interface deleteEducationAction {
    type: typeof DELETE_EDUCATION_ACTION,
    id: string
}

interface submitBasicInfo {
    type: typeof SUBMIT_BASIC_INFORMATION,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    zipCode: string,
    city: string,
    profileImage: string
}

interface editHobby {
    type: typeof EDIT_HOBBY_ACTION,
    id?: string
}


interface deleteHobbyAction {
    type: typeof DELETE_HOBBY_ACTION,
    id: string
}


interface submitHobby {
    type: typeof SUBMIT_HOBBY,
    hobby: THobby
}

interface submitSkill {
    type: typeof SUBMIT_SKILL,
    skill: TSkill
}


interface editSkill {
    type: typeof EDIT_SKILL_ACTION,
    id?: string
}


interface deleteSkillAction {
    type: typeof DELETE_SKILL_ACTION,
    id: string
}


interface submitWorkExperinece {
    type: typeof SUBMIT_WORK_EXPERIENCE,
    workExperience: TWorkExperience
}

interface submitEducation {
    type: typeof SUBMIT_EDUCATION,
    education: TEducation
}

interface isWorkExperienceFormVisibleAction {
    type: typeof IS_WORK_EXPERIENCE_FORM_VISIBLE
    visibility: boolean
}

interface isEducationFormVisibleAction {
    type: typeof IS_EDUCATION_FORM_VISIBLE
    visibility: boolean
}

interface isHobbyFormVisible {
    type: typeof IS_HOBBY_FORM_VISIBLE
    visibility: boolean
}

interface isSkillFormVisible {
    type: typeof IS_SKILL_FORM_VISIBLE
    visibility: boolean
}

interface ResetGlobalState {
    type: typeof RESET_GLOBAL_STATE
}

export type globalActionTypes =
    submitBasicInfo
    |   submitEducation
    |   isEducationFormVisibleAction
    |   isWorkExperienceFormVisibleAction
    |   isHobbyFormVisible
    |   submitWorkExperinece
    |   ResetGlobalState
    |   editWorkExperienceAction
    |   deleteWorkExperienceAction
    |   deleteEducationAction
    |   editEducation
    |   editHobby
    |   deleteHobbyAction
    |   submitHobby
    |   deleteSkillAction
    |   submitSkill
    |   editSkill
    |   isSkillFormVisible
