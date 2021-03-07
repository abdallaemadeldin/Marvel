import React, { memo } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text, ActivityIndicator, RefreshControl, Modal } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import { useCharactersList } from 'src/hooks';
import style from './style';

const CharactersList = () => {
    const { container, toolbar, logo, searchIcon, searchButton, contentContainerStyle, indicator, heroCard, cover, footerView, cardTitle } = style();
    const { loading, list, loadMore, isRefreshing, onRefresh, onEnd } = useCharactersList();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={.8} style={heroCard}>
                <Image source={{ uri: `${item?.thumbnail?.path}/landscape_xlarge.${item?.thumbnail?.extension}` || "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg" }} style={cover} />
                <BlurView
                    style={footerView}
                    blurType="dark"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                >
                    <Text style={cardTitle}>{item.name || "Spider Man"}</Text>
                </BlurView>
            </TouchableOpacity>
        );
    }

    const renderFooter = () => {
        return (
            <ActivityIndicator color="red" style={{ marginVertical: '4%' }} />
        );
    }

    return (
        <View style={container}>
            <View style={toolbar}>
                <Image source={require('src/assets/logo.png')} style={logo} />
                <TouchableOpacity activeOpacity={.8} style={searchButton}>
                    <Image source={require('src/assets/magnify.png')} style={searchIcon} />
                </TouchableOpacity>
            </View>

            {loading ? <ActivityIndicator color="red" style={indicator} /> : <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(e, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={contentContainerStyle}
                onEndReachedThreshold={.2}
                ListFooterComponent={loadMore && renderFooter}
                onEndReached={onEnd}
                refreshControl={<RefreshControl colors={["red", "#fff"]} tintColor="red" refreshing={isRefreshing} onRefresh={onRefresh} />}
            />}
        </View>
    );
}

export default memo(CharactersList);