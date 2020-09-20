export interface GenericResponse {
  message?: string;
}

export interface UrlResponse {
  url: string;
}

export interface Response<T> {
  message: string;
  success: boolean;
  data: T;
}
