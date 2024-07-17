import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuestionListScreen = () => {
  const nav = useNavigation()

  const [questions, setQuestions] = useState([
    { id: '1', question: 'How can I improve my "th" pronunciation?' },
    { id: '2', question: 'What’s the difference between "affect" and "effect"?' },
    { id: '3', question: 'Any tips for remembering new words?' },
    { id: '4', question: 'How to handle unexpected questions in mock interviews?' },
    { id: '5', question: 'How do you stay motivated to practice daily?' },{ id: '6', question: 'How can I improve my "th" pronunciation?' },
    { id: '7', question: 'What’s the difference between "affect" and "effect"?' },
    { id: '8', question: 'Any tips for remembering new words?' },
    { id: '9', question: 'How to handle unexpected questions in mock interviews?' },
    { id: '10', question: 'How do you stay motivated to practice daily?' },
  ]);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  // const navigation = useNavigation();

  const handleExpand = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const renderQuestion = ({ item }) => (
    <View >
      <TouchableOpacity  style={styles.questionContainer}>
        <Text onPress={() => {
        nav.navigate("Detail")
      }} style={[styles.questionText, {paddingHorizontal : 20}]}>{item.question}</Text>
        <Text onPress={() => handleExpand(item.id)} style={styles.expandButton}>{expandedQuestion === item.id ? '-' : '+'}</Text>
      </TouchableOpacity>
      {expandedQuestion === item.id && (
        <View style={styles.answerContainer}>
          <TextInput placeholder="Enter Answer" style={styles.answerInput} />
          <TouchableOpacity style={styles.postButton} 
            onPress={() => {
              expandedQuestion ? setExpandedQuestion(false) : null
            }}
          
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search here..." style={styles.searchInput} />
      <TouchableOpacity
        onPress={() => {
            nav.navigate('AddAnswer')
        }}
      >
        <Text style = {{color : "#1888FC", fontWeight: "bold", fontSize : 20, padding : 15}}>Ask Question</Text>
      </TouchableOpacity>
      <FlatList showsVerticalScrollIndicator = {false} data={questions} renderItem={renderQuestion} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  searchInput: {
    padding: 12,
    borderRadius: 25,
    backgroundColor: '#f1f1f1',
    marginBottom: 16,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  questionText: {
    fontSize: 16,
  },
  expandButton: {
    fontSize: 24,
    color: '#007BFF',
    
  },
  answerContainer: {
    padding: 16,
  },
  answerInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
  },
  postButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  postButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default QuestionListScreen;
