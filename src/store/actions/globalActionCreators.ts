import { SetEducationFormVisible, SetSkillFormVisilbe, SetHobbyFormVisible, editEducation, editHobby, editSkill, editWorkExperience, SetWorkExperienceFormVisible } from '../reducers/globalReducer' 

export const editSkillAction = (id:string): any => {
    return async (dispatch: any) => {
        await dispatch(SetSkillFormVisilbe(false))
        await dispatch(editSkill(id)) 
    }
}

export const editEducationAction = (id:string): any => {
    return async (dispatch: any) => {
        await dispatch(SetEducationFormVisible(false))
        await dispatch(editEducation(id)) 
    }
}

export const editHobbyAction = (id:string): any => {
    return async (dispatch: any) => {
        await dispatch(SetHobbyFormVisible(false))
        await dispatch(editHobby(id)) 
    }
}

export const editWorkExperienceAction = (id:string): any => {
    return async (dispatch: any) => {
        await dispatch(SetWorkExperienceFormVisible(false))
        await dispatch(editWorkExperience(id)) 
    }
}
