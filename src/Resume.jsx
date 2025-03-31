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
        <View>
          <Text style={styles.sectionTitle}>Objective</Text>
          <Text style={styles.text}>{basics.summary}</Text>
        </View>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {education.map((edu, index) => (
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
        ))}


        
        {/* Projects Section */}
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.text}>
          Magic Board — An AI-powered blackboard canvas for solving mathematical problems through image analysis.
          {"\n"}StreamSnatch — A video downloader for Instagram and Facebook, allowing quick URL-based downloads.
          {"\n"}LeetCodolio — A personalized LeetCode profile tracker built with React.js and Node.js.
          {"\n"}Buddy-GPT — A chatbot leveraging Google Generative AI for engaging user interactions.
        </Text>

        {/* Skills Section */}
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.skills}>
          - Programming Languages: Python, JavaScript
          {"\n"}- Frameworks / Libraries: Bootstrap, React.js, Chart.js
          {"\n"}- Developer Tools: Git/GitHub, VS Code, Vercel, Axios, Puppeteer, REST APIs
          {"\n"}- Problem Solving: Leetcode (250+), Algorithm Design (Python)
        </Text>
      </Page>
    </Document>
  );
};

export default Resume;
