import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { carouselData } from "@utils/constant/page";
import { CarouselItem } from "@components/atom";
import { icons, WIDTH } from "@themes/sizing";

type Props = {
  isMobile: boolean;
};

const Carousel = ({ isMobile }: Props) => {
  const flatListRef = useRef<FlatList>(null);
  const autoPlayInterval = 5000;
  const infiniteData = [...carouselData, ...carouselData, ...carouselData];
  const middleIndex = Math.floor(infiniteData.length / 2);

  const [currentIndex, setCurrentIndex] = useState(middleIndex);
  const [data, setData] = useState([
    ...carouselData,
    ...carouselData,
    ...carouselData,
  ]);

  const onHandleNext = () => {
    const nextIndex = currentIndex + 1;
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
    setCurrentIndex(nextIndex);
  };

  const onHandlePrev = () => {
    const prevIndex =
      currentIndex === 0
        ? currentIndex + carouselData.length - 1
        : currentIndex - 1;
    flatListRef.current?.scrollToIndex({
      index: prevIndex,
      animated: true,
    });
    setCurrentIndex(prevIndex);
  };

  const onHandleReacedEnd = () => {
    if (currentIndex + 1 === carouselData.length * 20) {
      flatListRef.current?.scrollToIndex({
        index: middleIndex,
        animated: false,
      });
      setData(infiniteData);
      setCurrentIndex(middleIndex);
    } else {
      setData((prev) => [...prev, ...carouselData]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: middleIndex,
        animated: false,
      });
    }, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      onHandleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, carouselData.length]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={isMobile ? styles.containerMobile : styles.containerWeb}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={onHandleReacedEnd}
        onEndReachedThreshold={0.8}
        getItemLayout={(_, index) => ({
          length: WIDTH,
          offset: WIDTH * index,
          index,
        })}
        snapToInterval={WIDTH}
        extraData={data}
        renderItem={({ item }) => (
          <CarouselItem isMobile={isMobile} itemData={item} />
        )}
      />

      {!isMobile && (
        <>
          <Pressable style={styles.prev} onPress={onHandlePrev}>
            <Image
              source={require("@assets/images/prev.png")}
              style={icons["IconLG"]}
            />
          </Pressable>

          <Pressable style={styles.next} onPress={onHandleNext}>
            <Image
              source={require("@assets/images/next.png")}
              style={icons["IconLG"]}
            />
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerWeb: {
    height: 774,
  },
  containerMobile: {
    height: 194,
  },
  prev: {
    position: "absolute",
    left: 80,
    top: 371,
    zIndex: 999,
  },
  next: {
    position: "absolute",
    right: 80,
    top: 371,
    zIndex: 999,
  },
});
