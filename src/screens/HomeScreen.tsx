import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};

const courses = ['Starters', 'Mains', 'Desserts'];

const HomeScreen: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: dishName,
      description,
      course,
      price,
    };
    setMenuItems([...menuItems, newItem]);
    // Clear the input fields
    setDishName('');
    setDescription('');
    setCourse(courses[0]);
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Menu Item</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Course (Starters, Mains, Desserts)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={addMenuItem}>
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      <Text style={styles.menuCount}>
        Total Menu Items: {menuItems.length}
      </Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name} - {item.course}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
            <Text style={styles.menuItemPrice}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  menuCount: {
    fontSize: 18,
    marginBottom: 10,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666666',
  },
  menuItemPrice: {
    fontSize: 14,
    color: '#FF8C00',
  },
});

export default HomeScreen;
