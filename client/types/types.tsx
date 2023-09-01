export interface IUpload {
  details: {
    brand: string;
    model: string;
    badge: string;
  };
  uploaded: string;
}

export interface initialState {
  vehicles: any;
  uploads: IUpload | null;
  isLoading: boolean;
}
