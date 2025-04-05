import { ActivityIndicator, StyleSheet, Text, View, FlatList, Alert, Image, TouchableOpacity, Pressable, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

const NewsApp = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [borderColors, setBorderColors] = useState({}); // Track border color per item
    
    const [fontsLoaded] = useFonts({
        'OpenSans-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        const Apicall = async () => {
            const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=ae1c1ab0f907463c9455b87760802432";
            try {
                let response = await fetch(url);
                let val = await response.json();
                setData(val.articles);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        Apicall();
    }, []);

    if (!fontsLoaded) {
        return <View style={{ flex: 1, backgroundColor: 'black' }} />
    }

    if (loading) {
        return (
            <View style={[styles.loader]}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    const handlePressIn = (index) => {
        setBorderColors((prev) => ({ ...prev, [index]: '#31B5FF' }));
    };

    const handlePressOut = (index) => {
        setBorderColors((prev) => ({ ...prev, [index]: '#303030' }));
    };

    return (
        <View>
            <StatusBar
              hidden={true}
            />
            <View style={styles.header}>
                <Image source={require('@/assets/images/news.png')} style={styles.img}/>
                <Text style={styles.heading}>News<Text style={{color:'red'}}>24</Text></Text>
            </View>
        <FlatList
            data={data}
            renderItem={({ item, index }) => (
                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <Pressable
                        onPressIn={() => handlePressIn(index)}
                        onPressOut={() => handlePressOut(index)}
                        style={[
                            Card.container,
                            { borderColor: borderColors[index] || '#303030' } 
                        ]}
                    >
                        <Image
                            source={
                                item.urlToImage
                                    ? { uri: item.urlToImage }
                                    : require('@/assets/images/noimage.jpg')
                            }
                            style={Card.img}
                        />
                        <View style={Card.header}>
                            <Text style={Card.title}>{item.title}</Text>
                            <View style={{ margin: 5 }}>
                                <Text style={Card.minute}>Author: {item.author || 'No Information'}</Text>
                                <Text style={Card.minute}>Source: {item.source?.name || 'No Information'}</Text>
                                <Text style={Card.minute}>Published: {item.publishedAt || 'No Information'}</Text>
                            </View>
                        </View>
                        <View style={Card.main}>
                            <Text style={Card.content}>
                                {item.description}...
                            </Text>
                            <TouchableOpacity
                                style={Card.btn}
                                onPress={() => Linking.openURL(item.url)}
                            >
                                <Text style={Card.btntext}>Read Full Article</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        </View>
    );
};

export default NewsApp;

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black'
    },
    header:{
        height:50,
        backgroundColor:'#303030',
        justifyContent:'center',
        alignItems:'center',
        flex:0,
        flexDirection:'row',
        padding:10
    },
    heading:{
        fontWeight:'bold',
        color:'white',
        fontSize:18
    },
    img:{
        height:30,
        margin:3,
        width:30,
        resizeMode:'contain'
    }
});

const Card = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 50,
        borderWidth: 3,
        borderRadius: 7,
        backgroundColor: '#606060',
        padding: 7,
    },
    img: {
        height: 190,
        width: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
        lineHeight: 26,
        color: '#FFFFFF',
        marginTop: 10,
        margin: 5,
    },
    minute: {
        
        fontFamily: 'OpenSans-Regular',
        fontSize: 10,
        color: 'white'
    },
    content: {
        marginTop: 10,
        marginBottom: 10,
        padding:5,
        color: 'white',
        fontFamily: 'OpenSans-Regular',
        alignSelf: 'center'
    },
    btn: {
        alignSelf: 'center',
        margin: 8,
        backgroundColor: 'black',
        width: 150,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btntext: {
        color: 'white',
        fontWeight: 'bold'
    }
});
