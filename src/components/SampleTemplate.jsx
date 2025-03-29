import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import Resume from '../Resume';
import InputBox from './InputBox';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, User, Briefcase, GraduationCap, Code, FileCode } from 'lucide-react';

const SampleTemplate = () => {
    const [resumeData, setResumeData] = useState({
        basics: {
            name: 'Akhil Kompally',
            phone: '(91+) 456-7890',
            email:'',
            linkedIn:'',
            github:'',
            location: 'San Francisco, CA',
            website: 'https://johndoe.com',
            summary: 'A brief summary of your professional background and key strengths...',
        }
    });
    console.log(resumeData.basics);
    return (
        <>
            <div className='pt-20 flex h-screen'>
                <div class="flex-1 overflow-hidden flex-col">
                    <div className="h-full overflow-y-auto px-8 py-6">
                        <div className="mb-8">
                            <h1 className="text-xl font-semibold mb-2 text-gray-900">Fill in the form to create your professional resume</h1>
                        </div>
                        <Tabs defaultValue="basics" className="w-full">
                            <TabsList className="grid grid-cols-5 mb-8">
                                <TabsTrigger value="basics" className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span className="hidden sm:inline">Basics</span>
                                </TabsTrigger>
                                <TabsTrigger value="education" className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4" />
                                    <span className="hidden sm:inline">Education</span>
                                </TabsTrigger>
                                <TabsTrigger value="experience" className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4" />
                                    <span className="hidden sm:inline">Experience</span>
                                </TabsTrigger>
                                <TabsTrigger value="skills" className="flex items-center gap-2">
                                    <Code className="h-4 w-4" />
                                    <span className="hidden sm:inline">Skills</span>
                                </TabsTrigger>
                                <TabsTrigger value="projects" className="flex items-center gap-2">
                                    <FileCode className="h-4 w-4" />
                                    <span className="hidden sm:inline">Projects</span>
                                </TabsTrigger>
                            </TabsList>

                            {/* Basic Information */}
                            <TabsContent value="basics" className="mt-0">
                                <div className="glass-panel p-6">
                                    <h2 className="section-title">Personal Information</h2>
                                    <div className="form-input-wrapper" style={{ animationDelay: '0.05s' }}>
                                        <label className="form-label" htmlFor="name">Full Name</label>
                                        <input
                                            id="name"
                                            className="form-input"
                                            placeholder="John Doe" value={resumeData.basics.name} 
                                            onChange={(e)=>setResumeData({...resumeData, basics:{...resumeData.basics,name:e.target.value}})}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 py-1 gap-2">
                                        <div className="form-input-wrapper" style={{ animationDelay: '0.2s' }}>
                                            <label className="form-label" htmlFor="phone">Phone</label>
                                            <input
                                                id="phone"
                                                className="form-input"
                                                placeholder="(123) 456-7890"
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
                                                placeholder="john.doe@example.com"
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
                                                placeholder="john.doe@example.com"
                                                value={resumeData.basics.github}
                                                onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, github: e.target.value } })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                                        <div className="form-input-wrapper" style={{ animationDelay: '0.3s' }}>
                                            <label className="form-label" htmlFor="website">Website</label>
                                            <input
                                                id="website"
                                                className="form-input"
                                                placeholder="https://johndoe.com"
                                                value={resumeData.basics.website}
                                                onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, website: e.target.value } })}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-input-wrapper" style={{ animationDelay: '0.35s' }}>
                                        <label className="form-label" htmlFor="summary">Professional Summary</label>
                                        <textarea
                                            id="summary"
                                            className="form-input-textarea"
                                            placeholder="A brief summary of your professional background and key strengths..."
                                            value={resumeData.basics.summary}
                                            onChange={(e) => setResumeData({ ...resumeData, basics: { ...resumeData.basics, summary: e.target.value } })}
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Education */}
                            <TabsContent value="education" className="mt-0">
                                <div className="glass-panel p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="section-title mb-0">Education</h2>
                                        <Button
                                            size="sm"
                                            className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                        >
                                            <PlusCircle className="h-4 w-4" />
                                            <span>Add</span>
                                        </Button>
                                    </div>

                                    {/* {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-8 relative glass-panel p-5 border border-muted">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={resumeData.education.length <= 1}
                    className="h-6 w-6 text-muted-foreground hover:text-destructive"
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`institution-${index}`}>Institution</label>
                    <input
                      id={`institution-${index}`}
                      className="form-input"
                      value={edu.institution}
                      placeholder="University of California, Berkeley"
                    />
                  </div>
                  
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`studyType-${index}`}>Degree</label>
                    <input
                      id={`studyType-${index}`}
                      className="form-input"
                      value={edu.studyType}
                      placeholder="Bachelor of Science"
                    />
                  </div>
                </div>
                
                <div className="form-input-wrapper mb-3">
                  <label className="form-label" htmlFor={`area-${index}`}>Field of Study</label>
                  <input
                    id={`area-${index}`}
                    className="form-input"
                    value={edu.area}
                    placeholder="Computer Science"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`startDate-${index}`}>Start Date</label>
                    <input
                      id={`startDate-${index}`}
                      className="form-input"
                      value={edu.startDate}
                      placeholder="Sept 2018"
                    />
                  </div>
                  
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`endDate-${index}`}>End Date</label>
                    <input
                      id={`endDate-${index}`}
                      className="form-input"
                      value={edu.endDate}
                      placeholder="May 2022 (or Present)"
                    />
                  </div>
                  
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`gpa-${index}`}>GPA</label>
                    <input
                      id={`gpa-${index}`}
                      className="form-input"
                      value={edu.gpa}
                      placeholder="3.8/4.0"
                    />
                  </div>
                </div>
              </div>
            ))} */}
                                </div>
                            </TabsContent>

                            {/* Work Experience */}
                            <TabsContent value="experience" className="mt-0">
                                <div className="glass-panel p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="section-title mb-0">Work Experience</h2>
                                        <Button
                                            size="sm"
                                            className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                        >
                                            <PlusCircle className="h-4 w-4" />
                                            <span>Add</span>
                                        </Button>
                                    </div>
                                    {/*             
            {resumeData.work.map((job, index) => (
              <div key={index} className="mb-8 relative glass-panel p-5 border border-muted">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={resumeData.work.length <= 1}
                    className="h-6 w-6 text-muted-foreground hover:text-destructive"
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`company-${index}`}>Company</label>
                    <input
                      id={`company-${index}`}
                      className="form-input"
                      value={job.company}
                      placeholder="Google Inc."
                    />
                  </div>
                  
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`position-${index}`}>Position</label>
                    <input
                      id={`position-${index}`}
                      className="form-input"
                      value={job.position}
                      placeholder="Senior Software Engineer"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`workStartDate-${index}`}>Start Date</label>
                    <input
                      id={`workStartDate-${index}`}
                      className="form-input"
                      value={job.startDate}
                      placeholder="June 2022"
                    />
                  </div>
                  
                  <div className="form-input-wrapper mb-3">
                    <label className="form-label" htmlFor={`workEndDate-${index}`}>End Date</label>
                    <input
                      id={`workEndDate-${index}`}
                      className="form-input"
                      value={job.endDate}
                      placeholder="Present"
                    />
                  </div>
                </div>
                
                <div className="form-input-wrapper mb-3">
                  <label className="form-label" htmlFor={`summary-${index}`}>Responsibilities & Achievements</label>
                  <textarea
                    id={`summary-${index}`}
                    className="form-input-textarea"
                    value={job.summary}
                    placeholder="Describe your key responsibilities and notable achievements..."
                  />
                </div>
              </div>
            ))} */}
                                </div>
                            </TabsContent>

                            {/* Skills */}
                            <TabsContent value="skills" className="mt-0">
                                <div className="glass-panel p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="section-title mb-0">Skills</h2>
                                        <Button
                                            // onClick={addSkill} 
                                            size="sm"
                                            className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                        >
                                            <PlusCircle className="h-4 w-4" />
                                            <span>Add</span>
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* {resumeData.skills.map((skill, index) => (
                <div key={index} className="glass-panel p-4 border border-muted relative">
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      disabled={resumeData.skills.length <= 1}
                      className="h-6 w-6 text-muted-foreground hover:text-destructive"
                    >
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="form-input-wrapper mb-0">
                      <label className="form-label" htmlFor={`skillName-${index}`}>Skill</label>
                      <input
                        id={`skillName-${index}`}
                        className="form-input"
                        value={skill.name}
                        placeholder="JavaScript"
                      />
                    </div>
                    
                    <div className="form-input-wrapper mb-0">
                      <label className="form-label" htmlFor={`skillLevel-${index}`}>Proficiency Level (Optional)</label>
                      <input
                        id={`skillLevel-${index}`}
                        className="form-input"
                        value={skill.level}
                        placeholder="Expert"
                      />
                    </div>
                  </div>
                </div>
              ))} */}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Projects */}
                            <TabsContent value="projects" className="mt-0">
                                <div className="glass-panel p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="section-title mb-0">Projects</h2>
                                        <Button
                                            // onClick={addProject} 
                                            size="sm"
                                            className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                        >
                                            <PlusCircle className="h-4 w-4" />
                                            <span>Add</span>
                                        </Button>
                                    </div>

                                    {/* {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-8 relative glass-panel p-5 border border-muted">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={resumeData.projects.length <= 1}
                    className="h-6 w-6 text-muted-foreground hover:text-destructive"
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="form-input-wrapper mb-3">
                  <label className="form-label" htmlFor={`projectName-${index}`}>Project Name</label>
                  <input
                    id={`projectName-${index}`}
                    className="form-input"
                    value={project.name}
                    placeholder="Personal Portfolio Website"
                  />
                </div>
                
                <div className="form-input-wrapper mb-3">
                  <label className="form-label" htmlFor={`projectDescription-${index}`}>Description</label>
                  <textarea
                    id={`projectDescription-${index}`}
                    className="form-input-textarea"
                    value={project.description}
                    placeholder="A brief description of the project, its purpose, and your role..."
                  />
                </div>
                
                <div className="form-input-wrapper mb-0">
                  <label className="form-label" htmlFor={`projectTechnologies-${index}`}>Technologies Used</label>
                  <input
                    id={`projectTechnologies-${index}`}
                    className="form-input"
                    value={project.technologies}
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>
              </div>
            ))} */}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-center">
                    <PDFViewer showToolbar={false} width='100%' height='100%'>
                        <Resume basics={resumeData.basics} />
                    </PDFViewer>
                </div>
            </div>
        </>
    );
}
export default SampleTemplate;