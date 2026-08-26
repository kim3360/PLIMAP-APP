import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import BellIcon from '../../../assets/icons/bell.svg';
import NextIcon from '../../../assets/icons/next.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import { colors } from '../../../shared/theme/colors';
import { queryKeys } from '../../../shared/api/queryKeys';

import { FriendPinCard } from '../components/FriendPinCard';
import { HomeEmptyCard } from '../components/HomeEmptyCard';
import { HotPlaceCard } from '../components/HotPlaceCard';
import { PaginationDots } from '../components/PaginationDots';
import { SavedPlaceCard } from '../components/SavedPlaceCard';
import { getHome } from '../api/home';

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
  { id: '1', name: '물빛무대 앞 광장', creator: '홍길동', distance: '470m' },
  { id: '2', name: '뚝섬역 2호선', creator: '홍길동', distance: '470m' },
  { id: '3', name: '한강서점', creator: '홍길동', distance: '470m' },
] as const;

type HotFilter = 'near' | 'popular';

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [hotFilter, setHotFilter] = useState<HotFilter>('near');
  const { data } = useQuery({
    queryKey: queryKeys.home.feed(),
    queryFn: () => getHome(),
    select: home => home.data,
  });
  const homeFriends = data ?? [];

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="gap-[30px]"
        contentContainerStyle={{ paddingBottom: 120 + insets.bottom }}
      >
        <View className="bg-surface" style={{ paddingTop: insets.top }}>
          <View>
            <View className="h-14 flex-row items-center justify-between px-4">
              <View className="flex-row items-center gap-2.5">
                <Image
                  source={require('../../../assets/Logo.png')}
                  className="h-[30px] w-[152px]"
                  resizeMode="contain"
                />
              </View>

              <Pressable
                accessibilityRole="button"
                className="h-11 w-11 items-center justify-center rounded-full bg-surface-elevated"
              >
                <BellIcon width={24} height={24} />
              </Pressable>
            </View>

            <View className="gap-1 p-4">
              <Text className="head-24-sb text-text-primary">
                반가워요, <Text className="text-neon">1mhyori </Text>님
              </Text>
              <Pressable className="flex-row items-center gap-2">
                <Text className="body-17-r text-text-secondary">현재 위치</Text>
                <View className="flex-row items-center gap-2">
                  <Text
                    className="body-17-r max-w-[180px] text-text-soft"
                    numberOfLines={1}
                  >
                    경기도 성남시 분당구 ..
                  </Text>

                  <NextIcon height={14} color={colors.grayscale30} />
                </View>
              </Pressable>
            </View>
          </View>

          {homeFriends.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="gap-3 px-4 pb-[40px] pt-3"
            >
              {homeFriends.map(homeFriend => (
                <FriendPinCard key={homeFriend.pinId} {...homeFriend} />
              ))}
            </ScrollView>
          ) : (
            <View className="mx-4 mb-[40px]">
              <HomeEmptyCard
                lines={[
                  '내가 팔로우한 친구들이 등록한 곡이 나와요.',
                  '지금 친구를 찾아볼까요?',
                ]}
                actionLabel="친구 검색하러 가기"
              />
            </View>
          )}
        </View>

        <Pressable className="mx-4 h-[86px] flex-row items-center justify-between rounded-xl bg-surface pl-[18px] pr-[24px]">
          <View className="flex-1 flex-row items-center gap-4">
            <View className="h-12 w-12 items-center justify-center rounded-full bg-surface-muted">
              <SearchIcon />
            </View>
            <View className="flex-1 gap-1">
              <Text className="body-15-r  text-text-secondary">
                닉네임으로 친구를 찾아보세요
              </Text>
              <Text className="head-18-sb text-text-primary">
                친구 검색하러 가기
              </Text>
            </View>
          </View>
          <View className="pl-2 opacity-50">
            <NextIcon width={20} height={20} color={colors.textSecondary} />
          </View>
        </Pressable>

        {/* 여기서부터 시작 */}
        <View className="gap-4 px-4">
          <Text className="text-[22px] font-medium leading-[31px] text-white">
            내 주변 HOT한 장소🔥
          </Text>
          <View className="flex-row gap-3">
            <Pressable
              className={`rounded-full px-4 py-2.5 ${
                hotFilter === 'near' ? 'bg-surface-muted' : 'bg-transparent'
              }`}
              onPress={() => setHotFilter('near')}
            >
              <Text
                className={`text-[15px] leading-[21px] ${
                  hotFilter === 'near'
                    ? 'text-text-muted'
                    : 'text-text-tertiary'
                }`}
              >
                나와 가까운
              </Text>
            </Pressable>
            <Pressable
              className={`rounded-full px-4 py-2.5 ${
                hotFilter === 'popular'
                  ? 'bg-surface-muted'
                  : 'border border-border-muted bg-transparent'
              }`}
              onPress={() => setHotFilter('popular')}
            >
              <Text
                className={`text-[15px] leading-[21px] ${
                  hotFilter === 'popular'
                    ? 'text-text-muted'
                    : 'text-text-tertiary'
                }`}
              >
                많이 등록된
              </Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-3"
          >
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
