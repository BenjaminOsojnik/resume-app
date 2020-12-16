export type TGlobalState = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    zipCode: string,
    city: string,
    profileImage: string,
    workExperiences: TWorkExperience[],
    workExperience: TWorkExperience,
    educations: TEducation[],
    education: TEducation,
    hobbies: THobby[],
    hobby: THobby,
    skills: TSkill[],
    skill: TSkill,
    isWorkExperienceFormVisible: boolean,
    isEducationFormVisible: boolean,
    isHobbyFormVisible: boolean,
    isSkillFormVisible: boolean,
    resumeObjective: string
}

export type TWorkExperience = {
    id?: string
    jobTitle: string,
    city: string,
    employer: string,
    startDate: Date,
    endDate: Date
    description: string,
    present: boolean
}

export type TEducation = {
    id?: string,
    degree: string,
    city: string,
    school: string,
    startDate: Date,
    endDate: Date,
    description: string,
    present: boolean
}

export type THobby = {
    id?: string,
    hobby: string
}

export type TSkill = {
    id?: string,
    skill: string,
    level: string
}