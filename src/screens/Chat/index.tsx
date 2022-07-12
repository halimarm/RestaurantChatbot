import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TextField from '../../components/TextField';

const userId = '3ac68afc-c605-48d3-a4f8-fbd91aa97f63';

const messages = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'New Item',
    data: [],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'New Item',
    data: [],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    data: [],
    // data: [
    //   {
    //     product_id: 0,
    //     product_name: 'Yakiniku',
    //     product_price: 1000,
    //     product_qty: 0,
    //   },
    //   {
    //     product_id: 1,
    //     product_name: 'Yakiniku',
    //     product_price: 1000,
    //     product_qty: 0,
    //   },
    // ],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    data: [],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Third Item',
    data: [],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    data: [],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Last Item',
    data: [],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    data: [],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Last Item',
    data: [],
  },
];

const ChatScreen = () => {
  const [message, setMessage] = useState<string>('');

  const handlePressSend = () => {
    // Hide that keyboard!
    Keyboard.dismiss();
    setMessage('');
  };

  const Item = ({title, data, primary}) => {
    const renderItemProduct = () => {
      if (data.length <= 0) {
        return null;
      }

      return (
        <View style={styles.productCardWrapper}>
          {data.map(item => {
            return (
              <View style={styles.cardItem}>
                <Text>{item.product_name}</Text>
              </View>
            );
          })}
        </View>
      );
    };

    const styleContent = primary ? styles.itemPrimary : styles.item;
    const styleTitle = primary ? styles.titlePrimary : styles.title;
    return (
      <View style={styles.itemWrapper}>
        <View style={styleContent}>
          <Text style={styleTitle}>{title}</Text>
        </View>
        {renderItemProduct()}
      </View>
    );
  };

  const renderItem = ({item}) => {
    if (userId === item.id) {
      return <Item title={item.title} data={item.data} primary={true} />;
    }
    return <Item title={item.title} data={item.data} primary={false} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        inverted={true}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.messagesWrapper}
      />
      <View style={styles.footer}>
        <View style={styles.textField}>
          <TextField
            value={message}
            placeholder="Tulis Pesan"
            onChangeText={setMessage}
          />
        </View>
        <TouchableOpacity
          onPress={handlePressSend}
          style={styles.buttonSend}
          activeOpacity={1}>
          <Image
            source={{uri: 'https://i.ibb.co/W0HRf5d/Send.png'}}
            style={styles.iconSend}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messagesWrapper: {
    paddingVertical: 8,
  },
  itemWrapper: {
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#F4F4F4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 24,
    width: 'auto',
    marginRight: 'auto',
  },
  itemPrimary: {
    backgroundColor: '#1D74F5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 24,
    marginLeft: 'auto',
  },
  title: {
    fontSize: 14,
    color: '#000000',
  },
  titlePrimary: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'right',
  },
  footer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  buttonSend: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    backgroundColor: '#1D74F5',
    borderRadius: 24,
  },
  iconSend: {
    width: 20,
    height: 18,
  },
  textField: {
    flex: 1,
    paddingRight: 8,
  },
  productCardWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  cardItem: {
    backgroundColor: '#F4F4F4',
    width: 100,
    height: 100,
    marginHorizontal: 8,
  },
});

export default ChatScreen;
