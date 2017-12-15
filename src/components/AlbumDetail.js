import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        headerTextStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title} 111</Text>
                    <Text>{artist} 222</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        marginStart: 10,
        marginEnd: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
