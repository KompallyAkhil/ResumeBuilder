import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Times-Roman",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "#000000",
    paddingBottom: 15,
  },
  name: {
    fontSize: 26,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 5,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: 10,
    color: "#000000",
    marginTop: 5,
  },
  link: {
    fontSize: 10,
    color: "#000000",
    textDecoration: "none",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
    color: "#000000",
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    paddingBottom: 5,
  },
  objectiveContent: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#000000",
    paddingHorizontal: 0,
    textAlign: "justify",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  colDegree: {
    fontSize: 10,
    width: "30%",
    color: "#000000",
    fontWeight: "bold",
  },
  colInstitute: {
    fontSize: 10,
    width: "30%",
    color: "#000000",
    fontStyle: "italic",
  },
  colGrade: {
    fontSize: 10,
    width: "20%",
    color: "#000000",
    textAlign: "center",
  },
  colYear: {
    fontSize: 10,
    width: "15%",
    color: "#000000",
    textAlign: "right",
  },
  projectItem: {
    marginBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
    paddingBottom: 8,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 10,
    color: "#000000",
    lineHeight: 1.5,
    marginBottom: 2,
    textAlign: "justify",
  },
  projectTech: {
    fontSize: 10,
    color: "#000000",
    marginTop: 2,
    fontStyle: "italic",
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "flex-start",
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
    width: "25%",
  },
  skillText: {
    fontSize: 11,
    color: "#000000",
    marginLeft: 5,
    width: "75%",
    textAlign: "justify",
  }
});

const Resume2 = ({ basics, education, projects, skills }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
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

      {/* Summary */}
      <View>
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <Text style={styles.objectiveContent}>
          {basics?.summary?.trim() || "A brief professional summary highlighting key skills and experience."}
        </Text>
      </View>

      {/* Education */}
      {education?.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.colDegree}>{edu.studyType || "Degree"}</Text>
              <Text style={styles.colInstitute}>{edu.institution || "Institution"}</Text>
              <Text style={styles.colGrade}>GPA: {edu.gpa || "N/A"}</Text>
              <Text style={styles.colYear}>
                {edu.startDate || "Start"} - {edu.endDate || "End"}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title || "Project Title"}</Text>
              <Text style={styles.projectDescription}>{project.description || "Project Description"}</Text>
              {project.tech && <Text style={styles.projectTech}>Tech Used: {project.tech}</Text>}
              {project.link && <Link href={project.link} style={styles.link}>View on GitHub</Link>}
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <View>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          {Object.entries(skills[0]).map(([category, skillList], index) => (
            <View key={index} style={styles.skillRow}>
              <Text style={styles.skillCategoryTitle}>{category}</Text>
              <Text style={styles.skillText}>{skillList.join(", ")}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default Resume2;
