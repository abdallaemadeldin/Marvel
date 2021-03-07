import React, { memo } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text, TextInput, ActivityIndicator, RefreshControl, Modal } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import Highlighter from 'react-native-highlight-words';
import { useCharactersList } from 'src/hooks';
import style from './style';

const CharactersList = () => {
    const { container, toolbar, logo, searchIcon, searchButton, searchCard, contentContainerStyle, indicator, heroCard, cover, footerView, cardTitle, modalBlur, modalHeader, inputHolder, searchInputIcon, closeSearchBtn, cancelLabel, input, searchCardLabel, searchCardCover } = style();
    const { loading, list, loadMore, searchLoading, isRefreshing, showSearch, keyward, searchList, toDetails, setKeyward, search, setShowSearch, onRefresh, onEnd } = useCharactersList();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={.8} style={heroCard} onPress={() => toDetails(item)}>
                <Image source={{ uri: `${item?.thumbnail?.path}/landscape_xlarge.${item?.thumbnail?.extension}` }} defaultSource={require('src/assets/default.png')} style={cover} />
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

    const renderSearch = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={.8} style={searchCard} onPress={() => toDetails(item)}>
                <Image source={{ uri: `${item?.thumbnail?.path}/landscape_small.${item?.thumbnail?.extension}` }} defaultSource={require('src/assets/default.png')} style={searchCardCover} />
                <Highlighter
                    style={searchCardLabel}
                    highlightStyle={{ backgroundColor: 'red' }}
                    searchWords={[keyward]}
                    textToHighlight={item.name}
                />
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
                <TouchableOpacity activeOpacity={.8} style={searchButton} onPress={() => setShowSearch(true)}>
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

            <Modal visible={showSearch} animationType="fade" transparent>
                <BlurView
                    style={modalBlur}
                    blurType="dark"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                >
                    <View style={modalHeader}>
                        <View style={inputHolder}>
                            <Image source={require('src/assets/magnify.png')} style={searchInputIcon} />
                            <TextInput
                                onChangeText={setKeyward}
                                placeholder="Search for a character..."
                                style={input}
                                value={keyward}
                                onSubmitEditing={search}
                                returnKeyType="search"
                                onBlur={search}
                            />
                        </View>
                        <TouchableOpacity style={closeSearchBtn} onPress={() => setShowSearch(false)}>
                            <Text style={cancelLabel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    {
                        searchLoading
                            ?
                            <ActivityIndicator color="red" style={indicator} />
                            :
                            <FlatList
                                data={searchList}
                                renderItem={renderSearch}
                                keyExtractor={(e, i) => i.toString()}
                                showsVerticalScrollIndicator={false}
                                style={{ width: '100%' }}
                                contentContainerStyle={contentContainerStyle}
                            />
                    }
                </BlurView>
            </Modal>
        </View>
    );
}

export default memo(CharactersList);