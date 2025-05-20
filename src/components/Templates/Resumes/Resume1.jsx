
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontFamily: "Helvetica",
    // backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    textAlign: "center",
    // color: "#1a365d",
    letterSpacing: 1.2,
    fontWeight: "bold",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: 10,
    color: "#4a5568",
    marginTop: 8,
    lineHeight: 1.5,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 3,
  },
  link: {
    fontSize: 10,
    // color: "#2b6cb0",
    textDecoration: "none",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 10,
    textTransform: "uppercase",
    // color: "#1a365d",
    borderLeftWidth: 4,
    // borderLeftColor: "#4299e1",
    paddingLeft: 8,
    letterSpacing: 0.6,
  },
  objectiveContent: {
    fontSize: 11,
    lineHeight: 1.6,
    // color: "#2d3748",
    textAlign: "justify",
    paddingHorizontal: 2,
  },
  educationEntry: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    // borderBottomColor: "#e2e8f0",
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  institution: {
    fontSize: 12,
    fontWeight: "bold",
    // color: "#2d3748",
  },
  date: {
    fontSize: 10,
    // color: "#718096",
    fontStyle: "italic",
  },
  educationDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 4,
  },
  degree: {
    fontSize: 11,
    // color: "#4a5568",
  },
  gpa: {
    fontSize: 10,
    fontWeight: "bold",
    // color: "#4a5568",
  },
  gpaLabel: {
    fontWeight: "normal",
    // color: "#718096",
  },
  location: {
    fontSize: 10,
    // color: "#718096",
  },
  projectEntry: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    // borderBottomColor: "#e2e8f0",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  projectHeading: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    // color: "#2d3748",
  },
  projectLink: {
    fontSize: 10,
    // color: "#2b6cb0",
  },
  projectDate: {
    fontSize: 10,
    // color: "#718096",
    fontWeight: "medium",
  },
  projectDescription: {
    fontSize: 11,
    // color: "#4a5568",
    lineHeight: 1.5,
    marginTop: 4,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "center",
  },
contactRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  fontSize: 10,
  // color: "#4a5568",
  marginVertical: 2,
},

section: {
  marginTop: 16,
},

educationTable: {
  marginTop: 8,
},

tableHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottomWidth: 1,
  // borderBottomColor: "#cbd5e0",
  paddingBottom: 4,
  marginBottom: 4,
},

tableRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 2,
},

colDegree: {
  fontSize: 10,
  // width: "30%",
  color: "#2d3748",
},

colInstitute: {
  fontSize: 10,
  width: "30%",
  // color: "#2d3748",
},

colGrade: {
  fontSize: 10,
  width: "20%",
  // color: "#2d3748",
},

colYear: {
  fontSize: 10,
  width: "15%",
  // color: "#2d3748",
},

projectItem: {
  marginBottom: 8,
},

projectSubtitle: {
  fontSize: 10,
  // color: "#4a5568",
  marginTop: 2,
},

projectTech: {
  fontSize: 10,
  // color: "#4a5568",
  marginTop: 2,
},

skillsCategory: {
  marginBottom: 6,
},

skillsTitle: {
  fontSize: 11,
  fontWeight: "bold",
  // color: "#2d3748",
  marginBottom: 2,
},

skillsList: {
  flexDirection: "row",
  flexWrap: "wrap",
  paddingLeft: 8,
},

skillItem: {
  fontSize: 10,
  // color: "#4a5568",
  marginRight: 4,
},

  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    // color: "#2d3748",
    width: "22%",
  },
  separator: {
    fontWeight: "normal",
    // color: "#4a5568",
  },
  skillText: {
    fontSize: 11,
    // color: "#4a5568",
    marginLeft: 4,
    width: "78%",
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
            <Text>{basics?.github || "github.com/yourprofile"}</Text>
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
                <Text style={styles.colDegree}>{edu?.studyType || "Degree"}</Text>
                <Text style={styles.colInstitute}>{edu?.institution || "Institute"}</Text>
                <Text style={styles.colGrade}>{edu?.gpa || "Grade"}</Text>
                <Text style={styles.colYear}>{edu?.startDate} - {edu?.endDate || "Year"}</Text>
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