import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
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

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    gap: 12px;
`;

export const ToggleButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    color: ${({ active, theme }) =>
        active ? theme.primary : theme.text_primary};
    background: ${({ active, theme }) =>
        active ? theme.bg : 'transparent'};
    border: 1.5px solid ${({ theme }) => theme.primary};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-bottom: 6px;  /* Added bottom padding */
    
    &:hover {
        background: ${({ theme }) => theme.primary + 20};
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 16px;
    }
`;

export const Divider = styled.div`
    width: 10px;
`;



export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;