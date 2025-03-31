import React from "react";
import { Document, Link, Page, Text, View, Image } from "@react-pdf/renderer";
import styles from "./styles";

const Resume = ({ basics, education }) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name}</Text>
          <View style={styles.contact}>
            <Image src="https://img.icons8.com/ios-filled/50/000000/phone.png" style={styles.icon} />
            <Text>{basics.phone} | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/email.png" style={styles.icon} />
            <Text>{basics.email} | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" style={styles.icon} />
            <Link href={basics.linkedIn} style={styles.link}>LinkedIn</Link>
            <Text> | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/github.png" style={styles.icon} />
            <Link href={basics.github} style={styles.link}>GitHub</Link>
            <Text> | </Text>
            <Image src="https://img.icons8.com/ios-filled/50/000000/marker.png" style={styles.icon} />
            <Text>{basics.location}</Text>
          </View>
        </View>
        {basics?.summary && (
          <View style={styles.educationContainer}>
              <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.objectiveContent}>
              {basics.summary}
            </Text>
          </View>
        )}
        {education?.length > 0 && (
          <View style={styles.educationContainer}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.educationEntry}>
                <View style={styles.educationHeader}>
                  <Text style={styles.institution}>
                    {edu.institution || "University Name"}
                  </Text>
                  <Text style={styles.date}>
                    {edu.startDate || "Start Date"} — {edu.endDate || "Present"}
                  </Text>
                </View>
                <View style={styles.educationDetails}>
                  <Text style={styles.degree}>
                    {edu.studyType || "Degree/Field of Study"}
                  </Text>
                  {edu.gpa && (
                    <Text style={styles.gpa}>
                      <Text style={styles.gpaLabel}>GPA: </Text>
                      {edu.gpa}
                    </Text>
                  )}
                </View>
                <View style={styles.educationFooter}>
                    <Text style={styles.location}>
                      {edu.location || "Location"}
                    </Text>
                </View>
              </View>
            ))}
          </View>
        )}
        {/* {education.map((edu, index) => (
          <View key={index} style={styles.educationEntry}>
            <View style={styles.educationDetails}>
              <Text style={styles.institution}>
                {edu.studyType || "Course Name"}
              </Text>
              <Text style={styles.date}>
                {edu.startDate || "Start"} - {edu.endDate || "End"}
              </Text>
            </View>
            <Text style={styles.date}>
              {edu.institution || "University Name"},{edu.location || "Location"}
            </Text>
            {edu.gpa && (
              <Text style={styles.gpa}>
                GPA: {edu.gpa || "N/A"}
              </Text>
            )}
          </View>
        ))} */}

      </Page>
    </Document>
  );
};

export default Resume;
