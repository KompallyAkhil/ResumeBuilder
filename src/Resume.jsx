import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import styles from "./styles";

const Resume = ({ basics }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>{basics.name}</Text>
          <Text style={styles.contact}>
            📞 8498072762 | ✉️ akhilkompally27@gmail.com | LinkedIn | GitHub | LeetCode
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Objective</Text>
        <Text style={styles.text}>
          {basics.summary}
        </Text>

        {/* Education Section */}
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.text}>
          Bachelor of Technology in Computer Science
          {"\n"}Keshav Memorial Engineering College, Hyderabad, Telangana - Expected 2026
          {"\n"}GPA: 8.03 / 10.00
        </Text>
        <Text style={styles.text}>
          Intermediate (MPC)
          {"\n"}Excel Junior College, Hyderabad, Telangana - 2020-2022
          {"\n"}Percentage: 96%
        </Text>
        <Text style={styles.text}>
          High School
          {"\n"}Narayana High School, Hyderabad, Telangana - 2020
          {"\n"}Percentage: 100%
        </Text>

        {/* Experience Section */}
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.text}>
          Chat With Author — Frontend Developer (April - June 2024)
        </Text>
        <Text style={styles.subText}>
          - Collaborated in a team of six to develop a chatbot application for PDF-based question answering.
          {"\n"}- Built the frontend using React.js and the backend using Flask, with Google Generative AI integration.
          {"\n"}- Focused on API handling, performance optimization, and a responsive user interface.
        </Text>

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
