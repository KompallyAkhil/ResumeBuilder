import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const resumeInformation = createContext();
export const ResumeProvider = ({ children }) => {
     const [resumeData, setResumeData] = useState({
        basics: {
          name: '',
          phone: '',
          email: '',
          linkedIn: '',
          github: '',
          location: '',
          summary: '',
        },
        education: [
          {
            institution: '',
            studyType: '',
            startDate: '',
            endDate: '',
            location: '',
            gpa: '',
          },
        ],
        skills: [
          {
            "Programming Languages": [],
            "Frameworks / Libraries": [],
            "Developer Tools": [],
            "Problem Solving": [],
          },
    
        ],
        projects: [
          {
            title: '',
            description: '',
            technologies: '',
            link: '',
            startDate: '',
            endDate: ''
          }
        ]
      });
      const [newSkillCategory, setNewSkillCategory] = useState('');
      const [newSkill, setNewSkill] = useState('');
      const addSkill = () => {
        if (!newSkill.trim() || !newSkillCategory.trim()) return;
        setResumeData((prevData) => {
          const updatedSkills = { ...prevData.skills[0] };
          if (!updatedSkills[newSkillCategory]) {
            updatedSkills[newSkillCategory] = [];
          }
          
          if (!updatedSkills[newSkillCategory].includes(newSkill)) {
            updatedSkills[newSkillCategory] = [...updatedSkills[newSkillCategory], newSkill];
          }
      
          return { 
            ...prevData, 
            skills: [updatedSkills] 
          };
        });
      
        setNewSkill('');
      };
      const removeSkill = (category, skillToRemove) => {
        setResumeData((prevData) => {
          const updatedSkills = { ...prevData.skills[0] };
      
          updatedSkills[category] = updatedSkills[category].filter(skill => skill !== skillToRemove);
      
          if (updatedSkills[category].length === 0) {
            delete updatedSkills[category];
          }
      
          return { 
            ...prevData, 
            skills: [updatedSkills]
          };
        });
      };
      
    
      const handleCategoryChange = (e) => {
        setNewSkillCategory(e.target.value);
      };
    
      const handleSkillChange = (e) => {
        setNewSkill(e.target.value);
      };
      const addEducation = () => {
        setResumeData({
          ...resumeData,
          education: [
            ...resumeData.education,
            {
              institution: '',
              studyType: '',
              month: '',
              year: '',
              location: '',
              gpa: '',
            },
          ],
        });
      };
      const addProject = () => {
        setResumeData({
          ...resumeData,
          projects: [
            ...resumeData.projects, {
              title: '',
              description: '',
              technologies: '',
              link: '',
              month: '',
              year: ''
            },
          ],
        });
      };
      const removeProject = (index) => {
        setResumeData((prevData) => {
          if (prevData.projects.length <= 1) {
            return prevData;
          }
          return {
            ...prevData, projects: prevData.projects.filter((_, i) => i !== index),
          }
        });
      };
      const removeEducation = (index) => {
        setResumeData((prevData) => {
          if (prevData.education.length <= 1) {
            return prevData;
          }
          return {
            ...prevData,
            education: prevData.education.filter((_, i) => i !== index),
          };
        });
      };
      const handleEducationChange = (index, field, value) => {
        const updatedEducation = resumeData.education.map((edu, i) =>
          i === index ? { ...edu, [field]: value } : edu
        );
        setResumeData({ ...resumeData, education: updatedEducation });
      };
      const handleProjectChange = (index, field, value) => {
        const updatedProjects = resumeData.projects.map((proj, i) =>
          i === index ? { ...proj, [field]: value } : proj
        );
        setResumeData({ ...resumeData, projects: updatedProjects });
      }
    return(
        <resumeInformation.Provider value={{resumeData, setResumeData, addSkill, newSkillCategory, setNewSkillCategory, newSkill, setNewSkill, handleCategoryChange, handleSkillChange, addEducation, addProject, removeProject, removeEducation, handleEducationChange, handleProjectChange, removeSkill}}>
            {children}
        </resumeInformation.Provider>
    )

}
export const useResumeInformation = () => {
    return useContext(resumeInformation);
}