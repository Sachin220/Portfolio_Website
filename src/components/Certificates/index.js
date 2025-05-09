import React, { useState } from 'react';
import styled from 'styled-components';
import { certificates } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding-bottom: 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  margin-bottom: 0;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const CertificatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  min-height: 300px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 0;
`;

const Certificate = styled.div`
  width: 100%;
  max-width: 30%;
  min-width: 250px;
  height: 400px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #e6c200;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    max-width: 45%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 350px;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    height: 300px;
    padding: 10px 16px;
  }
`;

const CertificateTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 20px;
  text-align: center;
  word-wrap: break-word;
  white-space: normal;
`;

const CertificateImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

const CertificateModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.card};
  padding: 40px;
  max-width: 700px;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  text-align: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
`;

const CertificateModalImage = styled.img`
  max-width: 90%;
  max-height: 500px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <Container id="certificates">
      <Wrapper>
        <Title>My Certificates</Title>
        <CertificatesContainer>
          {certificates.map((certificate) => (
            <Certificate key={certificate.title} onClick={() => openModal(certificate)}>
              {certificate.badge ? (
                <CertificateImage src={certificate.badge} alt={certificate.title} />
              ) : (
                <CertificateModalImage
                  src={certificate.image}
                  alt={certificate.title}
                  style={{ width: '100%', height: 'auto', maxHeight: '260px', borderRadius: '8px' }}
                />
              )}
              <CertificateTitle>{certificate.title}</CertificateTitle>
            </Certificate>
          ))}
        </CertificatesContainer>
      </Wrapper>

      <ModalOverlay isOpen={selectedCertificate} onClick={closeModal} />

      <CertificateModal isOpen={selectedCertificate}>
        <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
        {selectedCertificate && (
          <>
            <CertificateModalImage src={selectedCertificate.image} alt={selectedCertificate.title} />
            <CertificateTitle>{selectedCertificate.title}</CertificateTitle>
          </>
        )}
      </CertificateModal>
    </Container>
  );
};

export default CertificatesPage;
