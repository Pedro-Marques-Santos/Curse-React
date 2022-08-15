import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { NewTransectionModal } from './components/newTransectionModal';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root'); // esse setAppElement não é obrigatorio, mas é recomendavel utilizar, para tirar o modal do bady e coloca-lo no fluxo do root

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider> {/* como o está por volta de todos os componentes, todos os outros componentes podem consumir esse contexto */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>

      <NewTransectionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </TransactionProvider>
  );
}