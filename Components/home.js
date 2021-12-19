import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

// import { Dimensions,  Button, Image, View, Platform } from 'react-native';


import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ScrollView ,Alert ,Button} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


// import { useState } from 'react';



export default function Home({navigation}) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.signupContainer}>
                {/* <View style={styles.ImageContainer}>
                        <Image
                            style={styles.Image}
                            source={require('../../Assets/Logo.png')}
                            resizeMode="contain"
                        />
                    </View> */}

                   


                    <Text style={styles.Headings}>Enter Your Details Here!</Text>

                    <View style={styles.Form}>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER YOUR NAME'
                                // value={name}
                                // onChangeText={(text)=> setName(text)}
                
                               

                            />
                        </View>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER YOUR FATHER NAME '
                                // value={email}
                                // onChangeText={(text)=> setEmail(text)}
                
                               

                            />
                        </View>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER YOUR CNIC NUMBER'
                                keyboardType = 'numeric'
                                data-inputmask="'mask': '99999-9999999-9'"
                                placeholder="XXXXX-XXXXXXX-X"

                                // value={name}
                                // onChangeText={(text)=> setName(text)}
                
                               

                            />
                        </View>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER YOUR DATE OF BIRTH'
                                // value={name}
                                // onChangeText={(text)=> setName(text)}
                
                               

                            />
                        </View>
                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='NUM OF FAMILY MEMBERS'
                                // value={name}
                                // onChangeText={(text)=> setName(text)}
                                keyboardType = 'numeric'

                
                               

                            />
                        </View>
                        <View>
                        {/* <View style={styles.btnContainer}> */}

                            <TouchableOpacity style={{alignItems:'center',backgroundColor:"#64dd17"}} onPress={pickImage} >
                                <Text style={styles.btnText}>
                                 YOUR image                            
                                </Text>
                            </TouchableOpacity>
                        {/* </View> */}

                        <View style={styles.feilds}>
                            <Input
                                style={styles.input}
                                placeholder='ENTER YOUR MONTHLY INCOME'
                                // value={name}
                                // onChangeText={(text)=> setName(text)}
                                keyboardType = 'numeric'

                
                               

                            />
                        </View>
                            <View style={styles.btnContainer}>

                                <TouchableOpacity style={{alignItems:'center',backgroundColor:"#64dd17",textAlign:"center"}} onPress={pickImage} >
                                    <Text style={styles.btnText}>
                                      CNIC image front                         
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            

                        </View>




                    </View>

                    <View style={styles.btnContainer}>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>
                                Submit
                            </Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </ScrollView>
        </SafeAreaView >

      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    signupContainer: {
        // backgroundColor: 'black',
        height: Dimensions.get('window').height / 1,
        justifyContent: 'center',
    },
    ImageContainer: {
        height: 100,
        width: "100%"

    },
    Image: {
        height: "100%",
        width: "100%",
        borderRadius: 20

    },
    Headings: {
        color: "#64dd17",
        fontSize: 20,
        lineHeight: 50,
        alignSelf: 'center'
        // marginBottom: 20,

    },

    Form: {
        width: "100%",
        // height: 200,
        paddingTop: 10,
        paddingBottom: 10,
        // backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",

    },
    feilds: {
        width: 320,
    },
    input: {
        fontSize: 15,
    },
    icon: {
        color: "#5efc82",

        marginRight: 10
    },
    ForgetPasswordContainer: {
        width: 350
    },
    ForgetPassword: {
        textAlign: "right",
        color: "#08abf4",
        marginBottom: 30,
        marginRight: 30
    },

    btnContainer: {
        width: '100%',
        alignItems: 'center',
        maxHeight: 80,
        height: 80,
    },

    btn: {
        flex: 1,
        width: 300,
        backgroundColor: '#64dd17',
        height: 50,
        maxHeight: 50,
        lineHeight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginBottom: 20

    },
    btnText: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 3,
        textTransform: "uppercase"
    },
    redirect: {
        fontSize: 15,
        color: "gray"
    },
    redirectLink: {
        color: "#08abf4"
    }


});
