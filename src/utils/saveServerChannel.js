const SERVER_CHANNEL_STORAGE_KEY = "server_channel";

export const loadServerChannel = () => {
  const data = localStorage.getItem(SERVER_CHANNEL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveServerChannel = (serverChannelData) => {
  const raw = localStorage.getItem(SERVER_CHANNEL_STORAGE_KEY);

  let existing = [];

  try {
    const parsed = JSON.parse(raw);
    // parsed가 배열인지 확인
    existing = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    existing = [];
  }
  const updated = [...existing, serverChannelData];
  localStorage.setItem(SERVER_CHANNEL_STORAGE_KEY, JSON.stringify(updated));
};
