import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Resume</Text>
        <Text style={styles.text}>Name: {data.name}</Text>
        <Text style={styles.text}>Email: {data.email}</Text>
        <Text style={styles.text}>Summary: {data.summary}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        {data.experience.map((job, index) => (
          <Text key={index} style={styles.text}>
            {job.title} at {job.company} ({job.years})
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
