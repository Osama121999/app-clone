import React,{useState ,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, ScrollView,Platform ,Button} from 'react-native';
// import { collection ,query, where, getDocs, db } from '../firebase';
// import firebase from 'firebase'import { collection ,query, where, getDocs, db}from '../../firebase' 
// import React, { useEffect } from "react";



import * as ImagePicker from 'expo-image-picker';

export default function User({navigation}) {

    





//   const [cuser, currentUser] = useState('fahad');
//   useEffect(()=>{

//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//           console.log(user.uid);
  
//           firebase.firestore().collection("users").doc(user.uid).get()
//               .then((snapshot) => {
//                 currentUser(snapshot.data())
//                   // console.log(currentUser);
//                   // var uname = currentUser.username
//                   // console.log(uname)
                 
  
//               }).catch((er) => {
//                   console.log("Error", er);
//               })
  
  
  
//       }
//   })
  
  
  
//   },[])

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

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

  const Logout = () =>{

    // signOut(auth).then(() => {
        // Sign-out successful.
        navigation.navigate("Login")
    //   }).catch((error) => {
        // An error happened.
    //   });
      
  }




  

 

    return (
      <View style={{ flex: 1,      paddingTop: StatusBar.currentHeight,
        justifyContent: 'center', alignItems: 'center',borderBottomColor:'black',borderBottomWidth:0.4  }}>
         <ScrollView>
                <View style={{ borderBottomColor:'black',borderBottomWidth:0.4  }}>
                            {image && <Image source={{ uri: image }} style={{ width: 80, height: 80,marginRight:210, borderRadius: 50 }} />}


                  
                  {/* <Text style={{marginRight:200,marginBottom:40}}>{cuser.username}</Text> */}
                </View>
                <View >
                <TouchableOpacity style={{        flex: 1,
                                                    width: 300,
                                                    backgroundColor: '#64dd17',
                                                    height: 50,
                                                    maxHeight: 50,
                                                    lineHeight: 20,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 2,
                                                    marginBottom: 20,
                                                    color:'white'}} onPress={pickImage} >
                                <Text >
                                 PICK YOUR IMAGE                           
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{        flex: 1,
                                                    width: 300,
                                                    backgroundColor: 'red',
                                                    height: 50,
                                                    maxHeight: 50,
                                                    lineHeight: 20,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 2,
                                                    marginBottom: 20,
                                                    color:'white'}} onPress={Logout} >
                                <Text >
                                 LogOut                          
                                </Text>
                            </TouchableOpacity>

                </View>
        </ScrollView>
      
      </View>
           

    )
  }
  