import { useParams } from "react-router-dom";
import { PDFViewer , PDFDownloadLink  } from '@react-pdf/renderer';
import React from "react";
import { useResumeInformation } from './Context';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, User, GraduationCap, Code, FileCode, XCircle } from 'lucide-react';
import Resume from "./Templates/Resumes/Resume";
import Resume1 from "./Templates/Resumes/Resume1";
import Resume2 from "./Templates/Resumes/Resume2"
import Resume3 from "./Templates/Resumes/Resume3"
import Resume4 from "./Templates/Resumes/Resume4";
import { useAuth } from '@clerk/clerk-react';
const DynamicTemplate = () => {
    const { name } = useParams();
    const { resumeData, setResumeData, addSkill, newSkillCategory, setNewSkillCategory, newSkill, setNewSkill, handleCategoryChange, handleSkillChange, addEducation, addProject, removeProject, removeEducation, handleEducationChange, handleProjectChange, removeSkill } = useResumeInformation();
    const { isSignedIn } = useAuth();
    const getTemplate = (templateName) => {
        if(templateName === "Executive") {
            return <Resume1/>
        }
        else if(templateName === "Minimalist") {
            return <Resume2/>
        }
        else if(templateName === "CreativePlus"){
            return <Resume3/>
        }
        else if(templateName === "ModernTech"){
            return <Resume4/>
        }
        else{
            return <Resume/>
        }
    }
    const SelectedTemplate = getTemplate(name);
    return (
        <>

            <div className='pt-20 flex h-screen'>
                <div class="flex-1 overflow-hidden flex-col">
                    <div className="h-full overflow-y-auto px-8 py-6">
                        <div className="mb-8">
                            <h1 className="text-xl font-semibold mb-2 text-gray-900">Fill in the form to create your professional resume</h1>
                        </div>
                        <Tabs defaultValue="basics" className="w-full">
                            <TabsList className="grid grid-cols-4 mb-8">
                                <TabsTrigger value="basics" className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span className="hidden sm:inline">Basics</span>
                                </TabsTrigger>
                                <TabsTrigger value="education" className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    <span className="hidden sm:inline">Education</span>
                                </TabsTrigger>
                                <TabsTrigger value="projects" className="flex items-center gap-2">
                                    <FileCode className="h-4 w-4" />
                                    <span className="hidden sm:inline">Projects</span>
                                </TabsTrigger>
                                <TabsTrigger value="skills" className="flex items-center gap-2">
                                    <Code className="h-4 w-4" />
                                    <span className="hidden sm:inline">Skills</span>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="basics" className="mt-0">
                                <div className="glass-panel p-6">
                                    <h2 className="section-title">Personal Information</h2>
                                    <div className="form-input-wrapper" style={{ animationDelay: '0.05s' }}>
                                        <label className="form-label" htmlFor="name">Full Name</label>
                                        <input
                                            id="name"
                                            className="form-input"
                                            placeholder="John Doe" value={resumeData.basics.name}
                                            onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, name: e.target.value } })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 py-1 gap-2">
                                        <div className="form-input-wrapper" style={{ animationDelay: '0.2s' }}>
                                            <label className="form-label" htmlFor="phone">Phone</label>
                                            <input
                                                id="phone"
                                                className="form-input"
                                                placeholder="(91+) 12345-67890"
                                                value={resumeData.basics.phone}
                                                onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, phone: e.target.value } })}
                                            />
                                        </div>
                                        <div className="form-input-wrapper" style={{ animationDelay: '0.15s' }}>
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input
                                                id="email"
                                                className="form-input"
                                                type="email"
                                                placeholder="john.doe@example.com"
                                                value={resumeData.basics.email}
                                                onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, email: e.target.value } })}
                                            />
                                        </div>
                                        <div className="form-input-wrapper" style={{ animationDelay: '0.15s' }}>
                                            <label className="form-label" htmlFor="linkedIn">LinkedIn</label>
                                            <input
                                                id="email"
                                                className="form-input"
                                                type="email"
                                                placeholder="https://www.linkedin.com/in/username/"
                                                value={resumeData.basics.linkedIn}
                                                onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, linkedIn: e.target.value } })}
                                            />
                                        </div>
                                        <div className="form-input-wrapper" style={{ animationDelay: '0.15s' }}>
                                            <label className="form-label" htmlFor="github">GitHub</label>
                                            <input
                                                id="email"
                                                className="form-input"
                                                type="email"
                                                placeholder="https://github.com/username"
                                                value={resumeData.basics.github}
                                                onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, github: e.target.value } })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-input-wrapper" style={{ animationDelay: '0.25s' }}>
                                        <label className="form-label" htmlFor="location">Location</label>
                                        <input
                                            id="location"
                                            className="form-input"
                                            placeholder="San Francisco, CA"
                                            value={resumeData.basics.location}
                                            onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, location: e.target.value } })}
                                        />
                                    </div>
                                    <div className="form-input-wrapper" style={{ animationDelay: '0.35s' }}>
                                        <div className='flex justify-between items-center mb-2'>
                                            <label className="form-label" htmlFor="summary">Professional Summary</label>
                                            <Button>Generate Summary</Button>
                                        </div>
                                        <textarea
                                            id="summary"
                                            className="form-input-textarea"
                                            placeholder="A brief summary of your professional background and key strengths..."
                                            value={resumeData.basics.summary}
                                            onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, summary: e.target.value } })}
                                        />
                                    </div>
                                    <Button disabled={!isSignedIn}>
                                        <PDFDownloadLink document={ React.cloneElement(SelectedTemplate,{
                                            basics: resumeData.basics,
                                            education : resumeData.education,
                                            projects : resumeData.projects,
                                            skills : resumeData.skills
                                        })} fileName={`${resumeData.basics.name}.pdf`}>
                                            Download PDF
                                        </PDFDownloadLink>

                                    </Button>
                                </div>
                            </TabsContent>
                            <TabsContent value="education" className="mt-0">
                                <div className="glass-panel p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="section-title mb-0">Education</h2>
                                        <Button size="sm" className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary" onClick={addEducation}>
                                            <PlusCircle className="h-4 w-4" />
                                            <span>Add</span>
                                        </Button>
                                    </div>

                                    {resumeData.education.map((education, index) => (
                                        <div key={index} className="mb-8 relative glass-panel p-5 border border-muted">
                                            <div className="absolute top-3 right-3">
                                                <Button variant="ghost"
                                                    size="icon"
                                                    disabled={resumeData.education.length <= 1}
                                                    onClick={() => removeEducation(index)}
                                                    className="h-6 w-6 text-muted-foreground hover:text-destructive">
                                                    <XCircle className="h-5 w-5" />
                                                </Button>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="form-input-wrapper mb-3">
                                                    <label className="form-label">Institution</label>
                                                    <input className="form-input" placeholder="University of California, Berkeley" value={education.institution} onChange={(e) => handleEducationChange(index, 'institution', e.target.value)} />
                                                </div>

                                                <div className="form-input-wrapper mb-3">
                                                    <label className="form-label">Degree</label>
                                                    <input className="form-input" placeholder="Bachelor of Science" value={education.studyType} onChange={(e) => handleEducationChange(index, 'studyType', e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="form-input-wrapper mb-3">
                                                    <label className="form-label">Start Date</label>
                                                    <input className="form-input" placeholder="Sept 2018" value={education.startDate} onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)} />
                                                </div>

                                                <div className="form-input-wrapper mb-3">
                                                    <label className="form-label">End Date</label>
                                                    <input className="form-input" placeholder="May 2022 (or Present)" value={education.endDate} onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)} />
                                                </div>

                                                <div className="form-input-wrapper mb-3">
                                                    <label className="form-label">GPA</label>
                                                    <input className="form-input" placeholder="3.8/4.0" value={education.gpa} onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-input-wrapper" style={{ animationDelay: '0.25s' }}>
                                                <label className="form-label" htmlFor="location">Location</label>
                                                <input
                                                    id="location"
                                                    className="form-input"
                                                    placeholder="San Francisco, CA"
                                                    value={education.location}
                                                    onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="skills" className="mt-0">
                                <div className="glass-panel p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="section-title mb-0">Skills</h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {Object.entries(resumeData.skills[0]).map(([category, skillList]) => (
                                            <div key={category} className="glass-panel p-4 border border-muted">
                                                <h3 className="font-semibold mb-2">{category}</h3>
                                                <ul>
                                                    {skillList.map((skill) => (
                                                        <li key={skill} className="flex items-center justify-between mb-1">
                                                            <span>{skill}</span>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => removeSkill(category, skill)}
                                                                className="h-6 w-6 text-muted-foreground hover:text-destructive"
                                                            >
                                                                <XCircle className="h-4 w-4" />
                                                            </Button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 border-t pt-4">
                                        <h3 className="font-semibold mb-2">Add New Skill</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Category"
                                                value={newSkillCategory}
                                                onChange={handleCategoryChange}
                                                className="form-input"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Skill"
                                                value={newSkill}
                                                onChange={handleSkillChange}
                                                className="form-input"
                                            />
                                            <Button size="l" onClick={addSkill}>Add Skill</Button>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="projects" className="mt-0">
                                <div className="glass-panel p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="section-title mb-0">Projects</h2>
                                        <Button
                                            onClick={addProject}
                                            size="sm"
                                            className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                        >
                                            <PlusCircle className="h-4 w-4" />
                                            <span>Add</span>
                                        </Button>
                                    </div>
                                    {resumeData.projects.map((project, index) => (
                                        <div key={index} className="mb-8 relative glass-panel p-5 border border-muted">
                                            <div className="absolute top-3 right-3">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    disabled={resumeData.projects.length <= 1}
                                                    onClick={() => removeProject(index)}
                                                    className="h-6 w-6 text-muted-foreground hover:text-destructive"
                                                >
                                                    <XCircle className="h-5 w-5" />
                                                </Button>
                                            </div>
                                            <div className="form-input-wrapper mb-3">
                                                <label className="form-label" >Project Name</label>
                                                <input
                                                    className="form-input"
                                                    value={project.name}
                                                    placeholder="Project Name"
                                                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                                                />
                                                <div className="form-input-wrapper mt-3 mb-0">
                                                    <label className="form-label" >GitHub</label>
                                                    <input
                                                        className="form-input"
                                                        value={project.link}
                                                        placeholder="https://github.com/username/repository"
                                                        onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                                                    />
                                                </div>

                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="form-input-wrapper mb-3">
                                                    <label className="form-label">Month</label>
                                                    <input className="form-input" placeholder="September" value={project.month}
                                                        onChange={(e) => handleProjectChange(index, 'month', e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-input-wrapper mb-3">
                                                    <label className="form-label">Year</label>
                                                    <input className="form-input" placeholder="2022 (or Present)" value={project.year} onChange={(e) => handleProjectChange(index, 'year', e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-input-wrapper mb-0">
                                                <label className="form-label" >Technologies Used</label>
                                                <input
                                                    className="form-input"
                                                    value={project.technologies}
                                                    placeholder="React, Node.js, MongoDB"
                                                    onChange={(e) => handleProjectChange(index, 'technologies', e.target.value)}
                                                />
                                            </div>
                                            <div className="form-input-wrapper mt-3 mb-0">
                                                <label className="form-label">Description</label>
                                                <textarea
                                                    className="form-input-textarea"
                                                    value={project.description}
                                                    placeholder="A brief description of the project, its purpose, and your role..."
                                                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-center">
                    <PDFViewer showToolbar={false} width='100%' height='100%'>
                        {React.cloneElement(SelectedTemplate,{
                            basics: resumeData.basics,
                            education : resumeData.education,
                            projects : resumeData.projects,
                            skills : resumeData.skills
                        })}
                    </PDFViewer>

                </div>
            </div>
        </>
    )
}
export default DynamicTemplate;