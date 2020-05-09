export interface GenericResponse {
  message?: string;
}

export interface Response<T> {
  message: string;
  success: boolean;
  data: T;
}