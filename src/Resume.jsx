import React from "react";
import { Document, Link, Page, Text, View, Image } from "@react-pdf/renderer";
import styles from "./styles";

const Resume = ({ basics, education, projects }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name || "Your Name"}</Text>
          <View style={styles.contact}>
            <Image src="https://img.icons8.com/ios-filled/50/000000/phone.png" style={styles.icon} />
            <Text>{basics.phone || "Number"} | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/email.png" style={styles.icon} />
            <Text>{basics.email || "Email"} | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" style={styles.icon} />
            <Link href={basics.linkedIn} style={styles.link}>LinkedIn</Link>
            <Text> | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/github.png" style={styles.icon} />
            <Link href={basics.github} style={styles.link}>GitHub</Link>
            <Text> | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/marker.png" style={styles.icon} />
            <Text>{basics.location || "Location"}</Text>
          </View>
        </View>
        {basics?.summary && (
          <View style={styles.educationContainer}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.objectiveContent}>
              {basics.summary}
            </Text>
          </View>
        )}
        {education?.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.educationEntry}>
                <View style={styles.educationHeader}>
                  <Text style={styles.institution}>
                    {edu.institution || "University Name"}
                  </Text>
                  <Text style={styles.date}>
                    {edu.startDate || "Start Date"} — {edu.endDate || "Present"}
                  </Text>
                </View>
                <View style={styles.educationDetails}>
                  <Text style={styles.degree}>
                    {edu.studyType || "Field of Study"}
                  </Text>
                 
                    <Text style={styles.gpa}>
                      <Text style={styles.gpaLabel}>GPA: </Text>
                      {edu.gpa || "8.66"}
                    </Text>
               
                </View>
                <View style={styles.educationFooter}>
                  <Text style={styles.location}>
                    {edu.location || "Location"}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
        {projects?.length > 0 && (
          <View style={styles.projectsContainer}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectEntry}>
                <View style={styles.projectHeader}>
                  <View style={styles.projectHeading}>
                    <Text style={styles.projectTitle}>{project.title || "Project Title"} </Text>
                    <Link href={project.link} style={styles.link}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                      <Image src="https://img.icons8.com/ios-filled/50/000000/github.png" style={styles.icon} />
                      <Text style={styles.projectLink}>GitHub</Text>
                      </View>
                    </Link>
                  </View>
                  <Text style={styles.projectDate}>{project.month || "Month"} - {project.year || "Year"}</Text>
                </View>
                <Text style={styles.projectDescription}>{project.description || "Project Description"}</Text>
              </View>
            ))}
          </View>
        )}
         <Text style={styles.sectionTitle}>Skills</Text>
      </Page>
    </Document>
  );
};

export default Resume;
