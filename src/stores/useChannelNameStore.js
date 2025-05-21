import { create } from "zustand";
import {
  loadServerChannel,
  saveServerChannel,
} from "../utils/saveServerChannel";

export const useChannelNameStore = create((set, get) => ({
  serverChannels: [],
  selectedServerName: null,
  actions: {
    loadServerChannels: () => {
      const channels = loadServerChannel();
      set({ serverChannels: channels });
    },

    addServerChannel: (channel) => {
      const updated = [...get().serverChannels, channel];
      set({ serverChannels: updated });
      saveServerChannel(channel);
    },
    updateSeletedServerName: (name) => set({ selectedServerName: name }),
  },
}));
