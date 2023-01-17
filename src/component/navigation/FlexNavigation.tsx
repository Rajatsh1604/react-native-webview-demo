import React, { useState } from 'react';
import { Button, View, Linking, Modal } from 'react-native';
import WebView from "react-native-webview";

interface Props {
    url: string;
}

const FlexNav: React.FC<Props> = ({ url }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePress = async () => {
        setIsLoading(true);
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                console.log(`Cannot open URL: ${url}`);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    const handlePopupPress = () => {
        setIsModalVisible(true);
    };

    return (
        <View>
            <Button
                title="Open URL"
                onPress={handlePress}
                disabled={isLoading}
            />
            <Button
                title="Open URL in Pop-up"
                onPress={handlePopupPress}
            />
            <Modal
                animationType="slide"
                transparent={false}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(false);
                }}>
                <WebView
                    source={{ uri: url }}
                    onError={() => console.log("Cannot open URL")}
                />
            </Modal>
        </View>
    );
};

export default FlexNav;
