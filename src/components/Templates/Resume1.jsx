import React from "react";
import { Document, Page, Text, View, StyleSheet, Image , Link} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#1a1a1a",
    color: "#e0e0e0",
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    borderBottom: "1px solid #2a9d8f",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    flexDirection: "row",
    gap: 8,
  },
  link: {
    color: "#2a9d8f",
    textDecoration: "none",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2a9d8f",
    marginBottom: 8,
    letterSpacing: 1,
  },
  summaryText: {
    fontSize: 11,
    lineHeight: 1.5,
  },
  educationItem: {
    marginBottom: 10,
  },
  institution: {
    fontSize: 12,
    fontWeight: "bold",
  },
  degree: {
    fontSize: 10,
    color: "#b3b3b3",
  },
  date: {
    fontSize: 9,
    color: "#7f7f7f",
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  projectDesc: {
    fontSize: 10,
    marginVertical: 4,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skill: {
    fontSize: 10,
    backgroundColor: "#2a9d8f",
    color: "#1a1a1a",
    padding: "3px 8px",
    borderRadius: 10,
  },
});

const Resume1 = ({ basics, education, projects, skills }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name || "Your Name"}</Text>
          <View style={styles.contact}>
            <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" style={styles.icon} />
            <Text>{basics.phone || "Number"} | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/email.png" style={styles.icon} />
            <Text>{basics.email || "Email"} | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" style={styles.icon} />
            <Link href={basics.linkedIn} style={styles.link}>LinkedIn</Link>
            <Text> | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" style={styles.icon} />
            <Link href={basics.github} style={styles.link}>GitHub</Link>
            <Text> | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" style={styles.icon} />
            <Text>{basics.location || "Location"}</Text>
          </View>
        </View>

        {basics?.summary?.trim() ? (
          <View>
            <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
            <Text style={styles.objectiveContent}>{basics.summary}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
            <Text style={styles.objectiveContent}>
              Your professional summary goes here. It should be a brief overview of your skills, experience, and career goals.
            </Text>
          </View>
        )}

        {education?.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.educationEntry}>
                <View style={styles.educationHeader}>
                  <Text style={styles.institution}>{edu.institution || "University Name"}</Text>
                  <Text style={styles.date}>{edu.startDate || "Start Date"} — {edu.endDate || "Present"}</Text>
                </View>
                <Text style={styles.degree}>{edu.studyType || "Field of Study"}</Text>
                <Text style={styles.gpa}>GPA: {edu.gpa || "8.66"}</Text>
                <Text style={styles.location}>{edu.location || "Location"}</Text>
              </View>
            ))}
          </View>
        )}

        {projects?.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectEntry}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>{project.title || "Project Title"}</Text>
                  <Link href={project.link} style={styles.link}>
                    <View style={styles.projectLink}>
                      <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" style={styles.icon} />
                      <Text>GitHub</Text>
                    </View>
                  </Link>
                </View>
                <Text style={styles.projectDescription}>{project.description || "Project Description"}</Text>
              </View>
            ))}
          </View>
        )}

        <View>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            {skills.length > 0 && Object.entries(skills[0]).map(([category, skillList]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <View style={styles.skillItems}>
                  {skillList.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>• {skill}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Resume1;