import CustomButton from '@/components/CustomButton';
import { onboarding } from '@/constants';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default function Onboarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className='flex h-full bg-white justify-between items-center'>
      <TouchableOpacity
        onPress={() => router.push('/(auth)/sign-up')}
        className='w-full flex justify-end items-end p-2'
      >
        <Text className='text-black text-md font-JakartaBold'>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className='w-[30px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
        activeDot={<View className='w-[30px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className='flex items-center justify-center mt-2'>
            <Image source={item.image} className='w-full h-3/4' resizeMode='contain' />
            <View className='w-full flex justify-between items-center'>
              <Text className='text-black text-xl font-bold mx-5 text-center'>{item.title}</Text>
              <Text className='text-sm font-JakartaSemiBold text-center text-[#858585] mx-8 mt-4'>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? 'Get Started' : 'Next'}
        onPress={() =>
          isLastSlide ? router.push('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)
        }
        className='w-11/12 mt-5 mb-3'
      />
    </SafeAreaView>
  );
}
