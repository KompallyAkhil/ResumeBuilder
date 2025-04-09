import React from "react";
import { Document, Link, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: "Helvetica-Bold",
        color: "#000",
    },
    header: {
        marginBottom: 25,
    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
        letterSpacing: 1,
        marginBottom: 5,
    },
    contact: {
        fontSize: 10,
        flexDirection: "column",
        gap: 3,
    },
    link: {
        color: "#000",
        textDecoration: "none",
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: "bold",
        borderLeft: "3px solid #000",
        paddingLeft: 8,
        marginBottom: 10,
    },
    summary: {
        fontSize: 11,
        lineHeight: 1.5,
    },
    educationItem: {
        marginBottom: 10,
    },
    institution: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 2,
    },
    details: {
        fontSize: 10,
    },
    projectItem: {
        marginBottom: 12,
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 3,
        letterSpacing: 0.5,
    },
    projectDesc: {
        fontSize: 10,
        fontWeight: "normal",
    },
    skillsColumns: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    skillColumn: {
        width: "48%",
    },
    skill: {
        fontSize: 10,
        marginBottom: 5,
    },
});
const Resume3 = ({ basics , education , projects , skills}) => {
    return (
        <>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{basics.name || "FIRST LAST"}</Text>
                        <View style={styles.contact}>
                            <Text>{basics.phone} • {basics.email}</Text>
                            <Text><Link src={basics.linkedIn}>LinkedIn</Link> • <Link src={basics.github}>GitHub</Link> • {basics.location}</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>// ABOUT</Text>
                        <Text style={styles.summary}>{basics.summary || "A short professional bio..."}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>// EDUCATION</Text>
                        {education?.map((edu, i) => (
                            <View key={i} style={styles.educationItem}>
                                <Text style={styles.institution}>{edu.institution.toUpperCase()}</Text>
                                <Text style={styles.details}>{edu.studyType} | {edu.startDate} – {edu.endDate || "PRESENT"}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>// PROJECTS</Text>
                        {projects?.map((proj, i) => (
                            <View key={i} style={styles.projectItem}>
                                <Text style={styles.projectTitle}>{proj.title.toUpperCase()}</Text>
                                <Text style={styles.projectDesc}>{proj.description}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>// SKILLS</Text>
                        <View style={styles.skillsColumns}>
                            <View style={styles.skillColumn}>
                                {skills?.slice(0, Math.ceil(skills.length / 2)).map((skill, i) => (
                                    <Text key={i} style={styles.skill}>▸ {skill}</Text>
                                ))}
                            </View>
                            <View style={styles.skillColumn}>
                                {skills?.slice(Math.ceil(skills.length / 2)).map((skill, i) => (
                                    <Text key={i} style={styles.skill}>▸ {skill}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    )
}
export default Resume3;