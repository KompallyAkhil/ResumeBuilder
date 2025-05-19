import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 3,
  },
  educationTable: {
    width: "100%",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
    paddingVertical: 5,
  },
  tableHeader: {
    flexDirection: "row",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 5,
    marginBottom: 5,
  },
  colDegree: {
    width: "25%",
  },
  colInstitute: {
    width: "45%",
  },
  colGrade: {
    width: "15%",
    textAlign: "right",
  },
  colYear: {
    width: "15%",
    textAlign: "right",
  },
  projectItem: {
    marginBottom: 10,
  },
  projectTitle: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  projectSubtitle: {
    fontStyle: "italic",
    marginBottom: 3,
  },
  projectDescription: {
    marginBottom: 5,
  },
  projectTech: {
    fontStyle: "italic",
  },
  skillsCategory: {
    marginBottom: 8,
  },
  skillsTitle: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    marginRight: 10,
    marginBottom: 3,
  },
  positionItem: {
    marginBottom: 8,
  },
  positionTitle: {
    fontWeight: "bold",
  },
  positionDuration: {
    fontStyle: "italic",
  },
  achievementItem: {
    marginBottom: 5,
  },
});

const Resume1 = ({ basics, education, projects, skills }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{basics?.name || "Your Name"}</Text>
          <View style={styles.contactRow}>
            <Text>{basics?.degree || "Degree - (Year)"}</Text>
            <Text>{basics?.phone || "Phone Number"}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text>{basics?.major || "Field of Study"}</Text>
            <Text>{basics?.email || "your.email@example.com"}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text>{basics?.institute || "Your Institute"}</Text>
            <Text>{basics?.linkedin || "linkedin.com/in/yourprofile"}</Text>
          </View>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View style={styles.educationTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.colDegree}>Degree/Certificate</Text>
              <Text style={styles.colInstitute}>Institute/Board</Text>
              <Text style={styles.colGrade}>CGPA/Percentage</Text>
              <Text style={styles.colYear}>Year</Text>
            </View>
            {education?.map((edu, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.colDegree}>{edu?.degree || "Degree"}</Text>
                <Text style={styles.colInstitute}>{edu?.institute || "Institute"}</Text>
                <Text style={styles.colGrade}>{edu?.grade || "Grade"}</Text>
                <Text style={styles.colYear}>{edu?.year || "Year"}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Projects Section */}
        {projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectTitle}>• {project?.title || "Project Title"}</Text>
                {project?.type && <Text style={styles.projectSubtitle}>• {project.type}</Text>}
                <Text style={styles.projectDescription}>• {project?.description || "Project description"}</Text>
                {project?.technologies && (
                  <Text style={styles.projectTech}>• Made using: {project.technologies}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Technical Skills */}
        {skills && Object.keys(skills).length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
            {Object.entries(skills[0]).map(([category, items], index) => (
              <View key={index} style={styles.skillsCategory}>
                <Text style={styles.skillsTitle}>• {category}:</Text>
                <View style={styles.skillsList}>
                  {items?.map((skill, i) => (
                    <Text key={i} style={styles.skillItem}>
                      {skill}{i < items.length - 1 ? "," : ""}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default Resume1;