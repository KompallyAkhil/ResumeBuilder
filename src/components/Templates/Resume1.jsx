import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: '1px solid #e0e0e0'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5
  },
  title: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  contactItem: {
    fontSize: 10,
    color: '#34495e'
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: 3
  },
  sectionContent: {
    marginLeft: 10
  },
  educationItem: {
    marginBottom: 10
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  institution: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  degree: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  date: {
    fontSize: 10,
    color: '#7f8c8d'
  },
  projectItem: {
    marginBottom: 10
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  projectName: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  projectTech: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginBottom: 3
  },
  projectDesc: {
    fontSize: 10,
    lineHeight: 1.4
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  skillCategory: {
    width: '50%',
    marginBottom: 10
  },
  skillCategoryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 3
  },
  link: {
    color: '#3498db',
    textDecoration: 'none'
  }
});

const Resume1 = ({ basics, education, projects, skills }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name}</Text>
          {basics.summary && (
            <Text style={styles.title}>{basics.summary}</Text>
          )}
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{basics.phone}</Text>
            <Text style={styles.contactItem}>{basics.email}</Text>
            <Text style={styles.contactItem}>{basics.location}</Text>
          </View>
          <View style={styles.contactInfo}>
            {basics.github && (
              <Text style={styles.contactItem}>
                GitHub: <Text style={styles.link}>{basics.github}</Text>
              </Text>
            )}
            {basics.linkedIn && (
              <Text style={styles.contactItem}>
                LinkedIn: <Text style={styles.link}>{basics.linkedIn}</Text>
              </Text>
            )}
          </View>
        </View>

        {/* Education Section */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.sectionContent}>
              {education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <View style={styles.educationHeader}>
                    <Text style={styles.institution}>{edu.institution}</Text>
                    <Text style={styles.date}>
                      {edu.startDate} - {edu.endDate || 'Present'}
                    </Text>
                  </View>
                  <Text style={styles.degree}>{edu.studyType}</Text>
                  {edu.gpa && (
                    <Text style={styles.date}>GPA: {edu.gpa}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Projects Section */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            <View style={styles.sectionContent}>
              {projects.map((project, index) => (
                <View key={index} style={styles.projectItem}>
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectName}>{project.name}</Text>
                    {project.year && (
                      <Text style={styles.date}>{project.month} {project.year}</Text>
                    )}
                  </View>
                  {project.technologies && (
                    <Text style={styles.projectTech}>
                      Technologies: {project.technologies}
                    </Text>
                  )}
                  {project.link && (
                    <Text style={styles.link}>{project.link}</Text>
                  )}
                  {project.description && (
                    <Text style={styles.projectDesc}>{project.description}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <View style={styles.skillsContainer}>
              {Object.entries(skills[0]).map(([category, skillList]) => (
                <View key={category} style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{category}</Text>
                  {skillList.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>• {skill}</Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default Resume1;