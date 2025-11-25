import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',
      );
      const result = await res.json();
      setData(result.meals ?? []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: any) => (
    <View
      onTouchEnd={() => navigation.navigate('Detail', { id: item.idMeal })}
      style={{
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
      }}
    >
      <Image
        source={{ uri: item.strMealThumb }}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          marginBottom: 10,
        }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.strMeal}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 10 ,backgroundColor: '#000'}}>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
        />
      )}
    </View>
  );
};

export default HomeScreen;
