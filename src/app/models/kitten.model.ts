export interface Kitten {
  id: number;
  name: string;
  breed: KittenBreed;
  birthdate: Date;
  imageUrl: string;
}

export enum KittenBreed {
  Siamese = 'Siamois',
  Persian = 'Persan',
  Bengal = 'Bengal',
  Sphynx = 'Sphynx',
  MaineCoon = 'Maine Coon',
}
