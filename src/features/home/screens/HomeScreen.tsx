import {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FriendPinCard} from '../components/FriendPinCard';
import {FriendSearchCard} from '../components/FriendSearchCard';
import {HomeHeader} from '../components/HomeHeader';
import {HotPlaceCard} from '../components/HotPlaceCard';
import {PaginationDots} from '../components/PaginationDots';
import {SavedPlaceCard} from '../components/SavedPlaceCard';

const friendPins = [
  {
    id: '1',
    nickname: '냥코',
    placeName: '뚝섬한강공원',
    cover: require('../../../assets/images/friend-pin-1.png'),
    avatar: require('../../../assets/images/friend-avatar-1.png'),
  },
  {
    id: '2',
    nickname: '졍',
    placeName: '물빛무대 앞 ...',
    cover: require('../../../assets/images/friend-pin-2.png'),
    avatar: require('../../../assets/images/friend-avatar-2.png'),
  },
  {
    id: '3',
    nickname: 'COR',
    placeName: '뚝섬역 2호선',
    cover: require('../../../assets/images/friend-pin-3.png'),
    avatar: require('../../../assets/images/friend-avatar-3.png'),
  },
] as const;

const hotPlaces = [
  {
    id: '1',
    name: '뚝섬한강공원',
    meta: '50m ∙ 30개의 핀',
    image: require('../../../assets/images/hot-place-1.png'),
  },
  {
    id: '2',
    name: '물빛무대 앞 광장',
    meta: '120m ∙ 30개의 핀',
    image: require('../../../assets/images/hot-place-1.png'),
  },
] as const;

const savedPlaces = [
  {id: '1', name: '물빛무대 앞 광장', creator: '홍길동', distance: '470m'},
  {id: '2', name: '뚝섬역 2호선', creator: '홍길동', distance: '470m'},
  {id: '3', name: '한강서점', creator: '홍길동', distance: '470m'},
] as const;

type HotFilter = 'near' | 'popular';

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [hotFilter, setHotFilter] = useState<HotFilter>('near');

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="gap-[30px]"
        contentContainerStyle={{paddingBottom: 120 + insets.bottom}}>
        <View className="bg-surface" style={{paddingTop: insets.top}}>
          <HomeHeader nickname="1mhyori" location="경기도 성남시 분당구 .." />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-3 px-4 pb-[30px] pt-3">
            {friendPins.map(pin => (
              <FriendPinCard key={pin.id} {...pin} />
            ))}
          </ScrollView>
        </View>

        <FriendSearchCard />

        <View className="gap-4 px-4">
          <Text className="text-[22px] font-medium leading-[31px] text-white">
            내 주변 HOT한 장소🔥
          </Text>
          <View className="flex-row gap-3">
            <Pressable
              className={`rounded-full px-4 py-2.5 ${
                hotFilter === 'near' ? 'bg-surface-muted' : 'bg-transparent'
              }`}
              onPress={() => setHotFilter('near')}>
              <Text
                className={`text-[15px] leading-[21px] ${
                  hotFilter === 'near'
                    ? 'text-text-muted'
                    : 'text-text-tertiary'
                }`}>
                나와 가까운
              </Text>
            </Pressable>
            <Pressable
              className={`rounded-full px-4 py-2.5 ${
                hotFilter === 'popular'
                  ? 'bg-surface-muted'
                  : 'border border-border-muted bg-transparent'
              }`}
              onPress={() => setHotFilter('popular')}>
              <Text
                className={`text-[15px] leading-[21px] ${
                  hotFilter === 'popular'
                    ? 'text-text-muted'
                    : 'text-text-tertiary'
                }`}>
                많이 등록된
              </Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-3">
            {hotPlaces.map(place => (
              <HotPlaceCard key={place.id} {...place} />
            ))}
          </ScrollView>
          <PaginationDots activeIndex={0} />
        </View>

        <View className="gap-4 px-4">
          <Text className="text-[22px] font-medium leading-[31px] text-white">
            저장해둔 장소, 지금 근처예요!
          </Text>
          <View className="gap-4">
            {savedPlaces.map(place => (
              <SavedPlaceCard key={place.id} {...place} />
            ))}
          </View>
          <PaginationDots activeIndex={0} />
        </View>
      </ScrollView>
    </View>
  );
}
