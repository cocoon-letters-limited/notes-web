import {
  ALERT_CLEAR,
  ALERT_ERROR,
  ALERT_INFO,
  ALERT_SUCCESS,
  ALERT_WARNING,
} from "./alert.reducer";

const success = (message: string) => (dispatch: any) => {
  dispatch(ALERT_SUCCESS(message));
};

const error = (message: string) => (dispatch: any) => {
  dispatch(ALERT_ERROR(message));
};

const info = (message: string) => (dispatch: any) => {
  dispatch(ALERT_INFO(message));
};

const warning = (message: string) => (dispatch: any) => {
  dispatch(ALERT_WARNING(message));
};

const clear = () => (dispatch: any) => {
  dispatch(ALERT_CLEAR());
};

export { success, error, info, warning, clear };
