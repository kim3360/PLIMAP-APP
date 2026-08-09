export const queryKeys = {
  members: {
    all: ['members'] as const,
    me: () => [...queryKeys.members.all, 'me'] as const,
  },
};
