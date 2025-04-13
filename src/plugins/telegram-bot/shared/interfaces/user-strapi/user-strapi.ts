export interface IUserStrapi {
  id: number;
  documentId: string;
  firstname: string
  lastname: string;
  username: string;
  email: string;
  password: string;
  resetPasswordToken: string;
  registrationToken: string;
  isActive: boolean;
  blocked: boolean;
  preferedLanguage: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null;
}
