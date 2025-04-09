import React from "react";
import { Document, Page, Text, View, StyleSheet, Image , Link} from "@react-pdf/renderer";
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: "Helvetica",
        backgroundColor: "#ffffff",
        color: "#333333",
      },
      link: {
        fontSize: 10,
        color: "#555555",
        textDecoration: "none",
      },
      header: {
        textAlign: "center",
        marginBottom: 20,
      },
      name: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
        letterSpacing: 0.5,
      },
      contact: {
        fontSize: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        color: "#555555",
      },
      sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 8,
        color: "#333333",
        borderBottom: "1px solid #e0e0e0",
        paddingBottom: 3,
      },
      objectiveContent: {
        fontSize: 11,
        lineHeight: 1.5,
        color: "#555555",
      },
      educationEntry: {
        marginBottom: 10,
      },
      institution: {
        fontSize: 12,
        fontWeight: "bold",
      },
      degree: {
        fontSize: 11,
        color: "#555555",
      },
      date: {
        fontSize: 10,
        color: "#777777",
      },
      gpa: {
        fontSize: 10,
        color: "#777777",
      },
      projectEntry: {
        marginBottom: 10,
      },
      projectTitle: {
        fontSize: 12,
        fontWeight: "bold",
      },
      projectDescription: {
        fontSize: 11,
        marginTop: 3,
        color: "#555555",
      },
      skillsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 15,
      },
      skillCategory: {
        flexBasis: "45%",
      },
      skillCategoryTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 3,
      },
      skillItems: {
        fontSize: 10,
        color: "#555555",
      },
})
const Resume2 = ({ basics , education , projects , skills}) => {
    return (<>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name || "Your Name"}</Text>
          <View style={styles.contact}>
            <Text>{basics.phone || "Number"} | </Text>
            <Text>{basics.email || "Email"} | </Text>
            <Link href={basics.linkedIn} style={styles.link}>LinkedIn</Link>
            <Text> | </Text>
            <Link href={basics.github} style={styles.link}>GitHub</Link>
            <Text> | </Text>
            <Text>{basics.location || "Location"}</Text>
          </View>
        </View>

        {basics?.summary?.trim() ? (
          <View>
            <Text style={styles.sectionTitle}>SUMMARY</Text>
            <Text style={styles.objectiveContent}>{basics.summary}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.sectionTitle}>SUMMARY</Text>
            <Text style={styles.objectiveContent}>
              A brief professional summary highlighting key skills and experience.
            </Text>
          </View>
        )}

        {education?.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.educationEntry}>
                <Text style={styles.institution}>{edu.institution || "University Name"}</Text>
                <Text style={styles.degree}>{edu.studyType || "Field of Study"}</Text>
                <Text style={styles.date}>{edu.startDate || "Start Date"} — {edu.endDate || "Present"}</Text>
                <Text style={styles.gpa}>GPA: {edu.gpa || "8.66"}</Text>
              </View>
            ))}
          </View>
        )}

        {projects?.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectEntry}>
                <Text style={styles.projectTitle}>{project.title || "Project Title"}</Text>
                <Text style={styles.projectDescription}>{project.description || "Project Description"}</Text>
                <Link href={project.link} style={styles.link}>View on GitHub</Link>
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
                <Text style={styles.skillItems}>{skillList.join(", ")}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
    </>)
}
export default Resume2;