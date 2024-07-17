import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = () => {
  const [answers, setAnswer] = useState([
    'ID1: I had the same problem! Try practicing with words like think and thank in front of a mirror. Focus on where your tongue is placed.', 'ID2: Watch videos of native speakers pronouncing th. Mimicking them helped me a lot.', 'ID3: Use tongue twisters like The thirty-three thieves thought that they thrilled the throne throughout Thursday. It’s challenging but effective.'
  ])

  return (
    <View style={styles.container}>
      {/* <Text style={styles.questionTitle}>{question}</Text> */}
      <Text style={styles.questionText}>I always struggle with words that have "th" in them. Does anyone have exercises or tips that can help?</Text>
      <Text style={styles.answersTitle}>Answers</Text>
      {answers.map((answer, index) => (
        <Text key={index} style={styles.answerText}>{`ID${index + 1}: ${answer}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 16,
  },
  answersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  answerText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailScreen;
