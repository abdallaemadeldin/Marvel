import React, { memo } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import { useCharacterDetails } from 'src/hooks';
import style from './style';

const CharacterDetails = () => {
    const { container, cover, heroName, backButton, backIcon, sectionTitle, card, descriptionText, contentContainerStyle, cardCover, cardTitle } = style();
    const { thumbnail, name, loading, description, list, back } = useCharacterDetails();

    const renderItem = ({ item }) => {
        return (
            <>
                <Text style={sectionTitle}>{item.label}</Text>
                <FlatList
                    data={item.list}
                    renderItem={renderCard}
                    horizontal
                    keyExtractor={(e, i) => i.toString()}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => renderEmpty(item.label)}
                />
            </>
        );
    }

    const renderCard = ({ item }) => {
        return (
            <View style={card}>
                <Image source={{ uri: `${item?.thumbnail?.path}/portrait_xlarge.${item?.thumbnail?.extension}` }} defaultSource={require('src/assets/default.png')} style={cardCover} />
                <Text style={cardTitle} numberOfLines={2}>{item.title}</Text>
            </View>
        );
    }

    const renderHeader = () => {
        return (
            <>
                <Text style={heroName}>{name}</Text>

                <Text style={sectionTitle}>{"Description"}</Text>
                <Text style={descriptionText}>{description || "No Availabel Description"}</Text>
            </>
        );
    }

    const renderEmpty = (label) => {
        return (
            <Text style={descriptionText}>{`No Available ${label}`}</Text>
        );
    }

    return (
        <BlurView
            style={container}
            blurType="materialDark"
            blurAmount={10}
            reducedTransparencyFallbackColor="white">
            <Image source={{ uri: `${thumbnail?.path}/landscape_xlarge.${thumbnail?.extension}` }} defaultSource={require('src/assets/default.png')} style={cover} />

            <TouchableOpacity style={backButton} activeOpacity={.8} onPress={back}>
                <Image source={require('src/assets/back.png')} style={backIcon} />
            </TouchableOpacity>


            {loading ? <ActivityIndicator color="red" style={{ marginTop: '30%' }} /> : <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(e, i) => i.toString()}
                ListHeaderComponent={renderHeader}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={contentContainerStyle}
            />}
        </BlurView>
    );
}

export default memo(CharacterDetails);