import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  link: {
    fontSize: 10,
    color: "black",
    textDecoration: "none",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    color: "#333333",
    letterSpacing: 1,
    fontWeight: "bold",
  },

  contact: {
    fontSize: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    color: "#555555",
    marginTop: 10,
    lineHeight: 1.4,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 3
  },

  educationEntry: {
    marginBottom: 10,
  },
  educationDetails:{
    flexDirection: "row",
    justifyContent: "space-between" 
  },
  institution: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 1
  },

  date: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#555',
    marginBottom: 3
  },

  gpa: {
    fontSize: 10,
    marginTop: 2,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 12,
    color: "#333333",
    marginBottom: 8,
    lineHeight: 1.6,
  },

  subText: {
    fontSize: 10,
    color: "#555555",
    marginBottom: 6,
  },

  list: {
    marginVertical: 8,
    paddingLeft: 20,
  },

  listItem: {
    fontSize: 12,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    color: "#333333",
  },

  bulletPoint: {
    fontSize: 12,
    marginRight: 5,
    color: "#555555",
  },

  skills: {
    fontSize: 12,
    marginTop: 10,
    lineHeight: 1.4,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
  },

  // Individual skill styling
  skillItem: {
    fontSize: 12,
    color: "#444",
    backgroundColor: "#f2f2f2",
    padding: 4,
    marginRight: 5,
    borderRadius: 4,
  },

  // Spacing for sections
  section: {
    marginBottom: 15,
  },

  // Project section enhancements
  projectTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  projectDescription: {
    fontSize: 12,
    color: "#555",
    lineHeight: 1.5,
    marginBottom: 8,
  },

  // Footer (bottom spacing, optional)
  footer: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 30,
    color: "#aaa",
  },
});

export default styles;
