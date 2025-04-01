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
  objectiveContainer: {
    marginBottom: 20,
    paddingBottom: 15,
  },

  objectiveTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginLeft: 5,
  },
  objectiveContent: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#34495e',
    textAlign: 'left',
    paddingHorizontal: 5,
  },
  objectiveIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  educationEntry: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  institution: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  educationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  degree: {
    fontSize: 11,
    color: '#34495e',
  },
  date: {
    fontSize: 10,
    color: '#7f8c8d',
    fontWeight: 'semibold',
  },
  educationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
  },
  location: {
    fontSize: 10,
    color: '#95a5a6',
  },
  gpa: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  gpaLabel: {
    fontWeight: 'normal',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
    textTransform: 'uppercase',
    color: '#2c3e50',
    borderBottomWidth: 1.5,
    paddingBottom: 3,
    letterSpacing: 0.5,
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

  projectHeading:{
    display:"flex" , 
    flexDirection:"row" , 
    gap:10,
    justifyContent:"center",
    alignItems:"center" ,
  },
  projectEntry: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  projectDate: {
    fontSize: 10,
    fontWeight: "bold",
  },
  projectDescription: {
    fontSize: 11,
    color: "#34495e",
    marginTop:5,
  },
});

export default styles;
