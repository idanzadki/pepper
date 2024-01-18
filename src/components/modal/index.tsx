import { ErrorModal } from './error';
import { createModalProvider } from './provider';
import { ModalScreen } from './screen';

const modals = {
  default: ModalScreen,
  error: ErrorModal,
};

export const { useModal, ModalProvider } = createModalProvider(modals);
