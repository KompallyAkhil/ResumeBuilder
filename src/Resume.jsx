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
          <View style={styles.educationContainer}>
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
                  {edu.gpa && (
                    <Text style={styles.gpa}>
                      <Text style={styles.gpaLabel}>GPA: </Text>
                      {edu.gpa}
                    </Text>
                  )}
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
          <View style={styles.educationContainer}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectEntry}>
                <Text style={styles.institution}>
                  {project.title || "Project Title"}
                </Text>
                <Text style={styles.date}>
                  {project.startDate || "Start Date"} — {project.endDate || "Present"}
                </Text>
                <Text style={styles.degree}>
                  {project.description || "Project Description"}
                </Text>
                <Text style={styles.gpa}>
                  <Text style={styles.gpaLabel}>Technologies: </Text>
                  {project.technologies}
                </Text>
                <Image src="https://img.icons8.com/ios-filled/50/000000/github.png" style={styles.icon} />
                <Link href={project.link} style={styles.link}>Link</Link>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default Resume;
