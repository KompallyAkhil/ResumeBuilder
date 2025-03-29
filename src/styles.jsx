import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },

  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    color: "#333333",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "bold",
  },

  contact: {
    fontSize: 10,
    textAlign: "center",
    color: "#555555",
    marginBottom: 20,
    lineHeight: 1.4,
  },

  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000000",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    paddingBottom: 4,
    textTransform: "uppercase",
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
