export const queryKeys = {
  members: {
    all: ['members'] as const,
    me: () => [...queryKeys.members.all, 'me'] as const,
  },
  home: {
    all: ['home'] as const,
    feed: () => [...queryKeys.home.all, 'feed'] as const,
  },
};
