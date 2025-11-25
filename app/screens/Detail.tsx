import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params; // <-- receive ID from navigation

  const [meal, setMeal] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchDetail = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const json = await res.json();
      setMeal(json.meals?.[0] || null);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  if (loading || !meal) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const mea = meal[`strMeasure${i}`];
    if (ing && ing.trim() !== "") {
      ingredients.push(`${ing} - ${mea}`);
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{ uri: meal.strMealThumb }}
        style={{ width: '100%', height: 250 }}
        resizeMode="cover"
      />

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          {meal.strMeal}
        </Text>

        <Text style={{ fontSize: 16, color: 'gray' }}>
          {meal.strCategory} • {meal.strArea}
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Ingredients
        </Text>

        {ingredients.map((item, index) => (
          <Text key={index} style={{ marginVertical: 3 }}>
            • {item}
          </Text>
        ))}

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Instructions
        </Text>

        <Text style={{ lineHeight: 22 }}>
          {meal.strInstructions}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
