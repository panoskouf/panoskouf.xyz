export type SpaceSize = {
  x: string;
  y: string;
};

export type SpaceVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SpaceVariants = Record<SpaceVariant, SpaceSize>;
