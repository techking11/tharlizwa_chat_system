export interface EmojiGroupTypes {
  code: string;
  character: string;
  image: string;
  name: string;
  group: string;
  subgroup: string;
}

export interface EmojisState {
  emojisByGroup: Record<string, EmojiGroupTypes[]>;
  groupIndex: number;
  offset: number;
  hasMore: boolean;
}
