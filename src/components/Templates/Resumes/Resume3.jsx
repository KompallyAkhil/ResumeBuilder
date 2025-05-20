
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 12,
  },
  name: {
    fontSize: 24,
    textAlign: "center",
    color: "#000000",
    letterSpacing: 1.5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: 10,
    color: "#000000",
    marginTop: 8,
    lineHeight: 1.5,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    color: "#333333",
    marginVertical: 2,
  },
  icon: {
    width: 9,
    height: 9,
    marginRight: 3,
  },
  link: {
    fontSize: 9,
    color: "#000000",
    textDecoration: "none",
    fontWeight: "medium",
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
    color: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 3,
    letterSpacing: 1,
  },
  objectiveContent: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#000000",
    paddingHorizontal: 0,
  },
  educationTable: {
    marginTop: 6,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    paddingBottom: 4,
    marginBottom: 6,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  colDegree: {
    fontSize: 9,
    width: "30%",
    color: "#000000",
    fontWeight: "medium",
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
    textAlign: "center",
  },
  colYear: {
    fontSize: 9,
    width: "15%",
    color: "#000000",
    textAlign: "right",
  },
  educationEntry: {
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  institution: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
  },
  date: {
    fontSize: 9,
    color: "#333333",
  },
  projectItem: {
    marginBottom: 10,
    paddingLeft: 4,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 2,
  },
  projectSubtitle: {
    fontSize: 9,
    color: "#333333",
    marginTop: 1,
    marginBottom: 1,
    fontStyle: "italic",
  },
  projectDescription: {
    fontSize: 9,
    color: "#000000",
    lineHeight: 1.4,
    marginTop: 1,
    marginBottom: 1,
  },
  projectTech: {
    fontSize: 9,
    color: "#333333",
    marginTop: 1,
    fontStyle: "italic",
  },
  skillsCategory: {
    marginBottom: 6,
  },
  skillsTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 2,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 8,
  },
  skillItem: {
    fontSize: 9,
    color: "#000000",
    marginRight: 4,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "flex-start",
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    width: "22%",
  },
  separator: {
    fontWeight: "normal",
    color: "#000000",
  },
  skillText: {
    fontSize: 10,
    color: "#000000",
    marginLeft: 4,
    width: "78%",
  }
});


const Resume3 = ({ basics , education , projects , skills }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{basics.name || "Your Name"}</Text>
        <View style={styles.contact}>
          {basics.phone && <Text>{basics.phone} | </Text>}
          {basics.email && <Text>{basics.email} | </Text>}
          {basics.linkedIn && <Link href={basics.linkedIn} style={styles.link}>LinkedIn</Link>}
          {basics.linkedIn && <Text> | </Text>}
          {basics.github && <Link href={basics.github} style={styles.link}>GitHub</Link>}
          {basics.github && <Text> | </Text>}
          {basics.location && <Text>{basics.location}</Text>}
        </View>
      </View>

      {/* Summary */}
      {basics?.summary && (
        <View>
          <Text style={styles.sectionTitle}>SUMMARY</Text>
          <Text style={styles.objectiveContent}>
            {basics.summary.trim()}
          </Text>
        </View>
      )}

      {/* Education */}
      {education.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.colDegree}>{edu.studyType || "Degree"}</Text>
              <Text style={styles.colInstitute}>{edu.institution || "Institution"}</Text>
              <Text style={styles.colGrade}>GPA: {edu.gpa || "N/A"}</Text>
              <Text style={styles.colYear}>
                {edu.startDate || "Start"} - {edu.endDate || "Present"}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title || "Project Title"}</Text>
              {project.description && (
                <Text style={styles.projectDescription}>{project.description}</Text>
              )}
              {project.tech && <Text style={styles.projectTech}>Tech Used: {project.tech}</Text>}
              {project.link && <Link href={project.link} style={styles.link}>View on GitHub</Link>}
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {skills.length > 0 && skills[0] && (
        <View>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          {Object.entries(skills[0]).map(([category, skillList], index) => (
            skillList && skillList.length > 0 && (
              <View key={index} style={styles.skillRow}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <Text style={styles.skillText}>{skillList.join(", ")}</Text>
              </View>
            )
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default Resume3; 