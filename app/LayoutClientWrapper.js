'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ModalForm from '@/ui/ModalForm';
import ContactToggle from '@/ui/ContactToggle';

export default function LayoutClientWrapper({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <ContactToggle  onOpenModal={() => setIsModalOpen(true)} />
      <ModalForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {children}
    </>
  );
}
