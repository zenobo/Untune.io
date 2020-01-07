export const store = {
  getState: () => (
    {
      ui: {
        sidebarEnabled: true,
      },
      reddit: {
        subreddit: 'listentothis',
        loadingError: false,
        youtubeUrl: "https://examle.com",
        isDefault: true,
        entries: [
          {
            title: "test title",
            permalink: "https://reddit.com/example"
          }
        ]
      }
    }
  ),
  subscribe: () => 0,
  dispatch: jest.fn(),
};
