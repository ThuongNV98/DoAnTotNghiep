import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ImageContant from '../../assets/styles';
import styles from './Onboarding.styles';
const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: ImageContant.Image.Onboarding1,
    title: 'Onboarding 1',
    subtitle: 'Sub onboarding 1',
  },
  {
    id: '2',
    image: ImageContant.Image.Onboarding2,
    title: 'Onboarding 2',
    subtitle: 'Sub onboarding 2',
  },
  {
    id: '3',
    image: ImageContant.Image.Onboarding3,
    title: 'Onboarding 3',
    subtitle: 'Sub onboarding 3',
  },
];

const Slide = ({item}) => {
  return (
    <View style={styles.slideContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
      <Image style={styles.slideImage} source={item.image} />
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.footerItem}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: 'white',
                  width: 30,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 10}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.navigate('Login')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={[styles.btn]} onPress={skip}>
                <Text>SKIP</Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                <Text>NEXT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlide = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offSet = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offSet});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlide}
        contentContainerStyle={{height: height * 0.9}}
        pagingEnabled
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;
