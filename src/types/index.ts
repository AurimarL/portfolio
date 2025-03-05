export interface IProjects {
    image: string;
    name: string;
    description: string;
    link:string;
    github?: string;
}
export interface IResumeContact {
    label: string;
    portfolioLink: string;
    mobile: string;
    email: string;
    linkedin: string;
    github: string;
}

export interface IResumeSkill {
    label: string;
    items: { name: string }[];
}

export interface IResumeCertification {
    label: string;
    items: { name: string }[];
}

export interface IResumeExperience {
    label: string;
    items: {
        title: string;
        company: string;
        date: string;
        description: string;
    }[];
}

export interface IResumeEducation {
    label: string;
    items: {
        school: string;
        major: string;
        date: string;
    }[];
}

export interface IResumeProject {
    label: string;
    items: {
        name: string;
        description: string;
    }[];
}

export interface IResumeLanguages {
    label: string
    items: { name: string }[]
}
export interface IResumeData {
    contact: IResumeContact;
    skills: IResumeSkill;
    certifications: IResumeCertification;
    experiences: IResumeExperience;
    educations: IResumeEducation;
    projects: IResumeProject;
    languages: IResumeLanguages
}
