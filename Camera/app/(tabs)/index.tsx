import React, { useEffect } from "react";
import {useState,useRef,useCallback,useContext} from 'react';
import {CameraView,CameraType,useCameraPermissions} from 'expo-camera';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CameraTab(){
  const [facing,setFacing]=useState<'back'|'front'>('back');
  const [cameraPermissions,requestPermissions]=useCameraPermissions();
  const [zoom,setZoom]=useState(0);
  const [isBarcodeMode,setBarcodeMode]=useState(false);
  const [BarcodeResult,setBarcodeResult]=useState<string|null>(null);
  const [capturedPhotos,setCapturedPhotos]=useState<Array<{uri:string}>>([]);
  const CameraRef=useRef<CameraView>(null)
  useEffect(()=>{
LoadSavedPhotos();
  },[])
  const LoadSavedPhotos=useCallback(async ()=>{
    try{
      const SavedPhotos=await AsyncStorage.getItem('capturedPhotos');
    }
    if(SavedPhotos){
      setCapturedPhotos(JSON.parse(savedPhotos))
    }
  
  },[]

  )
  return(
<div></div>
  )
}