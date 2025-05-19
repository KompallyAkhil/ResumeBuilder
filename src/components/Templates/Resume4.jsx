import React from "react";
import { Document, Link, Page, Text, View, Image,StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 25,
  },
  name: {
    fontSize: 28,
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  contact: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 9,
    color: "#000000",
    marginTop: 5,
  },
  contactRow: {
    flexDirection: "row",
    fontSize: 9,
    color: "#000000",
    marginRight: 20,
    marginBottom: 2,
  },
  link: {
    fontSize: 9,
    color: "#000000",
    textDecoration: "none",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 12,
    textTransform: "uppercase",
    color: "#000000",
    letterSpacing: 1.2,
  },
  objectiveContent: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#000000",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  colDegree: {
    fontSize: 9,
    width: "30%",
    color: "#000000",
    fontWeight: "bold",
  },
  colInstitute: {
    fontSize: 9,
    width: "30%",
    color: "#000000",
  },
  colGrade: {
    fontSize: 9,
    width: "20%",
    color: "#000000",
  },
  colYear: {
    fontSize: 9,
    width: "15%",
    color: "#000000",
    textAlign: "right",
  },
  projectItem: {
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  projectSubtitle: {
    fontSize: 9,
    color: "#333333",
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 9,
    color: "#000000",
    lineHeight: 1.4,
  },
  projectTech: {
    fontSize: 8,
    color: "#333333",
    marginTop: 2,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    fontSize: 9,
    color: "#000000",
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: "#000000",
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 5,
  },
});

const Resume4 = ({ basics, education, projects, skills }) => {
    return (
        <>
        <Document>
              <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                  <Text style={styles.name}>{basics?.name || "FIRST LAST"}</Text>
                  <View style={styles.contact}>
                    <View style={styles.contactRow}>
                      <Text>{basics?.phone} • {basics?.email}</Text>
                    </View>
                    <View style={styles.contactRow}>
                      {basics?.linkedIn && (
                        <Text>
                          <Link src={basics.linkedIn} style={styles.link}>LinkedIn</Link>
                          {basics?.github && (
                            <>
                              {" • "}
                              <Link src={basics.github} style={styles.link}>GitHub</Link>
                            </>
                          )}
                          {basics?.location && <> • {basics.location}</>}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
        
                {/* About Section */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>// ABOUT</Text>
                  <Text style={styles.objectiveContent}>
                    {basics?.summary || "A short professional bio..."}
                  </Text>
                </View>
        
                {/* Education Section */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>// EDUCATION</Text>
                  {education?.map((edu, index) => (
                    <View key={index} style={styles.tableRow}>
                      <Text style={styles.colInstitute}>{edu.institution?.toUpperCase()}</Text>
                      <Text style={styles.colDegree}>{edu.studyType || "N/A"}</Text>
                      <Text style={styles.colGrade}>{edu.grade || "N/A"}</Text>
                      <Text style={styles.colYear}>
                        {edu.startDate || "START"} – {edu.endDate || "PRESENT"}
                      </Text>
                    </View>
                  ))}
                </View>
        
                {/* Projects Section */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>// PROJECTS</Text>
                  {projects?.map((proj, index) => (
                    <View key={index} style={styles.projectItem}>
                      <Text style={styles.projectTitle}>{proj.title?.toUpperCase()}</Text>
                      {proj.subtitle && <Text style={styles.projectSubtitle}>{proj.subtitle}</Text>}
                      {proj.description && (
                        <Text style={styles.projectDescription}>{proj.description}</Text>
                      )}
                      {proj.tech && (
                        <Text style={styles.projectTech}>Tech Stack: {proj.tech}</Text>
                      )}
                    </View>
                  ))}
                </View>
        
                {/* Skills Section */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>// SKILLS</Text>
                  <View style={styles.skillsList}>
                    {skills?.map((skill, index) => (
                      <Text key={index} style={styles.skillItem}>{skill}</Text>
                    ))}
                  </View>
                </View>
              </Page>
            </Document>
        </>
    )
}
export default Resume4