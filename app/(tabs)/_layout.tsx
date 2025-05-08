import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <View className="w-full h-full items-center justify-center mt-6">
        <ImageBackground
          source={images.highlight}
          className="flex flex-row w-full min-w-[112px] min-h-[60px] justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={icon} className="size-5" />
          <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
        </ImageBackground>
      </View>
    );
  }
  return (
    <View className="w-full h-full items-center justify-center mt-7 whitespace-nowrap">
      <View className="flex items-center justify-center">
        <Image source={icon} tintColor="#A8B5DB" className="size-5"/>
        <Text numberOfLines={1} ellipsizeMode="tail" className="w-full text-gray-400 text-xs whitespace-nowrap">{title}</Text>
      </View>
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          width: "100%",
          height: "100%",
          padding: 0,
          margin: 0
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 60,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
          padding: 0
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.home} 
              title="Home" 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.save || icons.save} 
              title="Saved" 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.person || icons.person} 
              title="Profile" 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.search} 
              title="Search" 
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;